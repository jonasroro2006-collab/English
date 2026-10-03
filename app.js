/* English Jonas — V2
   Logique de l'application. Les cours et questions sont dans data.js.
   Progression stockée localement (localStorage), aucun serveur nécessaire.
*/
const KEY="englishJonasState", OLD_KEY="englishMasterState";
const PASS=3, MAX_HEARTS=5, HEART_MS=20*60*1000;
const $=id=>document.getElementById(id);

/* ---------- État ---------- */
const defaults=()=>({
 xp:0, hearts:MAX_HEARTS, heartsAt:null, streak:0, lastDay:null,
 completed:{}, learnedWords:[], dailyGoal:20, daily:{date:null,correct:0},
 dark:false, sound:true, currentLevel:"A1", unlocked:["A1"],
 stats:{lessons:0,correct:0,answered:0}, achievements:[]
});

function loadState(){
 const base=defaults();
 try{
  const raw=localStorage.getItem(KEY)||localStorage.getItem(OLD_KEY);
  if(!raw)return base;
  const s=JSON.parse(raw), st={...base,...s,stats:{...base.stats,...(s.stats||{})},daily:{...base.daily,...(s.daily||{})}};
  st.completed=s.completed&&typeof s.completed==="object"?s.completed:{};
  st.unlocked=Array.isArray(s.unlocked)&&s.unlocked.length?s.unlocked:["A1"];
  st.achievements=Array.isArray(s.achievements)?s.achievements:[];
  st.learnedWords=[...new Set((Array.isArray(s.learnedWords)?s.learnedWords:[]).filter(w=>typeof w==="string"&&w.includes(" = ")))];
  st.hearts=Math.min(MAX_HEARTS,Math.max(0,Number(st.hearts)||0));
  return st;
 }catch(e){return base}
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){}}

let state=loadState(), screen="home", session=null, answered=false, audioCtx=null;

/* ---------- Utilitaires ---------- */
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function today(){const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function dayDiff(a,b){return Math.round((new Date(b+"T00:00:00")-new Date(a+"T00:00:00"))/864e5)}
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove("show"),2200)}
function beep(ok){
 if(!state.sound)return;
 try{
  audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();
  const o=audioCtx.createOscillator(),g=audioCtx.createGain();
  o.type=ok?"sine":"square";o.frequency.value=ok?880:220;
  g.gain.setValueAtTime(.08,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+.18);
  o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+.2);
 }catch(e){}
}

/* ---------- Vies, série, objectif du jour ---------- */
function regenHearts(){
 if(state.hearts>=MAX_HEARTS){state.heartsAt=null;return}
 if(!state.heartsAt){state.heartsAt=Date.now();return}
 const n=Math.floor((Date.now()-state.heartsAt)/HEART_MS);
 if(n>0){state.hearts=Math.min(MAX_HEARTS,state.hearts+n);state.heartsAt=state.hearts>=MAX_HEARTS?null:state.heartsAt+n*HEART_MS;save()}
}
function loseHeart(){if(state.hearts>=MAX_HEARTS)state.heartsAt=Date.now();state.hearts=Math.max(0,state.hearts-1)}
function expireStreak(){if(state.lastDay&&dayDiff(state.lastDay,today())>1&&state.streak){state.streak=0;save()}}
function updateStreak(){
 const t=today();
 if(state.lastDay===t)return;
 state.streak=(state.lastDay&&dayDiff(state.lastDay,t)===1)?state.streak+1:1;
 state.lastDay=t;save();
}
function dailyCorrect(){if(state.daily.date!==today())state.daily={date:today(),correct:0};return state.daily.correct}

/* ---------- Progression ---------- */
const totalCompleted=()=>Object.keys(state.completed).filter(k=>state.completed[k]).length;
const totalLessons=()=>Object.values(LESSONS).reduce((s,a)=>s+a.length,0);
const totalProgress=()=>Math.round(totalCompleted()/totalLessons()*100);
function levelProgress(id){const a=LESSONS[id]||[];return Math.round(a.filter((_,i)=>state.completed[id+"-"+i]).length/(a.length||1)*100)}
function nextLesson(){
 for(const l of LEVELS){
  if(!state.unlocked.includes(l.id))continue;
  const i=LESSONS[l.id].findIndex((_,k)=>!state.completed[l.id+"-"+k]);
  if(i>=0)return{id:l.id,i};
 }
 return null;
}
function lessonUnlocked(id,i){return state.unlocked.includes(id)&&(i===0||!!state.completed[id+"-"+(i-1)])}

const ACH=[
 ["first","🌱","Premier pas","Terminer une leçon",s=>s.stats.lessons>=1],
 ["xp100","⚡","100 XP","Gagner 100 XP",s=>s.xp>=100],
 ["streak3","🔥","Série de 3","Étudier 3 jours de suite",s=>s.streak>=3],
 ["l10","📚","10 leçons","Terminer 10 leçons",s=>s.stats.lessons>=10],
 ["acc","🎯","Précision","80 % de réussite (10 réponses minimum)",s=>s.stats.answered>=10&&s.stats.correct/s.stats.answered>=.8],
 ["a1","🏆","A1 terminé","Finir le niveau A1",()=>levelProgress("A1")===100],
 ["b1","🚀","B1 atteint","Débloquer B1",s=>s.unlocked.includes("B1")],
 ["c2","👑","Maîtrise","Finir le niveau C2",()=>levelProgress("C2")===100]
];
function checkAchievements(){
 const fresh=ACH.filter(a=>a[4](state)&&!state.achievements.includes(a[0]));
 if(fresh.length){fresh.forEach(a=>state.achievements.push(a[0]));save();setTimeout(()=>toast(`🏅 Récompense : ${fresh[0][2]}`),900)}
}

/* ---------- Vocabulaire (paires anglais / français) ---------- */
const learnedPairs=()=>state.learnedWords.map(w=>w.split(" = ")).filter(p=>p.length===2);
function allPairs(){
 const m=new Map();
 [...EXTRA_WORDS,...learnedPairs()].forEach(([en,fr])=>{if(!m.has(en.toLowerCase()))m.set(en.toLowerCase(),[en,fr])});
 return [...m.values()];
}

/* ---------- Questions ---------- */
function mkQ(q,notes,tag){
 const [p,good,...bad]=q, opts=shuffle([good,...bad]);
 const prompt=(tag&&/^(Choose|Which)\b/.test(p))?`[${tag}] ${p}`:p;
 return{p:prompt,opts,a:opts.indexOf(good),notes:notes||[]};
}
function vocabQuestions(pairs,pool,count){
 const out=[];
 shuffle(pairs.filter(([en,fr])=>en.toLowerCase()!==fr.toLowerCase())).slice(0,count).forEach(([en,fr])=>{
  const toFr=Math.random()<.5, good=toFr?fr:en;
  const bad=shuffle([...new Set(pool.map(x=>toFr?x[1]:x[0]))].filter(x=>x.toLowerCase()!==good.toLowerCase())).slice(0,3);
  if(bad.length<3)return;
  const opts=shuffle([good,...bad]);
  out.push({p:toFr?`Que signifie « ${en} » ?`:`Comment dit-on « ${fr} » en anglais ?`,opts,a:opts.indexOf(good),notes:[`${en} = ${fr}`]});
 });
 return out;
}
function lessonPool(types,doneOnly){
 const out=new Map();
 LEVELS.forEach(l=>{
  if(!state.unlocked.includes(l.id))return;
  LESSONS[l.id].forEach((L,i)=>{
   if(types&&!types.includes(L.type))return;
   if(doneOnly?!state.completed[l.id+"-"+i]:l.id!==state.currentLevel)return;
   L.q.forEach(q=>{const k=q[0]+"|"+q[1];if(!out.has(k))out.set(k,mkQ(q,L.notes,L.title))});
  });
 });
 return [...out.values()];
}
function buildPractice(mode){
 const pick=types=>{let p=lessonPool(types,true);if(p.length<10)p=[...p,...lessonPool(types,false)];return shuffle([...new Map(p.map(q=>[q.p+q.opts[q.a],q])).values()]).slice(0,10)};
 if(mode==="quick")return pick(null);
 if(mode==="grammar")return pick(["g"]);
 const pairs=allPairs();
 if(mode==="review"){const lp=learnedPairs();return vocabQuestions(lp.length>=4?lp:pairs,pairs,10)}
 return vocabQuestions(pairs,pairs,10);
}
const PRACTICE_TITLES={quick:"Rapide",vocab:"Vocabulaire",grammar:"Grammaire",review:"Révision"};

/* ---------- Navigation ---------- */
function header(){
 $("xpTop").textContent=state.xp;$("streakTop").textContent=state.streak;$("heartsTop").textContent=state.hearts;
}
function setScreen(s){
 session=null;screen=s;
 document.querySelectorAll(".nav-item").forEach(x=>x.classList.toggle("active",x.dataset.screen===s));
 render();closeSidebar();window.scrollTo(0,0);
}
function openSidebar(){$("sidebar").classList.add("open");$("overlay").classList.add("show")}
function closeSidebar(){$("sidebar").classList.remove("open");$("overlay").classList.remove("show")}
$("menuBtn").onclick=openSidebar;$("closeMenu").onclick=closeSidebar;$("overlay").onclick=closeSidebar;
document.querySelectorAll(".nav-item").forEach(b=>b.onclick=()=>setScreen(b.dataset.screen));

function render(){
 regenHearts();expireStreak();header();
 document.documentElement.classList.toggle("dark",!!state.dark);
 const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=state.dark?"#0f1720":"#58cc02";
 const views={home:homeView,learn:learnView,review:reviewView,practice:practiceView,stats:statsView,achievements:achievementsView,dictionary:dictionaryView,settings:settingsView};
 $("main").innerHTML=(views[screen]||homeView)();
 bindDynamic();
}

/* ---------- Écrans ---------- */
function homeView(){
 const lvl=LEVELS.find(l=>l.id===state.currentLevel)||LEVELS[0], p=levelProgress(lvl.id), nx=nextLesson();
 const goal=Math.min(dailyCorrect(),state.dailyGoal), goalPct=Math.min(100,Math.round(goal/state.dailyGoal*100));
 return `<section class="hero"><div><h1>Bonjour 👋</h1><p>Construis ton anglais chaque jour, du premier mot jusqu'à la maîtrise avancée.</p></div><div class="level-pill">NIVEAU<br><strong>${lvl.id}</strong></div></section>
 <div class="section-title"><h2>Ta progression</h2>${nx?`<button class="btn small" data-lesson="${nx.id}|${nx.i}">Continuer →</button>`:`<button class="btn small" data-go="practice">S'entraîner →</button>`}</div>
 <div class="dashboard-grid"><div class="card progress-card"><div style="display:flex;justify-content:space-between"><b>${esc(lvl.name)}</b><b>${p}%</b></div><div class="progress-bar" style="margin:12px 0 18px"><i style="width:${p}%"></i></div><div class="muted">Tu as terminé ${totalCompleted()} leçon(s) sur ${totalLessons()}.</div></div>
 <div class="card progress-card"><div class="mini-stats"><div class="mini-stat"><strong>⚡</strong><span>${state.xp} XP</span></div><div class="mini-stat"><strong>🔥</strong><span>${state.streak} jour(s)</span></div><div class="mini-stat"><strong>❤️</strong><span>${state.hearts}</span></div></div></div></div>
 <div class="section-title"><h2>Parcours complet</h2></div><div class="level-grid">${LEVELS.map(l=>{const u=state.unlocked.includes(l.id);return `<div class="card level-card ${u?"":"locked"}"><div class="level-code">${l.id} ${l.icon}</div><h3>${esc(l.name)}</h3><p>${esc(l.desc)}</p><div class="progress-bar"><i style="width:${levelProgress(l.id)}%"></i></div><small>${levelProgress(l.id)}% terminé</small><br><button class="btn small ${u?"":"gray"}" style="margin-top:12px" data-level="${l.id}">${u?"Ouvrir":"🔒 Verrouillé"}</button></div>`}).join("")}</div>
 <div class="section-title"><h2>Objectif du jour</h2></div><div class="card progress-card"><div style="display:flex;justify-content:space-between"><b>${goal} / ${state.dailyGoal} bonnes réponses</b><span>🎯</span></div><div class="progress-bar" style="margin-top:10px"><i style="width:${goalPct}%"></i></div></div>`;
}
function learnView(){
 return `<div class="section-title"><div><h2>📚 Parcours d'apprentissage</h2><div class="muted">Chaque niveau contient 12 unités. Réussis au moins ${PASS}/5 pour valider une leçon.</div></div></div>
 ${LEVELS.map(l=>`<div id="lvl-${l.id}" class="section-title"><h2>${l.icon} ${l.id} — ${esc(l.name)}</h2><span class="muted">${levelProgress(l.id)}%</span></div><div class="lesson-list">${LESSONS[l.id].map((x,i)=>lessonCard(l,i,x)).join("")}</div>`).join("")}`;
}
function lessonCard(l,i,x){
 const done=!!state.completed[l.id+"-"+i], ok=lessonUnlocked(l.id,i);
 return `<div class="lesson-card ${ok?"":"locked"}"><div class="lesson-icon">${done?"✓":ok?"📘":"🔒"}</div><div><h3>${i+1}. ${esc(x.title)}</h3><p>${esc(x.desc)}</p></div><div class="right"><button class="btn small ${ok?"":"gray"}" data-lesson="${l.id}|${i}" ${ok?"":"disabled"}>${done?"Revoir":"Commencer"}</button></div></div>`;
}
function reviewView(){
 const words=learnedPairs().slice(-30).reverse();
 return `<div class="section-title"><div><h2>🔁 Révision intelligente</h2><div class="muted">Revois les mots et expressions des leçons que tu as validées.</div></div></div><div class="card progress-card"><h3>Révision express</h3><p class="muted">Mini-test de 10 questions sur ton vocabulaire.</p><button class="btn purple" data-practice="review">Commencer la révision</button></div><div class="section-title"><h2>Mes mots (${learnedPairs().length})</h2></div><div class="word-list">${words.map(([en,fr])=>`<div class="word-row"><b>${esc(en)}</b><span>${esc(fr)}</span></div>`).join("")||'<div class="card empty">Valide une leçon pour enregistrer tes premiers mots.</div>'}</div>`;
}
function practiceView(){
 return `<div class="section-title"><div><h2>🎯 Entraînement</h2><div class="muted">Un bon score (70 % ou plus) te rend une vie ❤️.</div></div></div>
 <div class="level-grid"><div class="card level-card"><div class="level-code">⚡ RAPIDE</div><h3>10 questions</h3><p>Questions mélangées de tes leçons validées.</p><button class="btn blue" data-practice="quick">Jouer</button></div><div class="card level-card"><div class="level-code">📖 VOCABULAIRE</div><h3>Mots essentiels</h3><p>Traduis et reconnais les mots utiles.</p><button class="btn purple" data-practice="vocab">Jouer</button></div><div class="card level-card"><div class="level-code">🧠 GRAMMAIRE</div><h3>Défi grammaire</h3><p>Consolide les règles que tu as étudiées.</p><button class="btn" data-practice="grammar">Jouer</button></div></div>`;
}
function statsView(){
 const acc=state.stats.answered?Math.round(state.stats.correct/state.stats.answered*100):0;
 return `<div class="section-title"><h2>📊 Ma progression</h2></div><div class="mini-stats"><div class="card mini-stat"><strong>${state.xp}</strong><span>XP total</span></div><div class="card mini-stat"><strong>${acc}%</strong><span>Réussite</span></div><div class="card mini-stat"><strong>${totalProgress()}%</strong><span>Parcours</span></div></div><div class="section-title"><h2>Progression par niveau</h2></div><div class="lesson-list">${LEVELS.map(l=>`<div class="card progress-card"><div style="display:flex;justify-content:space-between"><b>${l.id} — ${esc(l.name)}</b><b>${levelProgress(l.id)}%</b></div><div class="progress-bar" style="margin-top:10px"><i style="width:${levelProgress(l.id)}%"></i></div></div>`).join("")}</div>`;
}
function achievementsView(){
 return `<div class="section-title"><div><h2>🏆 Récompenses</h2><div class="muted">Les badges se débloquent automatiquement.</div></div></div><div class="achievement-grid">${ACH.map(a=>`<div class="card achievement" style="opacity:${state.achievements.includes(a[0])||a[4](state)?1:.42}"><div class="emoji">${a[1]}</div><h4>${a[2]}</h4><p>${a[3]}</p></div>`).join("")}</div>`;
}
function wordRows(q){
 const s=(q||"").trim().toLowerCase();
 const rows=allPairs().filter(x=>!s||x.join(" ").toLowerCase().includes(s)).sort((a,b)=>a[0].localeCompare(b[0]));
 return rows.map(([en,fr])=>`<div class="word-row"><b>${esc(en)}</b><span>${esc(fr)}</span></div>`).join("")||'<div class="card empty">Aucun résultat.</div>';
}
function dictionaryView(){
 return `<div class="section-title"><div><h2>📖 Dictionnaire</h2><div class="muted">Recherche en français ou en anglais. Il s'enrichit avec tes leçons.</div></div></div><div class="search"><input id="dictSearch" placeholder="Ex. hello, bonjour, work…" autocomplete="off"><button class="btn" id="dictBtn">Chercher</button></div><div id="dictResults" class="word-list">${wordRows("")}</div>`;
}
function settingsView(){
 return `<div class="section-title"><h2>⚙️ Paramètres</h2></div><div class="settings"><div class="card setting-row"><div><b>🔊 Sons</b><p>Petit son à chaque réponse.</p></div><button class="toggle ${state.sound?"on":""}" data-toggle="sound" aria-label="Sons"><i></i></button></div><div class="card setting-row"><div><b>🌙 Mode sombre</b><p>Confort visuel dans les environnements sombres.</p></div><button class="toggle ${state.dark?"on":""}" data-toggle="dark" aria-label="Mode sombre"><i></i></button></div><div class="card setting-row"><div><b>🎯 Objectif quotidien</b><p>${state.dailyGoal} bonnes réponses par jour.</p></div><button class="btn small" data-goal>Modifier</button></div><div class="card progress-card"><h3>📦 Données locales</h3><p class="muted">Tout est enregistré sur cet appareil. Aucun compte ni serveur n'est nécessaire.</p><button class="btn gray" data-reset>Réinitialiser ma progression</button></div></div>`;
}

function bindDynamic(){
 document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>setScreen(b.dataset.go));
 document.querySelectorAll("[data-level]").forEach(b=>b.onclick=()=>{
  const id=b.dataset.level;
  if(!state.unlocked.includes(id))return toast("Ce niveau est encore verrouillé.");
  state.currentLevel=id;save();setScreen("learn");
  setTimeout(()=>{const el=$("lvl-"+id);if(el)el.scrollIntoView({behavior:"smooth",block:"start"})},50);
 });
 document.querySelectorAll("[data-lesson]").forEach(b=>b.onclick=()=>startLesson(...b.dataset.lesson.split("|")));
 document.querySelectorAll("[data-practice]").forEach(b=>b.onclick=()=>startPractice(b.dataset.practice));
 document.querySelectorAll("[data-toggle]").forEach(b=>b.onclick=()=>{state[b.dataset.toggle]=!state[b.dataset.toggle];save();render()});
 const ds=$("dictSearch");if(ds){const run=()=>{$("dictResults").innerHTML=wordRows(ds.value)};ds.oninput=run;$("dictBtn").onclick=run}
 const reset=document.querySelector("[data-reset]");
 if(reset)reset.onclick=()=>{if(confirm("Réinitialiser toute la progression ?")){state=defaults();save();render();toast("Progression réinitialisée.")}};
 const goal=document.querySelector("[data-goal]");
 if(goal)goal.onclick=()=>{const v=Number(prompt("Nouvel objectif quotidien (5 à 100) :",state.dailyGoal));if(v>=5&&v<=100){state.dailyGoal=Math.round(v);save();render()}};
}

/* ---------- Moteur de quiz (leçons et entraînements) ---------- */
function canPlay(){
 regenHearts();header();
 if(state.hearts>0)return true;
 const left=Math.max(1,Math.ceil((HEART_MS-(Date.now()-(state.heartsAt||Date.now())))/60000));
 $("main").innerHTML=`<div class="lesson-screen"><div class="card complete"><div class="big">💔</div><h1>Plus de vies</h1><p class="muted">Prochaine vie dans environ ${left} min. Tu peux réviser ton vocabulaire en attendant.</p><div style="display:grid;gap:10px;max-width:320px;margin:20px auto 0"><button class="btn purple" data-go="review">Voir mes mots</button><button class="btn gray" data-go="home">Retour à l'accueil</button></div></div></div>`;
 bindDynamic();
 return false;
}
function startLesson(id,i){
 i=Number(i);const L=(LESSONS[id]||[])[i];
 if(!L||!lessonUnlocked(id,i)||!canPlay())return;
 session={kind:"lesson",id,i,title:L.title,notes:L.notes,questions:shuffle(L.q).map(q=>mkQ(q,L.notes)),index:0,score:0,back:"learn"};
 answered=false;renderQuestion();
}
function startPractice(mode){
 if(!canPlay())return;
 const qs=buildPractice(mode);
 if(qs.length<3)return toast("Valide d'abord quelques leçons pour t'entraîner.");
 session={kind:"practice",mode,title:PRACTICE_TITLES[mode]||"Entraînement",questions:qs,index:0,score:0,back:mode==="review"?"review":"practice"};
 answered=false;renderQuestion();
}
function renderQuestion(){
 const s=session,q=s.questions[s.index],n=s.questions.length;
 $("main").innerHTML=`<div class="lesson-screen"><div class="lesson-head"><button class="back" id="backBtn">← Retour</button><div class="lesson-progress"><i style="width:${s.index/n*100}%"></i></div><span class="heartbar">❤️ <b id="qHearts">${state.hearts}</b></span></div><div class="card quiz-card"><div class="question-type">${s.kind==="lesson"?"Leçon":"Entraînement"} • ${esc(s.title)}</div><h2>${esc(q.p)}</h2><div class="options">${q.opts.map((o,j)=>`<button class="option" data-answer="${j}">${esc(o)}</button>`).join("")}</div><div id="explain"></div><div class="quiz-foot"><span>${s.index+1}/${n}</span><button class="btn" id="nextBtn" style="display:none">Continuer →</button></div></div></div>`;
 $("backBtn").onclick=()=>setScreen(s.back);
 document.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>onAnswer(Number(b.dataset.answer)));
}
function onAnswer(j){
 if(answered)return;answered=true;
 const s=session,q=s.questions[s.index],ok=j===q.a;
 state.stats.answered++;updateStreak();
 if(ok){s.score++;state.stats.correct++;state.xp+=10;dailyCorrect();state.daily.correct++;toast("+10 XP ⚡")}
 else{loseHeart();toast("Pas grave ! Relis l'explication.")}
 beep(ok);save();header();
 document.querySelectorAll(".option").forEach((el,k)=>{el.classList.add("locked");if(k===q.a)el.classList.add("correct");else if(k===j)el.classList.add("wrong")});
 $("qHearts").textContent=state.hearts;
 const note=q.notes.length?`<br><small>${q.notes.map(esc).join(" • ")}</small>`:"";
 $("explain").innerHTML=`<div class="explain"><b>${ok?"✅ Bonne réponse !":"💡 La bonne réponse : "+esc(q.opts[q.a])}</b>${note}</div>`;
 const next=$("nextBtn");next.style.display="inline-block";
 next.onclick=()=>{
  if(!ok&&state.hearts<=0){session=null;return canPlay()}
  s.index++;answered=false;
  if(s.index>=s.questions.length)return s.kind==="lesson"?finishLesson():finishPractice();
  renderQuestion();
 };
}
function finishLesson(){
 const s=session,key=s.id+"-"+s.i,passed=s.score>=PASS;
 let gain=0,unlockedNext=null;
 if(passed){
  const first=!state.completed[key];
  state.completed[key]=true;
  gain=first?20+s.score*5:s.score*2;
  if(first){
   state.stats.lessons++;
   s.notes.filter(n=>n.includes(" = ")).forEach(n=>{if(!state.learnedWords.includes(n))state.learnedWords.push(n)});
  }
  const next=LEVELS[LEVELS.findIndex(l=>l.id===s.id)+1];
  if(s.i===LESSONS[s.id].length-1&&next&&!state.unlocked.includes(next.id)){state.unlocked.push(next.id);state.currentLevel=next.id;unlockedNext=next.id}
 }
 state.xp+=gain;save();header();checkAchievements();
 const hasNext=passed&&s.i+1<LESSONS[s.id].length;
 $("main").innerHTML=`<div class="lesson-screen"><div class="card complete"><div class="big">${!passed?"💪":s.score>=4?"🏆":"🌟"}</div><h1>${!passed?"Presque !":s.score>=4?"Excellent !":"Bien joué !"}</h1><p class="muted">${esc(s.title)} ${passed?"validée.":`non validée : il faut au moins ${PASS}/5.`}</p><div class="complete-grid"><div><b>${s.score}/5</b><br><small>Score</small></div><div><b>+${gain}</b><br><small>XP bonus</small></div><div><b>${Math.round(s.score/5*100)}%</b><br><small>Réussite</small></div></div>${unlockedNext?`<p><b>🎉 Niveau ${unlockedNext} débloqué !</b></p>`:""}<div style="display:grid;gap:10px;max-width:320px;margin:0 auto">${hasNext?`<button class="btn" data-lesson="${s.id}|${s.i+1}">Leçon suivante →</button>`:""}${passed?"":`<button class="btn" data-lesson="${s.id}|${s.i}">Réessayer</button>`}<button class="btn gray" data-go="learn">Retour au parcours</button></div></div></div>`;
 session=null;bindDynamic();
 if(unlockedNext)setTimeout(()=>toast(`🎉 ${unlockedNext} débloqué !`),600);
}
function finishPractice(){
 const s=session,n=s.questions.length,pct=Math.round(s.score/n*100),heart=pct>=70&&state.hearts<MAX_HEARTS;
 if(heart){state.hearts++;if(state.hearts>=MAX_HEARTS)state.heartsAt=null}
 save();header();checkAchievements();
 $("main").innerHTML=`<div class="lesson-screen"><div class="card complete"><div class="big">🎯</div><h1>Entraînement terminé !</h1><p class="muted">Tu as obtenu ${s.score}/${n} bonnes réponses.${heart?" +1 ❤️ gagné !":""}</p><div class="complete-grid"><div><b>${s.score}</b><br><small>Correctes</small></div><div><b>+${s.score*10}</b><br><small>XP</small></div><div><b>${pct}%</b><br><small>Score</small></div></div><div style="display:grid;gap:10px;max-width:320px;margin:0 auto"><button class="btn" data-practice="${s.mode}">Recommencer</button><button class="btn gray" data-go="${s.back}">Retour</button></div></div></div>`;
 session=null;bindDynamic();
}

/* ---------- Démarrage ---------- */
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js").catch(()=>{}));
setInterval(()=>{regenHearts();header()},30000);
render();
