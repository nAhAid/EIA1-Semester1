//Interface um Objekt Inhalte zu definieren (string, number, etc.)
//Für jedes Array im Interface mit []-Klammern markieren
interface Satz {
    deutsch: string[];
    spanisch: string[];
    ukrainisch: string[];
}

//Für jedes Objekt ein Interface

let sammlung: Satz[] = [

    {
        deutsch: ["Wie", "heißt", "du?"],
        spanisch: ["¿Cuál", "es", "su nombre?"],
        ukrainisch: ["Як", "вас", "звати?"]
    },

    {
        deutsch: ["Ich", "liebe", "programmieren."],
        spanisch: ["me", "encanta", "programar."],
        ukrainisch: ["я", "люблю", "програмувати"]
    },

    {
        deutsch: ["Ich", "mag", "Brezeln."],
        spanisch: ["me", "gustan", "los pretzels."],
        ukrainisch: ["я", "люблю", "кренделі"]
    },

    {
        deutsch: ["Luke,", "ich", "bin", "dein", "Vater."],
        spanisch: ["Luke,", "yo", "soy", "tu", "padre."],
        ukrainisch: ["Лука,", "я", "твій", "батько"]
    },

    {
        deutsch: ["Chantal,", "heul", "leise!"],
        spanisch: ["¡Chantal,", "llora", "en silencio!"],
        ukrainisch: ["Шанталь,", "плач", "тихо"]
    },

    {
        deutsch: ["Möge", "die", "Macht", "mit", "dir", "sein!"],
        spanisch: ["¡Que", "la", "fuerza", "esté", "con", "usted!"],
        ukrainisch: ["Нехай", "сила", "буде", "з", "тобою", "!"]
    },

    {
        deutsch: ["Nach", "Hause", "telefonieren!"],
        spanisch: ["Para", "llamar", "a", "casa!"],
        ukrainisch: ["Щоб", "подзвонити", "додому!"]
    },

    {
        deutsch: ["Ein", "Verstand", "braucht", "Bücher,", "wie", "ein", "Schwert", "den", "Schleifstein."],
        spanisch: ["Una", "mente", "necesita", "libros", "como", "una", "espada", "necesita", "una", "piedra", "de", "afilar."],
        ukrainisch: ["Розуму", "потрібні", "книги,", "як", "меч", "потрібен", "точильний", "камінь."]
    },

    {
        deutsch: ["Dumm", "ist", "der,", "der", "dummes", "tut."],
        spanisch: ["Tonto", "es", "el", "que", "hace", "tonterías."],
        ukrainisch: ["Тупий", "той,", "хто", "робить", "дурні", "речі"]
    },

    {
        deutsch: ["Yippie-Ya-Yeah,", "Schweinebacke"],
        spanisch: ["¡Yippie-Ya-Sí,", "mejilla de cerdo!"],
        ukrainisch: ["Юпі-я-так,", "свиняча щока"]
    },

    {
        deutsch: ["Mein", "Name", "ist", "Bond.", "James", "Bond."],
        spanisch: ["Mi", "nombre", "es", "Bond.", "James", "Bond"],
        ukrainisch: ["мене", "звати", "Бонд", ".", "Джеймс", "Бонд."]
    },

    {
        deutsch: ["Ich", "bin", "der", "König", "der", "Welt!"],
        spanisch: ["¡Soy", "el", "rey", "del", "mundo!"],
        ukrainisch: ["Я", "король", "світу."]
    },

    {
        deutsch: ["Lauf", "Forrest!", "Lauf!"],
        spanisch: ["¡Corre", "Forrest!", "¡correr!"],
        ukrainisch: ["світу", "Форрест!", "біжи!"]
    },

    {
        deutsch: ["Für", "Frodo"],
        spanisch: ["¡Por", "Frodo"],
        ukrainisch: ["За", "Фродо!"]
    },

    {
        deutsch: ["Der", "Winter", "naht!"],
        spanisch: ["¡Viene", "el", "invierno!"],
        ukrainisch: ["Зима", "наближається!"]
    }

];

//Funktion zum "mischen" von Inhalten der übergebenen Liste
function shuffleList(list: any[]): any[] {

    return list
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

}
//Beim aufrufen der Funktion shuffleList, wird das Array "sammlung" neu zusammen gewürfelt
sammlung = shuffleList(sammlung);


//In Zeile zwei werden alle in der URL mitgegebenen Parameter abgerufen
let queryParamsLern: URLSearchParams = new URLSearchParams(window.location.search);
//In folgenden zwei Zeilen werden die abgerufenen Parameter in der Variable "langLern" und "diffLern" abgespeichert
let langLern: string = queryParamsLern.get("lang");
let diffLern: number = parseInt(queryParamsLern.get("diff"));

let spracheLern: string = langLern;
let stufeLern: number = diffLern;

let language: string = "";

let satzProgress: number = 0;

//if if-else Bedingung, um ausgewählte Sprache ausgeben zu lassen
if (langLern == "es") {
    spracheLern = "Spanisch";
    language = "es";
}
else if (langLern == "ua") {
    spracheLern = "Ukrainisch";
    language = "ua";
}
document.querySelector("h1").innerHTML = spracheLern;


let currentCount: number = 0;

//Variable um Reihenfolge der Wörter funktionsübergreifend zu nutzen
let currentSentence: string[] = [];

//Variable um geklickte Wort-Reihenfolge zu speichern. Um später mit Wort-Reihenfolge von "currentSentence" zu vergleichen
let currentClick: string[] = [];


function satzGenerator(fremdsprache: string): void {
    //".pop" ruft letztes Listen-Element auf und entfernt es aus der Liste => Sätze werden nicht mehrmals aufgerufen.
    let satz: Satz = sammlung.pop();
    let deutsch: string[] = satz.deutsch;
    //"sprache" als leere Liste definiert
    let sprache: string[] = [];

    //"sprache" wird mit Satz aus ausgewählter Sprache "gefüllt"
    if (fremdsprache == "es") {
        sprache = satz.spanisch;
    }
    else if (fremdsprache == "ua") {
        sprache = satz.ukrainisch;
    }

    //Variable "currentSentence" wird Satz in ausgewählter Sprache übergeben
    currentSentence = sprache;

    for (let index: number = 0; index < satz.deutsch.length; index++) {
        document.querySelector("#satz").innerHTML += satz.deutsch[index] + " ";

    }

}



function wortGenerator(): void {
    for (let index: number = 0; index < currentSentence.length; index++) {
        document.querySelector("#buttons").innerHTML += "<button id=\"button" + index + "\">" + currentSentence[index] + "</button>";
        //document.querySelector("#button" + index).addEventListener("click", checkList);

    }


    let ul: HTMLElement = document.querySelector("#buttons");
    for (let i: number = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }

    Listener();

    /*  //Aufruf der Funktion "shuffleList" um "currentSentence" Inhalte in zufälliger Reihenfolge ausgeben zu lassen.
     let worte: string[] = shuffleList(currentSentence);
     //for Schleife, die über "worte" loopt und aus einzelnen strings Buttons mit fortlaufender id generiert.
     for (let index: number = 0; index < worte.length; index++) {
         document.querySelector("#buttons").innerHTML += "<button>" + worte[index] + "</button>";
         document.querySelector("#button" + index).addEventListener("click", () => { checkList() });
 
     } */


}
function Listener(): void {
    let bu: HTMLElement = document.querySelector("#buttons");
    for (let i: number = bu.children.length - 1; i >= 0; i--) {
        document.getElementById("button" + i).addEventListener("click", checkList);

    }
}

function checkList(): void {
    let activeButton = document.querySelector("button:hover");
    let activeID = activeButton.id.slice(-1);
    //let content: string = document.getElementById("button" + satzProgress).innerText;
    let punkte: number = 0;

    if (parseInt(activeID) == satzProgress) {
        punkte++;
        satzProgress++;
        document.querySelector("#points").innerHTML = String(punkte);
    }
    else {
        punkte--;
        document.querySelector("#points").innerHTML = String(punkte);

    }
}

function ausgabeSatz(): void {
    satzGenerator(language);
    wortGenerator();
}

ausgabeSatz();