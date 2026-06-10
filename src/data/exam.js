/* ============ FINAL EXAM QUESTION BANK ============ */
/* Drawn from across A0–A2. The exam randomly samples from these,
   tagged by level so we can estimate the learner's level from results. */
export const EXAM_BANK = [
  // ---- A0 ----
  { lvl: "A0", t: "mc", q: "It's 10am, you enter a café. You say:", opts: ["Boa noite", "Bom dia", "Adeus", "Boa tarde"], a: 1 },
  { lvl: "A0", t: "mc", q: "“please” (the classic PT-PT phrase):", opts: ["por favor", "se faz favor", "obrigado", "com licença"], a: 1 },
  { lvl: "A0", t: "type", q: "Type the PT-PT word for “bus”:", a: "o autocarro", say: "o autocarro" },
  { lvl: "A0", t: "listen-mc", say: "Não percebo.", q: "🔊 What does this mean?", opts: ["I don't want it", "I don't understand", "I'm not here", "No thanks"], a: 1 },
  { lvl: "A0", t: "mc", q: "A woman thanks someone. She says:", opts: ["obrigado", "obrigada", "obrigados", "de nada"], a: 1 },
  { lvl: "A0", t: "num", say: "São quatro euros e cinquenta.", q: "🔊 Type the price (e.g. 3,20):", a: ["4,50", "4.50", "450"] },
  { lvl: "A0", t: "mc", q: "“We are” (SER):", opts: ["nós somos", "nós são", "nós sou", "nós és"], a: 0 },
  { lvl: "A0", t: "mc", q: "“the house” (correct article):", opts: ["o casa", "a casa", "os casa", "um casa"], a: 1 },
  { lvl: "A0", t: "type", q: "Conjugate: eu ___ (falar)", a: "falo", say: "eu falo" },
  { lvl: "A0", t: "mc", q: "In Portugal, the everyday informal “you” is:", opts: ["você", "tu", "vós", "o senhor"], a: 1 },

  // ---- A1 ----
  { lvl: "A1", t: "type", q: "Conjugate: nós ___ (comer)", a: "comemos", say: "nós comemos" },
  { lvl: "A1", t: "mc", q: "The PT-PT way to say “I am eating”:", opts: ["Estou comendo", "Estou a comer", "Sou a comer", "Como"], a: 1 },
  { lvl: "A1", t: "mc", q: "“I'm 30 years old”:", opts: ["Sou trinta anos", "Tenho trinta anos", "Estou trinta anos", "Faço trinta anos"], a: 1 },
  { lvl: "A1", t: "mc", q: "“at the market” (em + o mercado):", opts: ["em o mercado", "no mercado", "na mercado", "ao mercado"], a: 1 },
  { lvl: "A1", t: "mc", q: "“from Porto” (de + o Porto):", opts: ["de Porto", "do Porto", "da Porto", "no Porto"], a: 1 },
  { lvl: "A1", t: "listen-mc", say: "Onde é que moras?", q: "🔊 What's being asked?", opts: ["How are you?", "Where do you live?", "When do you arrive?", "Who are you?"], a: 1 },
  { lvl: "A1", t: "mc", q: "“I'm going to eat” (future with IR):", opts: ["Comerei", "Vou comer", "Comia", "Como"], a: 1 },
  { lvl: "A1", t: "type", q: "Past tense: eu ___ (falar — I spoke)", a: "falei", say: "eu falei" },
  { lvl: "A1", t: "mc", q: "“It's 3:30” →", opts: ["São três e meia", "É três e meia", "São três menos meia", "São meia três"], a: 0 },
  { lvl: "A1", t: "mc", q: "“fui” can mean:", opts: ["only I went", "only I was", "both I went and I was", "I have"], a: 2 },

  // ---- A2 ----
  { lvl: "A2", t: "type", q: "Imperfect: eu ___ (falar — I used to speak)", a: "falava", say: "eu falava" },
  { lvl: "A2", t: "mc", q: "“I always ate at eight” (habit):", opts: ["Comi sempre", "Comia sempre", "Como sempre", "Vou comer"], a: 1 },
  { lvl: "A2", t: "mc", q: "“This is for you” (recipient):", opts: ["Isto é por ti", "Isto é para ti", "Isto é pela ti", "Isto é de ti"], a: 1 },
  { lvl: "A2", t: "mc", q: "“Thanks for everything” (cause):", opts: ["Obrigado para tudo", "Obrigado por tudo", "Obrigado de tudo", "Obrigado em tudo"], a: 1 },
  { lvl: "A2", t: "type", q: "Simple future: eu ___ (falar — I will speak)", a: "falarei", say: "falarei" },
  { lvl: "A2", t: "mc", q: "“I see you” (PT-PT, positive):", opts: ["Te vejo", "Vejo-te", "Vejo te", "Eu ver te"], a: 1 },
  { lvl: "A2", t: "mc", q: "“good → better”:", opts: ["bom → mais bom", "bom → melhor", "bom → pior", "bom → maior"], a: 1 },
  { lvl: "A2", t: "listen-mc", say: "Estava a dormir quando o telefone tocou.", q: "🔊 What interrupted the sleep?", opts: ["a knock", "the phone rang", "an alarm", "a dog"], a: 1 },
  { lvl: "A2", t: "mc", q: "“My head hurts” →", opts: ["Dói-me a cabeça", "Tenho cabeça", "Sou cabeça", "Estou cabeça"], a: 0 },
  { lvl: "A2", t: "mc", q: "“but” in Portuguese:", opts: ["porque", "mas", "também", "então"], a: 1 },
];

/* ============ EXTRA DIALOGUES (added to the 3 from Phase 1) ============ */
export const EXTRA_DIALOGUES = [
  {
    id: "d4",
    title: "Na Farmácia",
    icon: "💊",
    setting: "Asking a pharmacist for help with a headache.",
    lines: [
      { sp: "Farmacêutica", pt: "Boa tarde. Em que posso ajudar?", en: "Good afternoon. How can I help?" },
      { sp: "Você", pt: "Boa tarde. Dói-me a cabeça e tenho febre.", en: "Good afternoon. My head hurts and I have a fever." },
      { sp: "Farmacêutica", pt: "Desde quando se sente assim?", en: "Since when have you felt like this?" },
      { sp: "Você", pt: "Desde ontem à noite.", en: "Since last night." },
      { sp: "Farmacêutica", pt: "Tome este medicamento, um comprimido de oito em oito horas.", en: "Take this medicine, one pill every eight hours." },
      { sp: "Você", pt: "Obrigado. Quanto é?", en: "Thank you. How much is it?" },
      { sp: "Farmacêutica", pt: "São cinco euros e vinte. As melhoras!", en: "It's €5,20. Get well soon!" },
    ],
    keys: ["Dói-me a cabeça — my head hurts (the doer construction)", "Desde quando? — since when?", "de oito em oito horas — every eight hours", "As melhoras! — Get well soon!"],
    quiz: [
      { t: "mc", q: "What two symptoms does the customer have?", opts: ["cough and cold", "headache and fever", "sore throat and tired", "stomachache"], a: 1 },
      { t: "mc", q: "How often should they take the pill?", opts: ["every 4 hours", "every 8 hours", "once a day", "twice a day"], a: 1 },
      { t: "mc", q: "“As melhoras!” means:", opts: ["Goodbye", "Get well soon", "Thank you", "Come back"], a: 1 },
    ],
  },
  {
    id: "d5",
    title: "No Restaurante",
    icon: "🍽️",
    setting: "Ordering a meal and asking for the bill at a Portuguese restaurant.",
    lines: [
      { sp: "Empregado", pt: "Boa noite. Já escolheram?", en: "Good evening. Have you chosen?" },
      { sp: "Você", pt: "Sim. Para mim, o bacalhau, se faz favor.", en: "Yes. For me, the cod, please." },
      { sp: "Empregado", pt: "E para beber?", en: "And to drink?" },
      { sp: "Você", pt: "Um copo de vinho tinto e água, por favor.", en: "A glass of red wine and water, please." },
      { sp: "Empregado", pt: "Com gás ou sem gás?", en: "Sparkling or still?" },
      { sp: "Você", pt: "Sem gás. E a conta no fim, se faz favor.", en: "Still. And the bill at the end, please." },
      { sp: "Empregado", pt: "Com certeza. Bom apetite!", en: "Certainly. Enjoy your meal!" },
    ],
    keys: ["Já escolheram? — Have you (plural) chosen?", "Para mim... — For me... (ordering)", "com gás / sem gás — sparkling / still water", "a conta — the bill · Bom apetite! — Enjoy!"],
    quiz: [
      { t: "mc", q: "What does the customer order to eat?", opts: ["chicken", "cod (bacalhau)", "soup", "fish soup"], a: 1 },
      { t: "mc", q: "“sem gás” means:", opts: ["sparkling water", "still water", "no water", "cold water"], a: 1 },
      { t: "mc", q: "How do you ask for the bill?", opts: ["a conta, se faz favor", "bom apetite", "para mim", "com gás"], a: 0 },
    ],
  },
  {
    id: "d6",
    title: "Pedir Direções",
    icon: "🧭",
    setting: "Asking a stranger for directions to the train station.",
    lines: [
      { sp: "Você", pt: "Desculpe, onde fica a estação de comboios?", en: "Excuse me, where is the train station?" },
      { sp: "Senhora", pt: "Fica perto. Siga em frente e vire à direita.", en: "It's nearby. Go straight ahead and turn right." },
      { sp: "Você", pt: "Em frente e depois à direita. É longe?", en: "Straight, then right. Is it far?" },
      { sp: "Senhora", pt: "Não, são cinco minutos a pé.", en: "No, it's five minutes on foot." },
      { sp: "Você", pt: "Muito obrigado pela ajuda!", en: "Thank you very much for the help!" },
      { sp: "Senhora", pt: "De nada. Boa viagem!", en: "You're welcome. Have a good trip!" },
    ],
    keys: ["Onde fica...? — Where is...? (ficar for location)", "Siga em frente — Go straight ahead", "vire à direita / à esquerda — turn right / left", "a pé — on foot · pela ajuda (por + a = pela)"],
    quiz: [
      { t: "mc", q: "Which way should they turn?", opts: ["left", "right", "around", "back"], a: 1 },
      { t: "mc", q: "How far is the station?", opts: ["5 minutes on foot", "by bus", "very far", "1 hour"], a: 0 },
      { t: "mc", q: "“Siga em frente” means:", opts: ["turn left", "turn right", "go straight ahead", "stop here"], a: 2 },
    ],
  },
];

/* ============ EXTRA STORIES ============ */
export const EXTRA_STORIES = [
  {
    id: "s3",
    title: "O fim de semana do Tomás",
    icon: "🏖️",
    lines: [
      { pt: "No sábado, o Tomás acordou cedo.", en: "On Saturday, Tomás woke up early." },
      { pt: "Estava sol, por isso foi à praia.", en: "It was sunny, so he went to the beach." },
      { pt: "Nadou no mar e comeu um gelado.", en: "He swam in the sea and ate an ice cream." },
      { pt: "À tarde, encontrou-se com uns amigos.", en: "In the afternoon, he met up with some friends." },
      { pt: "Eles jantaram num restaurante perto da praia.", en: "They had dinner at a restaurant near the beach." },
      { pt: "Foi um dia perfeito!", en: "It was a perfect day!" },
    ],
    glossary: [
      { pt: "acordou", en: "woke up (perfeito)" }, { pt: "estava sol", en: "it was sunny (imperfeito)" },
      { pt: "foi", en: "went" }, { pt: "nadou", en: "swam" },
      { pt: "encontrou-se", en: "met up (reflexive past)" }, { pt: "jantaram", en: "they had dinner" },
    ],
    quiz: [
      { t: "mc", q: "When did Tomás wake up?", opts: ["late", "early", "at noon", "at night"], a: 1 },
      { t: "mc", q: "Why did he go to the beach?", opts: ["it was raining", "it was sunny", "friends asked", "he was bored"], a: 1 },
      { t: "mc", q: "“estava sol” uses which past tense and why?", opts: ["perfeito — a one-time event", "imperfeito — describing the background weather", "future", "present"], a: 1 },
    ],
  },
];
