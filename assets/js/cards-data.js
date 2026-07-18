(function () {
  const weeklyCardsData = {
    pl: [
      { id: 1, title: "Cichy korzeń", theme: "Bezruch", season: "Zima", month: "Styczeń", body: "Wejdź powoli w zieloną przestrzeń. Rób częste pauzy. Usiądź lub stań nieruchomo na pięć minut.", reflection: ["Jakie dźwięki trwają, gdy otoczenie cichnie?", "Gdzie w moim ciele odczuwam stan bezruchu?"], img: "miejskie-kapiele-lesne-zima-styczen-01-cichy-korzen-A.png", imgB: "miejskie-kapiele-lesne-zima-styczen-01-cichy-korzen-B.png", blog: "/pl/cichy-korzen-cwiczenie-uwaznosci-o-bezruchu/" },
      { id: 2, title: "Ukryta siła", theme: "Wytrwałość", season: "Zima", month: "Styczeń", body: "Szukaj oznak wytrwałości — igieł wiecznie zielonych, mchu, porostów, szczelnie zamkniętych pąków. Dotykaj ich delikatnie.", reflection: ["Co/kto pomógł mi przetrwać trudne pory roku?", "W jakich okolicznościach czuję w sobie spokój?"], img: "miejskie-kapiele-lesne-zima-styczen-02-ukryta-sila-A.png", imgB: "miejskie-kapiele-lesne-zima-styczen-02-ukryta-sila-B.png", blog: "/pl/ukryta-sila-cwiczenie-uwaznosci-o-wytrwalosci/" },
      { id: 3, title: "Niespieszna Ścieżka", theme: "Powolność", season: "Zima", month: "Styczeń", body: "Idź o połowę wolniej niż zwykle. Niech twój oddech wyznacza rytm. Przy każdym kroku poczuj ziemię w pełni.", reflection: ["Co zaczynam zauważać dopiero wtedy, gdy nigdzie się nie spieszę?", "Dokąd w moim życiu biegnę bez potrzeby?"], img: "miejskie-kapiele-lesne-zima-styczen-03-niespieszna-sciezka-A.png", imgB: "miejskie-kapiele-lesne-zima-styczen-03-niespieszna-sciezka-B.png", blog: "/pl/niespieszna-sciezka-cwiczenie-uwaznosci-o-powolnosci/" },
      { id: 4, title: "Światło, które sięga do nas", theme: "Przebudzenie", season: "Zima", month: "Styczeń", body: "Unieś dłoń w stronę światła. Pozwól, by ciepło spoczęło na twoich ubraniach, na skórze, i rozświetliło cichą przestrzeń w tobie.", reflection: ["Która część mnie jest gotowa sięgnąć po coś nowego?", "Co rozgrzewa mnie od środka?"], img: "miejskie-kapiele-lesne-zima-styczen-04-zimowe-swiatlo-A.png", imgB: "miejskie-kapiele-lesne-zima-styczen-04-zimowe-swiatlo-B.png", blog: "/pl/swiatlo-ktore-siega-do-nas-cwiczenie-uwaznosci-o-przebudzeniu/" },
      { id: 5, title: "Zimowy oddech", theme: "Odpoczynek", season: "Zima", month: "Luty", body: "Usiądź przy oknie lub na zewnątrz. Obserwuj miękkość każdego oddechu.", reflection: ["Co mogłoby znaczyć, odpoczywać bez poczucia winy?", "Które myśli wciąż krążą, a które mogę teraz wypuścić?"], img: "miejskie-kapiele-lesne-zima-luty-05-zimowy-oddech-A.png", imgB: "miejskie-kapiele-lesne-zima-luty-05-zimowy-oddech-B.png", blog: "/pl/zimowy-oddech-cwiczenie-uwaznosci-o-odpoczynku/" },
      { id: 6, title: "Ukryta iskra", theme: "Subtelna energia", season: "Zima", month: "Luty", body: "Szukaj małych miejsc, w których gromadzi się ciepło. Może to promień słońca na ścianie, albo szalik ogrzany Twoim oddechem.", reflection: ["Jakie ciepło noszę w sobie?", "Gdzie w moim życiu coś się zaczyna?"], img: "miejskie-kapiele-lesne-zima-luty-06-ukryta-iskra-A.png", imgB: "miejskie-kapiele-lesne-zima-luty-06-ukryta-iskra-B.png", blog: "/pl/ukryta-iskra-cwiczenie-uwaznosci-o-subtelnej-energii/" },
      { id: 7, title: "Oszroniony pąk", theme: "Potencjał", season: "Zima", month: "Luty", body: "Poszukaj krzewu albo drzewa i przyjrzyj się uważnie jego pąkom - małym obietnicom czekającym na odpowiednią chwilę.", reflection: ["Co dojrzewa we mnie po cichu?", "Jaki najmniejszy znak „już się zaczyna” potrafię dziś zauważyć?"], img: "miejskie-kapiele-lesne-zima-luty-07-oszroniony-pak-A.png", imgB: "miejskie-kapiele-lesne-zima-luty-07-oszroniony-pak-B.png", blog: "/pl/oszroniony-pak-cwiczenie-uwaznosci-o-potencjale/" },
      { id: 8, title: "Pierwszy Chór", theme: "Przebudzenie", season: "Zima", month: "Luty", body: "Wyjdź na 2–3 minuty i posłuchaj. Zauważ, że długo było cicho, a teraz ptasi śpiew wyraźnie się wybija. Najpierw uchwyć jeden głos, potem poszerz uwagę na cały chór.", reflection: ["Co czuję, gdy cisza pęka: ulgę, ciepło, napięcie, spokój?", "Jakie „pierwsze nuty” wracają do mojego życia po okresie milczenia?"], img: "miejskie-kapiele-lesne-zima-luty-08-pierwszy-chor-A.png", imgB: "miejskie-kapiele-lesne-zima-luty-08-pierwszy-chor-B.png", blog: "/pl/pierwszy-chor-cwiczenie-uwaznosci-o-przebudzeniu/" },
      { id: 9, title: "Zimozielony", theme: "Stałość", season: "Zima", month: "Marzec", body: "Spędź chwilę przy jednym zimozielonym drzewie. Oddychaj razem z nim w rytmie: 4s wdech, 6s wydech.", reflection: ["Jakie małe rzeczy regularnie mnie uspokajają i podtrzymują?"], img: "miejskie-kapiele-lesne-zima-marzec-09-zimozielony-A.png", imgB: "miejskie-kapiele-lesne-zima-marzec-09-zimozielony-B.png", blog: "/pl/zimozielony-cwiczenie-uwaznosci-o-stalosci/" },
      { id: 10, title: "Odwilż", theme: "Rozluźnianie", season: "Wiosna", month: "Marzec", body: "Wyjdź na zewnątrz i poszukaj oznak roztopu: małych kałuż, ciemniejącej kory, cichego połysku mokrej ziemi.", reflection: ["Gdzie w moim życiu mogę bezpiecznie trochę zmięknąć?", "Co się zmienia, gdy pozwalam tej chwili być dokładnie taką, jaka jest, bez trzymania się i oporu?"], img: "miejskie-kapiele-lesne-wiosna-marzec-10-odwilz-A.png", imgB: "miejskie-kapiele-lesne-wiosna-marzec-10-odwilz-B.png", blog: "/pl/odwilz-cwiczenie-uwaznosci-o-rozluznianiu/" },
      { id: 11, title: "Przebudzenie Ziemi", theme: "Odradzanie", season: "Wiosna", month: "Marzec", body: "Wyjdź na zewnątrz i zatrzymaj się na moment. Wsłuchaj się w ciche sygnały powracającego życia: śpiew ptaków, dalekie nawoływania, łagodny ruch w gałęziach. Dostrzeż to, co nieśmiało się pojawia.", reflection: ["Jakie dźwięki zwiastują dla mnie odnowę?", "Co zaczyna kiełkować w moim życiu, powoli, lecz pewnie?", "Czy potrafię pozwolić temu procesowi toczyć się we własnym rytmie?"], img: "miejskie-kapiele-lesne-wiosna-marzec-11-przebudzenie-ziemi-A.png", imgB: "miejskie-kapiele-lesne-wiosna-marzec-11-przebudzenie-ziemi-B.png", blog: "/pl/przebudzenie-ziemi-cwiczenie-uwaznosci-o-odradzaniu/" },
      { id: 12, title: "Poranne Szepty", theme: "Drobne zachwyty", season: "Wiosna", month: "Marzec", body: "Poświęć kilka minut każdego poranka, by usiąść przy oknie lub pod drzewem. Zamknij oczy, oddychaj spokojnie i pozwól swojej uwadze podążać za dźwiękami wczesnej wiosny — pierwszym śpiewem ptaków, szelestem gałęzi, cichym pulsem budzącego się życia. Zauważ, które z nich przywołują w Tobie spokój, ciekawość lub lekkość.", reflection: ["Które małe radości przemawiają do Ciebie teraz najgłośniej?", "Jak te subtelne momenty wpływają na Twój nastrój lub sposób patrzenia na dzień?", "Gdzie jeszcze w ciągu dnia możesz zatrzymać się, by usłyszeć tę cichą muzykę wokół siebie?"], img: "wiosna-marzec-tydzien-12-poranne-szepty-wiosenne-paki-niebo-12A.png", imgB: "wiosna-marzec-tydzien-12-poranne-szepty-wiosenne-paki-niebo-12B.png", blog: "/pl/poranne-szepty-cwiczenie-uwaznosci-o-drobnych-zachwytach/" },
      { id: 13, title: "Cichy powrót", theme: "Ciągłość", season: "Wiosna", month: "Marzec", body: "Odwiedź miejsce, do którego nie wracałeś/-aś od początku zimy. Zatrzymaj się przed wejściem. Zauważ swój oddech. Następnie wejdź powoli, pozwalając temu miejscu spotkać się z tobą takim/taką, jakim/jaką jesteś teraz.", reflection: ["Co się zmieniło?", "Co pozostało takie samo?", "Co w tobie także powraca?"], img: "marzec-wiosna-tydzien-13-cwiczenie-uwaznosci-powrot-do-miejsca-13A.png", imgB: "marzec-wiosna-tydzien-13-cwiczenie-uwaznosci-powrot-do-miejsca-13B.png", blog: "/pl/cichy-powrot-cwiczenie-uwaznosci-na-wiosne/" },
      { id: 14, title: "Pąk w rozkwicie", theme: "Otwartość", season: "Wiosna", month: "Kwiecień", body: "Znajdź kwiat lub liść, który się otwiera. Zauważ jego kształt, krawędzie i kolor. Zauważ, co się zmienia.", reflection: ["Znajdź jedną rzecz, na którą chcesz się bardziej otworzyć. Co to jest?", "Pomyśl o czymś, przed czym się powstrzymywałeś(-aś). Jak blisko tego jesteś?", "Gdzie może być właściwe, żeby pozostać zamkniętym(-ą)?"], img: "wiosna-kwiecien-tydzien-14-cwiczenie-uwaznosci-otwierajacy-sie-kwiat-14A.png", imgB: "wiosna-kwiecien-tydzien-14-cwiczenie-uwaznosci-otwierajacy-sie-kwiat-14AB.png", blog: "/pl/otwieranie-sie-krok-po-kroku-cwiczenie-uwaznosci-inspirowane-natura/" },
      { id: 15, title: "Jasna gałąź", theme: "Wzrastanie", season: "Wiosna", month: "Kwiecień", body: "Znajdź gałąź dotkniętą światłem. Przyjrzyj się, jak światło się po niej przesuwa: zatrzymuje na korze, drży na młodych liściach, prześlizguje się między cienkimi gałązkami. Zostań przez chwilę z tą grą światła i cienia. Zauważ, co migocze, co jaśnieje, co staje się widoczne tylko wtedy, gdy pada na to światło.", reflection: ["Co w moim życiu zaczyna wzrastać, nawet jeśli jeszcze jest delikatne?", "Co pomaga mi zauważyć drobne oznaki zmiany?", "Jaką małą jasność mogłem(-mogłam) do tej pory przeoczyć?"], img: "wiosna-kwiecien-tydzien-15-cwiczenie-uwaznosci-jasna-galaz-15A.png", imgB: "wiosna-kwiecien-tydzien-15-cwiczenie-uwaznosci-jasna-galaz-15AB.png", blog: "/pl/jasna-galaz-cwiczenie-uwaznosci-o-swietle-i-wzrastaniu/" },
      { id: 16, title: "Miękki deszcz", theme: "Ukojenie", season: "Wiosna", month: "Kwiecień", body: "Zatrzymaj się na chwilę przy deszczu albo wodzie. Zauważ, jak krople zbierają się i spadają: na szybie, liściach, łuku parasola albo brzegu wanny. Wsłuchaj się w ich rytm. Obserwuj, jak zmiękczają kontury, pogłębiają kolory i osiadają w świecie. Nie każde ukojenie przychodzi głośno. Niektóre rzeczy odnawiają nas po cichu: chwila pauzy, oddech, życzliwe słowo, odrobina cienia, trochę deszczu.", reflection: ["Co delikatnie mnie odżywia?", "Co pomaga mi zmięknąć i wrócić do siebie?", "Co pozwala mi zacząć od nowa bez pośpiechu?"], img: "wiosna-kwiecien-tydzien-16-miekki-deszcz-cwiczenie-uwaznosci-16A.png", imgB: "wiosna-kwiecien-tydzien-16-miekki-deszcz-cwiczenie-uwaznosci-16B.png", blog: "/pl/miekki-deszcz-cwiczenie-uwaznosci-o-lagodnym-ukojeniu/" },
      { id: 17, title: "Długi poranek", theme: "Przebudzenie", season: "Wiosna", month: "Kwiecień", body: "Spędź pięć minut w porannym świetle. Pozwól, żeby ogrzało Twoją twarz, dłonie albo ubranie. Zauważ jego ciepło, miękkość i cichą stałość. Zostań z nim przez chwilę, zanim dzień zacznie się wypełniać. Niech to światło będzie Twoim pierwszym spotkaniem z dniem.", reflection: ["Jak witam dzień?", "Co zmienia się we mnie, kiedy zaczynam powoli?", "Jakie światło chcę nieść ze sobą przez resztę dnia?"], img: "wiosna-kwiecien-tydzien-17-cwiczenie-uwaznosci-poranne-swiatlo-17A.png", imgB: "wiosna-kwiecien-tydzien-17-cwiczenie-uwaznosci-poranne-swiatlo-17B.png", blog: "/pl/dlugi-poranek-cwiczenie-uwaznosci-o-przebudzeniu/" },
      { 
  id: 18, 
  title: "Wędrująca pszczoła", 
  theme: "Celowy ruch", 
  season: "Wiosna", 
  month: "Maj", 
  body: "Przez pięć minut obserwuj coś, co porusza się z wyraźnym kierunkiem: pszczołę między kwiatami, rowerzystę na ścieżce, gałąź poruszaną wiatrem albo cień przesuwający się po chodniku. Nie śledź tego po to, by zgadnąć cel. Obserwuj sam ruch: zatrzymania, skręty, powroty, małe decyzje po drodze.", 
  reflection: [
    "Czy potrafię ruszać się powoli, a jednak z intencją?", 
    "Co pomaga mi wracać na swoją ścieżkę, gdy ją gubię?"
  ], 
  img: "wiosna-maj-tydzien-18-cwiczenie-uwaznosci-wedrujaca-pszczola-celowy-ruch-18A.png", 
  imgB: "wiosna-maj-tydzien-18-cwiczenie-uwaznosci-wedrujaca-pszczola-celowy-ruch-18B.png",
  blog: "/pl/wedrujaca-pszczola-cwiczenie-uwaznosci-o-celowym-ruchu/"
},
      { 
  id: 19, 
  title: "Splot zieleni", 
  theme: "Obfitość", 
  season: "Wiosna", 
  month: "Maj", 
  body: "Znajdź miejsce, w którym liście nachodzą na siebie: żywopłot, trawę albo rośliny przy ścieżce. Zauważ, ile odcieni zieleni jest wokół ciebie: jasnych, głębokich, chłodnych, żółtych. Spójrz, jak liście się stykają, jak powtarzają się kształty, jak światło przechodzi przez różne powierzchnie. Pozwól spojrzeniu poruszać się powoli. Nie musisz wszystkiego nazywać ani liczyć.", 
  reflection: [
    "Ile odcieni zieleni potrafię zauważyć?", 
    "Co przeoczam, bo wydaje się zwyczajne?"
  ], 
  img: "wiosna-maj-tydzien-19-cwiczenie-uwaznosci-splot-zieleni-obfitosc-19A.png", 
  imgB: "wiosna-maj-tydzien-19-cwiczenie-uwaznosci-splot-zieleni-obfitosc-19B.png",
  blog: "/pl/splot-zieleni-cwiczenie-uwaznosci-o-obfitosci/"
},
      {
  id: 20,
  title: "Przejrzyste niebo",
  theme: "Klarowność",
  season: "Wiosna",
  month: "Maj",
  body: "Spędź kilka minut, patrząc w otwarte niebo. Pozwól oczom odpocząć przy jego przestrzeni, kolorze i ruchu. Zauważ chmury, światło, ptaki, gałęzie albo ciche przerwy między nimi. Nie musisz niczego szukać. Po prostu spójrz w górę i pozwól swojej uwadze się rozszerzyć.",
  reflection: [
    "Co się rozjaśnia, kiedy patrzę w górę?",
    "Co wydaje się mniej pilne, kiedy daję temu więcej przestrzeni?",
    "Co widzę wyraźniej z odrobiny dystansu?"
  ],
  img: "wiosna-maj-tydzien-20-cwiczenie-uwaznosci-przejrzyste-niebo-klarownosc-20A.png",
  imgB: "wiosna-maj-tydzien-20-cwiczenie-uwaznosci-przejrzyste-niebo-klarownosc-20B.png",
  blog: "/pl/przejrzyste-niebo-cwiczenie-uwaznosci-o-klarownosci/"
},
      {
  id: 21,
  title: "Warstwy zapachu",
  theme: "Wrażliwość",
  season: "Wiosna",
  month: "Maj",
  body: "Zatrzymaj się na zewnątrz i zauważ zapachy wokół siebie: kwiatów, mokrych liści, ziemi, deszczu albo świeżo skoszonej trawy. Zostań chwilę dłużej, żeby pierwszy zapach zdążył się rozluźnić, a pod nim mogły pojawić się kolejne warstwy.",
  reflection: [
    "Jaki zapach dociera do mnie jako pierwszy?",
    "Jakie inne zapachy pojawiają się, kiedy zostaję chwilę dłużej?",
    "Jakie wspomnienie, nastrój albo miejsce przywołuje jeden z tych zapachów?"
  ],
  img: "wiosna-maj-tydzien-21-cwiczenie-uwaznosci-warstwy-zapachu-wrazliwosc-21A.png",
  imgB: "wiosna-maj-tydzien-21-cwiczenie-uwaznosci-warstwy-zapachu-wrazliwosc-21B.png",
  blog: "/pl/warstwy-zapachu-cwiczenie-uwaznosci-o-wrazliwosci/"
},
      {
  id: 22,
  title: "Światło, ku któremu rosnę",
  theme: "Wzrastanie",
  season: "Wiosna",
  month: "Maj",
  body: "Zatrzymaj się przy roślinie i zauważ, w którą stronę się kieruje. Może liście obracają się ku słońcu. Może łodyga wygina się lekko w stronę jaśniejszego miejsca. Przez chwilę obserwuj ten cichy ruch ku światłu.",
  reflection: [
    "W stronę czego ja naturalnie się pochylam?",
    "Co ostatnio przyciąga moją uwagę w dobry, żywy sposób?",
    "Gdzie czuję w sobie mały ruch wzrostu?"
  ],
  img: "wiosna-maj-tydzien-22-cwiczenie-uwaznosci-swiatlo-ku-ktoremu-rosne-wzrastanie-22A.png",
  imgB: "wiosna-maj-tydzien-22-cwiczenie-uwaznosci-swiatlo-ku-ktoremu-rosne-wzrastanie-22B.png",
  blog: "/pl/swiatlo-ku-ktoremu-rosne-cwiczenie-uwaznosci-o-wzrastaniu/"
},
      {
  id: 23,
  title: "Łagodny cień",
  theme: "Ochrona",
  season: "Wiosna",
  month: "Czerwiec",
  body: "Usiądź na chwilę pod drzewem, daszkiem albo w cieniu budynku. Zauważ, jak zmienia się powietrze, kiedy nie stoisz bezpośrednio w słońcu. Poczuj chłód na skórze. Niech to będzie chwila odpoczynku - nie chowania się przed światem, ale znalezienia miejsca, w którym możesz oddychać trochę swobodniej.",
  reflection: [
    "Co daje mi poczucie osłony?",
    "Gdzie mogę odpocząć, nie znikając?"
  ],
  img: "wiosna-czerwiec-tydzien-23-cwiczenie-uwaznosci-lagodny-cien-ochrona-23A.png",
  imgB: "wiosna-czerwiec-tydzien-23-cwiczenie-uwaznosci-lagodny-cien-ochrona-23B.png",
  blog: "/pl/lagodny-cien-cwiczenie-uwaznosci-o-ochronie/"
},
      {
  id: 24,
  title: "Powolna rzeka",
  theme: "Przepływ",
  season: "Wiosna",
  month: "Czerwiec",
  body: "Popatrz przez chwilę na coś, co płynie: rzekę, strumień, deszczówkę przy krawężniku, wiatr poruszający liśćmi, chmury przesuwające się po niebie albo nawet ruch uliczny. Zauważ, że ruch nie zawsze oznacza pośpiech. Niektóre rzeczy odnajdują drogę powoli, podążając za tym, co możliwe.",
  reflection: [
    "Gdzie mogę pozwolić sobie poruszać się bardziej naturalnie?",
    "Co staje się łatwiejsze, kiedy przestaję to wymuszać?"
  ],
  img: "wiosna-czerwiec-tydzien-24-cwiczenie-uwaznosci-powolna-rzeka-przeplyw-24A.png",
  imgB: "wiosna-czerwiec-tydzien-24-cwiczenie-uwaznosci-powolna-rzeka-przeplyw-24B.png",
  blog: "/pl/powolna-rzeka-cwiczenie-uwaznosci-o-przeplywie/"
},
      {
  id: 25,
  title: "Złota ścieżka",
  theme: "Blask",
  season: "Lato",
  month: "Czerwiec",
  body: "Podczas spaceru spójrz w górę i zobacz, jak słońce maluje miasto. Światło może zbierać się na dachach, rozjaśniać ramy okien albo na chwilę zamieniać jasne ściany w złoto. Podążaj wzrokiem za tymi małymi miejscami jasności. Spójrz na miasto trochę inaczej.",
  reflection: [
    "Który budynek albo detal przyciągnął dziś moją uwagę?",
    "Jak światło zmieniło odbiór tego miejsca?",
    "Co w moim dniu przyniosło trochę ciepła albo jasności?"
  ],
  img: "lato-czerwiec-tydzien-25-cwiczenie-uwaznosci-zlota-sciezka-blask-25A.png",
  imgB: "lato-czerwiec-tydzien-25-cwiczenie-uwaznosci-zlota-sciezka-blask-25B.png",
  blog: "/pl/zlota-sciezka-cwiczenie-uwaznosci-o-blasku/"
},
      {
  id: 26,
  title: "Szeroki plac",
  theme: "Otwartość",
  season: "Lato",
  month: "Czerwiec",
  body: "Znajdź w mieście miejsce, gdzie robi się trochę więcej przestrzeni: plac, most, bulwar, szeroki chodnik albo widok między budynkami. Zatrzymaj się na chwilę i rozejrzyj się powoli. Zobacz, gdzie kończą się ściany, gdzie zaczyna się niebo i którędy może przejść powietrze.",
  reflection: [
    "Które miejskie miejsce dało mi dziś poczucie przestrzeni?",
    "Co zauważyłam, kiedy spojrzałam dalej niż zwykle?"
  ],
  img: "lato-czerwiec-tydzien-26-cwiczenie-uwaznosci-szeroki-plac-otwartosc-26A.png",
  imgB: "lato-czerwiec-tydzien-26-cwiczenie-uwaznosci-szeroki-plac-otwartosc-26B.png",
  blog: "/pl/szeroki-plac-cwiczenie-uwaznosci-o-otwartosci/"
},
      {
  id: 27,
  title: "Tańcząca trawa",
  theme: "Zabawa",
  season: "Lato",
  month: "Lipiec",
  body: "Znajdź trawę, drzewo albo kilka liści poruszających się na wietrze. Obserwuj, jak kołyszą się, pochylają i znów unoszą. Pozwól swojemu ciału odpowiedzieć na ich rytm: rozluźnij ramiona, poruszaj ramionami lub dłońmi, zakołysz się albo zrób kilka lekkich kroków. Niech przez chwilę ruch nie ma żadnego celu poza przyjemnością.",
  reflection: [
    "Co dziś obudziło we mnie lekkość?",
    "Co mogę zrobić bez celu, tylko dla przyjemności?"
  ],
  img: "lato-lipiec-tydzien-27-cwiczenie-uwaznosci-tanczaca-trawa-zabawa-27A.png",
  imgB: "lato-lipiec-tydzien-27-cwiczenie-uwaznosci-tanczaca-trawa-zabawa-27B.png",
  blog: "/pl/tanczaca-trawa-cwiczenie-uwaznosci-o-zabawie/"
},
      {
  id: 28,
  title: "Miejski przypływ",
  theme: "Rytm",
  season: "Lato",
  month: "Lipiec",
  body: "Znajdź miejsce, w którym możesz usłyszeć powtarzający się dźwięk: fontannę, fale, wiatr wśród liści, kroki albo szum miasta. Zauważ, jak dźwięk powraca, zmienia się i znów cichnie. Pozwól, by twój oddech stopniowo odnalazł jego tempo. Po prostu podążaj za rytmem, który już płynie wokół ciebie.",
  reflection: [
    "Jakie rytmy wspierają mnie w codziennym życiu?",
    "Gdzie potrzebuję więcej regularności, a gdzie więcej swobody?"
  ],
  img: "lato-lipiec-tydzien-28-cwiczenie-uwaznosci-miejski-przyplyw-rytm-28A.png",
  imgB: "lato-lipiec-tydzien-28-cwiczenie-uwaznosci-miejski-przyplyw-rytm-28B.png",
  blog: "/pl/miejski-przyplyw-cwiczenie-uwaznosci-o-rytmie/"
},
      {
  id: 29,
  title: "Ciepły wiatr",
  theme: "Ukojenie",
  season: "Lato",
  month: "Lipiec",
  body: "Wyjdź na chwilę na zewnątrz i poczuj powietrze przesuwające się po skórze. Zauważ wiatr na dłoniach, twarzy lub we włosach. Pozwól ramionom opaść, a oddechowi zwolnić. Nie musisz za nim podążać ani go zatrzymywać. Po prostu pozwól mu przepływać wokół ciebie i zabrać ze sobą odrobinę napięcia.",
  reflection: [
    "Co pomaga mojemu ciału rozluźnić się i odpocząć?",
    "Co mogę choć na chwilę odpuścić?"
  ],
  img: "lato-lipiec-tydzien-29-cwiczenie-uwaznosci-cieply-wiatr-ukojenie-29A.png",
  imgB: "lato-lipiec-tydzien-29-cwiczenie-uwaznosci-cieply-wiatr-ukojenie-29B.png",
  blog: "/pl/cieply-wiatr-cwiczenie-uwaznosci-o-ukojeniu/"
}

    ],
    en: [
      { id: 1, title: "Silent Root", theme: "Stillness", season: "Winter", month: "January", body: "Enter a green space slowly. Pause often. Sit or stand still for five minutes.", reflection: ["What sounds remain when everything grows quiet?", "Where in my body do I feel stillness?"], img: "miejskie-kapiele-lesne-zima-styczen-01-cichy-korzen-A.png", imgB: "1Ben.png", blog: "/en/silent-root-a-mindfulness-exercise-in-stillness/" },
      { id: 2, title: "Hidden Strength", theme: "Endurance", season: "Winter", month: "January", body: "Look for signs of endurance — evergreen needles, moss, lichen, tightly closed buds. Touch them gently.", reflection: ["Who or what has helped me through difficult seasons?", "In what situations do I feel a sense of inner calm?"], img: "miejskie-kapiele-lesne-zima-styczen-02-ukryta-sila-A.png", imgB: "2Ben.png", blog: "/en/hidden-strength-a-mindfulness-exercise-in-endurance/" },
      { id: 3, title: "Unhurried Path", theme: "Slowness", season: "Winter", month: "January", body: "Walk at half your usual pace. Let your breath set the rhythm. With each step, fully feel the ground beneath you.", reflection: ["What do I begin to notice only when I am not rushing anywhere?", "Where in my life am I moving forward without need?"], img: "miejskie-kapiele-lesne-zima-styczen-03-niespieszna-sciezka-A.png", imgB: "3Ben.png", blog: "/en/unhurried-path-a-mindfulness-exercise-in-slowness/" },
      { id: 4, title: "Light That Reaches Us", theme: "Awakening", season: "Winter", month: "January", body: "Raise your hand toward the light. Let its warmth rest on your clothes, your skin, and gently illuminate a quiet space within you.", reflection: ["Which part of me is ready to reach for something new?", "What warms me from within?"], img: "miejskie-kapiele-lesne-zima-styczen-04-zimowe-swiatlo-A.png", imgB: "4Ben.png", blog: "/en/light-that-reaches-us-a-mindfulness-exercise-in-awakening/" },
      { id: 5, title: "Winter Breath", theme: "Rest", season: "Winter", month: "February", body: "Sit by a window or outside. Observe the softness of each breath.", reflection: ["What might it mean to rest without guilt?", "Which thoughts keep circling, and which can I let go of now?"], img: "miejskie-kapiele-lesne-zima-luty-05-zimowy-oddech-A.png", imgB: "5Ben.png", blog: "/en/winter-breath-a-mindfulness-exercise-in-rest/" },
      { id: 6, title: "Hidden Spark", theme: "Subtle Energy", season: "Winter", month: "February", body: "Look for small places where warmth gathers. It might be a ray of sunlight on a wall, or a scarf warmed by your breath.", reflection: ["What warmth do I carry within me?", "Where in my life is something beginning?"], img: "miejskie-kapiele-lesne-zima-luty-06-ukryta-iskra-A.png", imgB: "6Ben.png", blog: "/en/hidden-spark-a-mindfulness-exercise-in-subtle-energy/" },
      { id: 7, title: "Frosted Bud", theme: "Potential", season: "Winter", month: "February", body: "Find a shrub or tree and look closely at its buds — small promises waiting for the right moment.", reflection: ["What is quietly maturing within me?", "What is the smallest sign that something is beginning?"], img: "miejskie-kapiele-lesne-zima-luty-07-oszroniony-pak-A.png", imgB: "7Ben.png", blog: "/en/frosted-bud-a-mindfulness-exercise-in-potential/" },
      { id: 8, title: "First Chorus", theme: "Awakening", season: "Winter", month: "February", body: "Step outside for 2–3 minutes and listen. Notice how it was quiet for so long, and now birdsong begins to stand out. First focus on a single voice, then expand your attention to the whole chorus.", reflection: ["What do I feel when silence breaks — relief, warmth, tension, calm?", "What ‘first notes’ are returning to my life after a period of quiet?"], img: "miejskie-kapiele-lesne-zima-luty-08-pierwszy-chor-A.png", imgB: "8Ben.png", blog: "/en/first-chorus-a-mindfulness-exercise-in-awakening/" },
      { id: 9, title: "Evergreen", theme: "Steadiness", season: "Winter", month: "March", body: "Spend a moment with an evergreen tree. Breathe with it in rhythm: 4 seconds inhale, 6 seconds exhale.", reflection: ["What small things regularly calm and sustain me?"], img: "miejskie-kapiele-lesne-zima-marzec-09-zimozielony-A.png", imgB: "9Ben.png", blog: "/en/evergreen-a-mindfulness-exercise-in-steadiness/" },
      { id: 10, title: "Thaw", theme: "Softening", season: "Spring", month: "March", body: "Step outside and look for signs of thaw: small puddles, darkening bark, the quiet sheen of wet earth.", reflection: ["Where in my life can I safely soften a little?", "What changes when I allow this moment to be exactly as it is, without holding on or resisting?"], img: "miejskie-kapiele-lesne-wiosna-marzec-10-odwilz-A.png", imgB: "10Ben.png", blog: "/en/thaw-a-mindfulness-exercise-in-softening/" },
      { id: 11, title: "Earth Awakening", theme: "Renewal", season: "Spring", month: "March", body: "Step outside and pause for a moment. Listen to the quiet signals of returning life: birdsong, distant calls, gentle movement in branches. Notice what is just beginning to emerge.", reflection: ["What sounds signal renewal to me?", "What is beginning to take root in my life, slowly but surely?", "Can I allow this process to unfold at its own pace?"], img: "miejskie-kapiele-lesne-wiosna-marzec-11-przebudzenie-ziemi-A.png", imgB: "11Ben.png", blog: "/en/earth-awakening-a-mindfulness-exercise-in-renewal/" },
      { id: 12, title: "Morning Whispers", theme: "Small Wonders", season: "Spring", month: "March", body: "Spend a few minutes each morning sitting by a window or beneath a tree. Close your eyes, breathe gently, and let your attention follow the sounds of early spring — birdsong, rustling branches, the subtle pulse of awakening life. Notice which of them bring you calm, curiosity, or lightness.", reflection: ["Which small joys speak to me most right now?", "How do these subtle moments shape my mood or the way I enter the day?", "Where else during the day can I pause to hear this quiet music around me?"], img: "wiosna-marzec-tydzien-12-poranne-szepty-wiosenne-paki-niebo-12A.png", imgB: "spring-march-week-12-tiny-wonders-spring-buds-sky-12Ben.png", blog: "/en/morning-whispers-a-mindfulness-exercise-in-small-wonders/" },
      { id: 13, title: "Quiet Return", theme: "Continuity", season: "Spring", month: "March", body: "Visit a place you haven’t returned to since winter began. Pause before entering. Notice your breath. Then step in slowly, letting the place meet you as you are now.", reflection: ["What has changed?", "What has remained quietly the same?", "What in you also feels like a return?"], img: "marzec-wiosna-tydzien-13-cwiczenie-uwaznosci-powrot-do-miejsca-13A.png", imgB: "march-spring-week-13-mindfulness-exercise-returning-to-a-place-13Ben.png", blog: "/en/quiet-return-exercise-mindfulness-for-spring/" },
      { id: 14, title: "The Open Blossom", theme: "Opening", season: "Spring", month: "April", body: "Find a blossom or a leaf that is opening. Notice its shape, edges, and color. Notice what is changing.", reflection: ["Find one thing you want to be more open to. What is it?", "Think of something you’ve been holding back from. How close are you to it?", "Where might it be right to stay closed?"], img: "wiosna-kwiecien-tydzien-14-cwiczenie-uwaznosci-otwierajacy-sie-kwiat-14A.png", imgB: "spring-april-week-13-mindfulness-exercise-opening-blossom-14Ben.png", blog: "/en/opening-step-by-step-mindfulness-exercise-inspired-by-nature/" },
      { id: 15, title: "The Bright Branch", theme: "Growing", season: "Spring", month: "April", body: "Find a branch touched by light. Notice how the light moves across it: lingering on the bark, trembling on young leaves, slipping between slender twigs. Stay for a moment with this play of light and shadow. Notice what flickers, what brightens, what becomes visible only when the light falls there.", reflection: ["What in my life is beginning to grow, even if it is still delicate?", "What helps me notice the small signs of change?", "What small brightness might I have overlooked so far?"], img: "wiosna-kwiecien-tydzien-15-cwiczenie-uwaznosci-jasna-galaz-15A.png", imgB: "spring-april-week-15-mindfulness-exercise-the-bright-branch-15Ben.png", blog: "/en/the-bright-branch-a-mindfulness-exercise-on-light-and-growing/" },
      { id: 16, title: "The Soft Rain", theme: "Nourishment", season: "Spring", month: "April", body: "Pause with the rain or water for a moment. Notice how the drops gather and fall: on glass, leaves, the curve of an umbrella, or the rim of a bathtub. Listen to their rhythm. Watch the way they soften edges, deepen colors, and settle into the world. Not all nourishment arrives loudly. Some things restore us quietly: a pause, a breath, a kind word, a little shade, a little rain.", reflection: ["What nourishes me gently?", "What helps me soften and return to myself?", "What allows me to begin again without rushing?"], img: "wiosna-kwiecien-tydzien-16-miekki-deszcz-cwiczenie-uwaznosci-16A.png", imgB: "spring-april-week-16-soft-rain-mindfulness-exercise-16Ben.png", blog: "/en/the-soft-rain-a-mindfulness-exercise-on-gentle-nourishment/" },
      { id: 17, title: "The Long Morning", theme: "Awakening", season: "Spring", month: "April", body: "Spend five minutes in the morning light. Let it rest on your face, your hands, or your clothes. Notice its warmth, softness, and quiet steadiness. Stay with it for a moment before the day begins to fill. Let this light be your first meeting with the day.", reflection: ["How do I greet the day?", "What changes in me when I begin slowly?", "What kind of light do I want to carry into the hours ahead?"], img: "wiosna-kwiecien-tydzien-17-cwiczenie-uwaznosci-poranne-swiatlo-17A.png", imgB: "spring-april-week-17-mindfulness-exercise-morning-light-17Ben.png", blog: "/en/the-long-morning-a-mindfulness-exercise-in-awakening/" },
      { 
  id: 18, 
  title: "The Wandering Bee", 
  theme: "Purposeful Motion", 
  season: "Spring", 
  month: "May", 
  body: "For five minutes, watch something that moves with intention: a bee between flowers, a cyclist on a path, a branch stirred by wind, or a shadow crossing the pavement. Do not follow it to guess its destination. Notice the movement itself: pauses, turns, returns, and the small decisions along the way.", 
  reflection: [
    "Can I move slowly and still move with intention?", 
    "What helps me return to my path when I lose it?"
  ], 
  img: "wiosna-maj-tydzien-18-cwiczenie-uwaznosci-wedrujaca-pszczola-celowy-ruch-18A.png", 
  imgB: "spring-may-week-18-reflection-wandering-bee-purposeful-motion-18Ben.png",
  blog: "/en/the-wandering-bee-a-mindfulness-exercise-in-purposeful-motion/"
},
      { 
  id: 19, 
  title: "The Woven Greens", 
  theme: "Abundance", 
  season: "Spring", 
  month: "May", 
  body: "Find a place where leaves overlap: a hedge, a tree crown, grass, vines, or weeds at the edge of a path. Notice how many greens are around you: bright, fresh, deep, cool, silver, yellow, almost blue. See how one leaf rests beside another, how shapes repeat, how light passes through some surfaces. Let your gaze move slowly. You do not need to name everything or count exactly.", 
  reflection: [
    "How many greens can I notice?", 
    "What do I overlook because it feels ordinary?"
  ], 
  img: "wiosna-maj-tydzien-19-cwiczenie-uwaznosci-splot-zieleni-obfitosc-19A.png", 
  imgB: "spring-may-week-19-reflection-the-woven-greens-abundance-19B.png",
  blog: "/en/the-woven-greens-mindfulness-practice-about-abundance/"
},
      {
  id: 20,
  title: "The Clear Sky",
  theme: "Clarity",
  season: "Spring",
  month: "May",
  body: "Spend a few minutes looking at the open sky. Let your eyes rest on its space, colour, and movement. Notice clouds, light, birds, branches, or the quiet gaps between them. You do not need to search for anything. Just look upward and allow your attention to widen.",
  reflection: [
    "What clears when I look upward?",
    "What feels less urgent when I give it more space?",
    "What can I see more clearly from a little distance?"
  ],
  img: "wiosna-maj-tydzien-20-cwiczenie-uwaznosci-przejrzyste-niebo-klarownosc-20A.png",
  imgB: "spring-may-week-20-reflection-the-clear-sky-clarity-20Ben.png",
  blog: "/en/the-clear-sky-a-mindfulness-exercise-in-clarity/"
},
      {
  id: 21,
  title: "The Layers of Scent",
  theme: "Sensitivity",
  season: "Spring",
  month: "May",
  body: "Pause outdoors and notice the scents around you: flowers, wet leaves, soil, rain, or freshly cut grass. Stay long enough for the first scent to soften and for others to appear underneath it.",
  reflection: [
    "What scent reaches me first?",
    "What other scents appear when I stay a little longer?",
    "What memory, mood, or place does one of these scents bring back?"
  ],
  img: "wiosna-maj-tydzien-21-cwiczenie-uwaznosci-warstwy-zapachu-wrazliwosc-21A.png",
  imgB: "spring-may-week-21-mindfulness-exercise-the-layers-of-scent-sensitivity-21Ben.png",
  blog: "/en/the-layers-of-scent-a-mindfulness-exercise-in-sensitivity/"
},
      {
  id: 22,
  title: "The Leaning Light",
  theme: "Growth",
  season: "Spring",
  month: "May",
  body: "Pause beside a plant and notice which way it is turning. Maybe its leaves are turning toward the sun. Maybe its stem is bending slightly toward a brighter place. For a moment, observe this quiet movement toward light.",
  reflection: [
    "What do I naturally lean toward?",
    "What has been drawing my attention recently in a good, living way?",
    "Where do I feel a small movement of growth within myself?"
  ],
  img: "wiosna-maj-tydzien-22-cwiczenie-uwaznosci-swiatlo-ku-ktoremu-rosne-wzrastanie-22A.png",
  imgB: "spring-may-week-22-mindfulness-exercise-the-leaning-light-growth-22Ben.png",
  blog: "/en/the-leaning-light-a-mindfulness-exercise-in-growth/"
},
      {
  id: 23,
  title: "The Gentle Shade",
  theme: "Protection",
  season: "Spring",
  month: "June",
  body: "Sit for a moment under a tree, an awning, or the shade of a building. Notice how the air changes when you are not standing directly in the sun. Feel the coolness on your skin. Let this be a moment of rest - not hiding from the world, but finding a place where you can breathe a little more freely.",
  reflection: [
    "What gives me a sense of shelter?",
    "Where can I rest without disappearing?"
  ],
  img: "wiosna-czerwiec-tydzien-23-cwiczenie-uwaznosci-lagodny-cien-ochrona-23A.png",
  imgB: "spring-june-week-23-mindfulness-exercise-the-gentle-shade-protection-23Ben.png",
  blog: "/en/the-gentle-shade-a-mindfulness-exercise-in-protection/"
},
      {
  id: 24,
  title: "The Slow River",
  theme: "Flow",
  season: "Spring",
  month: "June",
  body: "Watch something flow: a river, a stream, rainwater in the gutter, wind moving through leaves, clouds crossing the sky, or even traffic passing by. Notice that movement does not always mean rushing. Some things find their way slowly, by following what is already possible.",
  reflection: [
    "Where can I allow myself to move more naturally?",
    "What feels easier when I stop forcing it?",
    "What path is already opening in front of me?"
  ],
  img: "wiosna-czerwiec-tydzien-24-cwiczenie-uwaznosci-powolna-rzeka-przeplyw-24A.png",
  imgB: "spring-june-week-24-mindfulness-exercise-the-slow-river-flow-24Ben.png",
  blog: "/en/the-slow-river-a-mindfulness-exercise-in-flow/"
},
      {
  id: 25,
  title: "The Golden Path",
  theme: "Radiance",
  season: "Summer",
  month: "June",
  body: "As you walk, look up and notice how the sun paints the city. Light may gather on rooflines, brighten window frames, or turn pale walls gold for a moment. Follow these small places of brightness with your eyes. Notice the city in a new way.",
  reflection: [
    "Which detail caught my attention today?",
    "How did the light change the way this place felt?",
    "What in my day brought a little warmth or brightness?"
  ],
  img: "lato-czerwiec-tydzien-25-cwiczenie-uwaznosci-zlota-sciezka-blask-25A.png",
  imgB: "summer-june-week-25-mindfulness-exercise-the-golden-path-radiance-25Ben.png",
  blog: "/en/the-golden-path-a-mindfulness-exercise-in-radiance/"
},
      {
  id: 26,
  title: "The Wide Square",
  theme: "Openness",
  season: "Summer",
  month: "June",
  body: "Find a place in the city where there is a little more space: a square, bridge, boulevard, wide pavement, or opening between buildings. Pause for a moment and look around slowly. Notice where the walls end, where the sky begins, and where the air can move through.",
  reflection: [
    "Which urban place gave me a sense of space today?",
    "What did I notice when I looked farther than usual?"
  ],
  img: "lato-czerwiec-tydzien-26-cwiczenie-uwaznosci-szeroki-plac-otwartosc-26A.png",
  imgB: "summer-june-week-26-mindfulness-exercise-the-wide-square-openness-26Ben.png",
  blog: "/en/the-wide-square-a-mindfulness-exercise-in-openness/"
},
      {
  id: 27,
  title: "The Dancing Grass",
  theme: "Play",
  season: "Summer",
  month: "July",
  body: "Find a patch of grass, a tree, or a few leaves moving in the breeze. Notice how they sway, bend, and rise again. Let your body answer their rhythm: loosen your shoulders, move your arms and hands, gently rock, or take a few light steps. For a moment, let movement have no purpose beyond the joy of it.",
  reflection: [
    "What awakened lightness in me today?",
    "What can I do without a goal, just for pleasure?"
  ],
  img: "lato-lipiec-tydzien-27-cwiczenie-uwaznosci-tanczaca-trawa-zabawa-27A.png",
  imgB: "summer-july-week-27-mindfulness-exercise-the-dancing-grass-play-27Ben.png",
  blog: "/en/the-dancing-grass-a-mindfulness-exercise-in-play/"
},
      {
  id: 28,
  title: "The Moving Tide",
  theme: "Rhythm",
  season: "Summer",
  month: "July",
  body: "Find a place where you can hear a repeating sound: a fountain, waves, wind moving through leaves, footsteps, or the hum of the city. Notice how the sound returns, shifts, and softens again. Let your breathing gradually find its pace. Simply follow the rhythm already moving around you.",
  reflection: [
    "Which rhythms support me in my daily life?",
    "Where do I need more regularity, and where do I need more freedom?"
  ],
  img: "lato-lipiec-tydzien-28-cwiczenie-uwaznosci-miejski-przyplyw-rytm-28A.png",
  imgB: "summer-july-week-28-mindfulness-exercise-the-moving-tide-rhythm-28Ben.png",
  blog: "/en/the-moving-tide-a-mindfulness-exercise-in-rhythm/"
},
      {
  id: 29,
  title: "The Warm Wind",
  theme: "Ease",
  season: "Summer",
  month: "July",
  body: "Step outside and notice the air moving across your skin. Feel the breeze on your hands, your face, or through your hair. Let your shoulders soften and your breathing become slower. You do not need to follow the wind or hold on to it. Simply allow it to move around you, carrying a little of the tension away.",
  reflection: [
    "What helps my body soften and relax?",
    "What can I let go of, just for a moment?"
  ],
  img: "lato-lipiec-tydzien-29-cwiczenie-uwaznosci-cieply-wiatr-ukojenie-29A.png",
  imgB: "summer-july-week-29-mindfulness-exercise-the-warm-wind-ease-29Ben.png",
  blog: "/en/the-warm-wind-a-mindfulness-exercise-in-ease/"
}

    ]
  };
  
  function getWeeklyCardsForLang(lang) {
    return weeklyCardsData[lang] || weeklyCardsData.pl;
  }

  function getLatestWeeklyCardId() {
    const sharedIds = getWeeklyCardsForLang("pl")
      .map((card) => card.id)
      .filter((id) => getWeeklyCardsForLang("en").some((card) => card.id === id));

    return sharedIds.length ? Math.max(...sharedIds) : null;
  }

  window.weeklyCardsData = weeklyCardsData;
  window.getWeeklyCardsForLang = getWeeklyCardsForLang;
  window.getLatestWeeklyCardId = getLatestWeeklyCardId;
})();
