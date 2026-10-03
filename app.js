/* English Jonas — V1
   Application éducative hors ligne. Les données de progression sont stockées localement.
*/
const LEVELS=[
 {id:"A1",name:"Débutant",icon:"🌱",color:"green",desc:"Les bases indispensables pour comprendre et communiquer.",units:12},
 {id:"A2",name:"Élémentaire",icon:"🌿",color:"blue",desc:"Conversations quotidiennes et grammaire essentielle.",units:12},
 {id:"B1",name:"Intermédiaire",icon:"🚀",color:"purple",desc:"Communiquer avec plus d'aisance et raconter des expériences.",units:12},
 {id:"B2",name:"Intermédiaire supérieur",icon:"🎓",color:"blue",desc:"Comprendre des contenus complexes et argumenter.",units:12},
 {id:"C1",name:"Avancé",icon:"💎",color:"purple",desc:"Anglais professionnel, académique et expressions idiomatiques.",units:12},
 {id:"C2",name:"Supérieur",icon:"👑",color:"green",desc:"Maîtrise avancée, nuance, précision et fluidité.",units:12}
];

const LESSONS={
 A1:[
  ["Salutations","Hello, hi, goodbye…",["Hello = Bonjour","Good morning = Bonjour (matin)","Goodbye = Au revoir"],"What does “Hello” mean?",["Bonjour","Merci","Bonsoir","Au revoir"],0],
  ["Se présenter","Name, age and origin",["My name is Jonas. = Je m'appelle Jonas.","I am nineteen. = J'ai dix-neuf ans.","I am from Côte d'Ivoire. = Je viens de Côte d'Ivoire."],"Choose the correct sentence.",["I am from Côte d'Ivoire.","I from am Côte d'Ivoire.","I be from Côte d'Ivoire.","From Côte d'Ivoire I am."],0],
  ["To be","am / is / are",["I am","You are","He/She/It is","We/You/They are"],"She ___ a student.",["am","is","are","be"],1],
  ["Pronoms","I, you, he, she…",["I = je","you = tu/vous","he = il","she = elle","we = nous","they = ils/elles"],"“They” means…",["Il","Elle","Nous","Ils/Elles"],3],
  ["Nombres","Numbers 1–20",["one = 1","two = 2","three = 3","ten = 10","twenty = 20"],"What is “fifteen”?",["12","15","50","5"],1],
  ["Famille","Family vocabulary",["mother = mère","father = père","brother = frère","sister = sœur"],"“Brother” means…",["Père","Frère","Fils","Oncle"],1],
  ["Présent simple","Habits and routines",["I work.","You play.","He works.","She studies."],"He ___ English every day.",["study","studies","studying","studied"],1],
  ["Questions","Do / Does",["Do you speak English?","Does he work here?","What is your name?"],"___ you speak English?",["Do","Does","Is","Are"],0],
  ["Objets du quotidien","Home vocabulary",["door = porte","window = fenêtre","chair = chaise","table = table"],"“Window” means…",["Mur","Porte","Fenêtre","Sol"],2],
  ["Adjectifs","big, small, good…",["big = grand","small = petit","good = bon","bad = mauvais"],"Opposite of “big”?",["long","small","old","fast"],1],
  ["There is / are","Talk about places",["There is a book.","There are two chairs.","There isn't a car."],"___ three books on the table.",["There is","There are","It is","They is"],1],
  ["Révision A1","Bilan des bases",["Révise les mots, le présent simple et to be.","Objectif : 80 % ou plus."],"Choose the correct phrase.",["She are happy.","She is happy.","She am happy.","She be happy."],1]
 ],
 A2:[
  ["Past Simple","Parler du passé",["I worked yesterday.","She went home.","We saw a movie."],"Yesterday, I ___ to school.",["go","went","going","goes"],1],
  ["Future","will / going to",["I will call you.","I am going to study.","They will arrive tomorrow."],"I ___ call you later.",["will","am","did","was"],0],
  ["Present Continuous","Actions maintenant",["I am studying.","She is working.","They are playing."],"They ___ football now.",["play","plays","are playing","played"],2],
  ["Comparatifs","bigger, better…",["bigger = plus grand","better = meilleur","more interesting = plus intéressant"],"This book is ___ than that one.",["interesting","more interesting","most interesting","interest"],1],
  ["Quantités","some, any, much, many",["many books","much water","some money","any questions?"],"How ___ students are there?",["much","many","any","some"],1],
  ["Modal verbs","can, should, must",["can = pouvoir","should = devoir/conseil","must = obligation"],"You ___ wear a seat belt.",["can","must","might","could"],1],
  ["Pronoms objets","me, him, her, us, them",["She helps me.","I see him.","They call us."],"I know ___.",["she","her","herself","hers"],1],
  ["Adverbes","quickly, slowly, always…",["always = toujours","usually = habituellement","never = jamais"],"I ___ drink coffee in the morning.",["always","yesterday","quick","good"],0],
  ["Vocabulaire voyage","Travel English",["ticket = billet","station = gare","airport = aéroport","luggage = bagages"],"Where is the ___?",["ticket","airport","luggage","sleep"],1],
  ["Restaurant","Ordering food",["I'd like… = Je voudrais…","Can I have…?","The bill, please."],"“I'd like some water.” means…",["J'aime l'eau.","Je voudrais de l'eau.","J'ai de l'eau.","Je bois de l'eau."],1],
  ["Connecteurs","and, but, because, so",["because = parce que","but = mais","so = donc","although = bien que"],"I stayed home ___ it was raining.",["but","because","so","and"],1],
  ["Révision A2","Bilan élémentaire",["Mélange de grammaire et vocabulaire A2."],"She ___ here yesterday.",["is","was","were","be"],1]
 ],
 B1:[
  ["Present Perfect","have/has + participe",["I have finished.","She has visited London.","Have you ever been there?"],"I ___ never seen snow.",["have","has","did","am"],0],
  ["Past Continuous","was/were + ing",["I was sleeping.","They were working."],"At 8 pm, I ___ studying.",["was","were","am","did"],0],
  ["First Conditional","if + present, will",["If it rains, I will stay home.","If you study, you will improve."],"If I study, I ___ pass.",["will","would","am","did"],0],
  ["Phrasal verbs 1","get up, look for, turn on",["get up = se lever","look for = chercher","turn on = allumer"],"“Look for” means…",["regarder","chercher","regarder après","trouver"],1],
  ["Relative clauses","who, which, that",["The man who called me…","The book that I bought…"],"The woman ___ lives here is a doctor.",["which","who","where","what"],1],
  ["Reported speech","Discours indirect",["He said he was tired.","She told me she liked it."],"He said, “I am tired.” → He said he ___ tired.",["is","was","were","be"],1],
  ["Passive voice","is/was + past participle",["The car was repaired.","English is spoken worldwide."],"The letter ___ yesterday.",["sent","was sent","is send","sending"],1],
  ["Vocabulary work","Anglais professionnel",["meeting = réunion","deadline = échéance","skill = compétence","salary = salaire"],"A “deadline” is…",["un salaire","une échéance","une réunion","un diplôme"],1],
  ["Opinion","Agree and disagree",["I agree.","I don't agree.","In my opinion…","I see your point, but…"],"A polite disagreement is…",["You're stupid.","I see your point, but…","No!","Wrong!"],1],
  ["Second conditional","if + past, would",["If I had money, I would travel.","If I were you, I would study."],"If I had time, I ___ more.",["will study","would study","study","studied"],1],
  ["Listening strategy","Comprendre le sens",["Écoute les mots importants.","Ne traduis pas chaque mot.","Cherche le contexte."],"Best strategy for an unknown word?",["Stop immediately","Use context","Give up","Translate everything"],1],
  ["Révision B1","Bilan intermédiaire",["Consolide les temps, connecteurs et communication."],"She has ___ her homework.",["finish","finished","finishing","finishes"],1]
 ],
 B2:[
  ["Third Conditional","Regret et hypothèse passée",["If I had known, I would have helped.","If she had studied, she would have passed."],"If he had called, I ___ answered.",["would have","will have","had","would"],0],
  ["Mixed Conditionals","Situations complexes",["If I had studied medicine, I would be a doctor now."],"If I had taken that job, I ___ in Paris now.",["would live","will live","lived","would have lived"],0],
  ["Advanced Modals","must have, might have",["He must have forgotten.","She might have left.","They can't have known."],"He ___ have missed the train.",["must","must have","has","did"],1],
  ["Inversion","Style formel",["Never have I seen…","Rarely does he complain.","Not only did she win…"],"___ have I seen such a view.",["Never","Never I","Never did","Not"],0],
  ["Advanced passive","It is believed…",["He is believed to be…","It is thought that…"],"She is believed ___ the best candidate.",["to be","being","be","is"],0],
  ["Academic vocabulary","Anglais académique",["evidence = preuve","research = recherche","therefore = par conséquent","significant = important"],"“Therefore” is used to show…",["contrast","cause/result","time","place"],1],
  ["Collocations","Make / do / take",["make a decision","do research","take responsibility"],"Which is correct?",["make research","do research","take research","do a decision"],1],
  ["Formal email","Écrire professionnellement",["Dear Sir/Madam,","I am writing to…","Kind regards,"],"Best closing for a formal email?",["Bye bro","See ya","Kind regards","Later"],2],
  ["Nuance","Although, despite, whereas",["although + clause","despite + noun/gerund","whereas = tandis que"],"___ the rain, we went out.",["Although","Despite","Because","Whereas"],1],
  ["Debate","Argumenter",["However = cependant","Moreover = de plus","On the other hand = d'un autre côté"],"Which introduces contrast?",["Moreover","Therefore","However","Because"],2],
  ["Phrasal verbs 2","carry out, point out, figure out",["carry out = effectuer","point out = signaler","figure out = comprendre/trouver"],"“Figure out” means…",["oublier","comprendre","porter","signaler"],1],
  ["Révision B2","Bilan supérieur",["Grammaire et vocabulaire avancés."],"Despite ___ tired, she continued.",["be","being","was","to be"],1]
 ],
 C1:[
  ["Idioms","Expressions idiomatiques",["break the ice = détendre l'atmosphère","once in a blue moon = très rarement","hit the nail on the head = avoir parfaitement raison"],"“Once in a blue moon” means…",["souvent","jamais","très rarement","demain"],2],
  ["Hedging","Nuancer une affirmation",["It appears that…","It may be argued that…","It is likely that…"],"Which phrase makes a claim less absolute?",["Definitely","It may be argued that","Always","Never"],1],
  ["Advanced connectors","Nevertheless, consequently…",["nevertheless = néanmoins","consequently = par conséquent","furthermore = en outre"],"“Nevertheless” expresses…",["addition","contrast","cause","time"],1],
  ["Nominalisation","Style académique",["decide → decision","analyse → analysis","improve → improvement"],"“Improve” becomes…",["improval","improvement","improvation","improving"],1],
  ["Cleft sentences","Mise en relief",["What I need is time.","It was John who called."],"What I need ___ more practice.",["is","are","be","was"],0],
  ["Subjunctive","Formal English",["It is essential that he be present.","They suggested that she go."],"It is vital that he ___ informed.",["is","be","was","being"],1],
  ["Academic writing","Thèse et preuves",["claim = affirmation","evidence = preuve","counterargument = contre-argument"],"Evidence should…",["support a claim","replace grammar","be invented","avoid facts"],0],
  ["Register","Formal vs informal",["children (formal) / kids (informal)","purchase / buy","assist / help"],"More formal than “buy”:",["purchase","get","take","have"],0],
  ["Precision","Choose exact words",["huge ≠ big in every context","economic ≠ economical","historic ≠ historical"],"“Economic” usually relates to…",["money/economy","history","size","weather"],0],
  ["Listening C1","Implicit meaning",["Identify tone, intention and context.","Listen for reductions and linking."],"At C1, listening also requires…",["only keywords","implicit meaning","spelling every word","translation"],1],
  ["Speaking","Fluency strategies",["paraphrase when a word is missing.","use discourse markers.","self-correct naturally."],"If you forget a word, you should…",["stop speaking","paraphrase","switch language","quit"],1],
  ["Révision C1","Bilan avancé",["Nuance, registre, style académique et idiomes."],"Which is a hedge?",["It is certain.","It appears that…","Never.","Everyone knows."],1]
 ],
 C2:[
  ["Register mastery","Nuance et contexte",["connotation = connotation","undertone = sous-entendu","discourse = discours"],"A word's “connotation” is its…",["spelling","associated meaning","length","pronunciation"],1],
  ["Idiomatic nuance","Advanced idioms",["to go the extra mile = faire un effort supplémentaire","to read between the lines = comprendre le sous-entendu"],"“Read between the lines” means…",["lire vite","comprendre le sens implicite","lire à voix haute","corriger"],1],
  ["Rhetoric","Persuasion language",["rhetorical question","parallelism","concession"],"A rhetorical question is generally…",["a question needing data","asked for effect","a grammar error","a greeting"],1],
  ["Synthesis","Combine sources",["compare evidence","identify contradictions","qualify conclusions"],"A strong synthesis should…",["copy sources","combine and evaluate ideas","ignore differences","use one source"],1],
  ["Advanced grammar","Inversion & emphasis",["Had I known…","Were it not for…","Little did I know…"],"“Had I known” is equivalent to…",["If I had known","If I know","When I knew","I knew"],0],
  ["Lexical precision","Near synonyms",["swift / rapid / prompt","resilient / robust / durable"],"“Prompt” can mean…",["late","quick/without delay","weak","silent"],1],
  ["Discourse analysis","Tone & stance",["stance = position","bias = biais","framing = cadrage"],"Stance indicates a writer's…",["font","position/attitude","address","age"],1],
  ["Professional mastery","Meetings & negotiation",["I see your point.","Could we explore an alternative?","Let's clarify the terms."],"A constructive negotiation phrase is…",["That's stupid.","Let's clarify the terms.","No way.","You're wrong."],1],
  ["Translation","Meaning over word-for-word",["Translate ideas naturally.","Respect register and context."],"Good translation prioritizes…",["word count","meaning and context","literal order always","rhymes"],1],
  ["C2 reading","Complex texts",["Track argument structure.","Infer unstated assumptions.","Evaluate evidence."],"Advanced reading requires…",["only vocabulary","inference and evaluation","memorization only","translation only"],1],
  ["C2 speaking","Precision and flexibility",["qualify claims","reformulate","use idiomatic language appropriately"],"If challenged, a strong response can…",["repeat one sentence","qualify and reformulate","leave","ignore"],1],
  ["Révision C2","Maîtrise supérieure",["Test final de précision, nuance et compréhension."],"Best C2 strategy?",["Guess","Use context, nuance and evidence","Translate every word","Avoid difficult ideas"],1]
 ]
};

const EXTRA_WORDS=[
["hello","bonjour"],["goodbye","au revoir"],["please","s'il vous plaît"],["thank you","merci"],["sorry","désolé"],["friend","ami(e)"],["family","famille"],["school","école"],["work","travail"],["house","maison"],["water","eau"],["food","nourriture"],["book","livre"],["learn","apprendre"],["speak","parler"],["listen","écouter"],["read","lire"],["write","écrire"],["understand","comprendre"],["question","question"],["answer","réponse"],["today","aujourd'hui"],["tomorrow","demain"],["yesterday","hier"],["always","toujours"],["never","jamais"],["sometimes","parfois"],["because","parce que"],["although","bien que"],["however","cependant"],["therefore","donc"],["important","important"],["beautiful","beau/belle"],["different","différent"],["possible","possible"],["strong","fort"],["easy","facile"],["difficult","difficile"],["begin","commencer"],["finish","terminer"],["improve","améliorer"]
];

const defaultState={
 xp:0, hearts:5, streak:0, lastDay:null, completed:{}, learnedWords:[],
 dailyGoal:20, dark:false, sound:true, currentLevel:"A1", unlocked:["A1"],
 stats:{lessons:0,correct:0,answered:0,minutes:0}, achievements:[]
};
let state=loadState(), screen="home", currentLesson=null, quizIndex=0, quizScore=0, answered=false;

function loadState(){try{return {...defaultState,...JSON.parse(localStorage.getItem("englishMasterState")||"{}")}}catch(e){return {...defaultState}}}
function save(){localStorage.setItem("englishMasterState",JSON.stringify(state))}
function today(){return new Date().toISOString().slice(0,10)}
function dayDiff(a,b){return Math.round((new Date(b)-new Date(a))/86400000)}
function updateStreak(){const t=today();if(!state.lastDay){state.streak=1;state.lastDay=t}else if(state.lastDay!==t){const d=dayDiff(state.lastDay,t);if(d===1)state.streak++;else if(d>1)state.streak=1;state.lastDay=t}save()}
function xpForNext(){return 100}
function totalCompleted(){return Object.keys(state.completed).filter(k=>state.completed[k]).length}
function levelProgress(id){let done=0;(LESSONS[id]||[]).forEach((_,i)=>{if(state.completed[id+"-"+i])done++});return Math.round(done/(LESSONS[id]?.length||1)*100)}
function totalProgress(){return Math.round(Object.values(LESSONS).reduce((s,a)=>s+a.length,0) ? totalCompleted()/Object.values(LESSONS).reduce((s,a)=>s+a.length,0)*100:0)}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function header(){document.getElementById("xpTop").textContent=state.xp;document.getElementById("streakTop").textContent=state.streak;document.getElementById("heartsTop").textContent=state.hearts}
function setScreen(s){screen=s;document.querySelectorAll(".nav-item").forEach(x=>x.classList.toggle("active",x.dataset.screen===s));render();closeSidebar()}
function openSidebar(){document.getElementById("sidebar").classList.add("open");document.getElementById("overlay").classList.add("show")}
function closeSidebar(){document.getElementById("sidebar").classList.remove("open");document.getElementById("overlay").classList.remove("show")}
document.getElementById("menuBtn").onclick=openSidebar;document.getElementById("closeMenu").onclick=closeSidebar;document.getElementById("overlay").onclick=closeSidebar;
document.querySelectorAll(".nav-item").forEach(b=>b.onclick=()=>setScreen(b.dataset.screen));

function render(){
 header(); if(state.dark)document.body.classList.add("dark");else document.body.classList.remove("dark");
 const m=document.getElementById("main");
 if(screen==="home")m.innerHTML=homeView();
 else if(screen==="learn")m.innerHTML=learnView();
 else if(screen==="review")m.innerHTML=reviewView();
 else if(screen==="practice")m.innerHTML=practiceView();
 else if(screen==="stats")m.innerHTML=statsView();
 else if(screen==="achievements")m.innerHTML=achievementsView();
 else if(screen==="dictionary")m.innerHTML=dictionaryView();
 else if(screen==="settings")m.innerHTML=settingsView();
 bindDynamic();
}
function homeView(){
 const p=levelProgress(state.currentLevel);
 return `<section class="hero"><div><h1>Bonjour, apprenant 👋</h1><p>Construis ton anglais chaque jour, du premier mot jusqu'à la maîtrise avancée.</p></div><div class="level-pill">NIVEAU<br><strong>${state.currentLevel}</strong></div></section>
 <div class="section-title"><h2>Ta progression</h2><button class="btn small" data-go="learn">Continuer →</button></div>
 <div class="dashboard-grid"><div class="card progress-card"><div style="display:flex;justify-content:space-between"><b>${LEVELS.find(l=>l.id===state.currentLevel).name}</b><b>${p}%</b></div><div class="progress-bar" style="margin:12px 0 18px"><i style="width:${p}%"></i></div><div class="muted">Tu as terminé ${totalCompleted()} leçon(s). Continue pour débloquer les suivantes.</div></div>
 <div class="card progress-card"><div class="mini-stats"><div class="mini-stat"><strong>⚡</strong><span>${state.xp} XP</span></div><div class="mini-stat"><strong>🔥</strong><span>${state.streak} jours</span></div><div class="mini-stat"><strong>❤️</strong><span>${state.hearts}</span></div></div></div></div>
 <div class="section-title"><h2>Parcours complet</h2></div><div class="level-grid">${LEVELS.map((l,i)=>{const unlocked=state.unlocked.includes(l.id);return `<div class="card level-card ${unlocked?"":"locked"}"><div class="level-code">${l.id} ${l.icon}</div><h3>${l.name}</h3><p>${l.desc}</p><div class="progress-bar"><i style="width:${levelProgress(l.id)}%"></i></div><small>${levelProgress(l.id)}% terminé</small><br><button class="btn small ${unlocked?"":"gray"}" style="margin-top:12px" data-level="${l.id}">${unlocked?"Ouvrir":"🔒 Verrouillé"}</button></div>`}).join("")}</div>
 <div class="section-title"><h2>Objectif du jour</h2></div><div class="card progress-card"><div style="display:flex;justify-content:space-between"><b>${Math.min(state.stats.correct,state.dailyGoal)} / ${state.dailyGoal} bonnes réponses</b><span>🎯</span></div><div class="progress-bar" style="margin-top:10px"><i style="width:${Math.min(100,state.stats.correct/state.dailyGoal*100)}%"></i></div></div>`;
}
function learnView(){
 return `<div class="section-title"><div><h2>📚 Parcours d'apprentissage</h2><div class="muted">Chaque niveau contient 12 unités progressives.</div></div></div>
 ${LEVELS.map(l=>`<div class="section-title"><h2>${l.icon} ${l.id} — ${l.name}</h2><span class="muted">${levelProgress(l.id)}%</span></div><div class="lesson-list">${LESSONS[l.id].map((x,i)=>lessonCard(l,i,x)).join("")}</div>`).join("")}`;
}
function lessonCard(l,i,x){
 const key=l.id+"-"+i,done=!!state.completed[key],unlocked=state.unlocked.includes(l.id)&&(i===0||state.completed[l.id+"-"+(i-1)]);
 return `<div class="lesson-card ${unlocked?"":"locked"}"><div class="lesson-icon">${done?"✓":unlocked?"📘":"🔒"}</div><div><h3>${i+1}. ${x[0]}</h3><p>${x[1]}</p></div><div class="right"><button class="btn small ${unlocked?"":"gray"}" data-lesson="${l.id}|${i}" ${unlocked?"":"disabled"}>${done?"Revoir":"Commencer"}</button></div></div>`;
}
function reviewView(){
 const words=state.learnedWords.length?state.learnedWords:EXTRA_WORDS.slice(0,8).map(x=>x[0]);
 return `<div class="section-title"><div><h2>🔁 Révision intelligente</h2><div class="muted">Revois les mots que tu rencontres le plus souvent.</div></div></div><div class="card progress-card"><h3>Révision express</h3><p class="muted">Travaille ton vocabulaire avec un mini-test de 10 questions.</p><button class="btn purple" data-practice="review">Commencer la révision</button></div><div class="section-title"><h2>Mes mots</h2></div><div class="word-list">${words.slice(-20).map(w=>`<div class="word-row"><b>${esc(w)}</b><span>${EXTRA_WORDS.find(x=>x[0]===w)?.[1]||"mot appris"}</span></div>`).join("")||'<div class="card empty">Aucun mot enregistré pour le moment.</div>'}</div>`;
}
function practiceView(){
 return `<div class="section-title"><div><h2>🎯 Entraînement</h2><div class="muted">Choisis un mode pour renforcer tes compétences.</div></div></div>
 <div class="level-grid"><div class="card level-card"><div class="level-code">⚡ RAPIDE</div><h3>10 questions</h3><p>Questions mélangées de ton niveau actuel.</p><button class="btn blue" data-practice="quick">Jouer</button></div><div class="card level-card"><div class="level-code">📖 VOCABULAIRE</div><h3>Mots essentiels</h3><p>Traduis et reconnais les mots utiles.</p><button class="btn purple" data-practice="vocab">Jouer</button></div><div class="card level-card"><div class="level-code">🧠 GRAMMAIRE</div><h3>Défi grammaire</h3><p>Consolide les règles des niveaux parcourus.</p><button class="btn" data-practice="grammar">Jouer</button></div></div>`;
}
function statsView(){
 const acc=state.stats.answered?Math.round(state.stats.correct/state.stats.answered*100):0;
 return `<div class="section-title"><h2>📊 Ma progression</h2></div><div class="mini-stats"><div class="card mini-stat"><strong>${state.xp}</strong><span>XP total</span></div><div class="card mini-stat"><strong>${acc}%</strong><span>Réussite</span></div><div class="card mini-stat"><strong>${totalProgress()}%</strong><span>Parcours</span></div></div><div class="section-title"><h2>Progression par niveau</h2></div><div class="lesson-list">${LEVELS.map(l=>`<div class="card progress-card"><div style="display:flex;justify-content:space-between"><b>${l.id} — ${l.name}</b><b>${levelProgress(l.id)}%</b></div><div class="progress-bar" style="margin-top:10px"><i style="width:${levelProgress(l.id)}%"></i></div></div>`).join("")}</div>`;
}
function achievementsView(){
 const defs=[
 ["🌱","Premier pas","Terminer une leçon",state.stats.lessons>=1],
 ["⚡","100 XP","Gagner 100 XP",state.xp>=100],
 ["🔥","Série de 3","Étudier 3 jours de suite",state.streak>=3],
 ["📚","10 leçons","Terminer 10 leçons",state.stats.lessons>=10],
 ["🎯","Précision","Atteindre 80% de réussite",state.stats.answered>=10&&state.stats.correct/state.stats.answered>=.8],
 ["🏆","A1 terminé","Finir le niveau A1",levelProgress("A1")===100],
 ["🚀","B1 atteint","Débloquer B1",state.unlocked.includes("B1")],
 ["👑","Maîtrise","Finir C2",levelProgress("C2")===100]
 ];
 return `<div class="section-title"><div><h2>🏆 Récompenses</h2><div class="muted">Les badges se débloquent automatiquement.</div></div></div><div class="achievement-grid">${defs.map(a=>`<div class="card achievement" style="opacity:${a[3]?1:.42}"><div class="emoji">${a[0]}</div><h4>${a[1]}</h4><p>${a[2]}</p></div>`).join("")}</div>`;
}
function dictionaryView(){
 return `<div class="section-title"><div><h2>📖 Dictionnaire</h2><div class="muted">Recherche français ou anglais dans le vocabulaire intégré.</div></div></div><div class="search"><input id="dictSearch" placeholder="Ex. hello, bonjour, work…"><button class="btn">Chercher</button></div><div id="dictResults" class="word-list">${EXTRA_WORDS.map(x=>`<div class="word-row"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}</div>`;
}
function settingsView(){
 return `<div class="section-title"><h2>⚙️ Paramètres</h2></div><div class="settings"><div class="card setting-row"><div><b>🔊 Sons</b><p>Activer les sons de l'application.</p></div><button class="toggle ${state.sound?"on":""}" data-toggle="sound"><i></i></button></div><div class="card setting-row"><div><b>🌙 Mode sombre</b><p>Confort visuel dans les environnements sombres.</p></div><button class="toggle ${state.dark?"on":""}" data-toggle="dark"><i></i></button></div><div class="card setting-row"><div><b>🎯 Objectif quotidien</b><p>${state.dailyGoal} bonnes réponses par jour.</p></div><button class="btn small" data-goal>Modifier</button></div><div class="card progress-card"><h3>📦 Données locales</h3><p class="muted">Tout est enregistré sur cet appareil. Aucun compte ni serveur n'est nécessaire.</p><button class="btn gray" data-reset>Réinitialiser ma progression</button></div></div>`;
}
function bindDynamic(){
 document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>setScreen(b.dataset.go));
 document.querySelectorAll("[data-level]").forEach(b=>b.onclick=()=>{if(state.unlocked.includes(b.dataset.level)){state.currentLevel=b.dataset.level;save();setScreen("learn")}else toast("Ce niveau est encore verrouillé.")});
 document.querySelectorAll("[data-lesson]").forEach(b=>b.onclick=()=>startLesson(...b.dataset.lesson.split("|")));
 document.querySelectorAll("[data-practice]").forEach(b=>b.onclick=()=>startPractice(b.dataset.practice));
 document.querySelectorAll("[data-toggle]").forEach(b=>b.onclick=()=>{state[b.dataset.toggle]=!state[b.dataset.toggle];save();render()});
 const ds=document.getElementById("dictSearch"); if(ds) ds.oninput=()=>filterWords(ds.value);
 const reset=document.querySelector("[data-reset]");if(reset)reset.onclick=()=>{if(confirm("Réinitialiser toute la progression ?")){state={...defaultState};save();render();toast("Progression réinitialisée.")}};
 const goal=document.querySelector("[data-goal]");if(goal)goal.onclick=()=>{const n=prompt("Nouvel objectif quotidien (5 à 100) :",state.dailyGoal);const v=Number(n);if(v>=5&&v<=100){state.dailyGoal=v;save();render()}};
}
function filterWords(q){const r=document.getElementById("dictResults");const s=q.toLowerCase();r.innerHTML=EXTRA_WORDS.filter(x=>x.join(" ").toLowerCase().includes(s)).map(x=>`<div class="word-row"><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")||'<div class="card empty">Aucun résultat.</div>'}
function startLesson(id,i){currentLesson={id,i,data:LESSONS[id][i],practice:false};quizIndex=0;quizScore=0;answered=false;screen="quiz";renderQuiz()}
function startPractice(mode){const id=state.currentLevel;let pool=[];(LESSONS[id]||[]).forEach((x,i)=>pool.push({id,i,data:x}));pool.sort(()=>Math.random()-.5);currentLesson={id,practice:true,mode,questions:pool.slice(0,Math.min(10,pool.length))};quizIndex=0;quizScore=0;answered=false;renderPracticeQuiz()}
function renderQuiz(){
 const m=document.getElementById("main"),d=currentLesson.data, total=5;
 if(quizIndex>=total){finishLesson();return}
 const question=quizIndex===0?d[3]:makeVariation(d,quizIndex);
 const opts=quizIndex===0?d[4]:makeOptions(question.correct,question.pool);
 const correct=quizIndex===0?d[5]:question.correct;
 m.innerHTML=`<div class="lesson-screen"><div class="lesson-head"><button class="back" data-back>← Retour</button><div class="lesson-progress"><i style="width:${quizIndex/total*100}%"></i></div><span class="heartbar">❤️ ${state.hearts}</span></div><div class="card quiz-card"><div class="question-type">Leçon • ${esc(d[0])}</div><h2>${esc(question)}</h2><div class="options">${opts.map((o,j)=>`<button class="option" data-answer="${j}" data-correct="${j===correct}">${esc(o)}</button>`).join("")}</div><div id="explain"></div><div class="quiz-foot"><span>${quizIndex+1}/${total}</span><button class="btn" id="nextBtn" style="display:none">Continuer →</button></div></div></div>`;
 bindQuiz(d,correct);
}
function makeVariation(d,n){
 const variants=[
  {q:`Which option is correct for “${d[4][d[5]]}”?`,pool:d[4],correct:d[5]},
  {q:`Translate: ${d[2][0]||d[0]}`,pool:d[4],correct:d[5]},
  {q:`Choose the best answer about ${d[0]}.`,pool:d[4],correct:d[5]},
  {q:`Quick check: ${d[3]}`,pool:d[4],correct:d[5]}
 ];return variants[n-1]||variants[0];
}
function makeOptions(correct,pool){return pool}
function bindQuiz(d,correct){
 document.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>{
  if(answered)return;answered=true;state.stats.answered++;
  const ok=b.dataset.correct==="true";if(ok){quizScore++;state.stats.correct++;state.xp+=10;state.hearts=Math.min(5,state.hearts+1);toast("+10 XP ⚡")}else{state.hearts=Math.max(0,state.hearts-1);toast("Pas grave ! Relis l'explication.");}
  document.querySelectorAll(".option").forEach(x=>{if(x.dataset.correct==="true")x.classList.add("correct");else if(x===b&&!ok)x.classList.add("wrong")});
  document.getElementById("explain").innerHTML=`<div class="explain"><b>${ok?"✅ Bonne réponse !":"💡 À retenir"}</b><br>${esc(d[2].join(" • "))}</div>`;
  document.getElementById("nextBtn").style.display="inline-block";save();header();updateStreak();
 });
 document.getElementById("nextBtn").onclick=()=>{quizIndex++;answered=false;renderQuiz()};
 document.querySelector("[data-back]").onclick=()=>setScreen("learn");
}
function renderPracticeQuiz(){
 const m=document.getElementById("main"),q=currentLesson.questions[quizIndex],d=q.data;
 if(!q){finishPractice();return}
 const correct=d[5];
 m.innerHTML=`<div class="lesson-screen"><div class="lesson-head"><button class="back" data-back>← Retour</button><div class="lesson-progress"><i style="width:${quizIndex/currentLesson.questions.length*100}%"></i></div><span class="heartbar">❤️ ${state.hearts}</span></div><div class="card quiz-card"><div class="question-type">Entraînement • ${currentLesson.mode}</div><h2>${esc(d[3])}</h2><div class="options">${d[4].map((o,j)=>`<button class="option" data-answer="${j}" data-correct="${j===correct}">${esc(o)}</button>`).join("")}</div><div id="explain"></div><div class="quiz-foot"><span>${quizIndex+1}/${currentLesson.questions.length}</span><button class="btn" id="nextBtn" style="display:none">Continuer →</button></div></div></div>`;
 document.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>{
  if(answered)return;answered=true;state.stats.answered++;const ok=b.dataset.correct==="true";if(ok){quizScore++;state.stats.correct++;state.xp+=10;toast("+10 XP ⚡")}else{state.hearts=Math.max(0,state.hearts-1);toast("Continue ! 💪")}
  document.querySelectorAll(".option").forEach(x=>{if(x.dataset.correct==="true")x.classList.add("correct");else if(x===b&&!ok)x.classList.add("wrong")});
  document.getElementById("explain").innerHTML=`<div class="explain"><b>${ok?"✅ Correct":"💡 Réponse à retenir"}</b><br>${esc(d[2].join(" • "))}</div>`;
  document.getElementById("nextBtn").style.display="inline-block";save();header();updateStreak();
 });
 document.getElementById("nextBtn").onclick=()=>{quizIndex++;answered=false;renderPracticeQuiz()};
 document.querySelector("[data-back]").onclick=()=>setScreen("practice");
}
function finishLesson(){
 const key=currentLesson.id+"-"+currentLesson.i;state.completed[key]=true;state.stats.lessons++;
 state.xp+=Math.max(0,quizScore*5);state.learnedWords.push(...(currentLesson.data[2]||[]).map(x=>x.split(" = ")[0]).filter(Boolean));
 const idx=LEVELS.findIndex(l=>l.id===currentLesson.id),arr=LESSONS[currentLesson.id];
 if(quizScore>=3 && currentLesson.i===arr.length-1 && LEVELS[idx+1]){if(!state.unlocked.includes(LEVELS[idx+1].id))state.unlocked.push(LEVELS[idx+1].id);toast(`🎉 ${LEVELS[idx+1].id} débloqué !`)}
 save();updateStreak();
 document.getElementById("main").innerHTML=`<div class="lesson-screen"><div class="card complete"><div class="big">${quizScore>=4?"🏆":"🌟"}</div><h1>${quizScore>=4?"Excellent !":"Bien joué !"}</h1><p class="muted">${currentLesson.data[0]} terminé.</p><div class="complete-grid"><div><b>${quizScore}/5</b><br><small>Score</small></div><div><b>+${50+quizScore*5}</b><br><small>XP gagné</small></div><div><b>${Math.round(quizScore/5*100)}%</b><br><small>Réussite</small></div></div><button class="btn" data-go="learn">Continuer l'apprentissage</button></div></div>`;
 bindDynamic();
}
function finishPractice(){
 const m=document.getElementById("main");m.innerHTML=`<div class="lesson-screen"><div class="card complete"><div class="big">🎯</div><h1>Entraînement terminé !</h1><p class="muted">Tu as obtenu ${quizScore}/${currentLesson.questions.length} bonnes réponses.</p><div class="complete-grid"><div><b>${quizScore}</b><br><small>Correctes</small></div><div><b>+${quizScore*10}</b><br><small>XP</small></div><div><b>${Math.round(quizScore/currentLesson.questions.length*100)}%</b><br><small>Score</small></div></div><button class="btn" data-go="practice">Recommencer</button></div></div>`;bindDynamic();save()}
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js").catch(()=>{}));
updateStreak();render();
