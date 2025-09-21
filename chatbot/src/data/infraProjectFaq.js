// FAQ Data për Infra Project (shqip + unicode-safe)
// -------------------------------------------------

// 1) Stop-fjalët (lista e zgjeruar për shqip)
export const STOP_WORDS = new Set(
    `
    dhe ose për ne në me nga i a e të te ti ai ajo ato ata jam je është jemi jeni janë
    një njëri njëra kjo ky këto këta si që ku kur pse sepse ndaj por ose ose/apo apo
    mbi nën tek tek/të tek/të-se përmes gjatë deri pa pas me/pa jashtë brenda vetëm
    shumë pak më shumica disa çdo ndonjë asnjë as disa ca jo po tëmos mos s’ nuk nuk-jo
    kë kël ky/kjo ata/ato atë atëherë tash tani sot nesër dje
    `
      .split(/\s+/)
      .filter(Boolean)
  );
  
  // 2) Fjalë-kyçe / sinonime për kategori (zgjeruar)
  export const KEYWORDS = {
    ndertim: [
      "ndërtim",
      "konstruksion",
      "objekt",
      "shtëpi",
      "ndërtesë",
      "strukturë",
      "punime",
      "muraturë",
      "fundamente",
      "bazament"
    ],
    asfaltim: ["asfaltim", "rrugë", "parking", "asfalt", "shtrim", "trotoar"],
    prejtim: ["prejtim", "gërmim", "terren", "dheu", "nivelim", "përgatitje", "eskavator"],
    menaxhim: ["menaxhim", "projekt", "koordinim", "planifikim", "organizim", "mbikëqyrje"],
    konstruksion_metalik: ["metalik", "çelik", "strukturë", "hangar", "montim", "traverse"],
    renovim: ["renovim", "riparim", "modernizim", "përmirësim", "rifreskim", "rikonstruksion"],
    fusha_sportive: [
      "fushë",
      "sportiv",
      "futboll",
      "tenis",
      "basketboll",
      "volejboll",
      "tapet sintetik"
    ],
    finalizim: ["finalizim", "përfundim", "dorëzim", "mbarim", "completim", "punime finale"],
    suvatim: ["suvatim", "suvaje", "hidroizolim", "termik", "dekorativ", "spatullim"],
    instalime: ["instalim", "elektrik", "hidraulik", "gaz", "klimatizim", "HVAC", "kondicionim"],
    demolim: ["demolim", "shkatërrim", "heqje", "mbeturinash", "prishje", "çmontim"],
    palestra: ["palestrë", "fitnes", "pishinë", "sallë", "qendër", "sportive"],
    tregti: ["tregti", "metale", "minerale", "çelik", "aluminium", "materiale"],
    furnizim: ["furnizim", "pajisje", "materiale", "shtëpi", "mobilje", "mallra"],
    cmimet: ["çmim", "kosto", "kusht", "tarifë", "buxhet", "ofertë", "preventiv"],
    afatet: ["afat", "kohë", "orar", "kalendar", "planifikim", "afatesh"],
    siguria: ["siguri", "rrezik", "mbrojtje", "standarde", "rregullore", "PPE"],
    licencat: ["licencë", "leje", "certifikatë", "autorizim", "lejim", "ISO"],
    garancia: ["garanci", "garantim", "mbështetje", "riparim", "shërbim", "pas-shitjes"],
    kontakti: ["kontakt", "telefon", "email", "adresë", "komunikim", "zyrë"],
    betonim: ["beton", "armaturë", "kallëpe", "plaçkë", "pllakë", "themele"],
    fasada_izolim: ["fasadë", "sistem kapotë", "izolim", "termik", "akustik", "stiropor"],
    drenazhim: ["drenazh", "ujëra", "kanalizim", "prurje", "pusetë", "linjë"],
    gipskarton: ["gips", "rigjips", "gipskarton", "tavan i varur", "ndarje", "profile"],
    dritare_dyer: ["dritare", "dyer", "alumin", "PVC", "xham", "korniza"],
    projektim: ["projektim", "arkitekturë", "statikë", "inzhineri", "BIM"],
    mirembajtje: ["mirëmbajtje", "servis", "kontroll", "inspektim"],
    urgjenca: ["urgjencë", "ndërhyrje e shpejtë", "24/7", "avari"],
    zona: ["zonë", "mbulim", "Tiranë", "Prishtinë", "Kosovë", "Shqipëri", "Rajon"],
    tendera: ["tender", "prokurim", "ofertim publik", "procedurë"],
    vizite: ["vizitë", "inspektim", "matje", "falas", "konsultë"],
    pagesa: ["pagesë", "kontratë", "kesti", "faturë", "paradhënie"]
  };
  
  // 3) Tabela e FAQ-ve (zgjeruar me shumë pyetje praktike)
  export const FAQ_DATA = [
    // Ndërtim dhe Shërbime Kryesore
    {
      id: 1,
      category: "ndertim",
      question: "Çfarë lloj objektesh ndërtoni?",
      answer:
        "Ne ndërtojmë objekte të ndryshme duke përfshirë shtëpi private, ndërtesa komerciale, objekte industriale dhe infrastrukturë. Ekipi ynë ka eksperiencë në të gjitha llojet e ndërtimeve.",
      keywords: ["objekt", "shtëpi", "ndërtesë", "komerciale", "industriale"]
    },
    {
      id: 2,
      category: "asfaltim",
      question: "A ofroni shërbime asfaltimi?",
      answer:
        "Po, ofrojmë asfaltim rrugësh, parkingjesh dhe trotoare me materiale cilësore dhe makineri moderne për jetëgjatësi dhe rrafshmëri të lartë.",
      keywords: ["asfaltim", "rrugë", "parking", "shtrim", "asfalt", "trotoar"]
    },
    {
      id: 3,
      category: "prejtim",
      question: "Çfarë përfshin shërbimi i prejtimit?",
      answer:
        "Prejtimi përfshin gërmimin, nivelimin, lëvizjen e dheut dhe përgatitjen e bazamenteve, sipas projektit dhe specifikimeve gjeoteknike.",
      keywords: ["prejtim", "terren", "dheu", "nivelim", "bazament", "gërmim"]
    },
    {
      id: 4,
      category: "menaxhim",
      question: "Si e menaxhoni projektet?",
      answer:
        "Menaxhojmë projektet nga planifikimi deri në dorëzim: koordinim i ekipeve, menaxhim i buxhetit, grafiku i punimeve dhe raportim javor për progresin.",
      keywords: ["menaxhim", "projekt", "planifikim", "koordinim", "buxhet"]
    },
  
    // Konstruksion Metalik dhe Renovim
    {
      id: 5,
      category: "konstruksion_metalik",
      question: "A ndërtoni struktura metalike?",
      answer:
        "Po, ndërtojmë struktura çeliku/hangare industriale, me projekt statikor, prodhim, galvanizim dhe montim në vend.",
      keywords: ["metalik", "çelik", "hangar", "strukturë", "montim", "traverse"]
    },
    {
      id: 6,
      category: "renovim",
      question: "Çfarë lloj renovimesh bëni?",
      answer:
        "Renovime të plota ose pjesore të banesave dhe ambienteve komerciale: instalime të reja, fasada, dysheme, ndarje, tavanë të varur dhe përmirësim funksional.",
      keywords: ["renovim", "riparim", "modernizim", "përmirësim", "rikonstruksion"]
    },
  
    // Fusha Sportive dhe Palestra
    {
      id: 7,
      category: "fusha_sportive",
      question: "A ndërtoni fusha sportive?",
      answer:
        "Po, fusha futbolli, tenisi, basketbolli e volejbolli, me kullim/drenazh të projektuar, tapet sintetik dhe rrethim sipas standardeve.",
      keywords: ["fushë", "sportiv", "futboll", "tenis", "basketboll", "volejboll"]
    },
    {
      id: 8,
      category: "palestra",
      question: "A ndërtoni palestra dhe qendra sportive?",
      answer:
        "Po, palestra dhe qendra fitnesi/pishina me standarde higjieno-sanitare, ventilim/HVAC dhe dysheme sportive të certifikuara.",
      keywords: ["palestrë", "fitnes", "pishinë", "sallë", "qendër"]
    },
  
    // Shërbime të Specializuara
    {
      id: 9,
      category: "suvatim",
      question: "Çfarë lloj suvatimi ofroni?",
      answer:
        "Suvatim dekorativ, termo-izolues dhe hidroizolues (brenda/jashtë), për sipërfaqe të rrafshëta dhe rezistente.",
      keywords: ["suvatim", "mbrojtje", "hidroizolim", "termik", "dekorativ"]
    },
    {
      id: 10,
      category: "instalime",
      question: "A bëni instalime ndërtimore?",
      answer:
        "Po, instalime elektrike, hidraulike, gazi dhe klimatizim/HVAC me certifikime dhe testime sipas standardeve.",
      keywords: ["instalim", "elektrik", "hidraulik", "gaz", "klimatizim", "HVAC"]
    },
    {
      id: 11,
      category: "demolim",
      question: "A ofroni shërbime demolimi?",
      answer:
        "Po, prishje të kontrolluar, ndarje materialesh, menaxhim mbeturinash dhe pastrim vendi në përputhje me sigurinë.",
      keywords: ["demolim", "shkatërrim", "heqje", "mbeturina", "siguri"]
    },
  
    // Tregti dhe Furnizim
    {
      id: 12,
      category: "tregti",
      question: "A tregtoni metale dhe minerale?",
      answer:
        "Po, furnizim/tregti me çelik, alumin dhe minerale për nevoja ndërtimi me sasi dhe specifika sipas kërkesës.",
      keywords: ["tregti", "metale", "minerale", "çelik", "aluminium"]
    },
    {
      id: 13,
      category: "furnizim",
      question: "A furnizoni pajisje për objekte shtëpirore?",
      answer:
        "Po, pajisje dhe materiale ndërtimore, sanitare, elektrike, dekor dhe mobilje, me transport dhe montim sipas marrëveshjes.",
      keywords: ["furnizim", "pajisje", "materiale", "shtëpi", "mobilje"]
    },
  
    // Çmimet dhe Afatet
    {
      id: 14,
      category: "cmimet",
      question: "Si llogariten çmimet për projektet?",
      answer:
        "Sipas kompleksitetit, sasisë së punimeve, materialeve dhe afatit. Ofron preventiv/ofertë falas pas vizitës dhe matjeve.",
      keywords: ["çmim", "kosto", "tarifë", "buxhet", "preventiv", "ofertë"]
    },
    {
      id: 15,
      category: "afatet",
      question: "Sa kohë duhet për të përfunduar një projekt?",
      answer:
        "Varet nga madhësia/kompleksiteti. Projektet e vogla: javë; të mëdha: disa muaj. Afatet dakordësohen në kontratë dhe monitorohen me grafikun e punimeve.",
      keywords: ["afat", "kohë", "orar", "kalendar", "planifikim"]
    },
  
    // Siguria dhe Licencat
    {
      id: 16,
      category: "siguria",
      question: "Si garantoni sigurinë në punë?",
      answer:
        "Zbatim i rreptë i rregullave H&S, pajisje PPE, trajnime të stafit dhe plan i menaxhimit të rrezikut për çdo kantier.",
      keywords: ["siguri", "rrezik", "mbrojtje", "standarde", "rregullore", "PPE"]
    },
    {
      id: 17,
      category: "licencat",
      question: "A keni të gjitha licencat e nevojshme?",
      answer:
        "Po, leje ndërtimi për aktivitet, certifikata profesionale dhe zbatim të standardeve përkatëse (p.sh. ISO sipas fushës).",
      keywords: ["licencë", "leje", "certifikatë", "autorizim", "ISO"]
    },
  
    // Garanci dhe Mbështetje
    {
      id: 18,
      category: "garancia",
      question: "A ofroni garanci për punën tuaj?",
      answer:
        "Po, garanci për punimet dhe materialet sipas kontratës. Pas-shitjes ofrojmë mirëmbajtje dhe ndërhyrje korigjuese.",
      keywords: ["garanci", "mbështetje", "riparim", "shërbim"]
    },
    {
      id: 19,
      category: "kontakti",
      question: "Si mund t'ju kontaktoj?",
      answer:
        "Telefon: +355 4 123 4567 • Email: info@infraproject.al • Adresa: Tiranë. Për vizitë në terren, lini një takim.",
      keywords: ["kontakt", "telefon", "email", "adresë", "komunikim"]
    },
    {
      id: 20,
      category: "cmimet",
      question: "A mund të marr një ofertë falas?",
      answer:
        "Po, dërgoni përshkrim të shkurtër + lokacionin. Organizojmë vizitë/matje dhe ju dërgojmë preventivin pa kosto.",
      keywords: ["ofertë", "falas", "kuotim", "çmim", "buxhet"]
    },
    {
      id: 20.1,
      category: "cmimet",
      question: "Sa kushton një projekt?",
      answer:
        "Çmimi varet nga madhësia, kompleksiteti dhe materialet. Mund të marrësh ofertë falas pas vizitës në terren dhe matjeve të sakta.",
      keywords: ["qmim", "qmimi", "kushton", "çmim", "kosto", "tarifë", "buxhet"]
    },
    {
      id: 20.2,
      category: "cmimet",
      question: "Si mund të di çmimin e një projekti?",
      answer:
        "Kontaktoni për konsultë falas. Bëjmë vizitë në terren, matje të sakta dhe ju dërgojmë preventivin e detajuar me çmimet.",
      keywords: ["qmim", "qmimi", "çmim", "preventiv", "konsultë", "falas"]
    },
  
    // ——— Zgjerimet e reja ———
    {
      id: 21,
      category: "procesi",
      question: "Si është procesi nga kontakti deri në dorëzim?",
      answer:
        "1) Konsultë & vizitë në terren, 2) Matje & preventiv, 3) Kontratë & plan punimesh, 4) Ekzekutim me mbikëqyrje, 5) Dorëzim & garanci.",
      keywords: ["proces", "hap", "dorëzim", "kontratë", "preventiv"]
    },
    {
      id: 22,
      category: "pagesa",
      question: "Si funksionojnë pagesat?",
      answer:
        "Pagesat kryhen me këste sipas fazave të punës (paradhënie + këste progresi + kësti final pas dorëzimit). Fatura dhe dokumentacion zyrtar.",
      keywords: ["pagesë", "kesti", "faturë", "kontratë", "paradhënie"]
    },
    {
      id: 23,
      category: "mirembajtje",
      question: "A ofroni mirëmbajtje pas përfundimit?",
      answer:
        "Po, paketa mirëmbajtjeje periodike (inspektim, servis, riparime të vogla) sipas nevojës së objektit.",
      keywords: ["mirëmbajtje", "servis", "inspektim"]
    },
    {
      id: 24,
      category: "betonim",
      question: "A kryeni betonim dhe armime?",
      answer:
        "Po, nga themelet te pllakat/soletat me kallëpe profesionale, armim sipas projektit statikor dhe provë betoni kur kërkohet.",
      keywords: ["beton", "armaturë", "kallëpe", "pllakë", "themele"]
    },
    {
      id: 25,
      category: "fasada_izolim",
      question: "A bëni fasada dhe izolim termik?",
      answer:
        "Po, sisteme kapotë, fasada të ventilueshme dhe izolim akustik/termik me materiale të certifikuara.",
      keywords: ["fasadë", "izolim", "termik", "akustik", "kapotë"]
    },
    {
      id: 26,
      category: "drenazhim",
      question: "Si zgjidhni problemet e ujërave/drenazhit?",
      answer:
        "Projektim i drenazhit, pusetave dhe linjave; pjerrësi e kontrolluar dhe materiale drenante për të shmangur lagështinë.",
      keywords: ["drenazh", "ujëra", "kanalizim", "pusetë", "linjë"]
    },
    {
      id: 27,
      category: "gipskarton",
      question: "A montoni gips/tavan të varur?",
      answer:
        "Po, ndarje me gipskarton, tavanë të varur akustikë, izolim brenda ndarjeve dhe përfundime të pastra.",
      keywords: ["gips", "rigjips", "tavan", "ndarje", "akustik"]
    },
    {
      id: 28,
      category: "dritare_dyer",
      question: "A instaloni dritare/dyer (Al/PVC)?",
      answer:
        "Po, furnizim dhe montim i dritareve/dyerve alumini ose PVC me xhama termikë dhe aksesorë cilësorë.",
      keywords: ["dritare", "dyer", "alumin", "PVC", "xham"]
    },
    {
      id: 29,
      category: "projektim",
      question: "A ofroni projektim arkitektonik dhe statikor?",
      answer:
        "Po, projekt arkitekturë, inxhinieri strukturore, instalime dhe dosje lejesh sipas legjislacionit.",
      keywords: ["projektim", "arkitekturë", "statikë", "inzhineri", "leje"]
    },
    {
      id: 30,
      category: "urgjenca",
      question: "A keni shërbim urgjencash?",
      answer:
        "Po, ndërhyrje të shpejta për avari kritike (ujë, energji, dëmtime strukturore) sipas disponueshmërisë 24/7.",
      keywords: ["urgjencë", "ndërhyrje", "avari", "24/7"]
    },
    {
      id: 31,
      category: "zona",
      question: "Në cilat zona punoni?",
      answer:
        "Kryesisht në Tiranë dhe rrethina. Për projekte të mëdha operojmë në gjithë Shqipërinë dhe rajon sipas marrëveshjes.",
      keywords: ["zonë", "mbulim", "Tiranë", "Shqipëri", "rajon"]
    },
    {
      id: 32,
      category: "tendera",
      question: "A merrni pjesë në tendera publikë?",
      answer:
        "Po, kemi eksperiencë në procedura prokurimi publik/privat dhe dorëzim dokumentacioni sipas kërkesave.",
      keywords: ["tender", "prokurim", "ofertim publik", "procedurë"]
    },
    {
      id: 33,
      category: "vizite",
      question: "A ofroni vizitë në terren dhe matje falas?",
      answer:
        "Po, organizojmë vizitë fillestare/matje pa kosto në zonat e mbulimit për të llogaritur preventivin.",
      keywords: ["vizitë", "matje", "konsultë", "falas"]
    },
    {
      id: 34,
      category: "licencat",
      question: "Çfarë standardesh ndiqni (p.sh. ISO)?",
      answer:
        "Punojmë sipas standardeve përkatëse të cilësisë dhe sigurisë. Ku aplikohet, zbatojmë procedura ISO dhe dosje kontrolli.",
      keywords: ["ISO", "standard", "cilësi", "siguri"]
    },
    {
      id: 35,
      category: "projektim",
      question: "A përdorni BIM apo drone për monitorim?",
      answer:
        "Po, mund të përdorim BIM për koordinim disiplinash dhe drone për inspektime/fotogrametri, sipas madhësisë së projektit.",
      keywords: ["BIM", "drone", "modelim", "inspektim"]
    },
    {
      id: 36,
      category: "referenca",
      question: "A keni referenca ose portfolio projektesh?",
      answer:
        "Po, në takim ju paraqesim referenca dhe foto nga projekte të përfunduara me kontakte rekomanduesish (me leje).",
      keywords: ["referenca", "portfolio", "projekte", "rekomandim"]
    },
    {
      id: 37,
      category: "materiale",
      question: "Me cilat marka materialesh punoni?",
      answer:
        "Përdorim marka të certifikuara në treg (shkallë cilësie sipas buxhetit). Lista e materialeve përfshihet në preventiv/kontratë.",
      keywords: ["materiale", "marka", "certifikim", "lista materiale"]
    },
    {
      id: 38,
      category: "finalizim",
      question: "Si bëhet kolaudimi dhe dorëzimi final?",
      answer:
        "Kryejmë testime, pastrim teknik, kolaudim me investitorin dhe dorëzojmë dokumentacionin (manuale, garanci, certifikata).",
      keywords: ["kolaudim", "dorëzim", "testim", "dokumentacion"]
    }
  ];
  
  // 4) Utilitetet – unicode-safe, booster etj.
  
  // Tokenizim unicode (ruan shkronja si ë/ç). Kërkon flamurin 'u' në regex.
  export function tokenize(text) {
    return (text || "")
      .toLowerCase()
      // Normalize Albanian characters for better matching
      .replace(/ç/g, 'c')
      .replace(/ë/g, 'e')
      .replace(/sh/g, 's')
      .replace(/xh/g, 'x')
      .replace(/zh/g, 'z')
      // Keep only letters/numbers/spaces (unicode)
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .split(/\s+/)
      .filter((word) => word && word.length > 1 && !STOP_WORDS.has(word));
  }

  // Enhanced tokenization that handles common Albanian misspellings
  export function tokenizeWithVariants(text) {
    return (text || "")
      .toLowerCase()
      // Handle common Albanian character variations and misspellings
      .replace(/ç/g, 'c')
      .replace(/ë/g, 'e')
      .replace(/sh/g, 's')
      .replace(/xh/g, 'x')
      .replace(/zh/g, 'z')
      // Handle common misspellings where users might type without Albanian characters
      .replace(/\bqmim\b/g, 'cmim')      // qmim -> cmim
      .replace(/\bqmimi\b/g, 'cmimi')    // qmimi -> cmimi
      .replace(/\bqmimet\b/g, 'cmimet')  // qmimet -> cmimet
      .replace(/\bkoh\b/g, 'kohe')       // koh -> kohe
      .replace(/\bkohe\b/g, 'kohë')      // kohe -> kohë (normalize)
      .replace(/\btmim\b/g, 'cmim')      // tmim -> cmim (typo)
      .replace(/\btmimi\b/g, 'cmimi')    // tmimi -> cmimi (typo)
      .replace(/\bqmimt\b/g, 'cmimet')   // qmimt -> cmimet (typo)
      // Keep only letters/numbers/spaces (unicode)
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .split(/\s+/)
      .filter((word) => word && word.length > 1 && !STOP_WORDS.has(word));
  }

  // Alternative tokenization that preserves original Albanian characters
  export function tokenizeOriginal(text) {
    return (text || "")
      .toLowerCase()
      // Keep only letters/numbers/spaces (unicode)
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .split(/\s+/)
      .filter((word) => word && word.length > 1 && !STOP_WORDS.has(word));
  }
  
  export function jaccardSimilarity(a, b) {
    const setA = new Set(a);
    const setB = new Set(b);
    const intersection = [...setA].filter((x) => setB.has(x)).length;
    const union = new Set([...a, ...b]).size || 1;
    return intersection / union;
  }
  
  export function levenshteinDistance(a, b) {
    const m = a.length;
    const n = b.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
  
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }
    return dp[m][n];
  }
  
  export function levenshteinSimilarity(a, b) {
    const maxLen = Math.max(a.length, b.length) || 1;
    return 1 - levenshteinDistance(a, b) / maxLen;
  }
  
  // Enhanced keyword boost with weighted scoring
  export function getKeywordBoost(query, category) {
    const keywords = KEYWORDS[category] || [];
    const q = query.toLowerCase();
    const qVariants = q
      .replace(/qmim/g, 'cmim')
      .replace(/qmimi/g, 'cmimi')
      .replace(/qmimet/g, 'cmimet')
      .replace(/tmim/g, 'cmim')
      .replace(/tmimi/g, 'cmimi')
      .replace(/qmimt/g, 'cmimet');
    let boost = 0;
    
    // Exact keyword matches get higher boost
    keywords.forEach((keyword) => {
      const keywordLower = keyword.toLowerCase();
      
      // Check original query
      if (q.includes(keywordLower)) {
        boost += 0.15; // Higher boost for exact matches
      }
      // Check variant query (handles misspellings)
      else if (qVariants.includes(keywordLower)) {
        boost += 0.12; // Slightly lower boost for variant matches
      }
      // Partial matches get smaller boost
      else if (keyword.length > 4 && (q.includes(keyword.substring(0, 4)) || qVariants.includes(keyword.substring(0, 4)))) {
        boost += 0.05;
      }
    });
    
    return Math.min(boost, 0.4); // Cap the boost
  }

  // Enhanced fuzzy matching for Albanian text
  export function enhancedFuzzyMatch(query, text) {
    // Try three different tokenization approaches
    const queryWordsNorm = tokenize(query);
    const textWordsNorm = tokenize(text);
    const queryWordsVariants = tokenizeWithVariants(query);
    const textWordsVariants = tokenizeWithVariants(text);
    const queryWordsOrig = tokenizeOriginal(query);
    const textWordsOrig = tokenizeOriginal(text);
    
    let matchScore = 0;
    let totalWords = Math.max(queryWordsNorm.length, queryWordsVariants.length, queryWordsOrig.length);
    
    // Check normalized words (handles character variations)
    queryWordsNorm.forEach((qWord) => {
      let bestMatch = 0;
      textWordsNorm.forEach((tWord) => {
        bestMatch = Math.max(bestMatch, calculateWordSimilarity(qWord, tWord));
      });
      matchScore += bestMatch;
    });
    
    // Check variant words (handles misspellings like qmim -> cmim)
    queryWordsVariants.forEach((qWord) => {
      let bestMatch = 0;
      textWordsVariants.forEach((tWord) => {
        bestMatch = Math.max(bestMatch, calculateWordSimilarity(qWord, tWord));
      });
      matchScore += bestMatch;
    });
    
    // Also check original words for exact matches
    queryWordsOrig.forEach((qWord) => {
      let bestMatch = 0;
      textWordsOrig.forEach((tWord) => {
        bestMatch = Math.max(bestMatch, calculateWordSimilarity(qWord, tWord));
      });
      matchScore += bestMatch;
    });
    
    return totalWords > 0 ? matchScore / totalWords : 0;
  }

  // Helper function for word similarity calculation
  function calculateWordSimilarity(word1, word2) {
    // Exact match
    if (word1 === word2) {
      return 1.0;
    }
    
    // Substring match (partial words)
    if (word1.length > 3 && word2.includes(word1)) {
      return 0.9;
    }
    if (word2.length > 3 && word1.includes(word2)) {
      return 0.9;
    }
    
    // Levenshtein similarity for similar words
    const similarity = levenshteinSimilarity(word1, word2);
    if (similarity > 0.8) {
      return similarity * 0.8;
    }
    if (similarity > 0.6) {
      return similarity * 0.6;
    }
    
    // Prefix matching
    if (word1.length > 4 && word2.length > 4) {
      const prefix1 = word1.substring(0, 4);
      const prefix2 = word2.substring(0, 4);
      if (prefix1 === prefix2) {
        return 0.4;
      }
    }
    
    return 0;
  }

  // Question-specific scoring (prioritizes question matches over answer matches)
  export function getQuestionRelevanceScore(query, record) {
    const questionScore = enhancedFuzzyMatch(query, record.question);
    const answerScore = enhancedFuzzyMatch(query, record.answer) * 0.6; // Lower weight for answer matches
    const categoryScore = enhancedFuzzyMatch(query, record.category) * 0.3;
    
    return Math.max(questionScore, answerScore, categoryScore);
  }

  // Phrase matching for common Albanian construction terms
  export function getPhraseMatchBoost(query, record) {
    const phrases = [
      ['sa kushton', 'çmim', 'kushtim', 'qmim', 'qmimi'],
      ['sa kohë', 'afat', 'kohë', 'koh'],
      ['si funksionon', 'si punon', 'proces'],
      ['a ofroni', 'ofroj', 'shërbim'],
      ['cilat janë', 'cilët janë', 'karakteristikë'],
      ['mund të', 'mundem', 'lejohet'],
      ['sa kushton', 'çmimet', 'qmimet', 'tarifa', 'kosto'],
      ['si llogaritet', 'llogaritje', 'preventiv', 'ofertë']
    ];
    
    const q = query.toLowerCase();
    let boost = 0;
    
    phrases.forEach((phraseGroup) => {
      const hasPhrase = phraseGroup.some(phrase => q.includes(phrase));
      const hasRelated = phraseGroup.some(phrase => 
        record.question.toLowerCase().includes(phrase) || 
        record.answer.toLowerCase().includes(phrase)
      );
      
      if (hasPhrase && hasRelated) {
        boost += 0.1;
      }
    });
    
    return Math.min(boost, 0.3);
  }
  
  export function calculateScore(query, record) {
    // Enhanced scoring with multiple algorithms
    const queryTokens = tokenize(query);
    const recordTokens = tokenize(
      record.question + " " + record.answer + " " + record.category
    );
  
    // 1. Jaccard similarity (word overlap)
    const jaccard = jaccardSimilarity(queryTokens, recordTokens);
    
    // 2. Enhanced fuzzy matching
    const fuzzyMatch = getQuestionRelevanceScore(query, record);
    
    // 3. Traditional Levenshtein for exact string similarity
    const levenshtein = levenshteinSimilarity(
      query.toLowerCase(),
      record.question.toLowerCase()
    );
    
    // 4. Exact substring match (higher priority)
    const exactMatch = record.question
      .toLowerCase()
      .includes(query.toLowerCase())
      ? 0.4
      : 0;
    
    // 5. Enhanced keyword boost
    const keywordBoost = getKeywordBoost(query, record.category);
    
    // 6. Phrase matching for Albanian construction terms
    const phraseBoost = getPhraseMatchBoost(query, record);
    
    // 7. Question priority boost (questions are more important than answers)
    const questionPriority = record.question.toLowerCase().includes(query.toLowerCase()) ? 0.2 : 0;
    
    // Weighted combination with improved weights
    const score = (
      0.25 * jaccard +           // Word overlap
      0.30 * fuzzyMatch +        // Enhanced fuzzy matching
      0.15 * levenshtein +       // String similarity
      0.20 * exactMatch +        // Exact matches
      0.15 * keywordBoost +      // Keyword relevance
      0.10 * phraseBoost +       // Phrase matching
      0.10 * questionPriority    // Question priority
    );
    
    return Math.min(1, score);
  }
  
  export function findTopMatches(faqData, query, limit = 5) {
    if (!query || query.trim().length < 2) {
      return [];
    }
    
    const cleanQuery = query.trim();
    const scored = faqData.map((record) => ({
      record,
      score: calculateScore(cleanQuery, record)
    }));
  
    // Filter out very low scores and sort
    const filtered = scored.filter(item => item.score > 0.05);
    filtered.sort((a, b) => b.score - a.score);
    
    // Return top matches, but ensure we have at least one if there are any matches
    return filtered.slice(0, Math.max(limit, filtered.length > 0 ? 1 : 0));
  }
  
  export function getCategories(faqData) {
    const counts = {};
    for (const record of faqData) {
      counts[record.category] = (counts[record.category] || 0) + 1;
    }
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }
  
  export function getTopQuestions(faqData, categories, limit = 12) {
    const byCategory = {};
    for (const record of faqData) {
      (byCategory[record.category] ||= []).push(record);
    }
  
    return Object.entries(byCategory)
      .sort(
        (a, b) =>
          (categories.find((c) => c[0] === b[0])?.[1] || 0) -
          (categories.find((c) => c[0] === a[0])?.[1] || 0)
      )
      .flatMap(([_, records]) => records.slice(0, 2))
      .slice(0, limit);
  }
  
  // (Opsionale) helper për një përgjigje të sigurt kur konfidenti është i ulët
  export function answerWithFallback(query, threshold = 0.45) {
    const [best] = findTopMatches(FAQ_DATA, query, 1);
    if (!best || best.score < threshold) {
      return {
        answer:
          "Nuk e gjeta saktësisht çfarë kërkoni. Na shkruani një përshkrim të shkurtër dhe lokacionin—organizojmë vizitë/matje falas dhe ju dërgojmë preventivin.",
        score: best?.score ?? 0
      };
    }
    return { answer: best.record.answer, score: best.score, id: best.record.id };
  }
