/* ============================================================
   VERB CONJUGATION LIBRARY — European Portuguese
   Each verb: { inf, en, group, irregular, tenses: { present, past, imperfect, future } }
   Each tense: { eu, tu, ele, nos, eles }   (ele = ele/ela/você, eles = eles/elas/vocês)
   ============================================================ */

export const VERBS = [
  /* ---------- REGULAR -AR ---------- */
  { inf: "falar", en: "to speak", group: "-AR", reg: true,
    tenses: {
      present: { eu: "falo", tu: "falas", ele: "fala", nos: "falamos", eles: "falam" },
      past:    { eu: "falei", tu: "falaste", ele: "falou", nos: "falámos", eles: "falaram" },
      imperfect:{ eu: "falava", tu: "falavas", ele: "falava", nos: "falávamos", eles: "falavam" },
      future:  { eu: "falarei", tu: "falarás", ele: "falará", nos: "falaremos", eles: "falarão" } } },
  { inf: "morar", en: "to live / reside", group: "-AR", reg: true,
    tenses: {
      present: { eu: "moro", tu: "moras", ele: "mora", nos: "moramos", eles: "moram" },
      past:    { eu: "morei", tu: "moraste", ele: "morou", nos: "morámos", eles: "moraram" },
      imperfect:{ eu: "morava", tu: "moravas", ele: "morava", nos: "morávamos", eles: "moravam" },
      future:  { eu: "morarei", tu: "morarás", ele: "morará", nos: "moraremos", eles: "morarão" } } },
  { inf: "trabalhar", en: "to work", group: "-AR", reg: true,
    tenses: {
      present: { eu: "trabalho", tu: "trabalhas", ele: "trabalha", nos: "trabalhamos", eles: "trabalham" },
      past:    { eu: "trabalhei", tu: "trabalhaste", ele: "trabalhou", nos: "trabalhámos", eles: "trabalharam" },
      imperfect:{ eu: "trabalhava", tu: "trabalhavas", ele: "trabalhava", nos: "trabalhávamos", eles: "trabalhavam" },
      future:  { eu: "trabalharei", tu: "trabalharás", ele: "trabalhará", nos: "trabalharemos", eles: "trabalharão" } } },
  { inf: "estudar", en: "to study", group: "-AR", reg: true,
    tenses: {
      present: { eu: "estudo", tu: "estudas", ele: "estuda", nos: "estudamos", eles: "estudam" },
      past:    { eu: "estudei", tu: "estudaste", ele: "estudou", nos: "estudámos", eles: "estudaram" },
      imperfect:{ eu: "estudava", tu: "estudavas", ele: "estudava", nos: "estudávamos", eles: "estudavam" },
      future:  { eu: "estudarei", tu: "estudarás", ele: "estudará", nos: "estudaremos", eles: "estudarão" } } },
  { inf: "gostar", en: "to like (gostar de)", group: "-AR", reg: true,
    tenses: {
      present: { eu: "gosto", tu: "gostas", ele: "gosta", nos: "gostamos", eles: "gostam" },
      past:    { eu: "gostei", tu: "gostaste", ele: "gostou", nos: "gostámos", eles: "gostaram" },
      imperfect:{ eu: "gostava", tu: "gostavas", ele: "gostava", nos: "gostávamos", eles: "gostavam" },
      future:  { eu: "gostarei", tu: "gostarás", ele: "gostará", nos: "gostaremos", eles: "gostarão" } } },
  { inf: "comprar", en: "to buy", group: "-AR", reg: true,
    tenses: {
      present: { eu: "compro", tu: "compras", ele: "compra", nos: "compramos", eles: "compram" },
      past:    { eu: "comprei", tu: "compraste", ele: "comprou", nos: "comprámos", eles: "compraram" },
      imperfect:{ eu: "comprava", tu: "compravas", ele: "comprava", nos: "comprávamos", eles: "compravam" },
      future:  { eu: "comprarei", tu: "comprarás", ele: "comprará", nos: "compraremos", eles: "comprarão" } } },
  { inf: "chegar", en: "to arrive", group: "-AR", reg: true,
    tenses: {
      present: { eu: "chego", tu: "chegas", ele: "chega", nos: "chegamos", eles: "chegam" },
      past:    { eu: "cheguei", tu: "chegaste", ele: "chegou", nos: "chegámos", eles: "chegaram" },
      imperfect:{ eu: "chegava", tu: "chegavas", ele: "chegava", nos: "chegávamos", eles: "chegavam" },
      future:  { eu: "chegarei", tu: "chegarás", ele: "chegará", nos: "chegaremos", eles: "chegarão" } } },
  { inf: "tomar", en: "to take / have (drink)", group: "-AR", reg: true,
    tenses: {
      present: { eu: "tomo", tu: "tomas", ele: "toma", nos: "tomamos", eles: "tomam" },
      past:    { eu: "tomei", tu: "tomaste", ele: "tomou", nos: "tomámos", eles: "tomaram" },
      imperfect:{ eu: "tomava", tu: "tomavas", ele: "tomava", nos: "tomávamos", eles: "tomavam" },
      future:  { eu: "tomarei", tu: "tomarás", ele: "tomará", nos: "tomaremos", eles: "tomarão" } } },
  { inf: "ajudar", en: "to help", group: "-AR", reg: true,
    tenses: {
      present: { eu: "ajudo", tu: "ajudas", ele: "ajuda", nos: "ajudamos", eles: "ajudam" },
      past:    { eu: "ajudei", tu: "ajudaste", ele: "ajudou", nos: "ajudámos", eles: "ajudaram" },
      imperfect:{ eu: "ajudava", tu: "ajudavas", ele: "ajudava", nos: "ajudávamos", eles: "ajudavam" },
      future:  { eu: "ajudarei", tu: "ajudarás", ele: "ajudará", nos: "ajudaremos", eles: "ajudarão" } } },

  /* ---------- REGULAR -ER ---------- */
  { inf: "comer", en: "to eat", group: "-ER", reg: true,
    tenses: {
      present: { eu: "como", tu: "comes", ele: "come", nos: "comemos", eles: "comem" },
      past:    { eu: "comi", tu: "comeste", ele: "comeu", nos: "comemos", eles: "comeram" },
      imperfect:{ eu: "comia", tu: "comias", ele: "comia", nos: "comíamos", eles: "comiam" },
      future:  { eu: "comerei", tu: "comerás", ele: "comerá", nos: "comeremos", eles: "comerão" } } },
  { inf: "beber", en: "to drink", group: "-ER", reg: true,
    tenses: {
      present: { eu: "bebo", tu: "bebes", ele: "bebe", nos: "bebemos", eles: "bebem" },
      past:    { eu: "bebi", tu: "bebeste", ele: "bebeu", nos: "bebemos", eles: "beberam" },
      imperfect:{ eu: "bebia", tu: "bebias", ele: "bebia", nos: "bebíamos", eles: "bebiam" },
      future:  { eu: "beberei", tu: "beberás", ele: "beberá", nos: "beberemos", eles: "beberão" } } },
  { inf: "aprender", en: "to learn", group: "-ER", reg: true,
    tenses: {
      present: { eu: "aprendo", tu: "aprendes", ele: "aprende", nos: "aprendemos", eles: "aprendem" },
      past:    { eu: "aprendi", tu: "aprendeste", ele: "aprendeu", nos: "aprendemos", eles: "aprenderam" },
      imperfect:{ eu: "aprendia", tu: "aprendias", ele: "aprendia", nos: "aprendíamos", eles: "aprendiam" },
      future:  { eu: "aprenderei", tu: "aprenderás", ele: "aprenderá", nos: "aprenderemos", eles: "aprenderão" } } },
  { inf: "viver", en: "to live", group: "-ER", reg: true,
    tenses: {
      present: { eu: "vivo", tu: "vives", ele: "vive", nos: "vivemos", eles: "vivem" },
      past:    { eu: "vivi", tu: "viveste", ele: "viveu", nos: "vivemos", eles: "viveram" },
      imperfect:{ eu: "vivia", tu: "vivias", ele: "vivia", nos: "vivíamos", eles: "viviam" },
      future:  { eu: "viverei", tu: "viverás", ele: "viverá", nos: "viveremos", eles: "viverão" } } },
  { inf: "escrever", en: "to write", group: "-ER", reg: true,
    tenses: {
      present: { eu: "escrevo", tu: "escreves", ele: "escreve", nos: "escrevemos", eles: "escrevem" },
      past:    { eu: "escrevi", tu: "escreveste", ele: "escreveu", nos: "escrevemos", eles: "escreveram" },
      imperfect:{ eu: "escrevia", tu: "escrevias", ele: "escrevia", nos: "escrevíamos", eles: "escreviam" },
      future:  { eu: "escreverei", tu: "escreverás", ele: "escreverá", nos: "escreveremos", eles: "escreverão" } } },
  { inf: "vender", en: "to sell", group: "-ER", reg: true,
    tenses: {
      present: { eu: "vendo", tu: "vendes", ele: "vende", nos: "vendemos", eles: "vendem" },
      past:    { eu: "vendi", tu: "vendeste", ele: "vendeu", nos: "vendemos", eles: "venderam" },
      imperfect:{ eu: "vendia", tu: "vendias", ele: "vendia", nos: "vendíamos", eles: "vendiam" },
      future:  { eu: "venderei", tu: "venderás", ele: "venderá", nos: "venderemos", eles: "venderão" } } },
  { inf: "correr", en: "to run", group: "-ER", reg: true,
    tenses: {
      present: { eu: "corro", tu: "corres", ele: "corre", nos: "corremos", eles: "correm" },
      past:    { eu: "corri", tu: "correste", ele: "correu", nos: "corremos", eles: "correram" },
      imperfect:{ eu: "corria", tu: "corrias", ele: "corria", nos: "corríamos", eles: "corriam" },
      future:  { eu: "correrei", tu: "correrás", ele: "correrá", nos: "correremos", eles: "correrão" } } },

  /* ---------- REGULAR -IR ---------- */
  { inf: "partir", en: "to leave / depart", group: "-IR", reg: true,
    tenses: {
      present: { eu: "parto", tu: "partes", ele: "parte", nos: "partimos", eles: "partem" },
      past:    { eu: "parti", tu: "partiste", ele: "partiu", nos: "partimos", eles: "partiram" },
      imperfect:{ eu: "partia", tu: "partias", ele: "partia", nos: "partíamos", eles: "partiam" },
      future:  { eu: "partirei", tu: "partirás", ele: "partirá", nos: "partiremos", eles: "partirão" } } },
  { inf: "abrir", en: "to open", group: "-IR", reg: true,
    tenses: {
      present: { eu: "abro", tu: "abres", ele: "abre", nos: "abrimos", eles: "abrem" },
      past:    { eu: "abri", tu: "abriste", ele: "abriu", nos: "abrimos", eles: "abriram" },
      imperfect:{ eu: "abria", tu: "abrias", ele: "abria", nos: "abríamos", eles: "abriam" },
      future:  { eu: "abrirei", tu: "abrirás", ele: "abrirá", nos: "abriremos", eles: "abrirão" } } },
  { inf: "decidir", en: "to decide", group: "-IR", reg: true,
    tenses: {
      present: { eu: "decido", tu: "decides", ele: "decide", nos: "decidimos", eles: "decidem" },
      past:    { eu: "decidi", tu: "decidiste", ele: "decidiu", nos: "decidimos", eles: "decidiram" },
      imperfect:{ eu: "decidia", tu: "decidias", ele: "decidia", nos: "decidíamos", eles: "decidiam" },
      future:  { eu: "decidirei", tu: "decidirás", ele: "decidirá", nos: "decidiremos", eles: "decidirão" } } },
  { inf: "assistir", en: "to watch / attend", group: "-IR", reg: true,
    tenses: {
      present: { eu: "assisto", tu: "assistes", ele: "assiste", nos: "assistimos", eles: "assistem" },
      past:    { eu: "assisti", tu: "assististe", ele: "assistiu", nos: "assistimos", eles: "assistiram" },
      imperfect:{ eu: "assistia", tu: "assistias", ele: "assistia", nos: "assistíamos", eles: "assistiam" },
      future:  { eu: "assistirei", tu: "assistirás", ele: "assistirá", nos: "assistiremos", eles: "assistirão" } } },

  /* ---------- IRREGULAR (the essential ones) ---------- */
  { inf: "ser", en: "to be (permanent)", group: "irregular", reg: false,
    tenses: {
      present: { eu: "sou", tu: "és", ele: "é", nos: "somos", eles: "são" },
      past:    { eu: "fui", tu: "foste", ele: "foi", nos: "fomos", eles: "foram" },
      imperfect:{ eu: "era", tu: "eras", ele: "era", nos: "éramos", eles: "eram" },
      future:  { eu: "serei", tu: "serás", ele: "será", nos: "seremos", eles: "serão" } } },
  { inf: "estar", en: "to be (temporary)", group: "irregular", reg: false,
    tenses: {
      present: { eu: "estou", tu: "estás", ele: "está", nos: "estamos", eles: "estão" },
      past:    { eu: "estive", tu: "estiveste", ele: "esteve", nos: "estivemos", eles: "estiveram" },
      imperfect:{ eu: "estava", tu: "estavas", ele: "estava", nos: "estávamos", eles: "estavam" },
      future:  { eu: "estarei", tu: "estarás", ele: "estará", nos: "estaremos", eles: "estarão" } } },
  { inf: "ter", en: "to have", group: "irregular", reg: false,
    tenses: {
      present: { eu: "tenho", tu: "tens", ele: "tem", nos: "temos", eles: "têm" },
      past:    { eu: "tive", tu: "tiveste", ele: "teve", nos: "tivemos", eles: "tiveram" },
      imperfect:{ eu: "tinha", tu: "tinhas", ele: "tinha", nos: "tínhamos", eles: "tinham" },
      future:  { eu: "terei", tu: "terás", ele: "terá", nos: "teremos", eles: "terão" } } },
  { inf: "ir", en: "to go", group: "irregular", reg: false,
    tenses: {
      present: { eu: "vou", tu: "vais", ele: "vai", nos: "vamos", eles: "vão" },
      past:    { eu: "fui", tu: "foste", ele: "foi", nos: "fomos", eles: "foram" },
      imperfect:{ eu: "ia", tu: "ias", ele: "ia", nos: "íamos", eles: "iam" },
      future:  { eu: "irei", tu: "irás", ele: "irá", nos: "iremos", eles: "irão" } } },
  { inf: "fazer", en: "to do / make", group: "irregular", reg: false,
    tenses: {
      present: { eu: "faço", tu: "fazes", ele: "faz", nos: "fazemos", eles: "fazem" },
      past:    { eu: "fiz", tu: "fizeste", ele: "fez", nos: "fizemos", eles: "fizeram" },
      imperfect:{ eu: "fazia", tu: "fazias", ele: "fazia", nos: "fazíamos", eles: "faziam" },
      future:  { eu: "farei", tu: "farás", ele: "fará", nos: "faremos", eles: "farão" } } },
  { inf: "poder", en: "can / to be able", group: "irregular", reg: false,
    tenses: {
      present: { eu: "posso", tu: "podes", ele: "pode", nos: "podemos", eles: "podem" },
      past:    { eu: "pude", tu: "pudeste", ele: "pôde", nos: "pudemos", eles: "puderam" },
      imperfect:{ eu: "podia", tu: "podias", ele: "podia", nos: "podíamos", eles: "podiam" },
      future:  { eu: "poderei", tu: "poderás", ele: "poderá", nos: "poderemos", eles: "poderão" } } },
  { inf: "querer", en: "to want", group: "irregular", reg: false,
    tenses: {
      present: { eu: "quero", tu: "queres", ele: "quer", nos: "queremos", eles: "querem" },
      past:    { eu: "quis", tu: "quiseste", ele: "quis", nos: "quisemos", eles: "quiseram" },
      imperfect:{ eu: "queria", tu: "querias", ele: "queria", nos: "queríamos", eles: "queriam" },
      future:  { eu: "quererei", tu: "quererás", ele: "quererá", nos: "quereremos", eles: "quererão" } } },
  { inf: "saber", en: "to know (facts)", group: "irregular", reg: false,
    tenses: {
      present: { eu: "sei", tu: "sabes", ele: "sabe", nos: "sabemos", eles: "sabem" },
      past:    { eu: "soube", tu: "soubeste", ele: "soube", nos: "soubemos", eles: "souberam" },
      imperfect:{ eu: "sabia", tu: "sabias", ele: "sabia", nos: "sabíamos", eles: "sabiam" },
      future:  { eu: "saberei", tu: "saberás", ele: "saberá", nos: "saberemos", eles: "saberão" } } },
  { inf: "dizer", en: "to say / tell", group: "irregular", reg: false,
    tenses: {
      present: { eu: "digo", tu: "dizes", ele: "diz", nos: "dizemos", eles: "dizem" },
      past:    { eu: "disse", tu: "disseste", ele: "disse", nos: "dissemos", eles: "disseram" },
      imperfect:{ eu: "dizia", tu: "dizias", ele: "dizia", nos: "dizíamos", eles: "diziam" },
      future:  { eu: "direi", tu: "dirás", ele: "dirá", nos: "diremos", eles: "dirão" } } },
  { inf: "ver", en: "to see", group: "irregular", reg: false,
    tenses: {
      present: { eu: "vejo", tu: "vês", ele: "vê", nos: "vemos", eles: "veem" },
      past:    { eu: "vi", tu: "viste", ele: "viu", nos: "vimos", eles: "viram" },
      imperfect:{ eu: "via", tu: "vias", ele: "via", nos: "víamos", eles: "viam" },
      future:  { eu: "verei", tu: "verás", ele: "verá", nos: "veremos", eles: "verão" } } },
  { inf: "vir", en: "to come", group: "irregular", reg: false,
    tenses: {
      present: { eu: "venho", tu: "vens", ele: "vem", nos: "vimos", eles: "vêm" },
      past:    { eu: "vim", tu: "vieste", ele: "veio", nos: "viemos", eles: "vieram" },
      imperfect:{ eu: "vinha", tu: "vinhas", ele: "vinha", nos: "vínhamos", eles: "vinham" },
      future:  { eu: "virei", tu: "virás", ele: "virá", nos: "viremos", eles: "virão" } } },
  { inf: "dar", en: "to give", group: "irregular", reg: false,
    tenses: {
      present: { eu: "dou", tu: "dás", ele: "dá", nos: "damos", eles: "dão" },
      past:    { eu: "dei", tu: "deste", ele: "deu", nos: "demos", eles: "deram" },
      imperfect:{ eu: "dava", tu: "davas", ele: "dava", nos: "dávamos", eles: "davam" },
      future:  { eu: "darei", tu: "darás", ele: "dará", nos: "daremos", eles: "darão" } } },
  { inf: "pôr", en: "to put", group: "irregular", reg: false,
    tenses: {
      present: { eu: "ponho", tu: "pões", ele: "põe", nos: "pomos", eles: "põem" },
      past:    { eu: "pus", tu: "puseste", ele: "pôs", nos: "pusemos", eles: "puseram" },
      imperfect:{ eu: "punha", tu: "punhas", ele: "punha", nos: "púnhamos", eles: "punham" },
      future:  { eu: "porei", tu: "porás", ele: "porá", nos: "poremos", eles: "porão" } } },
  { inf: "dormir", en: "to sleep", group: "-IR (stem change)", reg: false,
    tenses: {
      present: { eu: "durmo", tu: "dormes", ele: "dorme", nos: "dormimos", eles: "dormem" },
      past:    { eu: "dormi", tu: "dormiste", ele: "dormiu", nos: "dormimos", eles: "dormiram" },
      imperfect:{ eu: "dormia", tu: "dormias", ele: "dormia", nos: "dormíamos", eles: "dormiam" },
      future:  { eu: "dormirei", tu: "dormirás", ele: "dormirá", nos: "dormiremos", eles: "dormirão" } } },
  { inf: "ouvir", en: "to hear / listen", group: "-IR (stem change)", reg: false,
    tenses: {
      present: { eu: "ouço", tu: "ouves", ele: "ouve", nos: "ouvimos", eles: "ouvem" },
      past:    { eu: "ouvi", tu: "ouviste", ele: "ouviu", nos: "ouvimos", eles: "ouviram" },
      imperfect:{ eu: "ouvia", tu: "ouvias", ele: "ouvia", nos: "ouvíamos", eles: "ouviam" },
      future:  { eu: "ouvirei", tu: "ouvirás", ele: "ouvirá", nos: "ouviremos", eles: "ouvirão" } } },
  { inf: "ler", en: "to read", group: "-ER (irregular)", reg: false,
    tenses: {
      present: { eu: "leio", tu: "lês", ele: "lê", nos: "lemos", eles: "leem" },
      past:    { eu: "li", tu: "leste", ele: "leu", nos: "lemos", eles: "leram" },
      imperfect:{ eu: "lia", tu: "lias", ele: "lia", nos: "líamos", eles: "liam" },
      future:  { eu: "lerei", tu: "lerás", ele: "lerá", nos: "leremos", eles: "lerão" } } },
  { inf: "trazer", en: "to bring", group: "irregular", reg: false,
    tenses: {
      present: { eu: "trago", tu: "trazes", ele: "traz", nos: "trazemos", eles: "trazem" },
      past:    { eu: "trouxe", tu: "trouxeste", ele: "trouxe", nos: "trouxemos", eles: "trouxeram" },
      imperfect:{ eu: "trazia", tu: "trazias", ele: "trazia", nos: "trazíamos", eles: "traziam" },
      future:  { eu: "trarei", tu: "trarás", ele: "trará", nos: "traremos", eles: "trarão" } } },
  { inf: "sair", en: "to go out / leave", group: "-IR (irregular)", reg: false,
    tenses: {
      present: { eu: "saio", tu: "sais", ele: "sai", nos: "saímos", eles: "saem" },
      past:    { eu: "saí", tu: "saíste", ele: "saiu", nos: "saímos", eles: "saíram" },
      imperfect:{ eu: "saía", tu: "saías", ele: "saía", nos: "saíamos", eles: "saíam" },
      future:  { eu: "sairei", tu: "sairás", ele: "sairá", nos: "sairemos", eles: "sairão" } } },
  { inf: "pedir", en: "to ask for / order", group: "-IR (stem change)", reg: false,
    tenses: {
      present: { eu: "peço", tu: "pedes", ele: "pede", nos: "pedimos", eles: "pedem" },
      past:    { eu: "pedi", tu: "pediste", ele: "pediu", nos: "pedimos", eles: "pediram" },
      imperfect:{ eu: "pedia", tu: "pedias", ele: "pedia", nos: "pedíamos", eles: "pediam" },
      future:  { eu: "pedirei", tu: "pedirás", ele: "pedirá", nos: "pediremos", eles: "pedirão" } } },
  { inf: "conseguir", en: "to manage / achieve", group: "-IR (stem change)", reg: false,
    tenses: {
      present: { eu: "consigo", tu: "consegues", ele: "consegue", nos: "conseguimos", eles: "conseguem" },
      past:    { eu: "consegui", tu: "conseguiste", ele: "conseguiu", nos: "conseguimos", eles: "conseguiram" },
      imperfect:{ eu: "conseguia", tu: "conseguias", ele: "conseguia", nos: "conseguíamos", eles: "conseguiam" },
      future:  { eu: "conseguirei", tu: "conseguirás", ele: "conseguirá", nos: "conseguiremos", eles: "conseguirão" } } },
];

export const TENSE_INFO = {
  present:   { label: "Present", en: "I speak / I am speaking", note: "Habits, facts, things happening now." },
  past:      { label: "Past (Perfeito)", en: "I spoke / I have spoken", note: "Completed actions — done and dusted." },
  imperfect: { label: "Imperfect", en: "I used to speak / was speaking", note: "Habits, descriptions and background in the past." },
  future:    { label: "Future", en: "I will speak", note: "Formal future. In speech, 'vou falar' (ir + infinitive) is more common." },
};

export const PRONOUNS = [
  { key: "eu", label: "eu", en: "I" },
  { key: "tu", label: "tu", en: "you (informal)" },
  { key: "ele", label: "ele/ela/você", en: "he/she/you (formal)" },
  { key: "nos", label: "nós", en: "we" },
  { key: "eles", label: "eles/elas/vocês", en: "they/you all" },
];

/* ============ CONJUGATION RULES ============ */
export const CONJ_RULES = [
  {
    group: "-AR verbs",
    color: "ar",
    example: "falar → fal-",
    intro: "Remove -ar to get the stem, then add these endings. Most Portuguese verbs are -AR, so this pattern is gold.",
    tenses: [
      { name: "Present", endings: [["eu", "-o", "falo"], ["tu", "-as", "falas"], ["ele/ela", "-a", "fala"], ["nós", "-amos", "falamos"], ["eles/elas", "-am", "falam"]] },
      { name: "Past (perfeito)", endings: [["eu", "-ei", "falei"], ["tu", "-aste", "falaste"], ["ele/ela", "-ou", "falou"], ["nós", "-ámos", "falámos"], ["eles/elas", "-aram", "falaram"]] },
      { name: "Imperfect", endings: [["eu", "-ava", "falava"], ["tu", "-avas", "falavas"], ["ele/ela", "-ava", "falava"], ["nós", "-ávamos", "falávamos"], ["eles/elas", "-avam", "falavam"]] },
      { name: "Future", endings: [["eu", "-arei", "falarei"], ["tu", "-arás", "falarás"], ["ele/ela", "-ará", "falará"], ["nós", "-aremos", "falaremos"], ["eles/elas", "-arão", "falarão"]] },
    ],
  },
  {
    group: "-ER verbs",
    color: "er",
    example: "comer → com-",
    intro: "Remove -er to get the stem, then add these endings. Note the e-vowels where -AR had a-vowels.",
    tenses: [
      { name: "Present", endings: [["eu", "-o", "como"], ["tu", "-es", "comes"], ["ele/ela", "-e", "come"], ["nós", "-emos", "comemos"], ["eles/elas", "-em", "comem"]] },
      { name: "Past (perfeito)", endings: [["eu", "-i", "comi"], ["tu", "-este", "comeste"], ["ele/ela", "-eu", "comeu"], ["nós", "-emos", "comemos"], ["eles/elas", "-eram", "comeram"]] },
      { name: "Imperfect", endings: [["eu", "-ia", "comia"], ["tu", "-ias", "comias"], ["ele/ela", "-ia", "comia"], ["nós", "-íamos", "comíamos"], ["eles/elas", "-iam", "comiam"]] },
      { name: "Future", endings: [["eu", "-erei", "comerei"], ["tu", "-erás", "comerás"], ["ele/ela", "-erá", "comerá"], ["nós", "-eremos", "comeremos"], ["eles/elas", "-erão", "comerão"]] },
    ],
  },
  {
    group: "-IR verbs",
    color: "ir",
    example: "partir → part-",
    intro: "Almost identical to -ER. The key difference is the nós present form ends in -imos (not -emos).",
    tenses: [
      { name: "Present", endings: [["eu", "-o", "parto"], ["tu", "-es", "partes"], ["ele/ela", "-e", "parte"], ["nós", "-imos", "partimos"], ["eles/elas", "-em", "partem"]] },
      { name: "Past (perfeito)", endings: [["eu", "-i", "parti"], ["tu", "-iste", "partiste"], ["ele/ela", "-iu", "partiu"], ["nós", "-imos", "partimos"], ["eles/elas", "-iram", "partiram"]] },
      { name: "Imperfect", endings: [["eu", "-ia", "partia"], ["tu", "-ias", "partias"], ["ele/ela", "-ia", "partia"], ["nós", "-íamos", "partíamos"], ["eles/elas", "-iam", "partiam"]] },
      { name: "Future", endings: [["eu", "-irei", "partirei"], ["tu", "-irás", "partirás"], ["ele/ela", "-irá", "partirá"], ["nós", "-iremos", "partiremos"], ["eles/elas", "-irão", "partirão"]] },
    ],
  },
];

/* ============ SER vs ESTAR FOCUSED REFERENCE ============ */
export const SER_ESTAR = {
  intro: "Portuguese has two verbs for 'to be'. SER is for permanent/essential things (identity, origin, time). ESTAR is for temporary states (mood, location, weather right now).",
  rows: [
    { en: "I am", ser: "eu sou", estar: "eu estou", ex_ser: "Sou português. (identity)", ex_estar: "Estou cansado. (right now)" },
    { en: "you are", ser: "tu és", estar: "tu estás", ex_ser: "És médico?", ex_estar: "Estás bem?" },
    { en: "he/she is", ser: "ele/ela é", estar: "ele/ela está", ex_ser: "Ela é alta.", ex_estar: "Ela está em casa." },
    { en: "we are", ser: "nós somos", estar: "nós estamos", ex_ser: "Somos amigos.", ex_estar: "Estamos felizes." },
    { en: "they are", ser: "eles são", estar: "eles estão", ex_ser: "São de Lisboa.", ex_estar: "Estão na praia." },
  ],
  pastRows: [
    { en: "I was", ser: "fui / era", estar: "estive / estava", note: "fui = a defined moment; era = ongoing/description" },
    { en: "you were", ser: "foste / eras", estar: "estiveste / estavas", note: "" },
    { en: "he/she was", ser: "foi / era", estar: "esteve / estava", note: "" },
  ],
  futureRows: [
    { en: "I will be", ser: "serei", estar: "estarei", note: "Or use 'vou ser' / 'vou estar' in speech" },
    { en: "you will be", ser: "serás", estar: "estarás", note: "" },
    { en: "he/she will be", ser: "será", estar: "estará", note: "" },
  ],
  tips: [
    "SER for: identity, nationality, profession, time/date, telling what something IS.",
    "ESTAR for: feelings, location, weather, temporary conditions — how/where something IS right now.",
    "Memory trick: ESTAR and 'state' both start with a similar sound — temporary STATEs use eSTAR.",
    "Some adjectives change meaning: 'é aborrecido' = he is boring; 'está aborrecido' = he is bored.",
  ],
};

/* ============ NUMBERS: FRACTIONS, DECIMALS, ORDINALS ============ */
export const NUMBER_REF = {
  fractions: [
    { sym: "½", pt: "meio / metade", en: "a half" },
    { sym: "⅓", pt: "um terço", en: "a third" },
    { sym: "¼", pt: "um quarto", en: "a quarter" },
    { sym: "⅕", pt: "um quinto", en: "a fifth" },
    { sym: "⅔", pt: "dois terços", en: "two thirds" },
    { sym: "¾", pt: "três quartos", en: "three quarters" },
    { sym: "1½", pt: "um e meio", en: "one and a half" },
  ],
  decimals: [
    { sym: "0,5", pt: "zero vírgula cinco", en: "0.5 (note: comma, not point!)" },
    { sym: "3,14", pt: "três vírgula catorze", en: "3.14" },
    { sym: "1,99 €", pt: "um euro e noventa e nove", en: "€1.99 (prices)" },
    { sym: "50%", pt: "cinquenta por cento", en: "50 percent" },
  ],
  ordinals: [
    { sym: "1º", pt: "primeiro", en: "first" }, { sym: "2º", pt: "segundo", en: "second" },
    { sym: "3º", pt: "terceiro", en: "third" }, { sym: "4º", pt: "quarto", en: "fourth" },
    { sym: "5º", pt: "quinto", en: "fifth" }, { sym: "6º", pt: "sexto", en: "sixth" },
    { sym: "7º", pt: "sétimo", en: "seventh" }, { sym: "8º", pt: "oitavo", en: "eighth" },
    { sym: "9º", pt: "nono", en: "ninth" }, { sym: "10º", pt: "décimo", en: "tenth" },
    { sym: "20º", pt: "vigésimo", en: "twentieth" }, { sym: "100º", pt: "centésimo", en: "hundredth" },
  ],
  big: [
    { sym: "100", pt: "cem", en: "one hundred" },
    { sym: "101", pt: "cento e um", en: "(cem → cento before another number)" },
    { sym: "200", pt: "duzentos", en: "two hundred" },
    { sym: "500", pt: "quinhentos", en: "five hundred (irregular!)" },
    { sym: "1000", pt: "mil", en: "one thousand" },
    { sym: "1.000.000", pt: "um milhão", en: "one million" },
  ],
};

/* ============ EXTRA DAILY-LIFE TOPICS ============ */
export const TOPICS = [
  {
    id: "t_dates",
    title: "Days, Dates & Calendar",
    icon: "📆",
    sections: [
      { h: "Asking the date", items: [
        { pt: "Que dia é hoje?", en: "What day is it today?" },
        { pt: "Hoje é dia 5 de maio.", en: "Today is the 5th of May." },
        { pt: "Qual é a data?", en: "What's the date?" },
        { pt: "É segunda-feira.", en: "It's Monday." },
      ]},
      { h: "Useful patterns", items: [
        { pt: "no dia 10", en: "on the 10th" },
        { pt: "em janeiro", en: "in January" },
        { pt: "em 2026", en: "in 2026" },
        { pt: "na próxima semana", en: "next week" },
        { pt: "na semana passada", en: "last week" },
      ]},
    ],
  },
  {
    id: "t_weather",
    title: "Talking about the Weather",
    icon: "🌤️",
    sections: [
      { h: "How's the weather?", items: [
        { pt: "Como está o tempo?", en: "How's the weather?" },
        { pt: "Está bom/mau tempo.", en: "The weather is good/bad." },
        { pt: "Faz sol.", en: "It's sunny." },
        { pt: "Está a chover.", en: "It's raining." },
        { pt: "Faz frio / calor.", en: "It's cold / hot." },
        { pt: "Está vento.", en: "It's windy." },
      ]},
    ],
  },
  {
    id: "t_phone",
    title: "On the Phone",
    icon: "📞",
    sections: [
      { h: "Calling", items: [
        { pt: "Está? / Estou sim?", en: "Hello? (answering — PT-PT!)" },
        { pt: "Quem fala?", en: "Who's speaking?" },
        { pt: "Posso falar com...?", en: "Can I speak to...?" },
        { pt: "Um momento, se faz favor.", en: "One moment, please." },
        { pt: "Ligo mais tarde.", en: "I'll call back later." },
      ]},
    ],
  },
  {
    id: "t_directions",
    title: "Directions",
    icon: "🧭",
    sections: [
      { h: "Asking & giving", items: [
        { pt: "Onde fica...?", en: "Where is...?" },
        { pt: "Vire à direita / esquerda.", en: "Turn right / left." },
        { pt: "Siga em frente.", en: "Go straight ahead." },
        { pt: "É perto / longe.", en: "It's near / far." },
        { pt: "ao fundo da rua", en: "at the end of the street" },
        { pt: "na esquina", en: "on the corner" },
      ]},
    ],
  },
  {
    id: "t_emergency",
    title: "Emergencies & Help",
    icon: "🚨",
    sections: [
      { h: "Key phrases", items: [
        { pt: "Socorro!", en: "Help!" },
        { pt: "Preciso de ajuda.", en: "I need help." },
        { pt: "Chame uma ambulância!", en: "Call an ambulance!" },
        { pt: "Onde fica o hospital?", en: "Where is the hospital?" },
        { pt: "Estou perdido/perdida.", en: "I'm lost (m/f)." },
        { pt: "O número de emergência é 112.", en: "The emergency number is 112." },
      ]},
    ],
  },
  {
    id: "t_polite",
    title: "Politeness & Formality",
    icon: "🎩",
    sections: [
      { h: "Formal vs informal 'you'", items: [
        { pt: "tu (informal)", en: "friends, family, children" },
        { pt: "você / o senhor / a senhora", en: "strangers, elders, formal" },
        { pt: "Como está? (formal)", en: "How are you? (formal)" },
        { pt: "Como estás? (informal)", en: "How are you? (informal)" },
        { pt: "Se faz favor / Por favor", en: "Please" },
        { pt: "Com licença", en: "Excuse me (to pass / leave)" },
      ]},
    ],
  },
];
