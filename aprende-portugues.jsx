import React, { useState, useEffect, useRef, useMemo } from "react";

/* ============================================================
   APRENDE! — European Portuguese for Absolute Beginners
   Phase 1: A0 level · audio · listening · dialogues · gamification
   ============================================================ */

/* ---------- AUDIO (Web Speech API, prefers pt-PT) ---------- */
let cachedVoice = null;
function pickVoice() {
  if (!window.speechSynthesis) return null;
  const vs = window.speechSynthesis.getVoices() || [];
  return (
    vs.find((v) => v.lang === "pt-PT") ||
    vs.find((v) => (v.lang || "").toLowerCase().startsWith("pt-pt")) ||
    vs.find((v) => (v.lang || "").toLowerCase().startsWith("pt")) ||
    null
  );
}
function speak(text, rate = 0.92) {
  try {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    cachedVoice = pickVoice() || cachedVoice;
    if (cachedVoice) u.voice = cachedVoice;
    u.lang = "pt-PT";
    u.rate = rate;
    u.pitch = 1;
    window.speechSynthesis.speak(u);
  } catch (e) {}
}
const norm = (s) =>
  (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,!?;:¡¿"']/g, "")
    .replace(/\s+/g, " ")
    .trim();

/* =================== VOCABULARY DATABASE =================== */
const VOCAB = {
  greetings: {
    label: "Greetings & Survival",
    icon: "👋",
    words: [
      { pt: "bom dia", en: "good morning", hint: "bong DEE-uh" },
      { pt: "boa tarde", en: "good afternoon", hint: "BOH-uh TARD" },
      { pt: "boa noite", en: "good evening / night", hint: "BOH-uh NOYT" },
      { pt: "olá", en: "hello", hint: "oh-LAH" },
      { pt: "adeus", en: "goodbye", hint: "uh-DEUSH" },
      { pt: "até logo", en: "see you later", hint: "uh-TEH LOH-goo" },
      { pt: "obrigado", en: "thank you (man speaking)", g: "m", hint: "oh-bree-GAH-doo" },
      { pt: "obrigada", en: "thank you (woman speaking)", g: "f", hint: "oh-bree-GAH-duh" },
      { pt: "se faz favor", en: "please (very Portuguese!)", hint: "s'fash fuh-VOR" },
      { pt: "desculpe", en: "excuse me / sorry", hint: "dush-KOOLP" },
      { pt: "com licença", en: "excuse me (passing by)", hint: "kong lee-SEN-suh" },
      { pt: "não percebo", en: "I don't understand", hint: "nowng per-SEH-boo" },
      { pt: "pode repetir?", en: "can you repeat?", hint: "pod reh-peh-TEER" },
      { pt: "fala inglês?", en: "do you speak English?", hint: "FAH-luh een-GLESH" },
    ],
  },
  numbers: {
    label: "Numbers",
    icon: "🔢",
    words: [
      { pt: "um", en: "one", g: "m" }, { pt: "dois", en: "two", g: "m" },
      { pt: "três", en: "three" }, { pt: "quatro", en: "four" },
      { pt: "cinco", en: "five" }, { pt: "seis", en: "six" },
      { pt: "sete", en: "seven" }, { pt: "oito", en: "eight" },
      { pt: "nove", en: "nine" }, { pt: "dez", en: "ten" },
      { pt: "onze", en: "eleven" }, { pt: "doze", en: "twelve" },
      { pt: "quinze", en: "fifteen" }, { pt: "vinte", en: "twenty" },
      { pt: "cinquenta", en: "fifty" }, { pt: "cem", en: "one hundred" },
    ],
  },
  days: {
    label: "Days of the Week",
    icon: "📅",
    words: [
      { pt: "segunda-feira", en: "Monday", g: "f" },
      { pt: "terça-feira", en: "Tuesday", g: "f" },
      { pt: "quarta-feira", en: "Wednesday", g: "f" },
      { pt: "quinta-feira", en: "Thursday", g: "f" },
      { pt: "sexta-feira", en: "Friday", g: "f" },
      { pt: "sábado", en: "Saturday", g: "m" },
      { pt: "domingo", en: "Sunday", g: "m" },
      { pt: "hoje", en: "today" },
      { pt: "amanhã", en: "tomorrow" },
      { pt: "ontem", en: "yesterday" },
      { pt: "o fim de semana", en: "the weekend", g: "m" },
    ],
  },
  months: {
    label: "Months & Seasons",
    icon: "🗓️",
    words: [
      { pt: "janeiro", en: "January" }, { pt: "fevereiro", en: "February" },
      { pt: "março", en: "March" }, { pt: "abril", en: "April" },
      { pt: "maio", en: "May" }, { pt: "junho", en: "June" },
      { pt: "julho", en: "July" }, { pt: "agosto", en: "August" },
      { pt: "setembro", en: "September" }, { pt: "outubro", en: "October" },
      { pt: "novembro", en: "November" }, { pt: "dezembro", en: "December" },
      { pt: "o verão", en: "summer", g: "m" }, { pt: "o inverno", en: "winter", g: "m" },
      { pt: "a primavera", en: "spring", g: "f" }, { pt: "o outono", en: "autumn", g: "m" },
    ],
  },
  foods: {
    label: "Food & Café",
    icon: "🥐",
    words: [
      { pt: "o pão", en: "bread", g: "m" },
      { pt: "o queijo", en: "cheese", g: "m" },
      { pt: "o leite", en: "milk", g: "m" },
      { pt: "a água", en: "water", g: "f" },
      { pt: "o café", en: "coffee", g: "m" },
      { pt: "uma bica", en: "an espresso (Lisbon word!)", g: "f" },
      { pt: "um galão", en: "milky coffee in a glass", g: "m" },
      { pt: "o pastel de nata", en: "custard tart", g: "m" },
      { pt: "a maçã", en: "apple", g: "f" },
      { pt: "a laranja", en: "orange", g: "f" },
      { pt: "o peixe", en: "fish", g: "m" },
      { pt: "o frango", en: "chicken", g: "m" },
      { pt: "o arroz", en: "rice", g: "m" },
      { pt: "a sopa", en: "soup", g: "f" },
      { pt: "o pequeno-almoço", en: "breakfast (PT-PT!)", g: "m" },
      { pt: "o almoço", en: "lunch", g: "m" },
      { pt: "o jantar", en: "dinner", g: "m" },
    ],
  },
  animals: {
    label: "Animals",
    icon: "🐈",
    words: [
      { pt: "o cão", en: "dog (PT-PT — Brazil says cachorro)", g: "m" },
      { pt: "o gato", en: "cat", g: "m" },
      { pt: "o pássaro", en: "bird", g: "m" },
      { pt: "o peixe", en: "fish", g: "m" },
      { pt: "o cavalo", en: "horse", g: "m" },
      { pt: "a vaca", en: "cow", g: "f" },
      { pt: "a galinha", en: "hen", g: "f" },
      { pt: "o porco", en: "pig", g: "m" },
      { pt: "a ovelha", en: "sheep", g: "f" },
      { pt: "o coelho", en: "rabbit", g: "m" },
    ],
  },
  family: {
    label: "Family & People",
    icon: "👪",
    words: [
      { pt: "a mãe", en: "mother", g: "f" },
      { pt: "o pai", en: "father", g: "m" },
      { pt: "o irmão", en: "brother", g: "m" },
      { pt: "a irmã", en: "sister", g: "f" },
      { pt: "o filho", en: "son", g: "m" },
      { pt: "a filha", en: "daughter", g: "f" },
      { pt: "o amigo", en: "friend (male)", g: "m" },
      { pt: "a amiga", en: "friend (female)", g: "f" },
      { pt: "o senhor", en: "the gentleman / sir", g: "m" },
      { pt: "a senhora", en: "the lady / madam", g: "f" },
    ],
  },
  places: {
    label: "Places in Town",
    icon: "🏛️",
    words: [
      { pt: "a casa", en: "house / home", g: "f" },
      { pt: "a escola", en: "school", g: "f" },
      { pt: "o mercado", en: "market", g: "m" },
      { pt: "a loja", en: "shop", g: "f" },
      { pt: "a pastelaria", en: "pastry café", g: "f" },
      { pt: "a farmácia", en: "pharmacy", g: "f" },
      { pt: "a praia", en: "beach", g: "f" },
      { pt: "o autocarro", en: "bus (PT-PT!)", g: "m" },
      { pt: "o comboio", en: "train (PT-PT!)", g: "m" },
      { pt: "a casa de banho", en: "bathroom (PT-PT!)", g: "f" },
      { pt: "o escritório", en: "office", g: "m" },
      { pt: "a rua", en: "street", g: "f" },
    ],
  },
};

/* =================== A0 UNITS (curriculum) =================== */
const UNITS = [
  {
    id: "u1",
    title: "Survival Phrases",
    icon: "🛟",
    desc: "Greetings, please & thank you — day-one Portuguese.",
    cards: [
      {
        title: "Greet like a local",
        body: "The Portuguese greet by time of day. Use these constantly — entering a shop, a café, the elevator. Not greeting is considered rude in Portugal!",
        items: [
          { pt: "Bom dia", en: "good morning (until lunch)" },
          { pt: "Boa tarde", en: "good afternoon (until dark)" },
          { pt: "Boa noite", en: "good evening / night" },
          { pt: "Olá! Tudo bem?", en: "Hi! All good?" },
          { pt: "Tudo bem, obrigado.", en: "All good, thanks. (man)" },
        ],
      },
      {
        title: "The magic words",
        body: "European Portuguese politeness essentials. Note: men say obrigado, women say obrigada — it agrees with the SPEAKER, not the listener.",
        items: [
          { pt: "se faz favor", en: "please — the classic PT-PT form" },
          { pt: "obrigado / obrigada", en: "thank you (m. / f. speaker)" },
          { pt: "desculpe", en: "sorry / excuse me" },
          { pt: "com licença", en: "excuse me (to pass by)" },
          { pt: "de nada", en: "you're welcome" },
        ],
      },
      {
        title: "When you're lost",
        body: "Your lifeline phrases. People in Portugal switch to English fast — these phrases politely keep the conversation in Portuguese so you learn.",
        items: [
          { pt: "Não percebo.", en: "I don't understand. (PT-PT uses perceber)" },
          { pt: "Pode repetir, se faz favor?", en: "Can you repeat, please?" },
          { pt: "Mais devagar, se faz favor.", en: "Slower, please." },
          { pt: "Como se diz... em português?", en: "How do you say... in Portuguese?" },
          { pt: "Chamo-me Ana.", en: "My name is Ana. (PT-PT word order!)" },
        ],
      },
    ],
    quiz: [
      { t: "mc", q: "It's 10 in the morning. You enter a pastelaria. You say:", opts: ["Boa noite", "Bom dia", "Boa tarde", "Adeus"], a: 1 },
      { t: "mc", q: "A woman says thank you. She says:", opts: ["obrigado", "obrigada", "obrigados", "de nada"], a: 1 },
      { t: "listen-mc", say: "Pode repetir, se faz favor?", q: "🔊 Listen. What did you hear?", opts: ["Can you repeat, please?", "How much is it?", "Where is the bathroom?", "See you later"], a: 0 },
      { t: "type", q: "Type the PT-PT word for please (3 words):", a: "se faz favor", say: "se faz favor" },
      { t: "mc", q: "“Não percebo” means:", opts: ["I don't want it", "I don't understand", "I'm not Portuguese", "No thank you"], a: 1 },
      { t: "dictation", say: "Boa tarde", q: "🔊 Dictation — type exactly what you hear:", a: "boa tarde" },
    ],
  },
  {
    id: "u2",
    title: "Sounds of Portuguese",
    icon: "🔊",
    desc: "Train your ear: ão, lh, nh, ç and the famous Lisbon “sh”.",
    cards: [
      {
        title: "The nasal ão",
        body: "The most Portuguese sound of all. Like “owng” said through your nose. Tap each word, then repeat it aloud — twice.",
        items: [
          { pt: "pão", en: "bread" },
          { pt: "não", en: "no" },
          { pt: "cão", en: "dog" },
          { pt: "galão", en: "milky coffee" },
          { pt: "coração", en: "heart" },
        ],
      },
      {
        title: "lh and nh",
        body: "lh ≈ the “lli” in million. nh ≈ the “ny” in canyon. Listen, then shadow (repeat right after the audio).",
        items: [
          { pt: "filho", en: "son — FEE-lyoo" },
          { pt: "mulher", en: "woman — moo-LYER" },
          { pt: "vinho", en: "wine — VEE-nyoo" },
          { pt: "manhã", en: "morning — muh-NYANG" },
          { pt: "senhor", en: "sir — se-NYOR" },
        ],
      },
      {
        title: "The Lisbon “sh”",
        body: "In European Portuguese, s at the end of a word (or before a consonant) sounds like SH. This is the #1 thing that makes PT-PT sound different from Brazilian.",
        items: [
          { pt: "dois", en: "two — sounds like “doysh”" },
          { pt: "boas tardes", en: "good afternoons — “boash tardsh”" },
          { pt: "Lisboa", en: "Lisbon — “Lizh-BOH-uh”" },
          { pt: "está", en: "is — often shortened to “shtá”!" },
          { pt: "obrigado às vezes", en: "vowels get swallowed — listen closely" },
        ],
      },
      {
        title: "ç and j",
        body: "ç is always a soft “s” sound. j is like the “s” in pleasure.",
        items: [
          { pt: "praça", en: "square — PRAH-suh" },
          { pt: "almoço", en: "lunch — al-MOH-soo" },
          { pt: "queijo", en: "cheese — KAY-zhoo" },
          { pt: "janeiro", en: "January — zhuh-NAY-roo" },
        ],
      },
    ],
    quiz: [
      { t: "listen-mc", say: "pão", q: "🔊 Which word did you hear?", opts: ["pau", "pão", "pá", "paz"], a: 1 },
      { t: "listen-mc", say: "vinho", q: "🔊 Which word did you hear?", opts: ["vindo", "vilha", "vinho", "vino"], a: 2 },
      { t: "mc", q: "In European Portuguese, the final s in “dois” sounds like:", opts: ["s as in sun", "z as in zoo", "sh as in shoe", "silent"], a: 2 },
      { t: "listen-mc", say: "mulher", q: "🔊 Which word did you hear?", opts: ["melhor", "mulher", "molhar", "milho"], a: 1 },
      { t: "dictation", say: "queijo", q: "🔊 Dictation — type the word you hear:", a: "queijo" },
      { t: "listen-mc", say: "coração", q: "🔊 Which word did you hear?", opts: ["coração", "correção", "канção", "colação"], a: 0 },
    ],
  },
  {
    id: "u3",
    title: "Numbers & Prices",
    icon: "💶",
    desc: "Count to 100 and understand prices at the market.",
    cards: [
      {
        title: "0 – 12",
        body: "These twelve carry you through phone numbers, prices and times. Listen and repeat each one.",
        items: [
          { pt: "zero, um, dois, três", en: "0 1 2 3" },
          { pt: "quatro, cinco, seis", en: "4 5 6" },
          { pt: "sete, oito, nove", en: "7 8 9" },
          { pt: "dez, onze, doze", en: "10 11 12" },
        ],
      },
      {
        title: "Teens & tens",
        body: "13–19 mostly end in -ze. Tens end in -nta (except vinte). 21+ uses “e” (and): vinte e um = 21.",
        items: [
          { pt: "treze, catorze, quinze", en: "13 14 15" },
          { pt: "dezasseis, dezassete, dezoito, dezanove", en: "16 17 18 19 (PT-PT spelling!)" },
          { pt: "vinte, trinta, quarenta, cinquenta", en: "20 30 40 50" },
          { pt: "sessenta, setenta, oitenta, noventa, cem", en: "60 70 80 90 100" },
          { pt: "vinte e cinco", en: "25" },
        ],
      },
      {
        title: "Prices — €",
        body: "Pattern: X euros e Y (cêntimos). €4,50 = “quatro euros e cinquenta”. Shopkeepers say this fast — train with the listening drill after this unit!",
        items: [
          { pt: "Quanto custa?", en: "How much does it cost?" },
          { pt: "São dois euros e vinte.", en: "That's €2,20." },
          { pt: "Custa um euro e cinquenta.", en: "It costs €1,50." },
          { pt: "A conta, se faz favor.", en: "The bill, please." },
        ],
      },
    ],
    quiz: [
      { t: "mc", q: "How do you ask “how much does it cost”?", opts: ["Quanto custa?", "Que horas são?", "Quando custa?", "Como custa?"], a: 0 },
      { t: "num", say: "São quatro euros e cinquenta.", q: "🔊 Listen to the price. Type it as a number (e.g. 3,20):", a: ["4,50", "4.50", "450"] },
      { t: "num", say: "Custa dois euros e vinte.", q: "🔊 Listen to the price. Type it (e.g. 3,20):", a: ["2,20", "2.20", "220"] },
      { t: "mc", q: "“dezasseis” (PT-PT spelling) is:", opts: ["6", "16", "60", "17"], a: 1 },
      { t: "type", q: "Write 25 in Portuguese (three words):", a: "vinte e cinco", say: "vinte e cinco" },
      { t: "num", say: "nove", q: "🔊 Type the number you hear as a digit:", a: ["9"] },
    ],
  },
  {
    id: "u4",
    title: "Pronouns & SER",
    icon: "🙋",
    desc: "I, you, we... and your first verb: to be.",
    cards: [
      {
        title: "The pronouns (PT-PT)",
        body: "In Portugal, tu is the everyday informal “you” (friends, family, kids). Você exists but is used carefully — with strangers it's more natural to say o senhor / a senhora, or just the verb alone.",
        items: [
          { pt: "eu", en: "I — 1st person singular" },
          { pt: "tu", en: "you (informal) — 2nd person singular" },
          { pt: "ele / ela", en: "he / she — 3rd person singular" },
          { pt: "nós", en: "we — 1st person plural" },
          { pt: "vocês", en: "you all — 2nd person plural" },
          { pt: "eles / elas", en: "they (m. / f.) — 3rd person plural" },
        ],
      },
      {
        title: "SER — to be (permanent)",
        body: "SER is for identity, origin, profession — things that don't change easily. Soon you'll meet ESTAR for temporary states. Listen and chant the table like a rhythm.",
        items: [
          { pt: "eu sou", en: "I am — Eu sou a Ana." },
          { pt: "tu és", en: "you are — Tu és inglês?" },
          { pt: "ele/ela é", en: "he/she is — Ela é professora." },
          { pt: "nós somos", en: "we are — Nós somos amigos." },
          { pt: "vocês são", en: "you all are" },
          { pt: "eles/elas são", en: "they are — Eles são de Lisboa." },
        ],
      },
      {
        title: "Introduce yourself",
        body: "Pronouns are often dropped — the verb ending already says who. “Sou inglês” is perfectly natural.",
        items: [
          { pt: "Sou de Inglaterra.", en: "I'm from England." },
          { pt: "Sou o David. / Sou a Maria.", en: "I'm David / Maria. (article before names!)" },
          { pt: "De onde és?", en: "Where are you from? (informal)" },
          { pt: "És estudante?", en: "Are you a student?" },
        ],
      },
    ],
    quiz: [
      { t: "mc", q: "“We are” in Portuguese:", opts: ["nós são", "nós somos", "nós és", "nós sou"], a: 1 },
      { t: "type", q: "Complete: Tu ___ de Lisboa? (verb SER)", a: "es", say: "Tu és de Lisboa?" },
      { t: "mc", q: "In Portugal, the everyday informal “you” is:", opts: ["você", "tu", "vós", "o senhor"], a: 1 },
      { t: "listen-mc", say: "Eles são de Lisboa.", q: "🔊 Who is from Lisbon?", opts: ["I am", "She is", "They are", "We are"], a: 2 },
      { t: "mc", q: "“Ela ___ professora.”", opts: ["é", "és", "sou", "somos"], a: 0 },
      { t: "dictation", say: "Eu sou a Ana.", q: "🔊 Dictation — type the sentence:", a: "eu sou a ana" },
    ],
  },
  {
    id: "u5",
    title: "Articles & Gender",
    icon: "⚖️",
    desc: "o, a, um, uma — and how to guess a word's gender.",
    cards: [
      {
        title: "Definite: the",
        body: "Every noun is masculine or feminine. THE has four forms. Portuguese even puts articles before names: a Maria, o João.",
        items: [
          { pt: "o pão", en: "the bread (m. sing.)" },
          { pt: "a casa", en: "the house (f. sing.)" },
          { pt: "os pães", en: "the breads (m. pl.)" },
          { pt: "as casas", en: "the houses (f. pl.)" },
        ],
      },
      {
        title: "Indefinite: a / some",
        body: "A/AN also has four forms — uns/umas mean “some”.",
        items: [
          { pt: "um café", en: "a coffee (m.)" },
          { pt: "uma bica", en: "an espresso (f.)" },
          { pt: "uns livros", en: "some books (m. pl.)" },
          { pt: "umas maçãs", en: "some apples (f. pl.)" },
        ],
      },
      {
        title: "Guessing gender",
        body: "Rules of thumb that work ~90% of the time: -o → masculine, -a → feminine. Also: -ção and -dade are feminine; -or is masculine. Exceptions exist (o dia, o mapa) — learn nouns WITH their article.",
        items: [
          { pt: "o gato, o livro, o queijo", en: "-o → masculine" },
          { pt: "a escola, a sopa, a loja", en: "-a → feminine" },
          { pt: "a estação, a cidade", en: "-ção / -dade → feminine" },
          { pt: "o professor, a flor (exception!)", en: "-or → usually masculine" },
          { pt: "o dia, o mapa, o problema", en: "famous exceptions — masculine!" },
        ],
      },
    ],
    quiz: [
      { t: "mc", q: "___ casa (the house):", opts: ["o", "a", "os", "um"], a: 1 },
      { t: "mc", q: "“A coffee, please” →", opts: ["uma café", "um café", "o cafés", "uns café"], a: 1 },
      { t: "mc", q: "“a estação” is feminine because:", opts: ["it ends in -o", "words in -ção are feminine", "stations are female", "it's an exception"], a: 1 },
      { t: "mc", q: "Which is the famous EXCEPTION (masculine despite -a)?", opts: ["a sopa", "o dia", "a loja", "a amiga"], a: 1 },
      { t: "type", q: "Type the article: ___ pastel de nata (a custard tart)", a: "um" },
      { t: "mc", q: "“the apples” →", opts: ["as maçãs", "os maçãs", "umas maçã", "a maçãs"], a: 0 },
    ],
  },
  {
    id: "u6",
    title: "-AR Verbs (Present)",
    icon: "⚙️",
    desc: "One pattern unlocks hundreds of verbs: falar, morar, estudar...",
    cards: [
      {
        title: "The -AR machine",
        body: "Take the verb, cut -ar, add the ending for each person. FALAR (to speak): stem FAL- . Listen to the rhythm of the endings: -o, -as, -a, -amos, -am.",
        items: [
          { pt: "eu falo", en: "I speak — FAL + o" },
          { pt: "tu falas", en: "you speak — FAL + as" },
          { pt: "ele/ela fala", en: "he/she speaks — FAL + a" },
          { pt: "nós falamos", en: "we speak — FAL + amos" },
          { pt: "eles/elas falam", en: "they speak — FAL + am" },
        ],
      },
      {
        title: "Same machine, new verbs",
        body: "The pattern is identical for almost every -AR verb. Try hearing the pattern in these:",
        items: [
          { pt: "morar — eu moro em Lisboa", en: "to live — I live in Lisbon" },
          { pt: "estudar — tu estudas português", en: "to study — you study Portuguese" },
          { pt: "trabalhar — ela trabalha muito", en: "to work — she works a lot" },
          { pt: "gostar de — nós gostamos de café", en: "to like — we like coffee (needs DE!)" },
          { pt: "falar — eles falam inglês", en: "to speak — they speak English" },
        ],
      },
      {
        title: "Make real sentences",
        body: "Subject + verb + the rest. Pronouns optional. Negative = não before the verb.",
        items: [
          { pt: "Moro em Portugal.", en: "I live in Portugal." },
          { pt: "Não falo bem português.", en: "I don't speak Portuguese well." },
          { pt: "Gostas de pastéis de nata?", en: "Do you like custard tarts?" },
          { pt: "Trabalhamos amanhã.", en: "We work tomorrow." },
        ],
      },
    ],
    quiz: [
      { t: "type", q: "Conjugate: eu ___ (falar)", a: "falo", say: "eu falo" },
      { t: "type", q: "Conjugate: tu ___ (morar)", a: "moras", say: "tu moras" },
      { t: "type", q: "Conjugate: nós ___ (estudar)", a: "estudamos", say: "nós estudamos" },
      { t: "mc", q: "“She works in Lisbon” →", opts: ["Ela trabalho em Lisboa", "Ela trabalha em Lisboa", "Ela trabalham em Lisboa", "Ela trabalhas em Lisboa"], a: 1 },
      { t: "listen-mc", say: "Nós gostamos de café.", q: "🔊 What do we like?", opts: ["tea", "coffee", "cake", "wine"], a: 1 },
      { t: "mc", q: "Negative of “Falo inglês”:", opts: ["Falo não inglês", "Não falo inglês", "Falo inglês não", "Nem falo inglês"], a: 1 },
    ],
  },
];

/* =================== DIALOGUES =================== */
const DIALOGUES = [
  {
    id: "d1",
    title: "Na Pastelaria",
    icon: "☕",
    setting: "Ordering coffee and a pastel de nata at a Lisbon pastry café.",
    lines: [
      { sp: "Empregado", pt: "Bom dia! Faz favor.", en: "Good morning! What can I get you? (lit. “please, go ahead”)" },
      { sp: "Você", pt: "Bom dia. Uma bica e um pastel de nata, se faz favor.", en: "Good morning. An espresso and a custard tart, please." },
      { sp: "Empregado", pt: "Com certeza. Mais alguma coisa?", en: "Certainly. Anything else?" },
      { sp: "Você", pt: "Não, obrigado. Quanto é?", en: "No, thank you. How much is it?" },
      { sp: "Empregado", pt: "São dois euros e trinta.", en: "That's €2,30." },
      { sp: "Você", pt: "Aqui está. Obrigado!", en: "Here you are. Thank you!" },
      { sp: "Empregado", pt: "Obrigado eu. Bom dia!", en: "Thank YOU. Good day!" },
    ],
    keys: ["Faz favor — waiters use it to mean “go ahead, order”", "Uma bica = espresso in Lisbon (in Porto: um cimbalino!)", "Quanto é? — quick way to ask the total", "Obrigado eu — a polite “no, thank YOU”"],
    quiz: [
      { t: "mc", q: "What does the customer order?", opts: ["A galão and bread", "An espresso and a custard tart", "Tea and a croissant", "Just water"], a: 1 },
      { t: "mc", q: "How much is the total?", opts: ["€2,13", "€3,20", "€2,30", "€2,03"], a: 2 },
      { t: "mc", q: "“Mais alguma coisa?” means:", opts: ["Is everything OK?", "Anything else?", "More coffee?", "Are you sure?"], a: 1 },
    ],
  },
  {
    id: "d2",
    title: "Na Loja",
    icon: "🛍️",
    setting: "Asking for a price and a size in a small clothes shop.",
    lines: [
      { sp: "Vendedora", pt: "Boa tarde! Posso ajudar?", en: "Good afternoon! Can I help?" },
      { sp: "Você", pt: "Boa tarde. Quanto custa esta camisa?", en: "Good afternoon. How much is this shirt?" },
      { sp: "Vendedora", pt: "Custa quinze euros.", en: "It costs €15." },
      { sp: "Você", pt: "Tem em tamanho M?", en: "Do you have it in size M?" },
      { sp: "Vendedora", pt: "Tenho, sim. Aqui está.", en: "Yes, I do. Here it is." },
      { sp: "Você", pt: "Ótimo, levo esta. Posso pagar com cartão?", en: "Great, I'll take this one. Can I pay by card?" },
      { sp: "Vendedora", pt: "Claro! Obrigada e boa tarde.", en: "Of course! Thank you and good afternoon." },
    ],
    keys: ["Posso ajudar? — Can I help? (posso = I can/may)", "Tem...? — Do you have...? The all-purpose shop question", "Levo esta — I'll take this one", "Tenho, sim — Portuguese answers yes by repeating the verb!"],
    quiz: [
      { t: "mc", q: "How much is the shirt?", opts: ["€5", "€15", "€50", "€13"], a: 1 },
      { t: "mc", q: "How do you ask “do you have it in size M?”", opts: ["Tem em tamanho M?", "É tamanho M?", "Quanto custa M?", "Posso tamanho M?"], a: 0 },
      { t: "mc", q: "Instead of just “sim”, the Portuguese often answer yes by:", opts: ["nodding only", "repeating the verb: “Tenho, sim”", "saying “claro” always", "saying “ok”"], a: 1 },
    ],
  },
  {
    id: "d3",
    title: "No Escritório",
    icon: "💼",
    setting: "First day — meeting a colleague at the office.",
    lines: [
      { sp: "Rui", pt: "Bom dia! Você é o novo colega?", en: "Good morning! Are you the new colleague?" },
      { sp: "Você", pt: "Bom dia! Sou, sim. Chamo-me Alex.", en: "Good morning! Yes, I am. My name is Alex." },
      { sp: "Rui", pt: "Muito prazer, Alex. Eu sou o Rui.", en: "Nice to meet you, Alex. I'm Rui." },
      { sp: "Você", pt: "Muito prazer. De onde é?", en: "Nice to meet you. Where are you from?" },
      { sp: "Rui", pt: "Sou do Porto, mas moro em Lisboa. E você?", en: "I'm from Porto, but I live in Lisbon. And you?" },
      { sp: "Você", pt: "Sou de Inglaterra. Trabalho aqui desde hoje!", en: "I'm from England. I work here as of today!" },
      { sp: "Rui", pt: "Bem-vindo! Um café antes da reunião?", en: "Welcome! A coffee before the meeting?" },
    ],
    keys: ["Chamo-me... — my name is... (note PT-PT word order)", "Muito prazer — nice to meet you", "Sou, sim — yes-by-verb again!", "Sou do Porto = de + o Porto → DO. Your first contraction!"],
    quiz: [
      { t: "mc", q: "Where is Rui from?", opts: ["Lisbon", "Porto", "England", "Coimbra"], a: 1 },
      { t: "mc", q: "“Chamo-me Alex” means:", opts: ["Call me later, Alex", "My name is Alex", "I call Alex", "Alex calls me"], a: 1 },
      { t: "mc", q: "“Sou do Porto” — “do” is a contraction of:", opts: ["de + o", "de + a", "em + o", "para + o"], a: 0 },
    ],
  },
];

/* =================== STORY MODE =================== */
const STORIES = [
  {
    id: "s1",
    title: "A manhã da Ana",
    icon: "🌅",
    lines: [
      { pt: "A Ana mora em Lisboa.", en: "Ana lives in Lisbon." },
      { pt: "De manhã, ela toma o pequeno-almoço numa pastelaria.", en: "In the morning, she has breakfast at a pastry café." },
      { pt: "Ela gosta de um galão e um pastel de nata.", en: "She likes a galão and a custard tart." },
      { pt: "“Bom dia! Quanto custa?”, pergunta a Ana.", en: "“Good morning! How much is it?”, asks Ana." },
      { pt: "“São dois euros e vinte”, diz o empregado.", en: "“It's €2,20”, says the waiter." },
      { pt: "A Ana paga, diz “obrigada” e vai para o trabalho de autocarro.", en: "Ana pays, says “thank you” and goes to work by bus." },
    ],
    glossary: [
      { pt: "mora", en: "lives (morar)" }, { pt: "pequeno-almoço", en: "breakfast" },
      { pt: "gosta de", en: "likes" }, { pt: "pergunta", en: "asks" },
      { pt: "paga", en: "pays" }, { pt: "autocarro", en: "bus" },
    ],
    quiz: [
      { t: "mc", q: "Where does Ana live?", opts: ["Porto", "Lisboa", "Faro", "Coimbra"], a: 1 },
      { t: "mc", q: "What does she like for breakfast?", opts: ["bica + bread", "galão + pastel de nata", "tea + cake", "juice + toast"], a: 1 },
      { t: "mc", q: "How does she go to work?", opts: ["by train", "on foot", "by bus", "by car"], a: 2 },
    ],
  },
  {
    id: "s2",
    title: "O gato do senhor José",
    icon: "🐈",
    lines: [
      { pt: "O senhor José tem um gato.", en: "Mr. José has a cat." },
      { pt: "O gato chama-se Pastel.", en: "The cat is called Pastel." },
      { pt: "O Pastel gosta de peixe e de leite.", en: "Pastel likes fish and milk." },
      { pt: "No sábado, o senhor José vai ao mercado.", en: "On Saturday, Mr. José goes to the market." },
      { pt: "Ele compra peixe fresco: “Dois peixes, se faz favor!”", en: "He buys fresh fish: “Two fish, please!”" },
      { pt: "Em casa, o Pastel está muito contente.", en: "At home, Pastel is very happy." },
    ],
    glossary: [
      { pt: "tem", en: "has (ter)" }, { pt: "chama-se", en: "is called" },
      { pt: "vai ao", en: "goes to the (a + o = ao)" }, { pt: "compra", en: "buys (comprar)" },
      { pt: "fresco", en: "fresh" }, { pt: "contente", en: "happy" },
    ],
    quiz: [
      { t: "mc", q: "What is the cat's name?", opts: ["Peixe", "Pastel", "José", "Bica"], a: 1 },
      { t: "mc", q: "When does Mr. José go to the market?", opts: ["Sunday", "Monday", "Saturday", "Friday"], a: 2 },
      { t: "mc", q: "“vai ao mercado” — “ao” is:", opts: ["a + o", "de + o", "em + o", "just a word"], a: 0 },
    ],
  },
];

/* ============ LISTENING DRILL POOLS (free practice) ============ */
const DICTATION_POOL = [
  { say: "bom dia", a: "bom dia", lvl: 1 }, { say: "obrigada", a: "obrigada", lvl: 1 },
  { say: "a casa", a: "a casa", lvl: 1 }, { say: "o pão", a: "o pao", lvl: 1 },
  { say: "se faz favor", a: "se faz favor", lvl: 1 }, { say: "boa noite", a: "boa noite", lvl: 1 },
  { say: "Eu falo português.", a: "eu falo portugues", lvl: 2 },
  { say: "Tu moras em Lisboa.", a: "tu moras em lisboa", lvl: 2 },
  { say: "Não percebo.", a: "nao percebo", lvl: 2 },
  { say: "Quanto custa?", a: "quanto custa", lvl: 2 },
  { say: "Ela gosta de café.", a: "ela gosta de cafe", lvl: 2 },
  { say: "Nós somos amigos.", a: "nos somos amigos", lvl: 3 },
  { say: "O gato gosta de peixe e de leite.", a: "o gato gosta de peixe e de leite", lvl: 3 },
  { say: "Uma bica e um pastel de nata, se faz favor.", a: "uma bica e um pastel de nata se faz favor", lvl: 3 },
];
const NUM_POOL = [
  { say: "três", a: ["3", "tres", "três"] }, { say: "sete", a: ["7", "sete"] },
  { say: "doze", a: ["12", "doze"] }, { say: "quinze", a: ["15", "quinze"] },
  { say: "vinte e dois", a: ["22"] }, { say: "quarenta e cinco", a: ["45"] },
  { say: "São três euros e quarenta.", a: ["3,40", "3.40", "340"] },
  { say: "Custa um euro e dez.", a: ["1,10", "1.10", "110"] },
  { say: "São doze euros e cinquenta.", a: ["12,50", "12.50", "1250"] },
  { say: "Custa sete euros e vinte e cinco.", a: ["7,25", "7.25", "725"] },
];

/* =================== SMALL UI PIECES =================== */
function Speak({ text, slow }) {
  return (
    <span className="audio-btns">
      <button className="audio" title="Play" onClick={(e) => { e.stopPropagation(); speak(text, 0.92); }}>🔊</button>
      {slow !== false && (
        <button className="audio slow" title="Play slowly" onClick={(e) => { e.stopPropagation(); speak(text, 0.55); }}>🐢</button>
      )}
    </span>
  );
}
function Bar({ value, max }) {
  return (
    <div className="bar"><div className="bar-fill" style={{ width: `${Math.min(100, (value / max) * 100)}%` }} /></div>
  );
}

/* =================== QUIZ ENGINE =================== */
function Quiz({ questions, onDone, onXP, titleLabel }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [typed, setTyped] = useState("");
  const [state, setState] = useState("ask"); // ask | right | wrong
  const [score, setScore] = useState(0);
  const [plays, setPlays] = useState(0);
  const q = questions[i];
  const total = questions.length;

  useEffect(() => { setPicked(null); setTyped(""); setState("ask"); setPlays(0); }, [i]);
  useEffect(() => {
    if (q && q.say && (q.t === "listen-mc" || q.t === "dictation" || q.t === "num")) {
      const tm = setTimeout(() => speak(q.say, 0.9), 400);
      return () => clearTimeout(tm);
    }
  }, [i]);

  if (!q) return null;

  const checkType = () => {
    const ok = Array.isArray(q.a) ? q.a.map(norm).includes(norm(typed)) : norm(typed) === norm(q.a);
    if (ok) { setScore((s) => s + 1); onXP(plays === 0 ? 12 : 8); setState("right"); }
    else setState("wrong");
  };
  const checkMC = (idx) => {
    setPicked(idx);
    if (idx === q.a) { setScore((s) => s + 1); onXP(10); setState("right"); }
    else setState("wrong");
  };
  const next = () => {
    if (i + 1 >= total) onDone(state === "right" || picked === q.a || norm(typed) === norm(Array.isArray(q.a) ? q.a[0] : q.a) ? score : score);
    else setI(i + 1);
  };
  const finished = i + 1 >= total && state !== "ask";

  return (
    <div className="quiz">
      <div className="quiz-head">
        <span className="eyebrow">{titleLabel || "Checkpoint"} · {i + 1}/{total}</span>
        <Bar value={i + (state !== "ask" ? 1 : 0)} max={total} />
      </div>
      <h3 className="quiz-q">{q.q}</h3>
      {q.say && (q.t === "listen-mc" || q.t === "dictation" || q.t === "num") && (
        <div className="replay-row">
          <button className="btn ghost" onClick={() => { speak(q.say, 0.9); setPlays(p => p + 1); }}>🔊 Replay</button>
          <button className="btn ghost" onClick={() => { speak(q.say, 0.55); setPlays(p => p + 1); }}>🐢 Slow</button>
          {plays > 0 && <span className="tiny">replays: {plays}</span>}
        </div>
      )}
      {(q.t === "mc" || q.t === "listen-mc") && (
        <div className="opts">
          {q.opts.map((o, idx) => (
            <button key={idx} disabled={state !== "ask"}
              className={"opt" + (state !== "ask" && idx === q.a ? " correct" : "") + (state === "wrong" && idx === picked ? " wrong" : "")}
              onClick={() => checkMC(idx)}>{o}</button>
          ))}
        </div>
      )}
      {(q.t === "type" || q.t === "dictation" || q.t === "num") && (
        <div className="type-row">
          <input className="answer" value={typed} disabled={state !== "ask"}
            placeholder={q.t === "num" ? "e.g. 4,50" : "Type your answer..."}
            onChange={(e) => setTyped(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && state === "ask" && typed && checkType()} />
          {state === "ask" && <button className="btn primary" disabled={!typed} onClick={checkType}>Check</button>}
        </div>
      )}
      {state === "right" && (
        <div className="feedback ok">✅ Muito bem! {q.say && q.t !== "mc" ? <>It was: <b>{q.say}</b> <Speak text={q.say} /></> : null}</div>
      )}
      {state === "wrong" && (
        <div className="feedback bad">
          ❌ Not quite. Correct answer: <b>{q.t === "mc" || q.t === "listen-mc" ? q.opts[q.a] : Array.isArray(q.a) ? q.a[0] : q.a}</b>
          {q.say ? <Speak text={q.say} /> : null}
        </div>
      )}
      {state !== "ask" && (
        <button className="btn primary wide" onClick={() => { if (finished) onDone(score); else next(); }}>
          {finished ? "See results →" : "Next →"}
        </button>
      )}
    </div>
  );
}

/* =================== FLASHCARDS =================== */
function Flashcards({ catKey, onXP, onBack }) {
  const cat = VOCAB[catKey];
  const [deck, setDeck] = useState(() => [...cat.words].sort(() => Math.random() - 0.5));
  const [flip, setFlip] = useState(false);
  const [done, setDone] = useState(0);
  const [missed, setMissed] = useState(0);
  const [dir, setDir] = useState("pt-en");
  const card = deck[0];

  if (!card) {
    return (
      <div className="panel center">
        <div className="big-emoji">🎉</div>
        <h2>Deck complete!</h2>
        <p>{done} known · {missed} sent back for review during this run.</p>
        <button className="btn primary" onClick={onBack}>Back to practice</button>
      </div>
    );
  }
  const front = dir === "pt-en" ? card.pt : card.en;
  const back = dir === "pt-en" ? card.en : card.pt;
  const know = () => { onXP(6); setDone((d) => d + 1); setDeck((dk) => dk.slice(1)); setFlip(false); };
  const dont = () => { setMissed((m) => m + 1); setDeck((dk) => [...dk.slice(1), card]); setFlip(false); };

  return (
    <div className="panel">
      <div className="row between">
        <span className="eyebrow">{cat.icon} {cat.label} · {deck.length} left</span>
        <button className="btn ghost small" onClick={() => { setDir(dir === "pt-en" ? "en-pt" : "pt-en"); setFlip(false); }}>
          ⇄ {dir === "pt-en" ? "PT → EN" : "EN → PT"}
        </button>
      </div>
      <div className={"flashcard" + (flip ? " flipped" : "") + (card.g ? " g-" + card.g : "")} onClick={() => setFlip(!flip)}>
        <div className="fc-face">
          <div className="fc-word">{front}</div>
          {dir === "pt-en" && card.hint && <div className="fc-hint">{card.hint}</div>}
          {dir === "pt-en" && <Speak text={card.pt} />}
          <div className="fc-tap">tap to flip</div>
        </div>
        <div className="fc-face fc-back">
          <div className="fc-word">{back}</div>
          {dir === "en-pt" && <Speak text={card.pt} />}
          {card.g && <div className="fc-gender">{card.g === "m" ? "♂ masculine" : "♀ feminine"}</div>}
        </div>
      </div>
      <div className="row gap">
        <button className="btn bad-soft wide" onClick={dont}>↻ Again</button>
        <button className="btn ok-soft wide" onClick={know}>✓ I knew it</button>
      </div>
    </div>
  );
}

/* =================== MATCHING GAME =================== */
function Matching({ catKey, onXP, onBack }) {
  const cat = VOCAB[catKey];
  const pairs = useMemo(() => [...cat.words].sort(() => Math.random() - 0.5).slice(0, 6), [catKey]);
  const tiles = useMemo(() => {
    const t = [];
    pairs.forEach((w, i) => {
      t.push({ id: "p" + i, pair: i, label: w.pt, lang: "pt" });
      t.push({ id: "e" + i, pair: i, label: w.en, lang: "en" });
    });
    return t.sort(() => Math.random() - 0.5);
  }, [pairs]);
  const [sel, setSel] = useState(null);
  const [matched, setMatched] = useState([]);
  const [shake, setShake] = useState(null);
  const [moves, setMoves] = useState(0);

  const click = (tile) => {
    if (matched.includes(tile.pair) && matched.includes(tile.pair)) {}
    if (matched.includes(tile.pair)) return;
    if (tile.lang === "pt") speak(tile.label, 0.95);
    if (!sel) { setSel(tile); return; }
    if (sel.id === tile.id) { setSel(null); return; }
    setMoves((m) => m + 1);
    if (sel.pair === tile.pair && sel.lang !== tile.lang) {
      setMatched((ms) => [...ms, tile.pair]); onXP(8); setSel(null);
    } else {
      setShake(tile.id + "|" + sel.id);
      setTimeout(() => { setShake(null); setSel(null); }, 450);
    }
  };
  const won = matched.length === pairs.length;
  return (
    <div className="panel">
      <div className="row between">
        <span className="eyebrow">{cat.icon} Match PT ↔ EN</span>
        <span className="tiny">moves: {moves}</span>
      </div>
      {won ? (
        <div className="center">
          <div className="big-emoji">🏆</div>
          <h2>All matched!</h2>
          <p>{pairs.length} pairs in {moves} moves.</p>
          <button className="btn primary" onClick={onBack}>Back to practice</button>
        </div>
      ) : (
        <div className="match-grid">
          {tiles.map((t) => {
            const isMatched = matched.includes(t.pair);
            const isSel = sel && sel.id === t.id;
            const isShake = shake && shake.includes(t.id);
            return (
              <button key={t.id} onClick={() => click(t)} disabled={isMatched}
                className={"tile" + (isMatched ? " matched" : "") + (isSel ? " selected" : "") + (isShake ? " shake" : "") + (t.lang === "pt" ? " tile-pt" : "")}>
                {t.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* =================== STORY MODE =================== */
function Story({ story, onXP, onBack }) {
  const [showEN, setShowEN] = useState(true);
  const [phase, setPhase] = useState("read");
  return (
    <div className="panel">
      <span className="eyebrow">{story.icon} Story · {story.title}</span>
      {phase === "read" ? (
        <>
          <div className="row gap" style={{ margin: "10px 0" }}>
            <button className="btn ghost small" onClick={() => speak(story.lines.map((l) => l.pt).join(" "), 0.85)}>▶ Play whole story</button>
            <button className="btn ghost small" onClick={() => setShowEN(!showEN)}>{showEN ? "Hide" : "Show"} English</button>
          </div>
          {story.lines.map((l, i) => (
            <div className="story-line" key={i}>
              <div className="story-pt">{l.pt} <Speak text={l.pt} /></div>
              {showEN && <div className="story-en">{l.en}</div>}
            </div>
          ))}
          <div className="glossary">
            <div className="eyebrow">Key words</div>
            <div className="gloss-grid">
              {story.glossary.map((g, i) => (
                <span key={i} className="gloss"><b>{g.pt}</b> — {g.en} <Speak text={g.pt} slow={false} /></span>
              ))}
            </div>
          </div>
          <button className="btn primary wide" onClick={() => setPhase("quiz")}>Comprehension check →</button>
        </>
      ) : (
        <Quiz questions={story.quiz} titleLabel="Story check" onXP={onXP}
          onDone={() => { onXP(10); onBack(); }} />
      )}
    </div>
  );
}

/* =================== DIALOGUE SCENE =================== */
function Dialogue({ d, onXP, onBack }) {
  const [showEN, setShowEN] = useState(true);
  const [phase, setPhase] = useState("read");
  const playAll = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    d.lines.forEach((l, idx) => {
      const u = new SpeechSynthesisUtterance(l.pt);
      cachedVoice = pickVoice() || cachedVoice;
      if (cachedVoice) u.voice = cachedVoice;
      u.lang = "pt-PT"; u.rate = 0.88;
      u.pitch = l.sp === "Você" ? 1.1 : 0.9;
      window.speechSynthesis.speak(u);
    });
  };
  return (
    <div className="panel">
      <span className="eyebrow">{d.icon} {d.title}</span>
      <p className="muted">{d.setting}</p>
      {phase === "read" ? (
        <>
          <div className="row gap" style={{ marginBottom: 10 }}>
            <button className="btn ghost small" onClick={playAll}>▶ Play full conversation</button>
            <button className="btn ghost small" onClick={() => setShowEN(!showEN)}>{showEN ? "Hide" : "Show"} English</button>
          </div>
          {d.lines.map((l, i) => (
            <div key={i} className={"bubble-row" + (l.sp === "Você" ? " me" : "")}>
              <div className="bubble">
                <div className="bubble-sp">{l.sp}</div>
                <div className="bubble-pt">{l.pt} <Speak text={l.pt} /></div>
                {showEN && <div className="bubble-en">{l.en}</div>}
              </div>
            </div>
          ))}
          <div className="glossary">
            <div className="eyebrow">Why it's said this way</div>
            {d.keys.map((k, i) => <div key={i} className="key-line">• {k}</div>)}
          </div>
          <button className="btn primary wide" onClick={() => setPhase("quiz")}>Did you understand? →</button>
        </>
      ) : (
        <Quiz questions={d.quiz} titleLabel="Dialogue check" onXP={onXP} onDone={() => { onXP(12); onBack(); }} />
      )}
    </div>
  );
}

/* =================== LISTENING DRILLS =================== */
function Dictation({ onXP, onBack }) {
  const [lvl, setLvl] = useState(1);
  const pool = DICTATION_POOL.filter((p) => p.lvl === lvl);
  const qs = useMemo(() => [...pool].sort(() => Math.random() - 0.5).slice(0, 5)
    .map((p) => ({ t: "dictation", say: p.say, q: "🔊 Type exactly what you hear:", a: p.a })), [lvl]);
  const [key, setKey] = useState(0);
  return (
    <div className="panel">
      <div className="row between">
        <span className="eyebrow">🎧 Dictation</span>
        <div className="row gap">
          {[1, 2, 3].map((l) => (
            <button key={l} className={"btn small " + (lvl === l ? "primary" : "ghost")} onClick={() => { setLvl(l); setKey(k => k + 1); }}>
              {l === 1 ? "Words" : l === 2 ? "Short" : "Long"}
            </button>
          ))}
        </div>
      </div>
      <Quiz key={key + "-" + lvl} questions={qs} titleLabel="Dictation" onXP={onXP}
        onDone={(s) => { onXP(s * 2); onBack(); }} />
    </div>
  );
}
function NumberListening({ onXP, onBack }) {
  const qs = useMemo(() => [...NUM_POOL].sort(() => Math.random() - 0.5).slice(0, 5)
    .map((p) => ({ t: "num", say: p.say, q: "🔊 Listen — type the number or price (e.g. 4,50):", a: p.a })), []);
  return (
    <div className="panel">
      <span className="eyebrow">💶 Numbers & prices by ear</span>
      <Quiz questions={qs} titleLabel="Number listening" onXP={onXP} onDone={(s) => { onXP(s * 2); onBack(); }} />
    </div>
  );
}
function ListenChoose({ onXP, onBack }) {
  const qs = useMemo(() => {
    const all = Object.values(VOCAB).flatMap((c) => c.words);
    const picks = [...all].sort(() => Math.random() - 0.5).slice(0, 6);
    return picks.map((w) => {
      const wrong = [...all].filter((x) => x.en !== w.en).sort(() => Math.random() - 0.5).slice(0, 3).map((x) => x.en);
      const opts = [...wrong, w.en].sort(() => Math.random() - 0.5);
      return { t: "listen-mc", say: w.pt, q: "🔊 Listen. What does it mean?", opts, a: opts.indexOf(w.en) };
    });
  }, []);
  return (
    <div className="panel">
      <span className="eyebrow">👂 Listen & choose</span>
      <Quiz questions={qs} titleLabel="Listening" onXP={onXP} onDone={(s) => { onXP(s * 2); onBack(); }} />
    </div>
  );
}

/* =================== UNIT LESSON PLAYER =================== */
function UnitPlayer({ unit, onPass, onXP, onBack }) {
  const [step, setStep] = useState(0); // cards... then quiz
  const totalSteps = unit.cards.length + 1;
  const inQuiz = step >= unit.cards.length;
  const card = unit.cards[step];
  const [result, setResult] = useState(null);

  if (result !== null) {
    const passed = result >= Math.ceil(unit.quiz.length * 0.66);
    return (
      <div className="panel center">
        <div className="big-emoji">{passed ? "🏅" : "💪"}</div>
        <h2>{passed ? "Unit passed!" : "Almost there"}</h2>
        <p>You scored <b>{result}/{unit.quiz.length}</b>. {passed ? "Next unit unlocked." : "You need " + Math.ceil(unit.quiz.length * 0.66) + " to pass — review the cards and try again."}</p>
        {passed
          ? <button className="btn primary wide" onClick={() => onPass()}>Continue →</button>
          : <div className="row gap">
              <button className="btn ghost wide" onClick={() => { setStep(0); setResult(null); }}>Review cards</button>
              <button className="btn primary wide" onClick={() => { setStep(unit.cards.length); setResult(null); }}>Retry quiz</button>
            </div>}
      </div>
    );
  }
  return (
    <div className="panel">
      <div className="quiz-head">
        <span className="eyebrow">{unit.icon} {unit.title} · {inQuiz ? "Checkpoint quiz" : `Lesson ${step + 1}/${unit.cards.length}`}</span>
        <Bar value={step} max={totalSteps} />
      </div>
      {!inQuiz ? (
        <>
          <h3 className="lesson-title">{card.title}</h3>
          <p className="lesson-body">{card.body}</p>
          <div className="lesson-items">
            {card.items.map((it, i) => (
              <div className="lesson-item" key={i}>
                <div className="li-pt">{it.pt} <Speak text={it.pt} /></div>
                <div className="li-en">{it.en}</div>
              </div>
            ))}
          </div>
          <div className="row gap">
            {step > 0 && <button className="btn ghost" onClick={() => setStep(step - 1)}>← Back</button>}
            <button className="btn primary wide" onClick={() => setStep(step + 1)}>
              {step + 1 === unit.cards.length ? "Start checkpoint quiz →" : "Next →"}
            </button>
          </div>
        </>
      ) : (
        <Quiz questions={unit.quiz} titleLabel="Checkpoint" onXP={onXP} onDone={(score) => setResult(score)} />
      )}
    </div>
  );
}

/* =================== MAIN APP =================== */
export default function App() {
  const [screen, setScreen] = useState({ name: "home" });
  const [xp, setXp] = useState(0);
  const [streakBest, setStreakBest] = useState(0);
  const [completed, setCompleted] = useState([]);
  const [voiceOk, setVoiceOk] = useState(true);

  useEffect(() => {
    if (!window.speechSynthesis) { setVoiceOk(false); return; }
    const load = () => pickVoice();
    window.speechSynthesis.getVoices();
    window.speechSynthesis.addEventListener?.("voiceschanged", load);
    return () => window.speechSynthesis.removeEventListener?.("voiceschanged", load);
  }, []);

  const addXP = (n) => setXp((x) => x + n);
  const go = (name, params = {}) => setScreen({ name, ...params });
  const level = xp < 150 ? 1 : xp < 400 ? 2 : xp < 800 ? 3 : 4;
  const lvlMax = xp < 150 ? 150 : xp < 400 ? 400 : xp < 800 ? 800 : 1500;

  const unlockedCount = completed.length + 1;
  const a0done = completed.length >= UNITS.length;

  const Header = (
    <header className="topbar">
      <div className="brand" onClick={() => go("home")}>
        <span className="brand-tile">A!</span>
        <span className="brand-name">Aprende<span className="accent">!</span></span>
      </div>
      <div className="stats">
        <span className="stat">⭐ {xp} XP</span>
        <span className="stat lvl">Lv {level}</span>
      </div>
    </header>
  );

  /* ---------- HOME ---------- */
  if (screen.name === "home") {
    return (
      <div className="app">
        <GlobalStyle />
        {Header}
        <div className="hero">
          <div className="hero-tiles" aria-hidden="true">◆ ◇ ◆ ◇ ◆ ◇ ◆ ◇ ◆</div>
          <h1>Português Europeu</h1>
          <p className="hero-sub">A0 · Absolute beginner — built for life in Portugal 🇵🇹</p>
          <Bar value={xp} max={lvlMax} />
          <div className="tiny center-text">{xp} / {lvlMax} XP to next level · progress lives in this session</div>
          {!voiceOk && <div className="warn">⚠️ Your browser has no speech engine — audio buttons won't play. Try Chrome or Edge.</div>}
        </div>

        <section>
          <div className="section-head"><h2>🇵🇹 Level A0 — Survival</h2><span className="tiny">{completed.length}/{UNITS.length} units</span></div>
          <div className="unit-list">
            {UNITS.map((u, i) => {
              const locked = i >= unlockedCount;
              const done = completed.includes(u.id);
              return (
                <button key={u.id} disabled={locked} className={"unit-card" + (done ? " done" : "") + (locked ? " locked" : "")}
                  onClick={() => go("unit", { id: u.id })}>
                  <span className="unit-icon">{locked ? "🔒" : u.icon}</span>
                  <span className="unit-text">
                    <span className="unit-title">{i + 1}. {u.title} {done && "✓"}</span>
                    <span className="unit-desc">{u.desc}</span>
                  </span>
                </button>
              );
            })}
            <div className={"unit-card milestone" + (a0done ? "" : " locked")}>
              <span className="unit-icon">{a0done ? "🎓" : "🔒"}</span>
              <span className="unit-text">
                <span className="unit-title">A0 complete{a0done ? "! Parabéns! 🎉" : ""}</span>
                <span className="unit-desc">{a0done ? "Level A1, A2 and the Final Exam + certificate arrive in Phase 2 — ask Claude to build it!" : "Finish all units to clear level A0. A1, A2 & the certified final exam come in Phase 2."}</span>
              </span>
            </div>
          </div>
        </section>

        <section>
          <div className="section-head"><h2>🗣️ Real-life dialogues</h2></div>
          <div className="chip-row">
            {DIALOGUES.map((d) => (
              <button key={d.id} className="chip" onClick={() => go("dialogue", { id: d.id })}>{d.icon} {d.title}</button>
            ))}
          </div>
        </section>

        <section>
          <div className="section-head"><h2>🎮 Free practice</h2></div>
          <div className="tool-grid">
            <button className="tool" onClick={() => go("pickcat", { mode: "flash" })}><span className="tool-icon">🃏</span>Flashcards</button>
            <button className="tool" onClick={() => go("pickcat", { mode: "match" })}><span className="tool-icon">🧩</span>Matching</button>
            <button className="tool" onClick={() => go("pickstory")}><span className="tool-icon">📖</span>Story mode</button>
            <button className="tool" onClick={() => go("dictation")}><span className="tool-icon">🎧</span>Dictation</button>
            <button className="tool" onClick={() => go("listen")}><span className="tool-icon">👂</span>Listen & choose</button>
            <button className="tool" onClick={() => go("numlisten")}><span className="tool-icon">💶</span>Price listening</button>
            <button className="tool" onClick={() => go("browse")}><span className="tool-icon">📚</span>Vocabulary</button>
          </div>
        </section>
        <footer className="foot">Aprende! · European Portuguese (pt-PT) · audio = your device's speech voice · A1 & A2 coming in Phase 2</footer>
      </div>
    );
  }

  /* ---------- SUBSCREEN SHELL ---------- */
  const Shell = ({ children }) => (
    <div className="app">
      <GlobalStyle />
      {Header}
      <button className="btn ghost small back" onClick={() => go("home")}>← Home</button>
      {children}
    </div>
  );

  if (screen.name === "unit") {
    const unit = UNITS.find((u) => u.id === screen.id);
    return (
      <Shell>
        <UnitPlayer unit={unit} onXP={addXP} onBack={() => go("home")}
          onPass={() => { if (!completed.includes(unit.id)) { setCompleted((c) => [...c, unit.id]); addXP(40); } go("home"); }} />
      </Shell>
    );
  }
  if (screen.name === "pickcat") {
    return (
      <Shell>
        <div className="panel">
          <span className="eyebrow">{screen.mode === "flash" ? "🃏 Flashcards" : "🧩 Matching"} — pick a category</span>
          <div className="chip-col">
            {Object.entries(VOCAB).map(([k, c]) => (
              <button key={k} className="chip wide-chip" onClick={() => go(screen.mode === "flash" ? "flash" : "match", { cat: k })}>
                {c.icon} {c.label} <span className="tiny">({c.words.length} words)</span>
              </button>
            ))}
          </div>
        </div>
      </Shell>
    );
  }
  if (screen.name === "flash") return <Shell><Flashcards catKey={screen.cat} onXP={addXP} onBack={() => go("pickcat", { mode: "flash" })} /></Shell>;
  if (screen.name === "match") return <Shell><Matching catKey={screen.cat} onXP={addXP} onBack={() => go("pickcat", { mode: "match" })} /></Shell>;
  if (screen.name === "pickstory") {
    return (
      <Shell>
        <div className="panel">
          <span className="eyebrow">📖 Story mode — learn words in context</span>
          <div className="chip-col">
            {STORIES.map((s) => (
              <button key={s.id} className="chip wide-chip" onClick={() => go("story", { id: s.id })}>{s.icon} {s.title}</button>
            ))}
          </div>
        </div>
      </Shell>
    );
  }
  if (screen.name === "story") return <Shell><Story story={STORIES.find((s) => s.id === screen.id)} onXP={addXP} onBack={() => go("home")} /></Shell>;
  if (screen.name === "dialogue") return <Shell><Dialogue d={DIALOGUES.find((d) => d.id === screen.id)} onXP={addXP} onBack={() => go("home")} /></Shell>;
  if (screen.name === "dictation") return <Shell><Dictation onXP={addXP} onBack={() => go("home")} /></Shell>;
  if (screen.name === "listen") return <Shell><ListenChoose onXP={addXP} onBack={() => go("home")} /></Shell>;
  if (screen.name === "numlisten") return <Shell><NumberListening onXP={addXP} onBack={() => go("home")} /></Shell>;
  if (screen.name === "browse") {
    return (
      <Shell>
        {Object.entries(VOCAB).map(([k, c]) => (
          <div className="panel" key={k}>
            <span className="eyebrow">{c.icon} {c.label}</span>
            <div className="vocab-list">
              {c.words.map((w, i) => (
                <div className="vocab-row" key={i}>
                  <span className={"vw" + (w.g ? " g-" + w.g : "")}>{w.pt}</span>
                  <span className="ve">{w.en}</span>
                  <Speak text={w.pt} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Shell>
    );
  }
  return null;
}

/* =================== STYLES =================== */
function GlobalStyle() {
  return (
    <style>{`
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,800&family=Outfit:wght@400;500;600;700&display=swap');
:root{
  --cobalt:#17498A; --deep:#0D3160; --sky:#E7EFF9; --tilebd:#C9D9EE;
  --paper:#FBF9F4; --ink:#1A2433; --muted:#5B6B80;
  --tram:#F2B53A; --tram-dk:#C98E12;
  --ok:#2E7D5B; --ok-bg:#E4F2EB; --bad:#C2453A; --bad-bg:#FAE8E6;
  --masc:#2C5FA8; --fem:#B0507A;
}
*{box-sizing:border-box;margin:0}
.app{font-family:'Outfit',system-ui,sans-serif;background:var(--paper);color:var(--ink);min-height:100vh;max-width:640px;margin:0 auto;padding:0 14px 40px}
h1,h2,h3,.brand-name{font-family:'Fraunces',Georgia,serif}
.topbar{display:flex;justify-content:space-between;align-items:center;padding:14px 2px 10px;border-bottom:3px solid var(--cobalt)}
.brand{display:flex;align-items:center;gap:8px;cursor:pointer}
.brand-tile{display:grid;place-items:center;width:34px;height:34px;background:var(--cobalt);color:#fff;font-family:'Fraunces',serif;font-weight:800;border-radius:6px;box-shadow:inset 0 -3px 0 rgba(0,0,0,.25)}
.brand-name{font-size:22px;font-weight:800;color:var(--deep)}
.accent{color:var(--tram-dk)}
.stats{display:flex;gap:8px}
.stat{background:var(--sky);border:1px solid var(--tilebd);border-radius:999px;padding:4px 10px;font-size:13px;font-weight:600}
.stat.lvl{background:var(--tram);border-color:var(--tram-dk);color:var(--deep)}
.hero{position:relative;background:var(--cobalt);color:#fff;border-radius:14px;padding:22px 18px 18px;margin:16px 0;overflow:hidden}
.hero-tiles{position:absolute;top:-6px;right:10px;letter-spacing:6px;color:rgba(255,255,255,.18);font-size:22px}
.hero h1{font-size:30px;font-weight:800;margin-bottom:2px}
.hero-sub{opacity:.85;font-size:14px;margin-bottom:12px}
.hero .bar{background:rgba(255,255,255,.2)}
.warn{margin-top:10px;background:rgba(255,255,255,.15);border-radius:8px;padding:8px;font-size:13px}
.bar{height:9px;background:var(--sky);border-radius:99px;overflow:hidden;margin:6px 0}
.bar-fill{height:100%;background:var(--tram);border-radius:99px;transition:width .4s}
section{margin:20px 0}
.section-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:10px}
.section-head h2{font-size:19px;color:var(--deep)}
.tiny{font-size:12px;color:var(--muted)}
.center-text{text-align:center;color:rgba(255,255,255,.75)}
.unit-list{display:flex;flex-direction:column;gap:9px}
.unit-card{display:flex;gap:12px;align-items:center;text-align:left;background:#fff;border:1px solid var(--tilebd);border-left:6px solid var(--cobalt);border-radius:10px;padding:13px;cursor:pointer;font:inherit;transition:transform .12s, box-shadow .12s}
.unit-card:hover:not(:disabled){transform:translateX(3px);box-shadow:0 3px 10px rgba(13,49,96,.12)}
.unit-card.done{border-left-color:var(--ok);background:var(--ok-bg)}
.unit-card.locked{opacity:.55;cursor:not-allowed;border-left-color:#9AA7B8}
.unit-card.milestone{border-left-color:var(--tram-dk);background:#FFF8E8}
.unit-icon{font-size:24px}
.unit-title{display:block;font-weight:700}
.unit-desc{display:block;font-size:13px;color:var(--muted)}
.chip-row{display:flex;flex-wrap:wrap;gap:8px}
.chip{background:#fff;border:1px solid var(--tilebd);border-radius:999px;padding:9px 14px;font:inherit;font-weight:600;cursor:pointer}
.chip:hover{border-color:var(--cobalt);background:var(--sky)}
.chip-col{display:flex;flex-direction:column;gap:8px;margin-top:10px}
.wide-chip{border-radius:10px;text-align:left}
.tool-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:9px}
.tool{display:flex;flex-direction:column;align-items:flex-start;gap:6px;background:#fff;border:1px solid var(--tilebd);border-radius:10px;padding:13px;font:inherit;font-weight:600;cursor:pointer;transition:transform .12s}
.tool:hover{transform:translateY(-2px);border-color:var(--cobalt)}
.tool-icon{font-size:22px}
.panel{background:#fff;border:1px solid var(--tilebd);border-radius:12px;padding:16px;margin:12px 0}
.eyebrow{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--cobalt)}
.muted{color:var(--muted);font-size:14px;margin:6px 0}
.btn{font:inherit;font-weight:700;border:none;border-radius:9px;padding:11px 16px;cursor:pointer;transition:filter .12s}
.btn:disabled{opacity:.45;cursor:not-allowed}
.btn:hover:not(:disabled){filter:brightness(1.06)}
.btn.primary{background:var(--cobalt);color:#fff;box-shadow:inset 0 -3px 0 rgba(0,0,0,.22)}
.btn.ghost{background:var(--sky);color:var(--deep);border:1px solid var(--tilebd)}
.btn.small{padding:7px 12px;font-size:13px}
.btn.wide{flex:1;width:100%;margin-top:10px}
.btn.ok-soft{background:var(--ok-bg);color:var(--ok);border:1px solid var(--ok)}
.btn.bad-soft{background:var(--bad-bg);color:var(--bad);border:1px solid var(--bad)}
.back{margin-top:10px}
.row{display:flex;align-items:center}
.row.between{justify-content:space-between}
.row.gap{gap:8px}
.center{text-align:center;padding:18px 0}
.big-emoji{font-size:52px;margin-bottom:8px}
.audio-btns{display:inline-flex;gap:4px;margin-left:6px;vertical-align:middle}
.audio{border:1px solid var(--tilebd);background:var(--sky);border-radius:6px;cursor:pointer;font-size:13px;padding:2px 6px}
.audio:hover{background:var(--tram)}
.lesson-title{font-size:21px;color:var(--deep);margin:10px 0 4px}
.lesson-body{font-size:14.5px;color:var(--ink);margin-bottom:12px;line-height:1.5}
.lesson-items{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}
.lesson-item{background:var(--sky);border:1px solid var(--tilebd);border-radius:9px;padding:10px 12px}
.li-pt{font-weight:700;font-size:16px}
.li-en{font-size:13.5px;color:var(--muted)}
.quiz-head{margin-bottom:10px}
.quiz-q{font-size:18px;margin:8px 0 12px;color:var(--deep)}
.opts{display:flex;flex-direction:column;gap:8px}
.opt{font:inherit;text-align:left;background:#fff;border:2px solid var(--tilebd);border-radius:9px;padding:12px;cursor:pointer;font-weight:600}
.opt:hover:not(:disabled){border-color:var(--cobalt)}
.opt.correct{border-color:var(--ok);background:var(--ok-bg)}
.opt.wrong{border-color:var(--bad);background:var(--bad-bg)}
.type-row{display:flex;gap:8px}
.answer{flex:1;font:inherit;font-size:16px;padding:11px;border:2px solid var(--tilebd);border-radius:9px;outline:none}
.answer:focus{border-color:var(--cobalt)}
.replay-row{display:flex;gap:8px;align-items:center;margin-bottom:12px}
.feedback{margin-top:12px;border-radius:9px;padding:11px;font-size:14.5px}
.feedback.ok{background:var(--ok-bg);color:var(--ok)}
.feedback.bad{background:var(--bad-bg);color:var(--bad)}
.flashcard{position:relative;height:230px;margin:14px 0;border-radius:14px;cursor:pointer;perspective:900px}
.fc-face{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:#fff;border:2px solid var(--tilebd);border-bottom-width:6px;border-radius:14px;backface-visibility:hidden;transition:transform .5s;padding:14px;text-align:center}
.flashcard.g-m .fc-face{border-color:var(--masc)}
.flashcard.g-f .fc-face{border-color:var(--fem)}
.fc-back{transform:rotateY(180deg);background:var(--sky)}
.flashcard.flipped .fc-face{transform:rotateY(180deg)}
.flashcard.flipped .fc-back{transform:rotateY(360deg)}
.fc-word{font-family:'Fraunces',serif;font-size:30px;font-weight:800;color:var(--deep)}
.fc-hint{color:var(--muted);font-size:14px}
.fc-tap{position:absolute;bottom:10px;font-size:11px;color:var(--muted);letter-spacing:.06em;text-transform:uppercase}
.fc-gender{font-size:13px;font-weight:700;color:var(--muted)}
.match-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}
.tile{font:inherit;font-weight:600;font-size:14px;min-height:64px;background:#fff;border:2px solid var(--tilebd);border-radius:9px;cursor:pointer;padding:6px}
.tile-pt{background:var(--sky)}
.tile.selected{border-color:var(--tram-dk);background:#FFF3D6}
.tile.matched{opacity:.35;border-color:var(--ok);background:var(--ok-bg)}
.tile.shake{animation:shake .4s}
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
.story-line{padding:9px 0;border-bottom:1px dashed var(--tilebd)}
.story-pt{font-size:16.5px;font-weight:600}
.story-en{font-size:13.5px;color:var(--muted)}
.glossary{background:var(--sky);border-radius:10px;padding:12px;margin:14px 0}
.gloss-grid{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.gloss{background:#fff;border:1px solid var(--tilebd);border-radius:8px;padding:5px 9px;font-size:13.5px}
.key-line{font-size:14px;margin:6px 0}
.bubble-row{display:flex;margin:8px 0}
.bubble-row.me{justify-content:flex-end}
.bubble{max-width:85%;background:var(--sky);border:1px solid var(--tilebd);border-radius:12px 12px 12px 3px;padding:10px 12px}
.bubble-row.me .bubble{background:#FFF3D6;border-color:#EAD194;border-radius:12px 12px 3px 12px}
.bubble-sp{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--muted)}
.bubble-pt{font-weight:600;font-size:15.5px;margin:3px 0}
.bubble-en{font-size:13px;color:var(--muted)}
.vocab-list{margin-top:8px}
.vocab-row{display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px dashed var(--tilebd);font-size:15px}
.vw{font-weight:700;min-width:42%}
.vw.g-m{color:var(--masc)}
.vw.g-f{color:var(--fem)}
.ve{color:var(--muted);flex:1;font-size:13.5px}
.foot{text-align:center;font-size:12px;color:var(--muted);margin-top:26px;padding-top:12px;border-top:1px solid var(--tilebd)}
@media (max-width:420px){.match-grid{grid-template-columns:repeat(2,1fr)}.hero h1{font-size:25px}}
`}</style>
  );
}
