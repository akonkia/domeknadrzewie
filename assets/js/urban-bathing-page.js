(function () {
  const IMG_PATH = "https://cdn.jsdelivr.net/gh/akonkia/domeknadrzewie@main/materialy/kapiele_miejskie/";
  const PAGE_CONFIG = {
    pl: {
      all: "Wszystkie",
      weekLabel: "Tydzień",
      noCards: "Brak kart.",
      reflection: "Refleksja:",
      image: "Obraz",
      task: "Zadanie",
      copy: "🔗 Kopiuj link",
      copied: "✅ Skopiowano!",
      blog: "Blog",
      prev: "← Poprzedni",
      next: "Następny →",
      currentCard: "Bieżąca karta",
      openCard: "Otwórz kartę",
      seasonLabel: "Sezon:",
      monthLabel: "Miesiąc:",
      overviewLabel: "Przegląd serii:"
    },
    en: {
      all: "All",
      weekLabel: "Week",
      noCards: "No cards yet.",
      reflection: "Reflection:",
      image: "Image",
      task: "Reflection",
      copy: "🔗 Copy link",
      copied: "✅ Copied!",
      blog: "Blog",
      prev: "← Previous",
      next: "Next →",
      currentCard: "Current card",
      openCard: "Open card",
      seasonLabel: "Season:",
      monthLabel: "Month:",
      overviewLabel: "Series overview:"
    }
  };

  const state = {
    season: null,
    month: null
  };

  function getPageLang() {
    return document.documentElement.lang === "en" ? "en" : "pl";
  }

  function getConfig() {
    return PAGE_CONFIG[getPageLang()];
  }

  function getCardsData() {
    return typeof window.getWeeklyCardsForLang === "function"
      ? window.getWeeklyCardsForLang(getPageLang())
      : [];
  }

  function getSortedCards() {
    return [...getCardsData()].sort((a, b) => b.id - a.id);
  }

  function getBlogUrl(card) {
    if (!card?.blog) return "#";
    if (card.blog.includes("/")) {
      return `https://domeknadrzewie.edu.pl/${card.blog.replace(/^\/+|\/+$/g, "")}/`;
    }
    return `https://domeknadrzewie.edu.pl/blog/${card.blog}/`;
  }

  function getFilterOptions(type) {
    const values = [];
    getCardsData().forEach((card) => {
      const value = card[type];
      if (value && !values.includes(value)) {
        values.push(value);
      }
    });
    return values;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function renderCurrentCard(card) {
    const config = getConfig();
    const currentCardImage = document.getElementById("currentCardImage");
    const currentCardTitle = document.getElementById("currentCardTitle");
    const currentCardMeta = document.getElementById("currentCardMeta");
    const currentCardPrimary = document.getElementById("currentCardPrimary");
    const currentCardBlog = document.getElementById("currentCardBlog");
    const currentCardKicker = document.querySelector(".series-current-card-kicker");

    if (!card) return;

    if (currentCardImage) {
      currentCardImage.src = `${IMG_PATH}${card.img}?v=2026`;
      currentCardImage.alt = card.title;
    }
    if (currentCardKicker) currentCardKicker.textContent = config.currentCard;
    if (currentCardTitle) {
      currentCardTitle.textContent = `${config.weekLabel} ${card.id.toString().padStart(2, "0")} — ${card.title}`;
    }
    if (currentCardMeta) {
      currentCardMeta.textContent = `${card.season} • ${card.month} • ${card.theme}`;
    }
    if (currentCardPrimary) {
      currentCardPrimary.href = `#tydzien-${card.id}`;
      currentCardPrimary.textContent = config.openCard;
    }
    if (currentCardBlog) {
      currentCardBlog.href = getBlogUrl(card);
    }
  }

  function renderFilterButtons(type) {
    const config = getConfig();
    const container = document.querySelector(`[data-filter-group="${type}"]`);
    if (!container) return;

    const currentValue = state[type] || config.all;
    const values = [config.all, ...getFilterOptions(type)];

    container.innerHTML = values
      .map((value) => {
        const isActive = value === currentValue;
        return `<button class="filter-btn${isActive ? " active" : ""}" data-type="${type}" data-val="${escapeHtml(value)}">${escapeHtml(value)}</button>`;
      })
      .join("");

    container.querySelectorAll(".filter-btn").forEach((button) => {
      button.addEventListener("click", () => {
        state[type] = button.getAttribute("data-val");
        clearWeekHash();
        renderFromState();
      });
    });
  }

  function clearWeekHash() {
    if (window.location.hash && window.location.hash.startsWith("#tydzien-")) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }

  function renderFilters() {
    renderFilterButtons("season");
    renderFilterButtons("month");
  }

  function getFilteredCards() {
    const config = getConfig();
    return getSortedCards().filter((card) => {
      const seasonMatches = !state.season || state.season === config.all || card.season === state.season;
      const monthMatches = !state.month || state.month === config.all || card.month === state.month;
      return seasonMatches && monthMatches;
    });
  }

  function renderList(cards, isSingleView) {
    const config = getConfig();
    const listElement = document.getElementById("materialList");

    if (!listElement) return;

    if (!cards.length) {
      listElement.innerHTML = `<p>${config.noCards}</p>`;
      return;
    }

    const firstId = 1;
    const cardsData = getCardsData();
    const lastId = Math.max(...cardsData.map((card) => card.id));

    listElement.innerHTML = cards
      .map((card) => {
        const reflectionItems = card.reflection
          .map((question) => `<li>${escapeHtml(question)}</li>`)
          .join("");

        return `
        <article id="tydzien-${card.id}" class="material-item">
          <div class="material-visual"><img src="${IMG_PATH}${card.img}?v=2026" alt="${escapeHtml(card.title)}"></div>
          <div class="material-content">
            <header>
              <span class="material-meta">${escapeHtml(card.season)} • ${escapeHtml(card.month)} • ${escapeHtml(card.theme)}</span>
              <h3>${config.weekLabel} ${card.id.toString().padStart(2, "0")} - ${escapeHtml(card.title)}</h3>
            </header>
            <div class="material-body">${escapeHtml(card.body)}</div>
            <div class="material-reflection">
              <strong>${config.reflection}</strong>
              <ul>${reflectionItems}</ul>
            </div>
            <div class="download-links">
              <a href="${IMG_PATH}${card.img}?v=2026" download class="btn-main">${config.image}</a>
              <a href="${IMG_PATH}${card.imgB}?v=2026" download class="btn-alt">${config.task}</a>
              <button data-copy-week="${card.id}" class="btn-copy">${config.copy}</button>
              <a href="${getBlogUrl(card)}" target="_blank" rel="noopener" class="btn-blog">${config.blog}</a>
            </div>
            ${isSingleView ? `
            <div class="week-nav-row">
              <button class="nav-arrow-btn ${card.id <= firstId ? "disabled" : ""}" data-week-nav="${card.id - 1}">${config.prev}</button>
              <button class="nav-arrow-btn ${card.id >= lastId ? "disabled" : ""}" data-week-nav="${card.id + 1}">${config.next}</button>
            </div>` : ""}
          </div>
        </article>`;
      })
      .join("");

    bindListActions();
  }

  function bindListActions() {
    const config = getConfig();

    document.querySelectorAll("[data-copy-week]").forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.getAttribute("data-copy-week");
        const url = `${window.location.origin}${window.location.pathname}#tydzien-${id}`;
        navigator.clipboard.writeText(url).then(() => {
          const originalText = button.textContent;
          button.textContent = config.copied;
          window.setTimeout(() => {
            button.textContent = originalText;
          }, 2000);
        });
      });
    });

    document.querySelectorAll("[data-week-nav]").forEach((button) => {
      if (button.classList.contains("disabled")) {
        return;
      }

      button.addEventListener("click", () => {
        const targetId = Number(button.getAttribute("data-week-nav"));
        if (!Number.isNaN(targetId)) {
          showSpecificWeek(targetId);
        }
      });
    });
  }

  function showSpecificWeek(id) {
    const listElement = document.getElementById("materialList");
    const card = getCardsData().find((item) => item.id === id);

    if (!card || !listElement) return false;

    window.location.hash = `tydzien-${id}`;
    renderList([card], true);
    window.scrollTo({ top: listElement.offsetTop - 100, behavior: "smooth" });
    return true;
  }

  function handleRouting() {
    const hash = window.location.hash;

    if (hash && hash.startsWith("#tydzien-")) {
      const id = Number.parseInt(hash.replace("#tydzien-", ""), 10);
      if (!Number.isNaN(id)) {
        return showSpecificWeek(id);
      }
    }

    return false;
  }

  function renderFromState() {
    renderFilters();
    if (!handleRouting()) {
      renderList(getFilteredCards(), false);
    }
  }

  function initMenu() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-links");

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initPage() {
    const cards = getCardsData();
    if (!cards.length) {
      window.setTimeout(initPage, 120);
      return;
    }

    const config = getConfig();
    state.season = state.season || config.all;
    state.month = state.month || config.all;

    renderCurrentCard(getSortedCards()[0]);
    renderFromState();
  }

  window.addEventListener("hashchange", () => {
    if (!handleRouting()) {
      renderList(getFilteredCards(), false);
    }
  });

  window.addEventListener("DOMContentLoaded", () => {
    initMenu();
    initPage();
  });
})();
