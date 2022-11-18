const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How many values can a single byte represent?",
    correct_answer: "256",
    incorrect_answers: [
      "8",
      "1",
      "1024"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const raccoltaDomande = questions.length; // quante domande ci sono nella raccolta
var score = 0; // risposte corrette
var questionNumber = 0; // domande effettuate
var serieDomandeCasuali = sequenzaDomande(raccoltaDomande); // array sequenza casuale domande da raccolta
var percentualeRisposteCorrette = 0; // serve in futuro per le percentuali dei risultati
var percentualeRisposteSbagliate = 0; // serve in futuro per le percentuali dei risultati
var traccia = -1;
var spanFooter = document.createElement('span');
const FULL_DASH_ARRAY = 283;


function checkBox(){
let giulio=document.getElementById('franco')
let link = document.getElementById('link')
if(giulio.checked){
link.setAttribute('href', 'benchmark.html');
}else{
    link.setAttribute('href', '#')
}
}

window.onload = function () {
newDomanda();
contoAllaRovescia();
valutaTempo(intertempo);
}

function sequenzaDomande(numeroDomande) {
let seqDomArr = [];
for (let i=0; i<numeroDomande; i++) {
  let added = false;
  while (!added) {
    let numberToAdd = Math.floor(Math.random() * numeroDomande);
    if (!seqDomArr.includes(numberToAdd)) {
      seqDomArr.push(numberToAdd);
      added = true;
    }
  }
}
return seqDomArr;
}

function sequenzaRisposte() {
let seqRisArr = [];
for (let i=0; i<4; i++) {
  let added = false;
  while (!added) {
    let numberToAdd = Math.floor(Math.random() * 4);
    if(!seqRisArr.includes(numberToAdd)) {
      seqRisArr.push(numberToAdd);
      added = true;
    }
  }
}
return seqRisArr;
}

function newDomanda(){

let seqRisArr = sequenzaRisposte(); // array sequenza casuale risposte da scegliere
let domandaCorrente = serieDomandeCasuali.shift();
traccia = domandaCorrente;
let domanda = document.querySelector('#centro')

let risposte = [];
for (let i=0; i<questions[domandaCorrente].incorrect_answers.length; i++) {
  risposte.push(questions[domandaCorrente].incorrect_answers[i]);
}
risposte.push(questions[domandaCorrente].correct_answer);

if(questions[domandaCorrente].type == 'multiple') {
  let label1 = document.getElementById('lab-risp-1');
  label1.textContent = risposte[seqRisArr[0]];
  let label2 = document.getElementById('lab-risp-2');
  label2.textContent = risposte[seqRisArr[1]];
  let label3 = document.getElementById('lab-risp-3');
  label3.textContent = risposte[seqRisArr[2]];
  let label4 = document.getElementById('lab-risp-4');
  label4.textContent = risposte[seqRisArr[3]];
  document.getElementById('div-risp-3').style.display = 'inline-block';
  document.getElementById('div-risp-4').style.display = 'inline-block';
} else {
  let label1 = document.getElementById('lab-risp-1');
  label1.textContent = risposte[0];
  let label2 = document.getElementById('lab-risp-2');
  label2.textContent = risposte[1];

  document.getElementById('div-risp-3').style.display = 'none';
  document.getElementById('div-risp-4').style.display = 'none';
}
domanda.textContent = questions[domandaCorrente].question;
questionNumber++;
let footer = document.getElementById('domande');
spanFooter.setAttribute('id', 'span-footer');
spanFooter.innerHTML =`${questionNumber}  <span id="span-viola"> / ${raccoltaDomande}</span>` ;
footer.append(spanFooter);
}

var scelta1 = document.getElementById('div-risp-1');
scelta1.addEventListener('click', function() {
let content = scelta1.outerText;
esaminaRisposta(content);
})
var scelta2 = document.getElementById('div-risp-2');
scelta2.addEventListener('click', function() {
let content = scelta2.outerText;
esaminaRisposta(content);
})
var scelta3 = document.getElementById('div-risp-3');
scelta3.addEventListener('click', function() {
let content = scelta3.outerText;
esaminaRisposta(content);
})
var scelta4 = document.getElementById('div-risp-4');
scelta4.addEventListener('click', function() {
let content = scelta4.outerText;
esaminaRisposta(content);
})

function esaminaRisposta(response) {
  if (response === questions[traccia].correct_answer) {
    score++;
  }
  if (serieDomandeCasuali.length === 0) {
    goToResults();
  } else {
    newDomanda();
  }
  clearInterval(countdown);
  contoAllaRovescia();
  intertempo = tempoDomanda;
  tempoRimasto = tempoDomanda;
  tempoPassato = 0;
}

function goToResults() {
  window.location.href = 'results.html';
  window.localStorage.setItem('rights', JSON.stringify((score)));
  window.localStorage.setItem('wrongs', JSON.stringify((raccoltaDomande - score)));
  window.localStorage.setItem('total', JSON.stringify((raccoltaDomande)));
}

//per timer

var tempoDomanda = 30;
var intertempo;
var countdown;
var tempoRimasto = tempoDomanda;
var tempoPassato = 0;

function calculateTimeFraction() {
  return tempoRimasto / tempoDomanda;
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function contoAllaRovescia() {
  intertempo = tempoDomanda;
  countdown = setInterval(function () {
    tempoPassato++;
    tempoRimasto = tempoDomanda - tempoPassato;
    intertempo--;
    setCircleDasharray();
    valutaTempo(intertempo);
    document.getElementById("contatore").innerHTML = intertempo;
  }, 1000);
}

function valutaTempo(secondi) {
  if (secondi < 0) {
    secondi = 0;
    clearInterval(countdown);
    if (serieDomandeCasuali.length == 0) {
      goToResults();
    }
    newDomanda();
    contoAllaRovescia();
    intertempo = tempoDomanda;
    tempoRimasto = tempoDomanda;
    tempoPassato = 0;
  }
}
