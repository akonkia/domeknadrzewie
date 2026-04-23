import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const repoRoot = process.cwd();
const baseUrl = "https://domeknadrzewie.edu.pl";

const cardsDataPath = path.join(repoRoot, "assets/js/cards-data.js");
const cardsSource = fs.readFileSync(cardsDataPath, "utf8");

const sandbox = {
  window: {},
  console,
};

vm.createContext(sandbox);
vm.runInContext(cardsSource, sandbox, { filename: cardsDataPath });

const cardsByLang = sandbox.window.weeklyCardsData;

if (!cardsByLang?.pl || !cardsByLang?.en) {
  throw new Error("Could not load weekly card data from assets/js/cards-data.js");
}

const pageConfigs = [
  {
    lang: "pl",
    file: path.join(repoRoot, "materialy/kapiele_miejskie/index.html"),
    pageUrl: `${baseUrl}/materialy/kapiele_miejskie/`,
    name: "Miejskie kąpiele leśne",
    description:
      "Miejskie kąpiele leśne: całoroczny cykl kart uważności inspirowanych naturą. Zobacz, jak praktykować Shinrin-yoku w mieście, mindfulness w parku i ćwiczenia uważności w naturze tydzień po tygodniu.",
    breadcrumbItems: [
      { name: "Materiały", url: `${baseUrl}/materialy/` },
      { name: "Miejskie kąpiele leśne", url: `${baseUrl}/materialy/kapiele_miejskie/` },
    ],
  },
  {
    lang: "en",
    file: path.join(repoRoot, "en/materials/urban-bathing/index.html"),
    pageUrl: `${baseUrl}/en/materials/urban-bathing/`,
    name: "Urban forest bathing",
    description:
      "Urban forest bathing: a year-long series of mindfulness cards inspired by nature. Explore Shinrin-yoku in the city, mindfulness in the park, and practical ways to deepen nature connection in the city week by week.",
    breadcrumbItems: [
      { name: "Materials", url: `${baseUrl}/en/materials/` },
      { name: "Urban forest bathing", url: `${baseUrl}/en/materials/urban-bathing/` },
    ],
  },
];

function toAbsoluteUrl(url) {
  if (!url) return "";
  if (/^https?:\/\//.test(url)) return url;
  return `${baseUrl}/${url.replace(/^\/+/, "")}`;
}

function toImageUrl(imageName) {
  return `${baseUrl}/materialy/kapiele_miejskie/${imageName}`;
}

function buildStructuredData(config) {
  const cards = cardsByLang[config.lang];

  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${config.pageUrl}#collection`,
    url: config.pageUrl,
    name: config.name,
    description: config.description,
    inLanguage: config.lang,
    isPartOf: {
      "@type": "WebSite",
      name: "Projekt: Domek na Drzewie",
      url: baseUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      "@id": `${config.pageUrl}#item-list`,
      name:
        config.lang === "pl"
          ? "Tygodniowe ćwiczenia uważności"
          : "Weekly mindfulness exercises",
      numberOfItems: cards.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: cards.map((card, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: toAbsoluteUrl(card.blog || `${config.pageUrl}#tydzien-${card.id}`),
        item: {
          "@type": "CreativeWork",
          name: card.title,
          inLanguage: config.lang,
          image: toImageUrl(card.img),
          keywords: [card.theme, card.season, card.month].filter(Boolean).join(", "),
        },
      })),
    },
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: config.breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return [collectionPage, breadcrumbList];
}

function renderJsonLdBlock(config) {
  const json = JSON.stringify(buildStructuredData(config), null, 2);
  return [
    "<!-- AUTO-GENERATED STRUCTURED DATA:BEGIN -->",
    '<script type="application/ld+json">',
    json,
    "</script>",
    "<!-- AUTO-GENERATED STRUCTURED DATA:END -->",
  ].join("\n");
}

for (const config of pageConfigs) {
  const html = fs.readFileSync(config.file, "utf8");
  const block = renderJsonLdBlock(config);

  if (
    !html.includes("<!-- AUTO-GENERATED STRUCTURED DATA:BEGIN -->") ||
    !html.includes("<!-- AUTO-GENERATED STRUCTURED DATA:END -->")
  ) {
    throw new Error(`Structured data markers not found in ${config.file}`);
  }

  const updatedHtml = html.replace(
    /<!-- AUTO-GENERATED STRUCTURED DATA:BEGIN -->[\s\S]*<!-- AUTO-GENERATED STRUCTURED DATA:END -->/,
    block,
  );

  fs.writeFileSync(config.file, updatedHtml);
}

console.log("Updated structured data for urban bathing pages.");
