var giuste = JSON.parse(window.localStorage.getItem('rights'))
var sbagliate = JSON.parse(window.localStorage.getItem('wrongs'))
var totaleDomande = JSON.parse(window.localStorage.getItem('total'));

let rightsPercentuale = document.querySelector('#domande-corrette #a')
let wrongsPercentuale = document.querySelector('.domande-sbagliate #a')
let rightsNum = document.querySelector('#domande-corrette #b')
let wrongsNum = document.querySelector('.domande-sbagliate #b')

var percentualeCorretta = ((giuste/totaleDomande)*100).toFixed(1);
var percentualeSbagliata = ((sbagliate/totaleDomande)*100).toFixed(1);

rightsPercentuale.textContent = percentualeCorretta + '%'
wrongsPercentuale.textContent = percentualeSbagliata + '%'
rightsNum.textContent = `${giuste} / ${totaleDomande} questions` 
wrongsNum.textContent = `${sbagliate} / ${totaleDomande} questions`


  const data = {
        labels: [
        'WRONG',
        'CORRECT'
        ],
        datasets: [{
        label: 'domande',
        data: [sbagliate,giuste],
        backgroundColor: [
            '#D20094',
            '#00FFFF'
        ],
        hoverOffset: 4,
        borderColor: "inherit",
        borderWidth: "0.1",
        hoverBorderColor: "#000000",
        hoverBorderWidth: 0.1,
        hoverOffset: 0.1,
        cutout: '70%',
        }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };

  const ctx = document.getElementById('myChart');
  
  new Chart(ctx,{
    type: 'doughnut',
  data: data,
    options: {
        cutout:140,
        responsive: true,
        plugins: {
        legend: {
            position: 'top',
            display:false
        },
        title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
        }
        }
    },

  });

var principale = document.getElementById('principale');
var principale2=document.getElementById('principale-bis');
var secondario = document.getElementById('secondario');
if (percentualeCorretta >= 60) {
  principale.innerHTML = 'Congratulations!';
  principale2.innerHTML='You passed the exam!';
  secondario.innerHTML = "We'll send you the certificate in few minutes.<br> Check your email (including promotions / spam folder)";
} else {
  principale.textContent = 'Peccato!';
  principale2.innerHTML='Non hai superato il test!';
  secondario.textContent = "Ritenta il test per ottenere il certificato";
}