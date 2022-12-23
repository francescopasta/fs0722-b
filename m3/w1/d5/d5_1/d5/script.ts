interface Smartphone {
    numeroCarica: number;
    numeroChiamate: number;
}
//elementi pagina login
let div1 = <HTMLDivElement>document.querySelector('#div1');
let titoloHome = <HTMLTitleElement>document.querySelector('#titolo_home');
let inputHome = <HTMLInputElement>document.querySelector('#input_home');
let bottoneHome = <HTMLButtonElement>document.querySelector('#btn_home');

//elementi dom pagina loggato
let div2 = <HTMLDivElement>document.querySelector('#div2');
let nome = <HTMLSpanElement>document.querySelector('#nome');
let credito = <HTMLSpanElement>document.querySelector('#credito');
let numero = <HTMLInputElement>document.querySelector('#numero');
let btn_1 = <HTMLButtonElement>document.querySelector('#btn_1');
let btn_2 = <HTMLButtonElement>document.querySelector('#btn_2');
let btn_3 = <HTMLButtonElement>document.querySelector('#btn_3');
let logout = <HTMLButtonElement>document.querySelector('#logout');
let destinatario = <HTMLInputElement>document.querySelector('#destinatario');
let tempo = <HTMLInputElement>document.querySelector('#tempo');
let chiama = <HTMLButtonElement>document.querySelector('#chiama');
let nr_chiamate = <HTMLButtonElement>document.querySelector('#nr_chiamate');
let resetChiamate = <HTMLButtonElement>document.querySelector('#reset_chiamate');
let sfondo=<HTMLDivElement>document.querySelector("#sfondo");

class User implements Smartphone {
    numeroCarica: number = 0;
    numeroChiamate: number = 0;
    public ricarica(somma: number): void {
        this.numeroCarica += somma;
    }
    public chiamata(tempo: number): void {
        if(this.numeroCarica-((tempo / 60) * 0.2)<0){
            alert("non hai abbastanza credito per questa chiamata");
        }
        else{
            this.numeroCarica-=((tempo / 60) * 0.2)
        }
    }
    public numero404(): number {
        return Math.round(this.numeroCarica*100)/100;
    }
    public aumentaChiamate(): void {
        this.numeroChiamate++;
    }
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}
class FirstUser extends User {
    numeroTelefono: number = 3331254027;
    nomeUtente: string = "Damiano";
    constructor() {
        super()
    }
}
class SecondUser extends User {
    numeroTelefono: number = 3481112345;
    nomeUtente: string = "Silvio";
    constructor() {
        super()
    }
}
class ThirdUser extends User {
    numeroTelefono: number = 3283456834;
    nomeUtente: string = "Domenico";
    constructor() {
        super()
    }
}
var primo = new FirstUser();
var secondo = new SecondUser();
var terzo = new ThirdUser();

bottoneHome.addEventListener('click', () => {
    if (Number(inputHome.value) == primo.numeroTelefono) {
        div1.style.display = "none";
        div2.style.display = "flex";
        sfondo.style.filter="blur(3px)";
        nome.innerHTML = `${primo.nomeUtente}!`
        credito.innerHTML = `${primo.numeroCarica}€`
        numero.value = `${primo.numeroTelefono}`
        btn_1.addEventListener("click", () => {
            primo.ricarica(10);
            credito.innerHTML = `${primo.numero404()}€`

        });
        btn_2.addEventListener("click", () => {
            primo.ricarica(20);
            credito.innerHTML = `${primo.numero404()}€`
        });
        btn_3.addEventListener("click", () => {
            primo.ricarica(50);
            credito.innerHTML = `${primo.numero404()}€`
        });
        chiama.addEventListener("click", () => {
            if (Number(destinatario.value) >= 1000000000 && Number(destinatario.value) < 10000000000) {
                if (Number(tempo.value) > 0) {
                    primo.chiamata(Number(tempo.value));
                    credito.innerHTML = `${primo.numero404()}€`
                    primo.aumentaChiamate();
                    tempo.value="";
                    destinatario.value="";
                }
                else {
                    alert("inserire il tempo della chiamata")
                }
            }
            else {
                alert("inserire un numero esistente")
            }
        })
        nr_chiamate.addEventListener("click", () => {
            alert(`Sono state effettuate ${primo.numeroChiamate} chiamate`)
        })
        resetChiamate.addEventListener("click", () => {
            primo.azzeraChiamate();
            alert("Le chiamate sono state azzerate");
        })
    }
    else if (Number(inputHome.value) == secondo.numeroTelefono) {
        div1.style.display = "none";
        div2.style.display = "flex";
        sfondo.style.filter="blur(3px)";
        nome.innerHTML = `${secondo.nomeUtente}!`
        credito.innerHTML = `${secondo.numeroCarica}€`
        numero.value = `${secondo.numeroTelefono}`
        btn_1.addEventListener("click", () => {
            secondo.ricarica(10);
            credito.innerHTML = `${secondo.numero404()}€`
        });
        btn_2.addEventListener("click", () => {
            secondo.ricarica(20);
            credito.innerHTML = `${secondo.numero404()}€`
        });
        btn_3.addEventListener("click", () => {
            secondo.ricarica(50);
            credito.innerHTML = `${secondo.numero404()}€`
        });
        chiama.addEventListener("click", () => {
            if (Number(destinatario.value) >= 1000000000 && Number(destinatario.value) < 10000000000) {
                if (Number(tempo.value) > 0) {
                    secondo.chiamata(Number(tempo.value));
                    credito.innerHTML = `${secondo.numero404()}€`
                    secondo.aumentaChiamate();
                    tempo.value="";
                    destinatario.value="";
                }
                else {
                    alert("inserire il tempo della chiamata")
                }
            }
            else {
                alert("inserire un numero esistente")
            }
        })
        nr_chiamate.addEventListener("click", () => {
            alert(`Sono state effettuate ${secondo.numeroChiamate} chiamate`)
        })
        resetChiamate.addEventListener("click", () => {
            secondo.azzeraChiamate();
            alert("Le chiamate sono state azzerate");
        })

    }
    else if (Number(inputHome.value) == terzo.numeroTelefono) {
        div1.style.display = "none";
        div2.style.display = "flex";
        sfondo.style.filter="blur(3px)";
        nome.innerHTML = `${terzo.nomeUtente}!`
        credito.innerHTML = `${terzo.numeroCarica}€`
        numero.value = `${terzo.numeroTelefono}`
        btn_1.addEventListener("click", () => {
            terzo.ricarica(10);
            credito.innerHTML = `${terzo.numero404()}€`
        });
        btn_2.addEventListener("click", () => {
            terzo.ricarica(20);
            credito.innerHTML = `${terzo.numero404()}€`
        });
        btn_3.addEventListener("click", () => {
            terzo.ricarica(50);
            credito.innerHTML = `${terzo.numero404()}€`
        });
        chiama.addEventListener("click", () => {
            if (Number(destinatario.value) >= 1000000000 && Number(destinatario.value) < 10000000000) {
                if (Number(tempo.value) > 0) {
                    terzo.chiamata(Number(tempo.value));
                    credito.innerHTML = `${terzo.numero404()}€`
                    terzo.aumentaChiamate();
                    tempo.value="";
                    destinatario.value="";
                }
                else {
                    alert("inserire il tempo della chiamata")
                }
            }
            else {
                alert("inserire un numero esistente")
            }
        })
        nr_chiamate.addEventListener("click", () => {
            alert(`Sono state effettuate ${terzo.numeroChiamate} chiamate`)
        })
        resetChiamate.addEventListener("click", () => {
            terzo.azzeraChiamate();
            alert("Le chiamate sono state azzerate");
        })
    }
    else {
        alert("inserire un numero corretto");
    }
})
logout.addEventListener("click", () => {
    // div2.style.display = "none";
    // div1.style.display = "block";
    // sfondo.style.filter="none";
    // inputHome.value = "";
    location.reload();
})
