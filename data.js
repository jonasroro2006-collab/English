/* English Jonas — données (niveaux, leçons, questions, dictionnaire)
   Format d'une question : ["énoncé", "BONNE réponse", "faux 1", "faux 2", "faux 3"]
   La bonne réponse est toujours en 2e position : l'appli mélange les choix automatiquement.
   Type de leçon : "v" = vocabulaire, "g" = grammaire / méthode.
*/
const LEVELS=[
 {id:"A1",name:"Débutant",icon:"🌱",desc:"Les bases indispensables pour comprendre et communiquer."},
 {id:"A2",name:"Élémentaire",icon:"🌿",desc:"Conversations quotidiennes et grammaire essentielle."},
 {id:"B1",name:"Intermédiaire",icon:"🚀",desc:"Communiquer avec plus d'aisance et raconter des expériences."},
 {id:"B2",name:"Intermédiaire supérieur",icon:"🎓",desc:"Comprendre des contenus complexes et argumenter."},
 {id:"C1",name:"Avancé",icon:"💎",desc:"Anglais professionnel, académique et expressions idiomatiques."},
 {id:"C2",name:"Supérieur",icon:"👑",desc:"Maîtrise avancée, nuance, précision et fluidité."}
];

const L=(title,desc,type,notes,q)=>({title,desc,type,notes,q});

const LESSONS={
A1:[
 L("Salutations","Hello, hi, goodbye…","v",["Hello = Bonjour","Hi = Salut","Good morning = Bonjour (le matin)","Good evening = Bonsoir","Goodbye = Au revoir"],[
  ["What does “Hello” mean?","Bonjour","Merci","Au revoir","S'il vous plaît"],
  ["How do you say “Au revoir” in English?","Goodbye","Hello","Thanks","Sorry"],
  ["Which greeting do we use in the morning?","Good morning","Good night","Goodbye","Good evening"],
  ["“Good evening” means…","Bonsoir","Bonjour (matin)","Bonne nuit","Salut"],
  ["Which greeting is informal?","Hi","Dear Sir","Good evening","Goodbye"]]),
 L("Se présenter","Name, age and origin","v",["My name is Jonas. = Je m'appelle Jonas.","I am twenty years old. = J'ai vingt ans.","I am from Côte d'Ivoire. = Je viens de Côte d'Ivoire."],[
  ["Choose the correct sentence.","I am from Côte d'Ivoire.","I from am Côte d'Ivoire.","I be from Côte d'Ivoire.","From Côte d'Ivoire I am."],
  ["How do you ask someone's name?","What is your name?","How old are you?","Where are you?","Who is name?"],
  ["“My name is Sara.” means…","Je m'appelle Sara.","Mon amie s'appelle Sara.","Je cherche Sara.","Sara est ici."],
  ["Complete: I ___ twenty years old.","am","is","are","have"],
  ["Which sentence says where you come from?","I am from Abidjan.","I am fine.","I am a student.","I am twenty."]]),
 L("To be","am / is / are","g",["I am","You are","He / She / It is","We / You / They are"],[
  ["She ___ a student.","is","am","are","be"],
  ["I ___ happy today.","am","is","are","be"],
  ["They ___ my friends.","are","is","am","be"],
  ["It ___ a big house.","is","are","am","be"],
  ["Choose the correct negative sentence.","He is not tired.","He not is tired.","He are not tired.","He no is tired."]]),
 L("Pronoms","I, you, he, she…","g",["I = je","you = tu / vous","he = il","she = elle","we = nous","they = ils / elles"],[
  ["“They” means…","Ils / Elles","Il","Elle","Nous"],
  ["Which pronoun means “nous”?","we","they","you","he"],
  ["Which pronoun do we use for a woman?","she","he","it","they"],
  ["___ are my parents. (Ce sont mes parents.)","They","He","She","We"],
  ["Which pronoun do we use for an object (a book)?","it","he","she","we"]]),
 L("Nombres","Numbers 1–20","v",["one = 1","two = 2","three = 3","ten = 10","fifteen = 15","twenty = 20"],[
  ["What is “fifteen”?","15","50","12","5"],
  ["How do you write 20 in English?","twenty","twelve","two","thirty"],
  ["Which number is “seven”?","7","6","17","70"],
  ["3 + 4 = ___","seven","six","eight","five"],
  ["What comes after “nine”?","ten","eight","eleven","twelve"]]),
 L("Famille","Family vocabulary","v",["mother = mère","father = père","brother = frère","sister = sœur","son = fils","daughter = fille","grandmother = grand-mère"],[
  ["“Brother” means…","Frère","Père","Fils","Oncle"],
  ["How do you say “sœur” in English?","sister","mother","daughter","aunt"],
  ["The mother of your mother is your…","grandmother","aunt","sister","daughter"],
  ["“Daughter” means…","Fille","Fils","Sœur","Mère"],
  ["My father and my mother are my ___.","parents","cousins","children","friends"]]),
 L("Présent simple","Habits and routines","g",["I work.","You play.","He works.","She studies.","Add -s / -es after he, she, it."],[
  ["He ___ English every day.","studies","study","studying","studied"],
  ["They ___ football on Sunday.","play","plays","playing","played"],
  ["She ___ in a bank.","works","work","working","are work"],
  ["Choose the correct sentence.","My brother likes music.","My brother like music.","My brother liking music.","My brother is like music."],
  ["We ___ breakfast at seven.","have","has","having","haves"]]),
 L("Questions","Do / Does","g",["Do you speak English?","Does he work here?","What is your name?","Where do you live?","Why are you late?"],[
  ["___ you speak English?","Do","Does","Is","Are"],
  ["___ she live in Abidjan?","Does","Do","Is","Are"],
  ["Choose the correct question.","Where do you live?","Where you live?","Where does you live?","Where live you?"],
  ["Which word asks about a place?","Where","Who","When","Why"],
  ["Which word asks about a reason?","Why","Who","Where","When"]]),
 L("Objets du quotidien","Home vocabulary","v",["door = porte","window = fenêtre","chair = chaise","table = table","bed = lit"],[
  ["“Window” means…","Fenêtre","Porte","Mur","Sol"],
  ["How do you say “porte” in English?","door","window","chair","table"],
  ["You sleep in a ___.","bed","chair","door","window"],
  ["You sit on a ___.","chair","door","window","wall"],
  ["“Chair” means…","Chaise","Table","Lit","Porte"]]),
 L("Adjectifs","big, small, good…","v",["big = grand","small = petit","good = bon","bad = mauvais","hot = chaud","cold = froid"],[
  ["What is the opposite of “big”?","small","long","old","fast"],
  ["“Cold” means…","Froid","Chaud","Grand","Petit"],
  ["What is the opposite of “good”?","bad","big","hot","small"],
  ["The ice is very ___.","cold","hot","bad","big"],
  ["How do you say “petit” in English?","small","big","good","bad"]]),
 L("There is / are","Talk about places","g",["There is a book. (singulier)","There are two chairs. (pluriel)","There isn't a car."],[
  ["___ three books on the table.","There are","There is","It is","They is"],
  ["___ a cat in the garden.","There is","There are","They are","It are"],
  ["Choose the correct negative sentence.","There isn't a bank here.","There not is a bank here.","There aren't a bank here.","There no is a bank here."],
  ["Choose the correct question.","Is there a school near here?","There is a school near here?","Are there a school near here?","Is it a school there?"],
  ["There ___ many students in the class.","are","is","be","am"]]),
 L("Révision A1","Bilan des bases","g",["Révise les mots, le présent simple et to be.","Objectif : 3 bonnes réponses sur 5."],[
  ["Choose the correct phrase.","She is happy.","She are happy.","She am happy.","She be happy."],
  ["“Sister” means…","Sœur","Mère","Fille","Tante"],
  ["My father ___ in an office.","works","work","working","are work"],
  ["___ you like pizza?","Do","Does","Are","Is"],
  ["There ___ two windows in my room.","are","is","am","be"]])
],
A2:[
 L("Past Simple","Parler du passé","g",["I worked yesterday.","She went home.","We saw a movie.","Irréguliers : go → went, see → saw"],[
  ["Yesterday, I ___ to school.","went","go","going","goes"],
  ["We ___ a film last night.","saw","see","seen","sees"],
  ["She ___ her homework. (verbe régulier)","finished","finish","finishes","finishing"],
  ["Choose the correct negative sentence.","I didn't go out.","I didn't went out.","I not went out.","I don't went out."],
  ["___ you watch TV yesterday?","Did","Do","Does","Are"]]),
 L("Future","will / going to","g",["I will call you.","I am going to study.","They will arrive tomorrow."],[
  ["I ___ call you later.","will","am","did","was"],
  ["Look at the clouds! It ___ rain.","is going to","will to","goes to","is go to"],
  ["Choose the correct sentence.","She will travel next week.","She will travels next week.","She wills travel next week.","She will to travel next week."],
  ["Tomorrow, we ___ visit our grandmother. (c'est prévu)","are going to","did","are","have"],
  ["Choose the correct negative future.","I won't be late.","I don't will be late.","I willn't be late.","I not will be late."]]),
 L("Present Continuous","Actions maintenant","g",["I am studying.","She is working.","They are playing."],[
  ["They ___ football now.","are playing","play","plays","played"],
  ["Look! The baby ___.","is sleeping","sleeps","sleep","sleeped"],
  ["I ___ a letter at the moment.","am writing","write","writes","wrote"],
  ["Choose the correct question.","Are you listening?","Do you listening?","Are you listen?","Is you listening?"],
  ["Which word often goes with the present continuous?","now","yesterday","never","last year"]]),
 L("Comparatifs","bigger, better…","g",["bigger = plus grand","better = meilleur","more interesting = plus intéressant","Adjectif court : -er. Adjectif long : more + adjectif."],[
  ["This book is ___ than that one.","more interesting","interesting","most interesting","interestinger"],
  ["An elephant is ___ than a dog.","bigger","big","biggest","more big"],
  ["“Better” is the comparative of…","good","bad","big","fast"],
  ["Choose the correct sentence.","She is taller than me.","She is more tall than me.","She is tallest than me.","She is taller that me."],
  ["My phone is ___ than yours.","cheaper","more cheap","cheapest","cheapper"]]),
 L("Quantités","some, any, much, many","g",["many books (dénombrable)","much water (indénombrable)","some money","any questions? (questions et négations)"],[
  ["How ___ students are there?","many","much","any","some"],
  ["How ___ water do you drink?","much","many","few","several"],
  ["I don't have ___ money.","any","some","many","a"],
  ["We need ___ sugar for the cake.","some","many","a few","several"],
  ["Is there ___ milk in the fridge?","any","many","a few","several"]]),
 L("Modal verbs","can, should, must","g",["can = pouvoir","should = devoir (conseil)","must = obligation"],[
  ["It is the law. You ___ wear a seat belt.","must","might","could","may"],
  ["You look tired. You ___ rest.","should","would","did","are"],
  ["I ___ swim. (Je sais nager.)","can","must","should","will"],
  ["Choose the correct sentence.","She can speak English.","She can speaks English.","She cans speak English.","She can to speak English."],
  ["Which modal is mostly used to give advice?","should","will","did","am"]]),
 L("Pronoms objets","me, him, her, us, them","g",["She helps me.","I see him.","They call us.","I → me, he → him, she → her, we → us, they → them"],[
  ["I know ___.","her","she","herself","hers"],
  ["Can you help ___? (moi)","me","I","my","mine"],
  ["Look at Tom. I can see ___.","him","he","his","himself"],
  ["My parents are here. I call ___.","them","they","their","theirs"],
  ["She is my friend. I often visit ___.","her","she","hers","herself"]]),
 L("Adverbes","quickly, slowly, always…","v",["always = toujours","usually = habituellement","sometimes = parfois","never = jamais"],[
  ["I ___ drink coffee in the morning.","always","yesterday","quick","good"],
  ["“Never” means…","Jamais","Toujours","Parfois","Souvent"],
  ["She speaks ___. (lentement)","slowly","slow","slowy","slowing"],
  ["Choose the correct word order.","He always arrives early.","He arrives always early.","Always he arrives early.","He early always arrives."],
  ["Which adverb means “parfois”?","sometimes","usually","always","never"]]),
 L("Vocabulaire voyage","Travel English","v",["ticket = billet","station = gare","airport = aéroport","luggage = bagages","passport = passeport"],[
  ["You take a plane at the ___.","airport","station","ticket","luggage"],
  ["“Luggage” means…","Bagages","Billet","Gare","Passeport"],
  ["At the airport, you show your ___ to enter another country.","passport","station","luggage","window"],
  ["How do you say “gare” in English?","station","airport","ticket","passport"],
  ["I bought a train ___.","ticket","luggage","passport","airport"]]),
 L("Restaurant","Ordering food","v",["I'd like… = Je voudrais…","Can I have…? = Puis-je avoir… ?","The bill, please. = L'addition, s'il vous plaît."],[
  ["“I'd like some water.” means…","Je voudrais de l'eau.","J'aime l'eau.","J'ai de l'eau.","Je bois de l'eau."],
  ["How do you ask for the bill?","The bill, please.","A table, please.","The water, please.","The door, please."],
  ["Which sentence is polite?","Could I have a coffee, please?","Give me coffee.","I want coffee now.","Coffee!"],
  ["A waiter is a person who…","serves customers in a restaurant","drives a bus","teaches English","repairs cars"],
  ["“Can I have a menu?” means…","Puis-je avoir un menu ?","Je peux manger ?","J'ai un menu.","Je n'ai pas de menu."]]),
 L("Connecteurs","and, but, because, so","g",["because = parce que","but = mais","so = donc","although = bien que"],[
  ["I stayed home ___ it was raining.","because","but","so","and"],
  ["I was tired, ___ I went to bed.","so","because","but","although"],
  ["He is rich, ___ he isn't happy.","but","because","so","or"],
  ["“So” means…","Donc","Mais","Parce que","Bien que"],
  ["___ it was cold, she went out.","Although","Because","So","And"]]),
 L("Révision A2","Bilan élémentaire","g",["Mélange de grammaire et de vocabulaire A2.","Objectif : 3 bonnes réponses sur 5."],[
  ["She ___ here yesterday.","was","is","were","be"],
  ["I ___ to Paris next year. (c'est prévu)","am going to travel","travelled","travels","traveling"],
  ["This phone is ___ than mine.","cheaper","cheap","cheapest","more cheap"],
  ["How ___ sugar do you want?","much","many","few","some"],
  ["You ___ drive without a licence. (C'est interdit.)","mustn't","can","will","might"]])
],
B1:[
 L("Present Perfect","have/has + participe","g",["I have finished.","She has visited London.","Have you ever been there?"],[
  ["I ___ never seen snow.","have","has","did","am"],
  ["She ___ already left.","has","have","is","did"],
  ["Choose the correct sentence.","We have lived here for five years.","We live here since five years.","We are living here for five years.","We have live here for five years."],
  ["Have you ___ been to London?","ever","yesterday","ago","last"],
  ["What is the past participle of “write”?","written","wrote","writed","writing"]]),
 L("Past Continuous","was/were + ing","g",["I was sleeping.","They were working.","While + past continuous, when + past simple"],[
  ["At 8 pm, I ___ studying.","was","were","am","did"],
  ["They ___ playing when it started to rain.","were","was","are","did"],
  ["I ___ TV when you called.","was watching","watch","am watching","have watch"],
  ["Choose the correct sentence.","She was reading while he was cooking.","She reading was while he was cooking.","She was read while he was cook.","She is reading while he was cooking."],
  ["Past continuous = was/were + ___","verb-ing","past participle","infinitive","verb + s"]]),
 L("First Conditional","if + present, will","g",["If it rains, I will stay home.","If you study, you will improve."],[
  ["If I study, I ___ pass.","will","would","am","did"],
  ["If it rains tomorrow, we ___ at home.","will stay","would stay","stayed","had stayed"],
  ["If you ___ hard, you will succeed.","work","will work","worked","would work"],
  ["Choose the correct sentence.","If she calls, I will answer.","If she will call, I answer.","If she called, I will answer.","If she call, I would answer."],
  ["The first conditional talks about…","a real possibility in the future","an impossible past","a habit","an order"]]),
 L("Phrasal verbs 1","get up, look for, turn on","v",["get up = se lever","look for = chercher","turn on = allumer","turn off = éteindre"],[
  ["“Look for” means…","chercher","regarder","trouver","oublier"],
  ["I ___ at 6 every morning.","get up","turn on","look for","turn off"],
  ["Please ___ the light. It's dark.","turn on","turn off","get up","look for"],
  ["“Turn off” means…","éteindre","allumer","tourner","partir"],
  ["I can't find my keys. I'm ___ them.","looking for","turning on","getting up","turning off"]]),
 L("Relative clauses","who, which, that","g",["The man who called me…","The book that I bought…","where = lieu"],[
  ["The woman ___ lives here is a doctor.","who","which","where","what"],
  ["The book ___ I bought is great.","that","who","where","whose"],
  ["This is the town ___ I was born.","where","who","which","whose"],
  ["Choose the correct sentence.","The man who helped me was kind.","The man which helped me was kind.","The man where helped me was kind.","The man what helped me was kind."],
  ["Which relative pronoun is used for things?","which","who","whom","whose"]]),
 L("Reported speech","Discours indirect","g",["He said he was tired.","She told me she liked it.","tomorrow → the next day"],[
  ["He said, “I am tired.” → He said he ___ tired.","was","is","were","be"],
  ["Use backshift. He said, “I live here.” → He said he ___ there.","lived","lives","live","living"],
  ["Choose the correct sentence.","She told me that she was busy.","She told that she was busy.","She said me that she was busy.","She told me that she is busy yesterday."],
  ["He said, “I will come.” → He said he ___ come.","would","will","did","is"],
  ["“Tomorrow” becomes ___ in reported speech.","the next day","yesterday","today","now"]]),
 L("Passive voice","is/was + past participle","g",["The car was repaired.","English is spoken worldwide.","Forme : be + participe passé"],[
  ["The letter ___ yesterday.","was sent","sent","is send","sending"],
  ["English ___ in many countries.","is spoken","speaks","speaking","speak"],
  ["Which sentence is passive?","The cake was eaten.","She ate the cake.","She is eating.","They cook."],
  ["The windows ___ every week.","are cleaned","cleaned","clean","cleaning"],
  ["What is the past participle of “build”?","built","builded","building","build"]]),
 L("Vocabulary work","Anglais professionnel","v",["meeting = réunion","deadline = échéance","skill = compétence","salary = salaire"],[
  ["A “deadline” is…","une échéance","un salaire","une réunion","un diplôme"],
  ["How do you say “salaire” in English?","salary","skill","meeting","deadline"],
  ["We have a ___ at 10 am with the manager.","meeting","salary","skill","deadline"],
  ["Speaking English is a useful ___.","skill","meeting","salary","deadline"],
  ["“Meeting” means…","réunion","salaire","compétence","échéance"]]),
 L("Opinion","Agree and disagree","g",["I agree.","I don't agree.","In my opinion…","I see your point, but…"],[
  ["A polite disagreement is…","I see your point, but…","You're stupid.","No!","Wrong!"],
  ["Which phrase gives an opinion?","In my opinion…","Goodbye.","Thank you.","I'm hungry."],
  ["“I agree” means…","Je suis d'accord","Je ne sais pas","Je refuse","Je ne comprends pas"],
  ["What is the opposite of “I agree”?","I disagree","I accept","I understand","I think so"],
  ["Which sentence is the most polite?","I'm afraid I don't agree.","You're wrong.","That's nonsense.","Be quiet."]]),
 L("Second conditional","if + past, would","g",["If I had money, I would travel.","If I were you, I would study."],[
  ["If I had time, I ___ more.","would study","will study","study","studied"],
  ["If I ___ you, I would accept the job.","were","am","will be","would be"],
  ["If she won the lottery, she ___ a house.","would buy","will buy","buys","bought"],
  ["Choose the correct sentence.","If I lived in Paris, I would speak French.","If I would live in Paris, I would speak French.","If I live in Paris, I would speak French.","If I lived in Paris, I will speak French."],
  ["The second conditional talks about…","unreal or unlikely situations","past facts","daily habits","orders"]]),
 L("Listening strategy","Comprendre le sens","g",["Écoute les mots importants.","Ne traduis pas chaque mot.","Cherche le contexte."],[
  ["What is the best strategy for an unknown word?","Use the context","Stop immediately","Give up","Translate everything"],
  ["Before listening, you should…","predict the topic","ignore the title","translate every word","close your eyes"],
  ["Which words carry the most meaning?","Nouns and verbs","“the” and “a”","Only pronouns","Punctuation"],
  ["Listening for the main idea is called…","listening for gist","dictation","translation","spelling"],
  ["Native speakers often…","link words together","pronounce every word separately","speak without sounds","never use contractions"]]),
 L("Révision B1","Bilan intermédiaire","g",["Consolide les temps, les connecteurs et la communication.","Objectif : 3 bonnes réponses sur 5."],[
  ["She has ___ her homework.","finished","finish","finishing","finishes"],
  ["If I had a car, I ___ to work.","would drive","will drive","drove","drive"],
  ["The report ___ by the manager yesterday.","was written","wrote","is write","writing"],
  ["He said he ___ busy. (Use backshift.)","was","is","be","were"],
  ["I ___ when the phone rang.","was sleeping","sleep","am sleeping","have slept"]])
],
B2:[
 L("Third Conditional","Regret et hypothèse passée","g",["If I had known, I would have helped.","If she had studied, she would have passed."],[
  ["If he had called, I ___ answered.","would have","will have","had","would"],
  ["If they ___ earlier, they would have caught the train.","had left","left","have left","would leave"],
  ["She would have passed if she ___ harder.","had studied","studied","would study","has studied"],
  ["Choose the correct sentence.","If I had known, I would have helped.","If I would have known, I would have helped.","If I knew, I would have helped.","If I had known, I would helped."],
  ["The third conditional expresses…","imaginary past situations and regrets","real future plans","daily habits","general truths"]]),
 L("Mixed Conditionals","Situations complexes","g",["If I had studied medicine, I would be a doctor now."],[
  ["If I had taken that job, I ___ in Paris now.","would live","will live","lived","would have lived"],
  ["If she were richer, she ___ the house yesterday.","would have bought","will buy","would buy","had bought"],
  ["I would be a doctor now if I ___ medicine.","had studied","studied","would study","study"],
  ["Mixed conditionals combine…","two different time references","two future events","two questions","two negatives"],
  ["Choose the correct mixed conditional.","If I had slept more, I wouldn't be tired now.","If I would have slept more, I wouldn't be tired now.","If I had sleep more, I wouldn't be tired now.","If I have slept more, I wouldn't be tired now."]]),
 L("Advanced Modals","must have, might have","g",["He must have forgotten.","She might have left.","They can't have known.","should have = reproche / regret"],[
  ["He isn't here, so I'm sure he ___ have missed the train.","must","can","did","has"],
  ["She ___ have left early, but I'm not sure.","might","must","can't","should"],
  ["They ___ have known. Nobody told them.","can't","must","should","will"],
  ["“You should have called” expresses…","criticism or regret about the past","a future plan","an obligation now","a prediction"],
  ["Choose the correct sentence.","He must have forgotten.","He must forgot.","He must has forgotten.","He must to forget."]]),
 L("Inversion","Style formel","g",["Never have I seen…","Rarely does he complain.","Not only did she win…"],[
  ["___ have I seen such a view.","Never","Never I","Never did","Not"],
  ["Rarely ___ he complain about work.","does","do","is","has"],
  ["Not only ___ she win, but she also broke the record.","did","was","has","does"],
  ["Choose the correct inverted sentence.","Under no circumstances should you open it.","Under no circumstances you should open it.","Under no circumstances open you it.","Under no circumstances should open you it."],
  ["Inversion is mainly used in…","formal or emphatic style","casual chat","text messages","simple questions only"]]),
 L("Advanced passive","It is believed…","g",["He is believed to be…","It is thought that…"],[
  ["She is believed ___ the best candidate.","to be","being","be","is"],
  ["It is said ___ he is very rich.","that","to","what","who"],
  ["He is thought ___ the country.","to have left","have left","to has left","having to leave"],
  ["Choose the correct sentence.","The house is said to be haunted.","The house says to be haunted.","The house is said being haunted.","The house is say to be haunted."],
  ["“It is believed that…” is used to…","report a general opinion","give orders","ask a question","thank someone"]]),
 L("Academic vocabulary","Anglais académique","v",["evidence = preuve","research = recherche","therefore = par conséquent","significant = important"],[
  ["“Therefore” is used to show…","cause/result","contrast","time","place"],
  ["“Evidence” means…","preuve","recherche","opinion","hypothèse"],
  ["Scientists carry out ___ to find new answers.","research","evidence","therefore","salary"],
  ["A “significant” difference is…","an important one","a tiny one","a false one","a secret one"],
  ["Which word introduces a conclusion?","Therefore","Although","Meanwhile","Unless"]]),
 L("Collocations","Make / do / take","v",["make a decision","do research","take responsibility","do someone a favour","make a mistake"],[
  ["Which is correct?","do research","make research","take research","do a decision"],
  ["We need to ___ a decision today.","make","do","give","put"],
  ["She ___ responsibility for the mistake.","took","made","did","said"],
  ["Please ___ me a favour.","do","make","take","have"],
  ["He ___ a mistake in the report.","made","did","took","had"]]),
 L("Formal email","Écrire professionnellement","g",["Dear Sir/Madam,","I am writing to…","Kind regards,"],[
  ["What is the best closing for a formal email?","Kind regards","Bye bro","See ya","Later"],
  ["A formal email starts with…","Dear Sir/Madam,","Yo!","Hey guys,","What's up,"],
  ["“I am writing to…” is used to…","explain the purpose of the email","end the email","say goodbye","add a joke"],
  ["Which sentence is formal?","I would be grateful for your reply.","Answer me fast!","Hurry up.","Write back lol."],
  ["Which sentence mentions an attachment correctly?","Please find attached my CV.","Attached is find my CV.","Find attach my CV.","Please attaching my CV."]]),
 L("Nuance","Although, despite, whereas","g",["although + clause","despite + noun/gerund","whereas = tandis que"],[
  ["___ the rain, we went out.","Despite","Although","Because","Whereas"],
  ["___ it was raining, we went out.","Although","Despite","Because of","Due to"],
  ["She is quiet, ___ her brother is very talkative.","whereas","despite","because","unless"],
  ["Choose the correct sentence.","Despite being tired, he worked.","Despite he was tired, he worked.","Although being tired, he worked.","Despite of being tired, he worked."],
  ["“Whereas” means…","tandis que","à cause de","malgré","sauf"]]),
 L("Debate","Argumenter","g",["However = cependant","Moreover = de plus","On the other hand = d'un autre côté"],[
  ["Which word introduces a contrast?","However","Moreover","Therefore","Because"],
  ["Which word adds an extra argument?","Moreover","However","Although","Unless"],
  ["“On the other hand” means…","d'un autre côté","de plus","donc","par exemple"],
  ["Which phrase introduces an example?","For instance","In conclusion","However","On the contrary"],
  ["Which phrase ends an argument?","In conclusion","For example","Moreover","Besides"]]),
 L("Phrasal verbs 2","carry out, point out, figure out","v",["carry out = effectuer","point out = signaler","figure out = comprendre / trouver"],[
  ["“Figure out” means…","comprendre","oublier","porter","signaler"],
  ["The police will ___ an investigation.","carry out","look after","turn on","take off"],
  ["Can you ___ the mistake in my text?","point out","put off","set up","run out"],
  ["I can't ___ this math problem.","figure out","look after","turn off","carry out"],
  ["“Carry out” means…","effectuer","porter dehors","arrêter","oublier"]]),
 L("Révision B2","Bilan supérieur","g",["Grammaire et vocabulaire avancés.","Objectif : 3 bonnes réponses sur 5."],[
  ["Despite ___ tired, she continued.","being","be","was","to be"],
  ["If I had left earlier, I ___ the bus.","would have caught","would catch","will catch","had caught"],
  ["Never ___ such a beautiful place.","have I seen","I have seen","did I saw","I saw"],
  ["He is believed ___ the country.","to have left","has left","to leaves","left"],
  ["He worked hard; ___, he passed.","therefore","despite","whereas","unless"]])
],
C1:[
 L("Idioms","Expressions idiomatiques","v",["break the ice = détendre l'atmosphère","once in a blue moon = très rarement","hit the nail on the head = avoir parfaitement raison"],[
  ["“Once in a blue moon” means…","très rarement","souvent","jamais","demain"],
  ["“Break the ice” means to…","start a conversation and relax people","freeze a drink","make a mistake","end a meeting"],
  ["“Hit the nail on the head” means…","être tout à fait exact","se blesser","travailler dur","arriver en retard"],
  ["We meet ___. (very rarely)","once in a blue moon","all the time","every day","at once"],
  ["He ___ when he said the plan was risky. (exactly right)","hit the nail on the head","broke the ice","missed the boat","let it go"]]),
 L("Hedging","Nuancer une affirmation","g",["It appears that…","It may be argued that…","It is likely that…"],[
  ["Which phrase makes a claim less absolute?","It may be argued that","Definitely","Always","Never"],
  ["“It appears that…” is…","a hedge","an order","a greeting","a question"],
  ["Which sentence is the most cautious?","The results seem to suggest a link.","The results prove a link.","The results are a fact.","There is certainly a link."],
  ["Which adverb is a hedge?","arguably","certainly","absolutely","undoubtedly"],
  ["We use hedging to…","avoid sounding too certain","sound angry","shorten texts","avoid grammar"]]),
 L("Advanced connectors","Nevertheless, consequently…","g",["nevertheless = néanmoins","consequently = par conséquent","furthermore = en outre"],[
  ["“Nevertheless” expresses…","contrast","addition","cause","time"],
  ["“Furthermore” introduces…","an additional point","an opposite point","an example","a question"],
  ["It rained heavily; ___, the match continued.","nevertheless","consequently","furthermore","for instance"],
  ["He didn't study; ___, he failed.","consequently","nevertheless","furthermore","whereas"],
  ["“Consequently” means…","par conséquent","néanmoins","en outre","cependant"]]),
 L("Nominalisation","Style académique","g",["decide → decision","analyse → analysis","improve → improvement"],[
  ["What is the noun form of “improve”?","improvement","improval","improvation","improvish"],
  ["What is the noun form of “decide”?","decision","decidement","decidation","decideness"],
  ["What is the noun form of “analyse”?","analysis","analyser","analysement","analyses"],
  ["Nominalisation makes a text more…","formal and academic","informal","personal","emotional"],
  ["Which sentence is nominalised?","The government's decision surprised everyone.","The government decided and surprised everyone.","Everyone was surprised when they decided.","They decided suddenly."]]),
 L("Cleft sentences","Mise en relief","g",["What I need is time.","It was John who called."],[
  ["What I need ___ more practice.","is","are","were","being"],
  ["It was John ___ called me.","who","which","what","where"],
  ["___ I want is a quiet place.","What","That","Which","Who"],
  ["Which sentence is a cleft sentence?","It was the noise that woke me up.","The noise woke me up.","I woke up.","Noise is loud."],
  ["Cleft sentences are used to…","emphasise one part of the sentence","ask a question","give a command","shorten a sentence"]]),
 L("Subjunctive","Formal English","g",["It is essential that he be present.","They suggested that she go."],[
  ["It is vital that he ___ informed.","be","is","was","being"],
  ["They suggested that she ___ earlier.","leave","leaves","is leaving","will leave"],
  ["I demand that he ___ the truth.","tell","tells","told","telling"],
  ["Choose the correct sentence.","It is essential that she be present.","It is essential that she to be present.","It is essential that she being present.","It is essential that she am present."],
  ["The subjunctive uses…","the base form of the verb","the -ing form","the past participle","will + verb"]]),
 L("Academic writing","Thèse et preuves","g",["claim = affirmation","evidence = preuve","counterargument = contre-argument"],[
  ["Evidence should…","support a claim","replace grammar","be invented","avoid facts"],
  ["A “claim” is…","an assertion that needs support","a type of grammar","a conclusion only","a title"],
  ["A counterargument is…","an opposing point of view","a repeated point","an example","a quotation"],
  ["A thesis statement…","states the main argument","lists vocabulary","thanks the reader","ends the essay"],
  ["Which sentence has an academic style?","The data indicate a clear trend.","The data is like, totally clear.","Look, it's obvious.","No way it's wrong."]]),
 L("Register","Formal vs informal","v",["children (formel) / kids (informel)","purchase / buy","assist / help"],[
  ["Which word is more formal than “buy”?","purchase","get","take","have"],
  ["Which word is more formal than “help”?","assist","give","do","hand"],
  ["Which word is informal?","kids","children","offspring","minors"],
  ["In a job interview, you would say…","I would like to apply for the position.","I wanna job.","Gimme the job.","Hire me, dude."],
  ["Which word is more formal than “start”?","commence","kick off","get going","go ahead"]]),
 L("Precision","Choose exact words","g",["economic ≠ economical","historic ≠ historical","Un mot proche n'est pas toujours un synonyme."],[
  ["“Economic” usually relates to…","the economy","saving money","history","size"],
  ["“Economical” means…","good value, not wasteful","related to history","very large","dangerous"],
  ["A “historic” event is…","very important in history","about the past in general","boring","imaginary"],
  ["A “historical” novel is set in…","the past","the future","space","a school"],
  ["Which sentence is correct?","This car is economical to run.","This car is economy to run.","This car is economically to run.","This car is historical to run."]]),
 L("Listening C1","Implicit meaning","g",["Identifie le ton, l'intention et le contexte.","Écoute les liaisons et les réductions."],[
  ["At C1, listening also requires…","understanding implicit meaning","only keywords","spelling every word","translation"],
  ["Tone of voice can show…","the speaker's attitude","the spelling","the grammar","the page number"],
  ["“Reading between the lines” in listening means…","understanding what is not said directly","reading the transcript","repeating each word","counting words"],
  ["What helps you follow fast speech?","Recognising linked sounds","Translating word by word","Ignoring stress","Reading the dictionary"],
  ["Stress in a sentence usually falls on…","content words","all words equally","articles","punctuation"]]),
 L("Speaking","Fluency strategies","g",["Reformule quand un mot manque.","Utilise des marqueurs de discours.","Corrige-toi naturellement."],[
  ["If you forget a word, you should…","paraphrase","stop speaking","switch language","quit"],
  ["“Well, as I was saying…” is a…","discourse marker","verb tense","spelling rule","punctuation mark"],
  ["Self-correcting naturally means…","fixing your mistake and continuing","never correcting","waiting for a teacher","stopping the conversation"],
  ["Which sentence shows paraphrasing?","It's the thing you use to cut paper.","I forget, bye.","Uh… uh… uh…","No word."],
  ["Fluency means…","speaking smoothly with few long pauses","speaking very fast","never making mistakes","using only difficult words"]]),
 L("Révision C1","Bilan avancé","g",["Nuance, registre, style académique et idiomes.","Objectif : 3 bonnes réponses sur 5."],[
  ["Which is a hedge?","It appears that…","It is certain.","Never.","Everyone knows."],
  ["“Furthermore” is closest to…","in addition","however","because","instead"],
  ["It was in 2020 ___ we met.","that","what","who","whom"],
  ["It is vital that she ___ on time.","arrive","arrives","arrived","arriving"],
  ["Which sentence is the most formal?","We regret to inform you that the post has been filled.","Sorry, we gave the job away.","No job now.","The job's gone, mate."]])
],
C2:[
 L("Register mastery","Nuance et contexte","v",["connotation = connotation","undertone = sous-entendu","discourse = discours"],[
  ["A word's “connotation” is its…","associated meaning","spelling","length","pronunciation"],
  ["“Slim” and “skinny” differ mainly in…","connotation","spelling","grammar","pronunciation"],
  ["An “undertone” is…","a hidden or implied feeling","a loud sound","a grammar rule","a title"],
  ["Which word has a negative connotation?","stubborn","determined","persistent","firm"],
  ["Which word is the most neutral?","say","whisper","mutter","declare"]]),
 L("Idiomatic nuance","Advanced idioms","v",["to go the extra mile = faire un effort supplémentaire","to read between the lines = comprendre le sous-entendu"],[
  ["“Read between the lines” means…","comprendre le sens implicite","lire vite","lire à voix haute","corriger"],
  ["“Go the extra mile” means to…","make an additional effort","travel far","finish early","quit"],
  ["“Bite the bullet” means to…","face something unpleasant bravely","eat quickly","be violent","stay silent"],
  ["“A blessing in disguise” is…","something good that seemed bad at first","a hidden gift box","a religious wish","a costume"],
  ["“The ball is in your court” means…","it is your turn to act","you are playing tennis","you lost","the game is over"]]),
 L("Rhetoric","Persuasion language","g",["rhetorical question","parallelism","concession"],[
  ["A rhetorical question is generally…","asked for effect","a question needing data","a grammar error","a greeting"],
  ["“We came, we saw, we conquered” is an example of…","parallelism","concession","a rhetorical question","a pun"],
  ["A concession means…","admitting a valid point of the other side","refusing completely","repeating yourself","shouting"],
  ["Rhetoric aims to…","persuade an audience","list verbs","translate","correct spelling"],
  ["Repeating a structure for effect is called…","parallelism","nominalisation","inversion","hedging"]]),
 L("Synthesis","Combine sources","g",["compare evidence","identify contradictions","qualify conclusions"],[
  ["A strong synthesis should…","combine and evaluate ideas","copy sources","ignore differences","use one source"],
  ["To synthesise sources, you first…","identify common themes","translate each one","memorise them","pick only one"],
  ["Which verb fits synthesis best?","integrate","copy","skip","hide"],
  ["Contradictory sources should be…","compared and explained","ignored","deleted","hidden"],
  ["A qualified conclusion…","recognises limits and nuance","is always absolute","is a question","has no evidence"]]),
 L("Advanced grammar","Inversion & emphasis","g",["Had I known…","Were it not for…","Little did I know…"],[
  ["“Had I known” is equivalent to…","If I had known","If I know","When I knew","I knew"],
  ["“Were it not for your help, I would fail.” means…","Without your help, I would fail","Because of your help, I failed","I will not help","Your help is not needed"],
  ["“Little did I know…” means I…","did not know at all","knew everything","sometimes knew","will know"],
  ["Choose the correct sentence.","Not until later did I realise the danger.","Not until later I realised the danger.","Not until later realised I the danger.","Not until later did I realised the danger."],
  ["“Should you need help, call me.” means…","If you should need help, call me.","Because you need help, call me.","You helped me yesterday.","Unless you help, call me."]]),
 L("Lexical precision","Near synonyms","v",["swift / rapid / prompt","resilient / robust / durable"],[
  ["“Prompt” can mean…","quick, without delay","late","weak","silent"],
  ["Which word means “able to recover quickly”?","resilient","fragile","rigid","brittle"],
  ["“Rapid”, “swift” and “prompt” are…","near synonyms","opposites","verbs","prefixes"],
  ["Which word is the most precise for “very tired”?","exhausted","big","nice","bad"],
  ["“Robust” is closest to…","strong and sturdy","weak","small","slow"]]),
 L("Discourse analysis","Tone & stance","v",["stance = position","bias = biais","framing = cadrage"],[
  ["Stance indicates a writer's…","position or attitude","font","address","age"],
  ["“Bias” means…","an unfair preference","a proof","a quotation","a summary"],
  ["“Framing” refers to…","the way information is presented","a picture border","grammar","punctuation"],
  ["The phrase “so-called experts” suggests…","doubt","admiration","certainty","humour"],
  ["To detect tone, look at…","word choice","page size","font colour","spelling only"]]),
 L("Professional mastery","Meetings & negotiation","g",["I see your point.","Could we explore an alternative?","Let's clarify the terms."],[
  ["A constructive negotiation phrase is…","Let's clarify the terms.","That's stupid.","No way.","You're wrong."],
  ["How do you suggest an alternative politely?","Could we explore another option?","Do it my way.","That won't work.","Forget it."],
  ["“I see your point.” signals that…","you understand their view","you agree entirely","you are angry","you want to leave"],
  ["To reach a compromise, both sides…","make concessions","refuse","shout","leave"],
  ["What is a good way to end a meeting?","Let's summarise the next steps.","That's all, bye.","Whatever.","I'm done."]]),
 L("Translation","Meaning over word-for-word","g",["Traduis les idées naturellement.","Respecte le registre et le contexte."],[
  ["Good translation prioritises…","meaning and context","word count","literal order always","rhymes"],
  ["“It's raining cats and dogs” should be translated as…","Il pleut des cordes","Il pleut des chats et des chiens","Les chats tombent","Il neige"],
  ["A false friend is…","a word that looks similar but means something different","a bad teacher","a translation tool","a rhyme"],
  ["In English, “actually” means…","en fait","actuellement","exactement","autrefois"],
  ["In English, “library” means…","bibliothèque","librairie","livre","école"]]),
 L("C2 reading","Complex texts","g",["Suis la structure de l'argument.","Déduis les hypothèses implicites.","Évalue les preuves."],[
  ["Advanced reading requires…","inference and evaluation","only vocabulary","memorisation only","translation only"],
  ["To infer means to…","conclude from evidence","copy","translate","skip"],
  ["An implicit assumption is one that is…","not stated directly","clearly written","always false","a title"],
  ["Tracking the argument structure helps you…","see how ideas connect","count words","find spelling mistakes","memorise lines"],
  ["A reliable source…","is credible and based on evidence","is the longest","is the oldest","is anonymous"]]),
 L("C2 speaking","Precision and flexibility","g",["qualify claims","reformulate","use idiomatic language appropriately"],[
  ["If challenged, a strong response can…","qualify and reformulate","repeat one sentence","leave","ignore"],
  ["“What I mean is…” is used to…","reformulate","end the talk","thank","greet"],
  ["“To a certain extent…” shows…","partial agreement","total refusal","total agreement","a question"],
  ["Which sentence qualifies a claim?","That's true up to a point.","That's always true.","That's never true.","No."],
  ["Appropriate idiomatic language means…","using idioms that fit the context","using as many idioms as possible","avoiding all idioms","using idioms in writing only"]]),
 L("Révision C2","Maîtrise supérieure","g",["Test final de précision, nuance et compréhension.","Objectif : 3 bonnes réponses sur 5."],[
  ["What is the best C2 strategy?","Use context, nuance and evidence","Guess","Translate every word","Avoid difficult ideas"],
  ["Were it not for the rain, we ___ outside.","would be","will be","were","have been"],
  ["Which word is closest to “resilient”?","robust","fragile","tired","absent"],
  ["A rhetorical question is meant to…","make a point, not get an answer","collect data","test grammar","end an essay"],
  ["A strong conclusion should…","be supported by evidence and qualified","introduce new unrelated facts","avoid the thesis","be a single word"]])
]
};

const EXTRA_WORDS=[
 ["hello","bonjour"],["goodbye","au revoir"],["please","s'il vous plaît"],["thank you","merci"],["sorry","désolé"],["friend","ami(e)"],["family","famille"],["school","école"],["work","travail"],["house","maison"],["water","eau"],["food","nourriture"],["book","livre"],["learn","apprendre"],["speak","parler"],["listen","écouter"],["read","lire"],["write","écrire"],["understand","comprendre"],["answer","réponse"],["today","aujourd'hui"],["tomorrow","demain"],["yesterday","hier"],["always","toujours"],["never","jamais"],["sometimes","parfois"],["because","parce que"],["although","bien que"],["however","cependant"],["therefore","donc"],["beautiful","beau / belle"],["different","différent"],["strong","fort"],["easy","facile"],["difficult","difficile"],["begin","commencer"],["finish","terminer"],["improve","améliorer"]
];
