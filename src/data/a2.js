/* ============ LEVEL A2 — BUILDING (8 units) ============ */
export const A2_UNITS = [
  {
    id: "a2u1",
    title: "Imperfect Past",
    icon: "🔁",
    desc: "The 'used to' / 'was doing' past — for habits & background.",
    cards: [
      {
        title: "What is the imperfeito?",
        body: "While the perfeito is for completed actions, the IMPERFEITO describes ongoing or repeated past states: “I used to...”, “I was ...ing”, descriptions, habits. Signal words: sempre, todos os dias, antigamente.",
        items: [
          { pt: "Quando era criança, jogava futebol.", en: "When I was a child, I played football." },
          { pt: "Antigamente morava em Faro.", en: "I used to live in Faro." },
          { pt: "Estava a chover.", en: "It was raining." },
        ],
      },
      {
        title: "-AR imperfect: -ava",
        body: "FALAR → falava, falavas, falava, falávamos, falavam. Beautifully regular — the -ava sound is the marker.",
        items: [
          { pt: "eu falava", en: "I used to speak / was speaking" },
          { pt: "tu falavas", en: "you used to speak" },
          { pt: "ele/ela falava", en: "he/she used to speak" },
          { pt: "nós falávamos", en: "we used to speak" },
          { pt: "eles/elas falavam", en: "they used to speak" },
        ],
      },
      {
        title: "-ER & -IR imperfect: -ia",
        body: "COMER → comia, comias, comia, comíamos, comiam. Both -ER and -IR use -ia endings.",
        items: [
          { pt: "eu comia", en: "I used to eat" },
          { pt: "tu comias", en: "you used to eat" },
          { pt: "ele/ela comia", en: "he/she used to eat" },
          { pt: "nós comíamos", en: "we used to eat" },
          { pt: "eles/elas comiam", en: "they used to eat" },
        ],
      },
      {
        title: "Key irregulars: ser, ter, ir",
        body: "Only four verbs are irregular in the imperfect. Learn ser & ter — the most common.",
        items: [
          { pt: "era, eras, era, éramos, eram", en: "SER — Era uma vez... (Once upon a time...)" },
          { pt: "tinha, tinhas, tinha...", en: "TER — Eu tinha um cão." },
          { pt: "ia, ias, ia, íamos, iam", en: "IR — Ia à escola a pé." },
        ],
      },
    ],
    quiz: [
      { t: "type", q: "Imperfect: eu ___ (falar — I used to speak)", a: "falava", say: "eu falava" },
      { t: "type", q: "Imperfect: eu ___ (comer — I used to eat)", a: "comia", say: "eu comia" },
      { t: "mc", q: "“When I was a child” (SER imperfect):", opts: ["Quando sou criança", "Quando era criança", "Quando fui criança", "Quando estava criança"], a: 1 },
      { t: "mc", q: "The imperfeito is used for:", opts: ["a single completed action", "habits and ongoing past states", "the future", "commands"], a: 1 },
      { t: "listen-mc", say: "Antigamente morava em Faro.", q: "🔊 What does this say?", opts: ["I live in Faro now", "I used to live in Faro", "I will live in Faro", "I went to Faro"], a: 1 },
      { t: "type", q: "Imperfect: eu ___ (ter — I used to have)", a: "tinha", say: "eu tinha" },
    ],
  },
  {
    id: "a2u2",
    title: "Perfeito vs Imperfeito",
    icon: "⚖️",
    desc: "The big one: which past tense, when?",
    cards: [
      {
        title: "The core distinction",
        body: "PERFEITO = a finished event, something that happened once and is done. IMPERFEITO = the background, the setting, repeated/ongoing. Think of it as the photo (perfeito) vs the movie scenery (imperfeito).",
        items: [
          { pt: "Comi às oito. (perfeito)", en: "I ate at eight. (one finished event)" },
          { pt: "Comia sempre às oito. (imperfeito)", en: "I always used to eat at eight. (habit)" },
          { pt: "Ontem choveu. (perfeito)", en: "Yesterday it rained. (it happened, done)" },
          { pt: "Estava a chover. (imperfeito)", en: "It was raining. (ongoing background)" },
        ],
      },
      {
        title: "They work together",
        body: "Often one sentence has both: the imperfeito sets the scene, the perfeito drops in the event that interrupted it.",
        items: [
          { pt: "Estava a dormir quando o telefone tocou.", en: "I was sleeping (imperf.) when the phone rang (perf.)." },
          { pt: "Era de noite e chegou um homem.", en: "It was night (imperf.) and a man arrived (perf.)." },
          { pt: "Lia um livro quando ela entrou.", en: "I was reading when she came in." },
        ],
      },
      {
        title: "Signal words help",
        body: "Certain words almost always point to one tense.",
        items: [
          { pt: "ontem, de repente, uma vez", en: "→ usually PERFEITO (specific moment)" },
          { pt: "sempre, todos os dias, antigamente", en: "→ usually IMPERFEITO (repeated)" },
          { pt: "enquanto (while)", en: "→ usually IMPERFEITO (two ongoing things)" },
        ],
      },
    ],
    quiz: [
      { t: "mc", q: "“I always ate at eight” (a habit):", opts: ["Comi sempre às oito", "Comia sempre às oito", "Como sempre às oito", "Vou comer às oito"], a: 1 },
      { t: "mc", q: "“Yesterday it rained” (one finished event):", opts: ["Ontem chovia", "Ontem choveu", "Ontem chove", "Ontem vai chover"], a: 1 },
      { t: "mc", q: "“I was sleeping when the phone rang” — the sleeping part is:", opts: ["perfeito", "imperfeito", "future", "present"], a: 1 },
      { t: "mc", q: "The word “sempre” (always) usually signals:", opts: ["perfeito", "imperfeito", "future", "present"], a: 1 },
      { t: "listen-mc", say: "Estava a dormir quando o telefone tocou.", q: "🔊 What interrupted the sleeping?", opts: ["someone knocked", "the phone rang", "the alarm", "a dog barked"], a: 1 },
      { t: "mc", q: "Imperfeito is best described as:", opts: ["the snapshot of one event", "the background/scenery of the past", "the near future", "a command"], a: 1 },
    ],
  },
  {
    id: "a2u3",
    title: "The Future Tense",
    icon: "🔮",
    desc: "Beyond 'going to' — the proper future.",
    cards: [
      {
        title: "Two ways to talk future",
        body: "You already know ir + infinitive (vou comer = I'm going to eat) — that's the everyday spoken future. There's also the formal simple future, used in writing and for emphasis/predictions.",
        items: [
          { pt: "Vou viajar amanhã.", en: "I'm going to travel tomorrow. (informal, common)" },
          { pt: "Viajarei amanhã.", en: "I will travel tomorrow. (formal future)" },
        ],
      },
      {
        title: "Forming the simple future",
        body: "Beautifully simple: take the WHOLE infinitive and add -ei, -ás, -á, -emos, -ão. Works the same for all three verb types!",
        items: [
          { pt: "falarei", en: "I will speak — falar + ei" },
          { pt: "falarás", en: "you will speak" },
          { pt: "falará", en: "he/she will speak" },
          { pt: "falaremos", en: "we will speak" },
          { pt: "falarão", en: "they will speak" },
        ],
      },
      {
        title: "Three irregular stems",
        body: "Only three verbs change their stem: fazer→far-, dizer→dir-, trazer→trar-. Endings stay the same.",
        items: [
          { pt: "farei", en: "I will do/make (fazer)" },
          { pt: "direi", en: "I will say (dizer)" },
          { pt: "Amanhã farei o jantar.", en: "Tomorrow I'll make dinner." },
        ],
      },
    ],
    quiz: [
      { t: "mc", q: "The everyday spoken way to say “I'm going to eat”:", opts: ["Comerei", "Vou comer", "Comia", "Comi"], a: 1 },
      { t: "type", q: "Simple future: eu ___ (falar — I will speak)", a: "falarei", say: "falarei" },
      { t: "mc", q: "To form the simple future, you add endings to:", opts: ["the verb stem", "the whole infinitive", "the past form", "nothing"], a: 1 },
      { t: "mc", q: "“I will do/make” (irregular fazer):", opts: ["fazerei", "farei", "fazerá", "fiz"], a: 1 },
      { t: "listen-mc", say: "Viajarei amanhã.", q: "🔊 When will I travel?", opts: ["yesterday", "today", "tomorrow", "next week"], a: 2 },
      { t: "type", q: "Simple future: nós ___ (falar — we will speak)", a: "falaremos", say: "falaremos" },
    ],
  },
  {
    id: "a2u4",
    title: "Por vs Para",
    icon: "↔️",
    desc: "Two words for 'for' — when to use which.",
    cards: [
      {
        title: "PARA — destination, purpose, deadline",
        body: "Think PARA = a forward arrow → toward a goal, recipient, or future point.",
        items: [
          { pt: "Vou para Lisboa.", en: "I'm going to Lisbon. (destination)" },
          { pt: "Isto é para ti.", en: "This is for you. (recipient)" },
          { pt: "Estudo para aprender.", en: "I study (in order) to learn. (purpose)" },
          { pt: "É para amanhã.", en: "It's for tomorrow. (deadline)" },
        ],
      },
      {
        title: "POR — cause, exchange, duration, 'through'",
        body: "Think POR = the reason behind, the price, the path through. Often contracts: por + o = pelo, por + a = pela.",
        items: [
          { pt: "Obrigado por tudo.", en: "Thanks for everything. (cause/reason)" },
          { pt: "Paguei dez euros por isto.", en: "I paid €10 for this. (exchange)" },
          { pt: "Estudei por duas horas.", en: "I studied for two hours. (duration)" },
          { pt: "Passei pela praça.", en: "I passed through the square. (por + a = pela)" },
        ],
      },
      {
        title: "Quick contrast",
        body: "Same English “for”, very different meaning.",
        items: [
          { pt: "para mim", en: "for me (intended recipient)" },
          { pt: "por mim", en: "for my sake / because of me" },
          { pt: "Saio para o trabalho.", en: "I leave for work. (destination)" },
          { pt: "Obrigado por vir.", en: "Thanks for coming. (reason)" },
        ],
      },
    ],
    quiz: [
      { t: "mc", q: "“This is for you” (recipient):", opts: ["Isto é por ti", "Isto é para ti", "Isto é pela ti", "Isto é de ti"], a: 1 },
      { t: "mc", q: "“Thanks for everything” (cause):", opts: ["Obrigado para tudo", "Obrigado por tudo", "Obrigado de tudo", "Obrigado em tudo"], a: 1 },
      { t: "mc", q: "“I'm going to Lisbon” (destination) uses:", opts: ["por", "para", "pela", "pelo"], a: 1 },
      { t: "mc", q: "por + a contracts to:", opts: ["pela", "pelo", "para", "pra"], a: 0 },
      { t: "listen-mc", say: "Paguei dez euros por isto.", q: "🔊 How much did I pay?", opts: ["€2", "€10", "€12", "€20"], a: 1 },
      { t: "mc", q: "“I study to learn” (purpose):", opts: ["Estudo por aprender", "Estudo para aprender", "Estudo pela aprender", "Estudo de aprender"], a: 1 },
    ],
  },
  {
    id: "a2u5",
    title: "Object Pronouns",
    icon: "👉",
    desc: "me, te, o, a, lhe — replace nouns smoothly.",
    cards: [
      {
        title: "Direct object pronouns",
        body: "Replace the thing receiving the action. In PT-PT they usually attach AFTER the verb with a hyphen: Vejo-te (I see you).",
        items: [
          { pt: "me", en: "me — Ela vê-me. (She sees me.)" },
          { pt: "te", en: "you — Vejo-te. (I see you.)" },
          { pt: "o / a", en: "him/it / her/it — Conheço-o. (I know him.)" },
          { pt: "nos", en: "us — Eles vêem-nos." },
          { pt: "os / as", en: "them — Compro-os. (I buy them.)" },
        ],
      },
      {
        title: "Indirect object pronouns",
        body: "Replace the recipient (to whom). lhe = to him/her, lhes = to them.",
        items: [
          { pt: "Dou-te o livro.", en: "I give you the book. (te = to you)" },
          { pt: "Digo-lhe a verdade.", en: "I tell him/her the truth. (lhe = to him/her)" },
          { pt: "Escrevo-lhes.", en: "I write to them. (lhes = to them)" },
        ],
      },
      {
        title: "Pronoun moves before the verb",
        body: "In negatives and after some words (não, que, question words), the pronoun jumps BEFORE the verb. Não te vejo (not vejo-te).",
        items: [
          { pt: "Vejo-te.", en: "I see you. (positive → after)" },
          { pt: "Não te vejo.", en: "I don't see you. (negative → before!)" },
          { pt: "Quando me vês?", en: "When do you see me? (question → before)" },
        ],
      },
    ],
    quiz: [
      { t: "mc", q: "“I see you” (PT-PT, positive):", opts: ["Te vejo", "Vejo-te", "Vejo te", "Eu te ver"], a: 1 },
      { t: "mc", q: "In a NEGATIVE sentence, the pronoun goes:", opts: ["after the verb", "before the verb", "at the end", "it disappears"], a: 1 },
      { t: "mc", q: "“lhe” means:", opts: ["me", "to him/her", "us", "them (direct)"], a: 1 },
      { t: "listen-mc", say: "Não te vejo.", q: "🔊 What does this mean?", opts: ["I see you", "I don't see you", "I saw you", "Do you see me?"], a: 1 },
      { t: "mc", q: "“I give you the book” →", opts: ["Dou o livro te", "Dou-te o livro", "Te dou o livro", "Dou livro-te"], a: 1 },
      { t: "type", q: "Fill in: Quando ___ vês? (me — when do you see me?)", a: "me", say: "Quando me vês?" },
    ],
  },
  {
    id: "a2u6",
    title: "Comparisons",
    icon: "📊",
    desc: "Bigger, smaller, the best — compare things.",
    cards: [
      {
        title: "More / less / as ... as",
        body: "mais...(do) que = more than, menos...(do) que = less than, tão...como = as...as.",
        items: [
          { pt: "O Porto é mais pequeno do que Lisboa.", en: "Porto is smaller than Lisbon." },
          { pt: "Este café é menos caro do que aquele.", en: "This coffee is less expensive than that one." },
          { pt: "Ela é tão alta como eu.", en: "She is as tall as me." },
        ],
      },
      {
        title: "Superlatives — the most",
        body: "o/a mais... = the most, o/a menos... = the least.",
        items: [
          { pt: "É o restaurante mais caro da cidade.", en: "It's the most expensive restaurant in the city." },
          { pt: "É a praia mais bonita.", en: "It's the most beautiful beach." },
        ],
      },
      {
        title: "Irregular comparatives",
        body: "Like English good→better, some are irregular. Memorize these four.",
        items: [
          { pt: "bom → melhor", en: "good → better" },
          { pt: "mau → pior", en: "bad → worse" },
          { pt: "grande → maior", en: "big → bigger" },
          { pt: "pequeno → menor", en: "small → smaller" },
          { pt: "Este é melhor do que aquele.", en: "This one is better than that one." },
        ],
      },
    ],
    quiz: [
      { t: "mc", q: "“Porto is smaller than Lisbon” →", opts: ["mais pequeno que", "menos pequeno que", "tão pequeno como", "o mais pequeno"], a: 0 },
      { t: "mc", q: "“as tall as me” →", opts: ["mais alta que mim", "tão alta como eu", "menos alta que eu", "a mais alta"], a: 1 },
      { t: "mc", q: "“good → better” in Portuguese:", opts: ["bom → mais bom", "bom → melhor", "bom → pior", "bom → maior"], a: 1 },
      { t: "listen-mc", say: "É a praia mais bonita.", q: "🔊 What's being said about the beach?", opts: ["it's small", "it's the most beautiful", "it's far", "it's crowded"], a: 1 },
      { t: "mc", q: "“bad → worse” →", opts: ["mau → menor", "mau → pior", "mau → melhor", "mau → maior"], a: 1 },
      { t: "type", q: "Fill in: Este é ___ do que aquele. (better)", a: "melhor", say: "Este é melhor do que aquele." },
    ],
  },
  {
    id: "a2u7",
    title: "At the Doctor & Body",
    icon: "🩺",
    desc: "Body parts and explaining what hurts — vital in Portugal.",
    cards: [
      {
        title: "Body parts",
        body: "Essential vocabulary, especially at the pharmacy or doctor.",
        items: [
          { pt: "a cabeça", en: "head" },
          { pt: "a garganta", en: "throat" },
          { pt: "o estômago", en: "stomach" },
          { pt: "as costas", en: "back (always plural!)" },
          { pt: "a perna / o braço", en: "leg / arm" },
          { pt: "o dente", en: "tooth" },
        ],
      },
      {
        title: "Saying what hurts",
        body: "Use doer (to hurt): dói (singular thing hurts), doem (plural). Or “tenho dores de...”.",
        items: [
          { pt: "Dói-me a cabeça.", en: "My head hurts. (lit. it hurts me the head)" },
          { pt: "Doem-me as costas.", en: "My back hurts. (plural → doem)" },
          { pt: "Tenho dores de garganta.", en: "I have a sore throat." },
          { pt: "Estou doente.", en: "I'm sick." },
          { pt: "Tenho febre.", en: "I have a fever." },
        ],
      },
      {
        title: "At the pharmacy",
        body: "The farmácia is your first stop in Portugal — pharmacists give advice for minor issues.",
        items: [
          { pt: "Preciso de um medicamento.", en: "I need a medicine." },
          { pt: "Tem alguma coisa para a tosse?", en: "Do you have something for a cough?" },
          { pt: "Como devo tomar?", en: "How should I take it?" },
        ],
      },
    ],
    quiz: [
      { t: "mc", q: "“My head hurts” →", opts: ["Dói-me a cabeça", "Tenho a cabeça", "A cabeça é dói", "Estou cabeça"], a: 0 },
      { t: "mc", q: "Why “doem-me as costas” and not “dói”?", opts: ["costas is formal", "costas is plural", "it's a typo", "back is special"], a: 1 },
      { t: "listen-mc", say: "Tenho dores de garganta.", q: "🔊 What's the problem?", opts: ["headache", "sore throat", "stomachache", "backache"], a: 1 },
      { t: "type", q: "Type the word for “head”:", a: "a cabeca", say: "a cabeça" },
      { t: "mc", q: "“I have a fever” →", opts: ["Tenho febre", "Sou febre", "Estou febre", "Dói-me febre"], a: 0 },
      { t: "mc", q: "Where do Portuguese often go first for minor ailments?", opts: ["hospital", "a farmácia", "the police", "the market"], a: 1 },
    ],
  },
  {
    id: "a2u8",
    title: "Connectors & Opinions",
    icon: "💬",
    desc: "Link ideas and express what you think.",
    cards: [
      {
        title: "Linking words",
        body: "Move beyond simple sentences. These connectors make you sound fluent.",
        items: [
          { pt: "mas", en: "but" },
          { pt: "porque", en: "because" },
          { pt: "também", en: "also / too" },
          { pt: "por isso", en: "therefore / so" },
          { pt: "no entanto", en: "however" },
          { pt: "então", en: "then / so" },
        ],
      },
      {
        title: "Giving opinions",
        body: "Phrases to share your view — common in conversation with your mentor.",
        items: [
          { pt: "Acho que...", en: "I think that..." },
          { pt: "Na minha opinião...", en: "In my opinion..." },
          { pt: "Concordo. / Não concordo.", en: "I agree. / I disagree." },
          { pt: "Gosto mais de...", en: "I prefer... (lit. I like more)" },
          { pt: "Para mim...", en: "For me / As for me..." },
        ],
      },
      {
        title: "Putting it together",
        body: "Real sentences combining tenses, connectors and opinions — everything you've learned.",
        items: [
          { pt: "Acho que Lisboa é bonita, mas o Porto é melhor.", en: "I think Lisbon is beautiful, but Porto is better." },
          { pt: "Ontem fiquei em casa porque estava a chover.", en: "Yesterday I stayed home because it was raining." },
          { pt: "Gosto de café, por isso vou à pastelaria todos os dias.", en: "I like coffee, so I go to the café every day." },
        ],
      },
    ],
    quiz: [
      { t: "mc", q: "“but” in Portuguese:", opts: ["porque", "mas", "também", "então"], a: 1 },
      { t: "mc", q: "“I think that...” →", opts: ["Concordo que", "Acho que", "Gosto que", "Para que"], a: 1 },
      { t: "mc", q: "“because” →", opts: ["por isso", "mas", "porque", "no entanto"], a: 2 },
      { t: "listen-mc", say: "Não concordo.", q: "🔊 What does this mean?", opts: ["I agree", "I disagree", "I think so", "I don't know"], a: 1 },
      { t: "type", q: "Type the word for “also/too”:", a: "tambem", say: "também" },
      { t: "mc", q: "“I like coffee, SO I go every day” — “so/therefore”:", opts: ["mas", "porque", "por isso", "também"], a: 2 },
    ],
  },
];
