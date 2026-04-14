(function () {
  const cardPatternData = {
    pl: {
      pageTitle: "Układ 52 tygodni",
      pageLead: "Szkielet całego roku: sezonowe klastry, motywy przewodnie i wzory tytułów, które można później wypełniać konkretnymi kartami.",
      linkSeries: "Wróć do serii",
      linkCurrent: "Zobacz aktualną kartę",
      linkEnglish: "English",
      liveCardsTitle: "Karty już wpisane w ten klaster",
      plannedTitle: "Miejsca na przyszłe karty",
      emptyTitle: "Ten klaster czeka jeszcze na swoje karty.",
      emptyBody: "Może tu później pojawić się osobna strona klastra albo zestaw kart z tego odcinka roku.",
      themeLabel: "Tematy",
      weeksLabel: "Tygodnie",
      clusters: [
        {
          id: "deep-winter",
          season: "Zima",
          range: [1, 8],
          emoji: "❄️",
          title: "Zima",
          subtitle: "bezruch, korzenie, wytrwałość, ciche piękno, subtelny ruch",
          slotLabel: "Tydzień"
        },
        {
          id: "early-spring",
          season: "Wczesna wiosna",
          range: [9, 16],
          emoji: "🌿",
          title: "Wczesna wiosna",
          subtitle: "wyłanianie się, odporność, miękkość, wracające życie",
          slotLabel: "Tydzień"
        },
        {
          id: "late-spring",
          season: "Późna wiosna",
          range: [17, 24],
          emoji: "🌸",
          title: "Późna wiosna",
          subtitle: "wzrost, pełnia, lekkość, ciekawość",
          slotLabel: "Tydzień"
        },
        {
          id: "summer",
          season: "Lato",
          range: [25, 32],
          emoji: "☀️",
          title: "Lato",
          subtitle: "żywotność, ekspansja, ciepło, ruch",
          slotLabel: "Tydzień"
        },
        {
          id: "early-autumn",
          season: "Wczesna jesień",
          range: [33, 40],
          emoji: "🍂",
          title: "Wczesna jesień",
          subtitle: "zbiory, ugruntowanie, mięknące krawędzie, zmiana",
          slotLabel: "Tydzień"
        },
        {
          id: "late-autumn",
          season: "Późna jesień",
          range: [41, 48],
          emoji: "🍁",
          title: "Późna jesień",
          subtitle: "odpuszczanie, odpoczynek, przejrzystość, przemiana",
          slotLabel: "Tydzień"
        },
        {
          id: "winter-return",
          season: "Głęboka zima",
          range: [49, 52],
          emoji: "🌑",
          title: "Głęboka zima",
          subtitle: "refleksja, cisza, odnowa, głęboki odpoczynek",
          slotLabel: "Tydzień"
        }
      ]
    },
    en: {
      pageTitle: "The 52-week pattern",
      pageLead: "The framework for the full year: seasonal clusters, guiding themes, and title patterns that can later be filled with specific cards.",
      linkSeries: "Back to the series",
      linkCurrent: "View the current card",
      linkEnglish: "Polski",
      liveCardsTitle: "Cards already living in this cluster",
      plannedTitle: "Places for future cards",
      emptyTitle: "This cluster is still waiting for its cards.",
      emptyBody: "A dedicated cluster page or a fuller set of cards can grow here later.",
      themeLabel: "Themes",
      weeksLabel: "Weeks",
      clusters: [
        {
          id: "deep-winter",
          season: "Winter",
          range: [1, 8],
          emoji: "❄️",
          title: "Winter",
          subtitle: "stillness, roots, endurance, quiet beauty, subtle movement",
          slotLabel: "Week"
        },
        {
          id: "early-spring",
          season: "Early spring",
          range: [9, 16],
          emoji: "🌿",
          title: "Early spring",
          subtitle: "emergence, resilience, softness, returning life",
          slotLabel: "Week"
        },
        {
          id: "late-spring",
          season: "Late spring",
          range: [17, 24],
          emoji: "🌸",
          title: "Late spring",
          subtitle: "growth, fullness, lightness, curiosity",
          slotLabel: "Week"
        },
        {
          id: "summer",
          season: "Summer",
          range: [25, 32],
          emoji: "☀️",
          title: "Summer",
          subtitle: "vitality, expansion, warmth, movement",
          slotLabel: "Week"
        },
        {
          id: "early-autumn",
          season: "Early autumn",
          range: [33, 40],
          emoji: "🍂",
          title: "Early autumn",
          subtitle: "harvest, grounding, softening edges, change",
          slotLabel: "Week"
        },
        {
          id: "late-autumn",
          season: "Late autumn",
          range: [41, 48],
          emoji: "🍁",
          title: "Late autumn",
          subtitle: "letting go, rest, clarity, transformation",
          slotLabel: "Week"
        },
        {
          id: "winter-return",
          season: "Deep winter",
          range: [49, 52],
          emoji: "🌑",
          title: "Deep winter",
          subtitle: "reflection, silence, renewal, deep rest",
          slotLabel: "Week"
        }
      ]
    }
  };

  window.cardPatternData = cardPatternData;
})();
