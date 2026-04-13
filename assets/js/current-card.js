(function () {
  const imgPath = "https://cdn.jsdelivr.net/gh/akonkia/domeknadrzewie@main/materialy/kapiele_miejskie/";

  function getLocale() {
    return document.documentElement.lang === "en" ? "en" : "pl";
  }

  function buildCurrentCardData() {
    if (typeof window.getWeeklyCardsForLang !== "function" || typeof window.getLatestWeeklyCardId !== "function") {
      return null;
    }

    const latestId = window.getLatestWeeklyCardId();

    if (latestId === null) {
      return null;
    }

    const plCard = window.getWeeklyCardsForLang("pl").find((card) => card.id === latestId);
    const enCard = window.getWeeklyCardsForLang("en").find((card) => card.id === latestId);

    if (!plCard || !enCard) {
      return null;
    }

    return {
      pl: {
        id: plCard.id,
        label: "Tydzień " + plCard.id + ": " + plCard.title,
        image: imgPath + plCard.img,
        materialsUrl: "/materialy/kapiele_miejskie/#tydzien-" + plCard.id,
        alt: "Tydzień " + plCard.id + ": " + plCard.title
      },
      en: {
        id: enCard.id,
        label: "Week " + enCard.id + ": " + enCard.title,
        image: imgPath + enCard.img,
        materialsUrl: "/en/materials/urban-bathing/#tydzien-" + enCard.id,
        alt: "Week " + enCard.id + ": " + enCard.title
      }
    };
  }

  function applyCurrentCard() {
    const currentCardData = buildCurrentCardData();

    if (!currentCardData) {
      return;
    }

    const current = currentCardData[getLocale()];

    document.querySelectorAll("[data-current-card-link]").forEach((element) => {
      element.setAttribute("href", current.materialsUrl);
    });

    document.querySelectorAll("[data-current-card-image]").forEach((element) => {
      element.setAttribute("src", current.image);
      element.setAttribute("alt", current.alt);
    });

    document.querySelectorAll("[data-current-card-title]").forEach((element) => {
      element.textContent = current.label;
    });

    window.currentCardData = currentCardData;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyCurrentCard);
  } else {
    applyCurrentCard();
  }
})();
