// src/data/PracticeQuestions.js
export const practiceQuestions = {
  math: [
    {
      id: 1,
      text: "Talen a och b är reella. Givet att x = (a + b√3)³ − (a − b√3)³, så gäller att x är:",
      options: [
        "2ab(3a+b)",
        "6b√3(a²+b²)",
        "2b(3a²+b²)",
        "inget av (a)-(c)"
      ],
      answer: "6b√3(a²+b²)" // Facit: 1b
    },
    {
      id: 2,
      text: "Om a och b är reella tal så är villkoret \"minst ett av talen a och b är skilt från 0\" ekvivalent med:",
      options: [
        "ab ≠ 0",
        "a² + b² ≠ 0",
        "a/b + b/a ≠ 0",
        "inget av (a)-(c)"
      ],
      answer: "a² + b² ≠ 0" // Facit: 2b
    },
    {
      id: 3,
      text: "Om x är ett reellt tal och √(x²+2x+1) − √(x²−2x+1) = −2, så gäller:",
      options: [
        "x ≥ 1",
        "−1 ≤ x ≤ 1",
        "x ≤ −1",
        "inget av (a)-(c)"
      ],
      answer: "x ≤ −1" // Facit: 3c
    },
    {
      id: 4,
      text: "Olikheten (½)^x < 4 är ekvivalent med olikheten:",
      options: [
        "x < 0",
        "x < 2",
        "x < −2",
        "inget av (a)-(c)"
      ],
      answer: "inget av (a)-(c)" // Facit: 4d
    },
    {
      id: 5,
      text: "Alla lösningar till olikheten x/(2x−1) ≥ 1/x ges av:",
      options: [
        "alla negativa x samt alla x ≥ 1",
        "alla reella x",
        "alla negativa x samt alla x > ½",
        "inget av (a)-(c)"
      ],
      answer: "alla negativa x samt alla x > ½" // Facit: 5c
    },
    {
      id: 6,
      text: "Om x ⊕ y = |x| − ||x+y| − |y|| för alla reella tal x och y, så gäller att:",
      options: [
        "x ⊕ y = y ⊕ x",
        "(2x) ⊕ (−x) = 2x",
        "x ⊕ y ≥ 0",
        "inget av (a)-(c) gäller generellt"
      ],
      answer: "x ⊕ y ≥ 0" // Facit: 6c
    },
    {
      id: 7,
      text: "Antalet heltalslösningar till olikheten bx + 17 − 2x² > 0, där b är ett reellt tal, är:",
      options: [
        "0",
        "ändligt, skilt från 0",
        "oändligt",
        "kan ej avgöras"
      ],
      answer: "ändligt, skilt från 0" // Facit: 7b
    },
    {
      id: 8,
      text: "Givet är ekvationen ax² + bx + c = 0, där abc ≠ 0. Två av koefficienterna är reella och en är icke-reell. Då kan man dra slutsatsen att ekvationen inte är ekvivalent med någon ekvation Az²+Bz+C=0, där:",
      options: [
        "alla tre koefficienterna är reella",
        "alla tre är icke-reella",
        "en är reell och två är icke-reella",
        "inget av (a)-(c)"
      ],
      answer: "alla tre koefficienterna är reella" // Facit: 8a
    },
    {
      id: 9,
      text: "Givet är ekvationen ax² + bx + c = 0, där abc ≠ 0. Två av koefficienterna är reella och en är icke-reell. Då kan man dra slutsatsen att:",
      options: [
        "en lösning är reell och den andra icke-reell",
        "minst en lösning är icke-reell",
        "minst en lösning är reell",
        "inget av (a)-(c)"
      ],
      answer: "minst en lösning är icke-reell" // Facit: 9b
    },
    {
      id: 10,
      text: "Priset för en förpackning har ökat med 10%, medan innehållets vikt har minskat med 10%. Kilopriset har då ökat med:",
      options: [
        "mindre än 20%",
        "exakt 20%",
        "mer än 20%",
        "det går inte att avgöra"
      ],
      answer: "mer än 20%" // Facit: 10c
    },
    {
      id: 11,
      text: "Antalet reella lösningar till ekvationen 9e^(2x) + a e^x − 1 = 0 för a > 0 är:",
      options: [
        "1",
        "2",
        "kan ej avgöras",
        "inget av (a)-(c)"
      ],
      answer: "1" // Facit: 11a
    },
    {
      id: 12,
      text: "För alla positiva reella tal x och y gäller att:",
      options: [
        "ln x + ln y = ln x · ln y",
        "ln x + ln y = ln (x+y)",
        "ln x + ln y = ln (xy)",
        "inget av (a)-(c) gäller generellt"
      ],
      answer: "ln x + ln y = ln (xy)" // Facit: 12c
    },
    {
      id: 13,
      text: "För alla positiva reella tal x och p gäller att:",
      options: [
        "p ln x = ln x^p",
        "p ln x = (ln x)^p",
        "p ln x = ln (x + e^p)",
        "inget av (a)-(c) gäller generellt"
      ],
      answer: "p ln x = ln x^p" // Facit: 13a
    },
    {
      id: 14,
      text: "Om sinα > 0 och tanα = p, så gäller att cosα är lika med:",
      options: [
        "p/√(1+p²)",
        "|p|/√(1+p²)",
        "1/√(1+p²)",
        "inget av (a)-(c)"
      ],
      answer: "inget av (a)-(c)" // Facit: 14d
    },
    {
      id: 15,
      text: "Om cosα > 0 och tanα = p, så gäller att sinα är lika med:",
      options: [
        "p/√(1+p²)",
        "|p|/√(1+p²)",
        "1/√(1+p²)",
        "inget av (a)-(c)"
      ],
      answer: "p/√(1+p²)" // Facit: 15a
    },
    {
      id: 16,
      text: "Om α ∈ [0, 2π], så gäller:",
      options: [
        "sin(α/2) = √((1+cosα)/2)",
        "sin(α/2) = √((1−cosα)/2)",
        "sin(α/2) = √(1−sin²(α/2))",
        "ingen av formlerna gäller generellt"
      ],
      answer: "sin(α/2) = √((1−cosα)/2)" // Facit: 16b
    },
    {
      id: 17,
      text: "Ekvationen x² + bx + c = 0, där b och c är reella, har lösningarna x₁,₂ = (−b ± √(b²−4c))/2. Man kan dra slutsatsen att:",
      options: [
        "både b och c är heltal",
        "minst ett av b och c inte är heltal",
        "varken b eller c är heltal",
        "inget av (a)-(c)"
      ],
      answer: "minst ett av b och c inte är heltal" // Facit: 17b
    },
    {
      id: 18,
      text: "En triangel har sidlängderna √11, √39, √92. Den minsta vinkeln i triangeln är då:",
      options: [
        "30°",
        "skild från 30°",
        "det går inte att avgöra",
        "det känns ingen sådan triangel"
      ],
      answer: "skild från 30°" // Facit: 18b
    },
    {
      id: 19,
      text: "En triangel har sidlängderna √13, √41, √52. Den minsta vinkeln i triangeln är då:",
      options: [
        "30°",
        "skild från 30°",
        "det går inte att avgöra",
        "det känns ingen sådan triangel"
      ],
      answer: "skild från 30°" // Facit: 19b
    },
    {
      id: 20,
      text: "Givet är en tetraeder ABCD, sådan att |AB| = |AC| = |AD| = √2, och de tre plana vinklarna vid A är räta. Tetraederns höjd från A mot sidan BCD har längden:",
      options: [
        "√6/2",
        "annat tal",
        "det går inte att avgöra",
        "det känns ingen sådan tetraeder"
      ],
      answer: "annat tal" // Facit: 20b
    }
  ],
  physics: [
    {
      id: 1,
      text: "En homogen cylinder vilar mot två glatta väggar som bildar vinklarna α och (π/2 − α) med horisontalplanet. Vad är kvoten N₂/N₁, där N₁ och N₂ är kontaktkrafterna?",
      options: [
        "1",
        "tanα",
        "cotα",
        "kan ej avgöras"
      ],
      answer: "tanα", // Facit: option b
      image: "../images/fysik2024_1.png"
    },
    {
      id: 2,
      text: "En rymdfarare färdas från jorden med hastigheten 0.8c, vänder och färdas hem med samma hastighet. När hon återvänder har det gått 15 år på hennes klocka. Hur lång tid har passerat på jorden?",
      options: [
        "9 år",
        "12 år",
        "15 år",
        "25 år"
      ],
      answer: "25 år" // Facit: option d
    },
    {
      id: 3,
      text: "En planka med massan m och längden L är horisontellt upplagd på två stödpunkter – den ena vid ena änden och den andra vid 3L/8 från den andra änden. Plankans massa är jämnt fördelad. Hur stor är den vertikala kraften från stödet A?",
      options: [
        "1/5 mg",
        "3/8 mg",
        "5/8 mg",
        "4/5 mg"
      ],
      answer: "3/8 mg", // Facit: option b
      image: "../images/fysik2024_3.png"
    },
    {
      id: 4,
      text: "En kropp glider på ett lutande plan med vinkeln v. Om den släpps från vila, hur lång tid tar det att färdas sträckan ℓ?",
      options: [
        "τ = √(2ℓ/(g(µ sin v+cos v)))",
        "τ = √(2ℓ/(g(µ sin v−cos v)))",
        "τ = √(2ℓ/(g(sin v+µ cos v)))",
        "τ = √(2ℓ/(g(sin v−µ cos v)))"
      ],
      answer: "τ = √(2ℓ/(g(sin v+µ cos v)))" // Facit: option c (assumed)
    },
    {
      id: 5,
      text: "Varför upplever astronauterna viktlöshet på ISS?",
      options: [
        "De är så långt ut att de lämnat jordens gravitationsfält.",
        "Det råder vakuum utanför rymdstationen.",
        "Rymdstationen befinner sig i fritt fall.",
        "Av annan anledning."
      ],
      answer: "Rymdstationen befinner sig i fritt fall." // Facit: option c
    },
    {
      id: 6,
      text: "En ljuskälla befinner sig 0.6 m från en positiv lins. Den avbildas på en skärm på andra sidan om linsen, upp- och nedvänd och i halva storleken. Hur stor är linsens brännvidd?",
      options: [
        "0.2 m",
        "0.3 m",
        "0.6 m",
        "1.2 m"
      ],
      answer: "0.3 m" // Facit: option b (assumed)
    },
    {
      id: 7,
      text: "En boll som väger 50 g släpps från vila och faller under inverkan av gravitation och luftmotstånd. Vad är dess rörelseenergi Ek efter att den fallit 10 m?",
      options: [
        "Ek = 2.5 J",
        "Ek = 4.9 J",
        "Ek = 2.5 W",
        "Kan ej avgöras"
      ],
      answer: "Ek = 2.5 J" // Facit: option a (assumed)
    },
    {
      id: 8,
      text: "Vilket tal är störst?",
      options: [
        "Antalet sandkorn i en hink",
        "Antalet stjärnor i Vintergatan",
        "Antalet vattenmolekyler i ett glas vatten",
        "Antalet människor på jorden"
      ],
      answer: "Antalet vattenmolekyler i ett glas vatten" // Facit: option c (assumed)
    },
    {
      id: 9,
      text: "Om jordens radie var dubbelt så stor (med samma densitet), hur stor skulle tyngdaccelerationen vid jordytan vara?",
      options: [
        "g/4",
        "g/2",
        "g",
        "2g"
      ],
      answer: "g/4" // Facit: option a (assumed)
    },
    {
      id: 10,
      text: "I en idealiserad elektrisk krets parallellkopplas två motstånd med resistanserna xR och R/x, där x är ett dimensionslöst tal. Vilket alternativ beskriver bäst den utvecklade effekten i kretsen som funktion av x?",
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
      answer: "C", // Facit: option a (assumed)
      image: "../images/fysik2024_10.png"
    }
  ]
};

  