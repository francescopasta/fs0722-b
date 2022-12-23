let div1 = document.querySelector('#div1');
let titoloHome = document.querySelector('#titolo_home');
let inputHome = document.querySelector('#input_home');
let bottoneHome = document.querySelector('#btn_home');
let div2 = document.querySelector('#div2');
let nome = document.querySelector('#nome');
let credito = document.querySelector('#credito');
let numero = document.querySelector('#numero');
let btn_1 = document.querySelector('#btn_1');
let btn_2 = document.querySelector('#btn_2');
let btn_3 = document.querySelector('#btn_3');
let logout = document.querySelector('#logout');
let destinatario = document.querySelector('#destinatario');
let tempo = document.querySelector('#tempo');
let chiama = document.querySelector('#chiama');
let nr_chiamate = document.querySelector('#nr_chiamate');
let resetChiamate = document.querySelector('#reset_chiamate');
let sfondo = document.querySelector("#sfondo");
class User {
    constructor() {
        this.numeroCarica = 0;
        this.numeroChiamate = 0;
    }
    ricarica(somma) {
        this.numeroCarica += somma;
    }
    chiamata(tempo) {
        if (this.numeroCarica - ((tempo / 60) * 0.2) < 0) {
            alert("non hai abbastanza credito per questa chiamata");
        }
        else {
            this.numeroCarica -= ((tempo / 60) * 0.2);
        }
    }
    numero404() {
        return Math.round(this.numeroCarica * 100) / 100;
    }
    aumentaChiamate() {
        this.numeroChiamate++;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class FirstUser extends User {
    constructor() {
        super();
        this.numeroTelefono = 3331254027;
        this.nomeUtente = "Damiano";
    }
}
class SecondUser extends User {
    constructor() {
        super();
        this.numeroTelefono = 3481112345;
        this.nomeUtente = "Silvio";
    }
}
class ThirdUser extends User {
    constructor() {
        super();
        this.numeroTelefono = 3283456834;
        this.nomeUtente = "Domenico";
    }
}
var primo = new FirstUser();
var secondo = new SecondUser();
var terzo = new ThirdUser();
bottoneHome.addEventListener('click', () => {
    if (Number(inputHome.value) == primo.numeroTelefono) {
        div1.style.display = "none";
        div2.style.display = "flex";
        sfondo.style.filter = "blur(3px)";
        nome.innerHTML = `${primo.nomeUtente}!`;
        credito.innerHTML = `${primo.numeroCarica}€`;
        numero.value = `${primo.numeroTelefono}`;
        btn_1.addEventListener("click", () => {
            primo.ricarica(10);
            credito.innerHTML = `${primo.numero404()}€`;
        });
        btn_2.addEventListener("click", () => {
            primo.ricarica(20);
            credito.innerHTML = `${primo.numero404()}€`;
        });
        btn_3.addEventListener("click", () => {
            primo.ricarica(50);
            credito.innerHTML = `${primo.numero404()}€`;
        });
        chiama.addEventListener("click", () => {
            if (Number(destinatario.value) >= 1000000000 && Number(destinatario.value) < 10000000000) {
                if (Number(tempo.value) > 0) {
                    primo.chiamata(Number(tempo.value));
                    credito.innerHTML = `${primo.numero404()}€`;
                    primo.aumentaChiamate();
                    tempo.value = "";
                    destinatario.value = "";
                }
                else {
                    alert("inserire il tempo della chiamata");
                }
            }
            else {
                alert("inserire un numero esistente");
            }
        });
        nr_chiamate.addEventListener("click", () => {
            alert(`Sono state effettuate ${primo.numeroChiamate} chiamate`);
        });
        resetChiamate.addEventListener("click", () => {
            primo.azzeraChiamate();
            alert("Le chiamate sono state azzerate");
        });
    }
    else if (Number(inputHome.value) == secondo.numeroTelefono) {
        div1.style.display = "none";
        div2.style.display = "flex";
        sfondo.style.filter = "blur(3px)";
        nome.innerHTML = `${secondo.nomeUtente}!`;
        credito.innerHTML = `${secondo.numeroCarica}€`;
        numero.value = `${secondo.numeroTelefono}`;
        btn_1.addEventListener("click", () => {
            secondo.ricarica(10);
            credito.innerHTML = `${secondo.numero404()}€`;
        });
        btn_2.addEventListener("click", () => {
            secondo.ricarica(20);
            credito.innerHTML = `${secondo.numero404()}€`;
        });
        btn_3.addEventListener("click", () => {
            secondo.ricarica(50);
            credito.innerHTML = `${secondo.numero404()}€`;
        });
        chiama.addEventListener("click", () => {
            if (Number(destinatario.value) >= 1000000000 && Number(destinatario.value) < 10000000000) {
                if (Number(tempo.value) > 0) {
                    secondo.chiamata(Number(tempo.value));
                    credito.innerHTML = `${secondo.numero404()}€`;
                    secondo.aumentaChiamate();
                    tempo.value = "";
                    destinatario.value = "";
                }
                else {
                    alert("inserire il tempo della chiamata");
                }
            }
            else {
                alert("inserire un numero esistente");
            }
        });
        nr_chiamate.addEventListener("click", () => {
            alert(`Sono state effettuate ${secondo.numeroChiamate} chiamate`);
        });
        resetChiamate.addEventListener("click", () => {
            secondo.azzeraChiamate();
            alert("Le chiamate sono state azzerate");
        });
    }
    else if (Number(inputHome.value) == terzo.numeroTelefono) {
        div1.style.display = "none";
        div2.style.display = "flex";
        sfondo.style.filter = "blur(3px)";
        nome.innerHTML = `${terzo.nomeUtente}!`;
        credito.innerHTML = `${terzo.numeroCarica}€`;
        numero.value = `${terzo.numeroTelefono}`;
        btn_1.addEventListener("click", () => {
            terzo.ricarica(10);
            credito.innerHTML = `${terzo.numero404()}€`;
        });
        btn_2.addEventListener("click", () => {
            terzo.ricarica(20);
            credito.innerHTML = `${terzo.numero404()}€`;
        });
        btn_3.addEventListener("click", () => {
            terzo.ricarica(50);
            credito.innerHTML = `${terzo.numero404()}€`;
        });
        chiama.addEventListener("click", () => {
            if (Number(destinatario.value) >= 1000000000 && Number(destinatario.value) < 10000000000) {
                if (Number(tempo.value) > 0) {
                    terzo.chiamata(Number(tempo.value));
                    credito.innerHTML = `${terzo.numero404()}€`;
                    terzo.aumentaChiamate();
                    tempo.value = "";
                    destinatario.value = "";
                }
                else {
                    alert("inserire il tempo della chiamata");
                }
            }
            else {
                alert("inserire un numero esistente");
            }
        });
        nr_chiamate.addEventListener("click", () => {
            alert(`Sono state effettuate ${terzo.numeroChiamate} chiamate`);
        });
        resetChiamate.addEventListener("click", () => {
            terzo.azzeraChiamate();
            alert("Le chiamate sono state azzerate");
        });
    }
    else {
        alert("inserire un numero corretto");
    }
});
logout.addEventListener("click", () => {
    location.reload();
});
