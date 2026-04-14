(function () {
  const cardPatternData = {
    pl: {
      pageTitle: "Układ 52 tygodni",
      pageLead: "Szkielet całego roku: sezonowe klastry, motywy przewodnie i wzory tytułów, które można później wypełniać konkretnymi kartami.",
      linkSeries: "Wróć do serii",
      linkCurrent: "Zobacz aktualną kartę",
      linkEnglish: "English",
      liveCardsTitle: "Karty już wpisane w ten klaster",
      plannedTitle: "Przykładowe tytuły i kierunki",
      emptyTitle: "Ten klaster czeka jeszcze na swoje karty.",
      emptyBody: "Może tu później pojawić się osobna strona klastra albo zestaw kart z tego odcinka roku.",
      themeLabel: "Tematy",
      patternLabel: "Wzory tytułów",
      weeksLabel: "Tygodnie",
      liveStatus: "Opublikowane teraz",
      clusters: [
        {
          id: "deep-winter",
          season: "Zima",
          range: [1, 8],
          emoji: "❄️",
          title: "Zima",
          subtitle: "bezruch, korzenie, wytrwałość, ciche piękno, subtelny ruch",
          pattern: "Cichy ___, Ukryta ___, Pierwszy ___",
          examples: ["Cichy korzeń", "Ukryta siła", "Niespieszna ścieżka", "Miękka wytrwałość", "Blade słońce", "Pierwszy jasny kwiat", "Zimowy oddech", "Niskie światło"]
        },
        {
          id: "early-spring",
          season: "Wczesna wiosna",
          range: [9, 16],
          emoji: "🌿",
          title: "Wczesna wiosna",
          subtitle: "wyłanianie się, odporność, miękkość, wracające życie",
          pattern: "Czuły ___, Powracający ___, Mała ___",
          examples: ["Czuły pęd", "Powracająca zieleń", "Mała odwaga", "Poszerzające się światło", "Łagodna odwilż", "Budząca się ziemia", "Cichy powrót", "Pierwsza pieśń"]
        },
        {
          id: "late-spring",
          season: "Późna wiosna",
          range: [17, 24],
          emoji: "🌸",
          title: "Późna wiosna",
          subtitle: "wzrost, pełnia, lekkość, ciekawość",
          pattern: "Otwarty ___, Jasna ___, Wędrująca ___",
          examples: ["Otwarty kwiat", "Jasna gałąź", "Wędrująca pszczoła", "Czyste niebo", "Miękki deszcz", "Długi poranek", "Kwitnące powietrze", "Splątane zielenie"]
        },
        {
          id: "summer",
          season: "Lato",
          range: [25, 32],
          emoji: "☀️",
          title: "Lato",
          subtitle: "żywotność, ekspansja, ciepło, ruch",
          pattern: "Złoty ___, Ciepły ___, Tańcząca ___",
          examples: ["Złota ścieżka", "Ciepły wiatr", "Tańcząca trawa", "Słoneczny przypływ", "Szeroka łąka", "Powolna rzeka", "Otwarte pola", "Światło, które zostaje"]
        },
        {
          id: "early-autumn",
          season: "Wczesna jesień",
          range: [33, 40],
          emoji: "🍂",
          title: "Wczesna jesień",
          subtitle: "zbiory, ugruntowanie, mięknące krawędzie, zmiana",
          pattern: "Zwracający się ___, Opadające ___, Zbierający ___",
          examples: ["Zwracający się liść", "Opadające światło", "Zbierający się cień", "Cichy sad", "Wypłowiała gałąź", "Chrupiąca ścieżka", "Łagodna zmiana", "Niższe słońce"]
        },
        {
          id: "late-autumn",
          season: "Późna jesień",
          range: [41, 48],
          emoji: "🍁",
          title: "Późna jesień",
          subtitle: "odpuszczanie, odpoczynek, przejrzystość, przemiana",
          pattern: "Ostatni ___, Nagie ___, Gasnący ___",
          examples: ["Naga gałąź", "Gasnący kolor", "Ostatnie ciepło", "Otwarte pole", "Miękkie opadanie", "Pusta ścieżka", "Cicha polana", "Długi zmierzch"]
        },
        {
          id: "winter-return",
          season: "Głęboka zima",
          range: [49, 52],
          emoji: "🌑",
          title: "Głęboka zima",
          subtitle: "refleksja, cisza, odnowa, głęboki odpoczynek",
          pattern: "Głęboka ___, Nieruchome ___, Ukryta ___",
          examples: ["Głęboka cisza", "Nieruchome powietrze", "Ukryta iskra", "Powracająca noc"]
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
      plannedTitle: "Example titles and directions",
      emptyTitle: "This cluster is still waiting for its cards.",
      emptyBody: "A dedicated cluster page or a fuller set of cards can grow here later.",
      themeLabel: "Themes",
      patternLabel: "Title pattern",
      weeksLabel: "Weeks",
      liveStatus: "Published now",
      clusters: [
        {
          id: "deep-winter",
          season: "Winter",
          range: [1, 8],
          emoji: "❄️",
          title: "Winter",
          subtitle: "stillness, roots, endurance, quiet beauty, subtle movement",
          pattern: "The Quiet ___, The Hidden ___, The First ___",
          examples: ["The Quiet Root", "The Hidden Strength", "The Unhurried Path", "The Soft Endurance", "The Pale Sun", "The First Bright Bloom", "The Winter Breath", "The Low Light"]
        },
        {
          id: "early-spring",
          season: "Early spring",
          range: [9, 16],
          emoji: "🌿",
          title: "Early spring",
          subtitle: "emergence, resilience, softness, returning life",
          pattern: "The Tender ___, The Returning ___, The Small ___",
          examples: ["The Tender Sprout", "The Returning Green", "The Small Courage", "The Widening Light", "The Gentle Thaw", "The Waking Earth", "The Quiet Return", "The First Song"]
        },
        {
          id: "late-spring",
          season: "Late spring",
          range: [17, 24],
          emoji: "🌸",
          title: "Late spring",
          subtitle: "growth, fullness, lightness, curiosity",
          pattern: "The Open ___, The Bright ___, The Wandering ___",
          examples: ["The Open Blossom", "The Bright Branch", "The Wandering Bee", "The Clear Sky", "The Soft Rain", "The Long Morning", "The Blooming Air", "The Woven Greens"]
        },
        {
          id: "summer",
          season: "Summer",
          range: [25, 32],
          emoji: "☀️",
          title: "Summer",
          subtitle: "vitality, expansion, warmth, movement",
          pattern: "The Golden ___, The Warm ___, The Dancing ___",
          examples: ["The Golden Path", "The Warm Wind", "The Dancing Grass", "The Sunlit Tide", "The Wide Meadow", "The Slow River", "The Open Fields", "The Light That Lingers"]
        },
        {
          id: "early-autumn",
          season: "Early autumn",
          range: [33, 40],
          emoji: "🍂",
          title: "Early autumn",
          subtitle: "harvest, grounding, softening edges, change",
          pattern: "The Turning ___, The Falling ___, The Gathering ___",
          examples: ["The Turning Leaf", "The Falling Light", "The Gathering Shade", "The Quiet Orchard", "The Weathered Branch", "The Crisp Path", "The Gentle Shift", "The Lower Sun"]
        },
        {
          id: "late-autumn",
          season: "Late autumn",
          range: [41, 48],
          emoji: "🍁",
          title: "Late autumn",
          subtitle: "letting go, rest, clarity, transformation",
          pattern: "The Last ___, The Bare ___, The Fading ___",
          examples: ["The Bare Branch", "The Fading Color", "The Last Warmth", "The Open Field", "The Soft Descent", "The Empty Path", "The Quiet Clearing", "The Long Twilight"]
        },
        {
          id: "winter-return",
          season: "Deep winter",
          range: [49, 52],
          emoji: "🌑",
          title: "Deep winter",
          subtitle: "reflection, silence, renewal, deep rest",
          pattern: "The Deep ___, The Still ___, The Hidden ___",
          examples: ["The Deep Quiet", "The Still Air", "The Hidden Spark", "The Returning Night"]
        }
      ]
    }
  };

  window.cardPatternData = cardPatternData;
})();
