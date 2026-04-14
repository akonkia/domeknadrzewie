(function () {
  function getLang() {
    return document.documentElement.lang === "en" ? "en" : "pl";
  }

  function byLang(obj, lang) {
    return obj && obj[lang] ? obj[lang] : obj.pl;
  }

  function renderCluster(cluster, langPack, cards) {
    const liveCards = cards.filter((card) => card.id >= cluster.range[0] && card.id <= cluster.range[1]);
    const imgBase = "https://cdn.jsdelivr.net/gh/akonkia/domeknadrzewie@main/materialy/kapiele_miejskie/";
    const cardPage = getLang() === "en" ? "/en/materials/urban-bathing/" : "/materialy/kapiele_miejskie/";

    const liveMarkup = liveCards.length
      ? `
        <div class="cluster-live">
          <h3>${langPack.liveCardsTitle}</h3>
          <div class="live-grid">
            ${liveCards.map((card) => `
              <a class="live-card" href="${cardPage}#tydzien-${card.id}">
                <img src="${imgBase}${card.img}" alt="${card.title}">
                <div class="live-card-body">
                  <span class="live-card-meta">${langPack.liveStatus}</span>
                  <strong>${getLang() === "en" ? "Week" : "Tydzień"} ${card.id}</strong>
                  <p>${card.title}</p>
                </div>
              </a>
            `).join("")}
          </div>
        </div>`
      : `
        <div class="cluster-empty">
          <strong>${langPack.emptyTitle}</strong>
          <p>${langPack.emptyBody}</p>
        </div>`;

    return `
      <article class="cluster-card" id="${cluster.id}">
        <div class="cluster-head">
          <div class="cluster-badge">${cluster.emoji} ${cluster.season}</div>
          <div class="cluster-weeks">${langPack.weeksLabel}: ${cluster.range[0]}-${cluster.range[1]}</div>
        </div>
        <h2>${cluster.title}</h2>
        <p class="cluster-subtitle">${cluster.subtitle}</p>
        <div class="cluster-meta-grid">
          <div class="cluster-meta-block">
            <span>${langPack.themeLabel}</span>
            <p>${cluster.subtitle}</p>
          </div>
          <div class="cluster-meta-block">
            <span>${langPack.patternLabel}</span>
            <p>${cluster.pattern}</p>
          </div>
        </div>
        <div class="cluster-examples">
          <h3>${langPack.plannedTitle}</h3>
          <ul>
            ${cluster.examples.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        ${liveMarkup}
      </article>
    `;
  }

  function renderPatternPage() {
    const lang = getLang();
    const langPack = byLang(window.cardPatternData, lang);
    const cards = typeof window.getWeeklyCardsForLang === "function"
      ? window.getWeeklyCardsForLang(lang)
      : [];
    const latestCardId = typeof window.getLatestWeeklyCardId === "function"
      ? window.getLatestWeeklyCardId()
      : null;

    document.querySelector("[data-pattern-title]").textContent = langPack.pageTitle;
    document.querySelector("[data-pattern-lead]").textContent = langPack.pageLead;
    document.querySelector("[data-link-series]").textContent = langPack.linkSeries;
    document.querySelector("[data-link-current]").textContent = langPack.linkCurrent;

    const currentLink = document.querySelector("[data-link-current]");
    if (currentLink && latestCardId) {
      currentLink.href = `${lang === "en" ? "/en/materials/urban-bathing/" : "/materialy/kapiele_miejskie/"}#tydzien-${latestCardId}`;
    }

    const list = document.querySelector("[data-cluster-list]");
    if (!list) return;
    list.innerHTML = langPack.clusters.map((cluster) => renderCluster(cluster, langPack, cards)).join("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderPatternPage);
  } else {
    renderPatternPage();
  }
})();
