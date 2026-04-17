(function () {
  const TIME_ZONE = "Europe/Warsaw";

  const NAMEDAYS = {
    1: [
      "Mieczysława, Mieszka", "Izydora, Makarego", "Danuty, Genowefy", "Anieli, Eugeniusza", "Edwarda, Szymona", "Kacpra, Melchiora Baltazara", "Juliana, Lucjana", "Seweryna, Teofila", "Weroniki, Juliana", "Jana, Wilhelma", "Matyldy, Honoraty", "Benedykta, Arkadiusza", "Weroniki, Bogumiły", "Feliksa, Hilarego", "Pawła, Izydora", "Marcelego, Włodzimierza", "Antoniego, Rościsława", "Piotra, Małgorzaty", "Henryka, Mariusza", "Fabiana, Sebastiana", "Agnieszki, Jarosława", "Anastazego", "Ildefonsa, Rajmunda", "Felicji, Tymoteusza", "Pawła, Miłosza", "Seweryna, Pauliny", "Jana, Przybysława", "Walerego, Radomira", "Zdzisława, Franciszka", "Macieja, Martyny", "Jana, Marceliny"
    ],
    2: [
      "Brygidy, Ignacego", "Marii, Mirosława", "Błażeja, Hipolita", "Andrzeja, Weroniki", "Agaty, Adelajdy", "Doroty, Tytusa", "Ryszarda, Romualda", "Jana, Piotra", "Cyryla, Apolonii", "Jacka, Scholastyki", "Łazarza, Marii", "Eulalii, Modesta", "Grzegorza, Katarzyny", "Walentego, Metodego", "Faustyna, Józefa", "Danuty, Juliany", "Donata, Łukasza", "Symeona, Konstancji", "Konrada, Arnolda", "Leona, Ludomiła", "Eleonory, Feliksa", "Marty, Małgorzaty", "Romany, Damiana", "Macieja, Bogusza", "Wiktora, Cezarego", "Mirosława, Aleksandra", "Gabriela, Anastazji", "Teofila, Makarego"
    ],
    3: [
      "Antoniny, Radosława", "Heleny, Pawła", "Tycjana, Kunegundy", "Kazimierza, Łucji", "Fryderyka, Wacława", "Róży, Wiktora", "Pawła, Tomasza", "Beaty", "Katarzyny, Franciszki", "Cypriana, Marcelego", "Konstantego, Benedykta", "Bernarda, Grzegorza", "Bożeny, Krystyny", "Leona, Matyldy", "Ludwiki, Klemensa", "Izabeli, Hilarego", "Zbigniewa, Patryka", "Cyryla, Edwarda", "Józefa, Bogdana", "Eufemii, Klaudii", "Benedykta, Lubomira", "Bogusława, Katarzyny", "Feliksa, Pelagii", "Marka, Gabriela", "Marii, Wieńczysława", "Teodora, Emanuela", "Lidii, Ernesta", "Anieli, Sykstusa", "Wiktora, Eustachego", "Amelii, Jana", "Balbiny, Gwidona"
    ],
    4: [
      "Zbigniewa, Grażyny", "Franciszka, Władysława", "Ryszarda, Pankracego", "Wacława, Izydora", "Ireny, Wincentego", "Celestyna, Wilhelma", "Donata, Rufina", "Dionizego, Januarego", "Marii, Marcelego", "Michała, Makarego", "Leona, Filipa", "Juliusza, Wiktora", "Przemysława, Hermenegildy", "Justyny, Waleriana", "Anastazji, Bazylego", "Julii, Benedykta", "Roberta, Patrycego", "Bogusławy, Bogumiły", "Adolfa, Tymona", "Czesława, Agnieszki", "Feliksa, Anzelma", "Leona, Łukasza", "Jerzego, Wojciecha", "Grzegorza, Aleksandra", "Marka, Jarosława", "Marii, Marcelego", "Zyty, Teofila", "Pawła, Walerii", "Piotra, Pawła", "Mariana, Katarzyny"
    ],
    5: [
      "Józefa, Filipa", "Anatola, Zygmunta", "Marii, Aleksandra", "Moniki, Floriana", "Ireny, Waldemara", "Jana, Judyty", "Ludmiły, Gizeli", "Stanisława, Dezyderii", "Bożydara, Grzegorza", "Izydora, Antoniny", "Franciszka, Jakuba", "Dominika, Pankracego", "Roberta, Serwacego", "Bonifacego, Dobiesława", "Zofii, Jana", "Andrzeja, Wieńczysława", "Weroniki, Sławomira", "Feliksa, Aleksandry", "Piotra, Mikołaja", "Bernarda, Bazylego", "Wiktora, Tymoteusza", "Julii, Heleny", "Iwony, Dezyderego", "Joanny, Zuzanny", "Urbana, Grzegorza", "Filipa, Pauliny", "Jana, Juliusza", "Augustyna, Jaromira", "Teodozji, Magdaleny", "Feliksa, Ferdynanda", "Anieli, Petroneli"
    ],
    6: [
      "Jakuba, Konrada", "Erazma, Marianny", "Leszka, Klotyldy", "Karola, Franciszka", "Walerii, Bonifacego", "Pauliny, Laury", "Roberta, Wiesława", "Maksyma, Medarda", "Pelagii, Felicjana", "Bogumiła, Małgorzaty", "Barnaby, Feliksa", "Jana, Onufrego", "Lucjana, Antoniego", "Walerego, Bazylego", "Wita, Jolanty", "Aliny, Justyny", "Laury, Adolfa", "Marka, Elżbiety", "Gerwazego, Protazego", "Bogny, Florentyny", "Alicji, Alojzego", "Pauliny, Flawiusza", "Wandy, Zenona", "Jana, Danuty", "Łucji, Wilhelma", "Jana, Pawła", "Marii, Władysława", "Leona, Ireneusza", "Piotra, Pawła", "Emilii, Lucyny"
    ],
    7: [
      "Haliny, Mariana", "Marii, Urbana", "Jacka, Anatola", "Teodora, Innocentego", "Karoliny, Antoniego", "Łucji, Dominika", "Cyryla, Metodego", "Elżbiety, Prokopa", "Zenona, Weroniki", "Filipa, Amelii", "Olgi, Pelagii", "Jana, Gwalberta", "Ernesta, Małgorzaty", "Marceliny, Bonawentury", "Henryka, Włodzimierza", "Marii, Benedykta", "Bogdana, Aleksego", "Kamila, Szymona", "Wincentego, Wodzisława", "Czesława, Hieronima", "Daniela, Andrzeja", "Magdaleny, Bolesława", "Bogny, Apolinarego", "Kingi, Krystyny", "Jakuba, Krzysztofa", "Anny, Mirosławy", "Julii, Natalii", "Wiktora, Innocentego", "Marty, Olafa", "Julity, Ludmiły", "Ignacego, Heleny"
    ],
    8: [
      "Piotra, Justyny", "Gustawa, Alfonsa", "Lidii, Augusta", "Dominika, Protazego", "Marii, Stanisławy", "Sławy, Jakuba", "Doroty, Kajetana", "Emila, Cyryla", "Romana, Romualda", "Borysa, Wawrzyńca", "Zuzanny, Filomeny", "Klary, Hilarego", "Hipolita, Diany", "Alfreda, Euzebiusza", "Marii, Napoleona", "Rocha, Joachima", "Jacka, Mirona", "Heleny, Bronisławy", "Bolsława, Juliana", "Bernarda, Sobiesława", "Joanny, Franciszki", "Cezarego, Tymoteusza", "Filipa, Apolinarego", "Jerzego, Bartłomieja", "Ludwika, Luizy", "Marii, Zefiryny", "Józefa, Moniki", "Augustyna, Patrycji", "Sabiny, Jana", "Rózy, Szczęsnego", "Bogdana, Rajmunda"
    ],
    9: [
      "Bronisława, Idziego", "Stefana, Juliana", "Izabeli, Szymona", "Rozalii, Róży", "Doroty, Wawrzyńca", "Beaty, Eugeniusza", "Reginy, Melchiora", "Marii, Adrianny", "Piotra, Mikołaja", "Bernarda, Sobiesława", "Jacka, Piotra", "Marii, Gwidona", "Filipa, Eugenii", "Cypriana, Bernarda", "Albina, Nikodema", "Edyty, Kornela", "Justyna, Franciszki", "Ireny, Józefa", "Januarego, Konstancji", "Filipiny, Eustachego", "Hipolita, Mateusza", "Tomasza, Maurycego", "Tekli, Bogusława", "Gerarda, Teodora", "Aurelii, Ładysława", "Justyny, Cypriana", "Kosmy, Damiana", "Marka, Wacława", "Michała, Michaliny", "Zofii, Hieronima"
    ],
    10: [
      "Danuty, Remigiusza", "Teofila, Dionizego", "Gerarda, Teresy", "Rozalii, Franciszka", "Apolinarego, Placyda", "Artura, Brunona", "Marii, Marka", "Pelagii, Brygidy", "Ludwika, Dionizego", "Pauliny, Franciszka", "Emila, Aldony", "Eustachego, Maksymiliana", "Edwarda, Teofila", "Bernarda, Fortunaty", "Teresy, Jadwigi", "Gawła, Ambrożego", "Wiktora, Małgorzaty", "Łukasza, Juliana", "Piotra, Ziemowita", "Ireny, Kleopatry", "Urszuli, Hilarego", "Filipa, Kordulii", "Teodora, Seweryna", "Rafała, Marcina", "Kryspina, Ingi", "Lucjana, Ewarysta", "Sabiny, Iwony", "Szymona, Tadeusza", "Euzebii, Narcyza", "Zenobii, Przemysława", "Urbana, Augusta"
    ],
    11: [
      "Seweryna, Wiktoryny", "Bohdana, Bożydara", "Sylwii, Huberta", "Karola, Olgierda", "Sławomira, Elżbiety", "Feliksa, Leonarda", "Antoniego, Ernesta", "Sewera, Gotfryda", "Ursyna, Teodora", "Andrzeja, Ludomira", "Bartłomieja, Marcina", "Renaty, Witolda", "Stanisława, Mikołaja", "Serafina, Rogera", "Alberta, Leopolda", "Gertrudy, Edmunda", "Grzegorza, Salomei", "Anieli, Romana", "Elżbiety, Seweryna", "Feliksa, Anatola", "Janusza, Konrada", "Marka, Cecylii", "Klemensa, Amelii", "Jana, Flory", "Erazma, Katarzyny", "Konrada, Sylwestra", "Waleriana, Maksymiliana", "Grzegorza, Zdzisława", "Błażeja, Saturnina", "Andrzeja, Konstantego"
    ],
    12: [
      "Natalii, Eligiusza", "Pauliny, Balbiny", "Franciszka, Ksawerego", "Barbary, Piotra", "Kryspina, Saby", "Mikołaja, Emiliana", "Marcina, Ambrożego", "Marii, Wirgiliusza", "Wiesławy, Leokadii", "Julii, Daniela", "Damazego, Waldemara", "Adelajdy, Aleksandra", "Łucji, Otylii", "Alfreda, Izydora", "Celiny, Waleriana", "Euzebiusza, Zdzisławy", "Olimpii, Łazarza", "Gracjana, Bogusława", "Urbana, Dariusza", "Bogumiła, Dominika", "Tomasza, Tomisława", "Zenona, Honoraty", "Wiktorii, Sławomiry", "Adama, Ewy", "Eugenii, Anastazji", "Dionizego, Szczepana", "Kosmy, Damiana", "Cezarego, Teofila", "Dawida, Tomasza", "Eugeniusza, Sabiny", "Sylwestra, Sebastiana"
    ]
  };

  const COPY = {
    pl: {
      pageTitle: "Kartka z kalendarza",
      pageLead: "Dzienna kartka z datą, imieninami i rytmem tygodnia.",
      labelWeeklyCard: "Karta uważności tygodnia",
      weeklyCardEyebrow: "Na ten tydzień",
      weeklyCardFallback: "Ostatnia dostępna",
      weeklyCardLink: "Zobacz kartę tygodnia",
      labelDailyThought: "Myśl na dziś",
      labelToday: "Dziś",
      labelTomorrow: "Jutro",
      labelNameday: "Imieniny",
      labelWeek: "Tydzień roku",
      labelWeekRange: "Zakres tygodnia",
      labelDayOfYear: "Dzień roku",
      labelSeasonNote: "Na dziś",
      labelPolishTradition: "Codzienna kartka",
      weekWord: "tydzień",
      dayWord: "dzień",
      noNameday: "Imieniny niedostępne",
      nextLine: (nameday) => `Jutro: ${nameday}`,
      weekRangeLine: (from, to) => `${from} – ${to}`,
      dateLocale: "pl-PL",
      monthsShort: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"]
    },
    en: {
      pageTitle: "Page-a-day calendar",
      pageLead: "A daily page with the date, Polish name day tradition, and the rhythm of the week.",
      labelWeeklyCard: "Mindfulness card of the week",
      weeklyCardEyebrow: "For this week",
      weeklyCardFallback: "Latest available",
      weeklyCardLink: "Open weekly card",
      labelDailyThought: "Thought for today",
      labelToday: "Today",
      labelTomorrow: "Tomorrow",
      labelNameday: "Name day",
      labelWeek: "Week of the year",
      labelWeekRange: "Week span",
      labelDayOfYear: "Day of the year",
      labelSeasonNote: "For today",
      labelPolishTradition: "Daily page",
      weekWord: "week",
      dayWord: "day",
      noNameday: "Name day unavailable",
      nextLine: (nameday) => `Tomorrow: ${nameday}`,
      weekRangeLine: (from, to) => `${from} – ${to}`,
      dateLocale: "en-GB",
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
  };

  const DAILY_WISDOM = {
    pl: {
      sayings: [
        "Kiedy w styczniu lato, w lecie zimno za to.",
        "Gdy w styczniu woda huczy, to na wiosnę mróz dokuczy.",
        "Kiedy styczeń mokry trzyma, zwykle bywa długa zima.",
        "Idzie luty, okuj buty.",
        "Gdy luty z burzami, prędko wiosna przed nami.",
        "Gdy mróz w lutym ostro trzyma, tedy już niedługo zima.",
        "Jeśli luty śnieżny, mroźny, spodziewaj się wczesnej wiosny.",
        "Co marzec wypiecze, to kwiecień wysiecze.",
        "Ile w marcu dni mglistych, tyle w żniwa dni dżdżystych.",
        "Gdy suchy marzec, nagradza kwiecień, bo deszcze sprowadza.",
        "Marzec, co z deszczem chadza, mokry czerwiec sprowadza.",
        "Kwiecień wilgotny obiecuje rok stokrotny.",
        "Deszcze częste w kwietniu wróżą, że owoców będzie dużo.",
        "Kwiecień, co deszczem rosi, wiele owoców przynosi.",
        "Choć już w kwietniu słonko grzeje, nieraz pole śnieg zawieje.",
        "Jeżeli w kwietniu posuszy, nic się w polu nie ruszy.",
        "Deszcz majowy, chleb gotowy.",
        "Bywa śnieg i w maju.",
        "Częste w maju grzmoty rozpraszają chłopom zgryzoty.",
        "Czerwiec po deszczowym maju często dżdżysty w naszym kraju.",
        "Grzmoty czerwca rozweselają rolnikom serca.",
        "Pełnia czerwcowa, burza gotowa.",
        "Gdy pająk w lipcu przychodzi, to za sobą deszcz przywodzi.",
        "Lipcowe upały, wrzesień doskonały.",
        "Gdy sierpień wrzos rozwija, jesień krótka, szybko mija.",
        "W sierpniu mgły na górach, mroźne Gody; kiedy mgły w dolinach, dla pogody.",
        "Wrześniowa słota: miarka deszczu, korzec błota.",
        "Grzmot październikowy, niestatek zimowy.",
        "Deszcze listopadowe budzą wiatry zimowe.",
        "Boże Narodzenie po wodzie, Wielkanoc po lodzie.",
        "Na świętą Łucję noc się z dniem tłucze."
      ]
    },
    en: {
      sayings: [
        "If January feels like summer, summer will feel like winter.",
        "When water roars in January, frost will bite in spring.",
        "When January stays wet, winter is usually long.",
        "February is coming, shoe the boots.",
        "If February brings storms, spring is near.",
        "If frost grips hard in February, winter will soon be over.",
        "If February is snowy and frosty, expect an early spring.",
        "What March bakes, April will cut down.",
        "As many foggy days in March, so many rainy days at harvest.",
        "A dry March is repaid by April, for it brings the rains.",
        "March walking with rain brings a wet June.",
        "A damp April promises a hundredfold year.",
        "Frequent April rains foretell abundant fruit.",
        "April watering with rain brings many fruits.",
        "Even when April sun grows warm, snow may still sweep the fields.",
        "If April dries the land, nothing moves in the field.",
        "A May rain means bread is on the way.",
        "Snow may still come in May.",
        "Frequent May thunder eases the farmer's worries.",
        "After a rainy May, June is often drizzly too.",
        "June thunder gladdens the farmer's heart.",
        "A June full moon means a storm is ready.",
        "When a spider comes in July, it draws rain behind it.",
        "Hot July brings an excellent September.",
        "When August opens the heather, autumn is short and quickly passes.",
        "In August, mist on the hills means a frosty Christmas; in the valleys, fair weather.",
        "September slush: a measure of rain, a bushel of mud.",
        "October thunder means an unsettled winter.",
        "November rains awaken winter winds.",
        "Christmas in water, Easter on ice.",
        "On Saint Lucy's day, night wrestles with day."
      ]
    }
  };

  function getPageLang() {
    return document.documentElement.lang === "en" ? "en" : "pl";
  }

  function getWarsawParts() {
    const formatter = new Intl.DateTimeFormat("en-CA", {
      timeZone: TIME_ZONE,
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
    const parts = formatter.formatToParts(new Date());
    const map = {};
    parts.forEach((part) => {
      if (part.type !== "literal") {
        map[part.type] = part.value;
      }
    });

    return {
      year: Number(map.year),
      month: Number(map.month),
      day: Number(map.day)
    };
  }

  function asUtcDate(parts) {
    return new Date(Date.UTC(parts.year, parts.month - 1, parts.day));
  }

  function addDays(date, count) {
    const next = new Date(date);
    next.setUTCDate(next.getUTCDate() + count);
    return next;
  }

  function formatLongDate(date, locale) {
    return new Intl.DateTimeFormat(locale, {
      timeZone: "UTC",
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  }

  function formatShortDate(date, locale) {
    return new Intl.DateTimeFormat(locale, {
      timeZone: "UTC",
      day: "numeric",
      month: "long"
    }).format(date);
  }

  function getIsoWeekInfo(date) {
    const current = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
    const day = current.getUTCDay() || 7;
    current.setUTCDate(current.getUTCDate() + 4 - day);
    const yearStart = new Date(Date.UTC(current.getUTCFullYear(), 0, 1));
    const week = Math.ceil((((current - yearStart) / 86400000) + 1) / 7);
    return {
      week,
      year: current.getUTCFullYear()
    };
  }

  function getWeekRange(date) {
    const day = date.getUTCDay() || 7;
    const monday = addDays(date, 1 - day);
    const sunday = addDays(monday, 6);
    return { monday, sunday };
  }

  function getDayOfYear(date) {
    const start = Date.UTC(date.getUTCFullYear(), 0, 0);
    return Math.floor((date.getTime() - start) / 86400000);
  }

  function getNameday(date) {
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();
    const monthData = NAMEDAYS[month] || [];
    return monthData[day - 1] || null;
  }

  function getDailyWisdom(date, lang) {
    const wisdom = DAILY_WISDOM[lang] || DAILY_WISDOM.pl;
    const dayOfYearIndex = getDayOfYear(date) - 1;
    return wisdom.sayings[dayOfYearIndex % wisdom.sayings.length];
  }

  function setText(selector, value) {
    const node = document.querySelector(selector);
    if (node) {
      node.textContent = value;
    }
  }

  function setTextAll(selector, value) {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value;
    });
  }

  function setHtml(selector, value) {
    const node = document.querySelector(selector);
    if (node) {
      node.innerHTML = value;
    }
  }

  function setAttr(selector, name, value) {
    const node = document.querySelector(selector);
    if (node && value != null) {
      node.setAttribute(name, value);
    }
  }

  function setAttrAll(selector, name, value) {
    if (value == null) {
      return;
    }

    document.querySelectorAll(selector).forEach((node) => {
      node.setAttribute(name, value);
    });
  }

  function getWeeklyCardForDate(lang, isoWeek) {
    if (typeof window.getWeeklyCardsForLang !== "function") {
      return null;
    }

    const cards = window.getWeeklyCardsForLang(lang);
    if (!Array.isArray(cards) || !cards.length) {
      return null;
    }

    const exactMatch = cards.find((card) => card.id === isoWeek);
    if (exactMatch) {
      return { card: exactMatch, isFallback: false };
    }

    const earlierCards = cards.filter((card) => card.id <= isoWeek);
    if (earlierCards.length) {
      return {
        card: earlierCards.reduce((latest, card) => (card.id > latest.id ? card : latest)),
        isFallback: true
      };
    }

    return {
      card: cards.reduce((latest, card) => (card.id > latest.id ? card : latest)),
      isFallback: true
    };
  }

  function render() {
    const lang = getPageLang();
    const copy = COPY[lang];
    const todayParts = getWarsawParts();
    const today = asUtcDate(todayParts);
    const tomorrow = addDays(today, 1);
    const isoWeek = getIsoWeekInfo(today).week;
    const weekRange = getWeekRange(today);
    const dayOfYear = getDayOfYear(today);
    const todayNameday = getNameday(today) || copy.noNameday;
    const tomorrowNameday = getNameday(tomorrow) || copy.noNameday;
    document.title = lang === "en"
      ? "Page-a-day calendar | Project: Tree House"
      : "Kartka z kalendarza | Projekt: Domek na Drzewie";

    setText("[data-calendar-title]", copy.pageTitle);
    setText("[data-calendar-lead]", copy.pageLead);
    setText("[data-label-daily-thought]", copy.labelDailyThought);
    setText("[data-label-season-note]", copy.labelSeasonNote);
    setText("[data-label-today]", copy.labelToday);
    setText("[data-label-tomorrow]", copy.labelTomorrow);
    setText("[data-label-nameday]", copy.labelNameday);
    setText("[data-label-week]", copy.labelWeek);
    setText("[data-label-week-range]", copy.labelWeekRange);
    setText("[data-label-day-of-year]", copy.labelDayOfYear);
    setText("[data-label-tradition]", copy.labelPolishTradition);
    setText("[data-label-weekly-card]", copy.labelWeeklyCard);
    setText("[data-weekly-card-link-text]", copy.weeklyCardLink);

    setText("[data-day-number]", String(today.getUTCDate()));
    setText("[data-month-short]", copy.monthsShort[today.getUTCMonth()]);
    setText("[data-full-date]", formatLongDate(today, copy.dateLocale));
    setText("[data-next-day-number]", String(tomorrow.getUTCDate()));
    setText("[data-next-month-short]", copy.monthsShort[tomorrow.getUTCMonth()]);
    setTextAll("[data-next-full-date]", formatShortDate(tomorrow, copy.dateLocale));
    setText("[data-daily-thought]", getDailyWisdom(today, lang));
    setText("[data-nameday]", todayNameday);
    setText("[data-tomorrow-nameday]", copy.nextLine(tomorrowNameday));
    setText("[data-week-number]", String(isoWeek));
    setText("[data-day-of-year]", String(dayOfYear));
    setText("[data-week-range]", copy.weekRangeLine(
      formatShortDate(weekRange.monday, copy.dateLocale),
      formatShortDate(weekRange.sunday, copy.dateLocale)
    ));

    const weeklyCardResult = getWeeklyCardForDate(lang, isoWeek);
    if (weeklyCardResult) {
      const { card, isFallback } = weeklyCardResult;
      const cardUrl = lang === "en"
        ? `/en/materials/urban-bathing/#tydzien-${card.id}`
        : `/materialy/kapiele_miejskie/#tydzien-${card.id}`;
      const cardImage = `/materialy/kapiele_miejskie/${card.img}`;
      const cardTitle = `${lang === "en" ? "Week" : "Tydzień"} ${card.id}: ${card.title}`;

      setText("[data-weekly-card-eyebrow]", isFallback ? copy.weeklyCardFallback : copy.weeklyCardEyebrow);
      setText("[data-weekly-card-title]", cardTitle);
      setText("[data-weekly-card-body]", card.body);
      setText("[data-weekly-card-season]", `${card.season} · ${card.month}`);
      setAttrAll("[data-weekly-card-link]", "href", cardUrl);
      setAttrAll("[data-weekly-card-link]", "aria-label", cardTitle);
      setAttr("[data-weekly-card-image]", "src", cardImage);
      setAttr("[data-weekly-card-image]", "alt", cardTitle);
    }

  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
