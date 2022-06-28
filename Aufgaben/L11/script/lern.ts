//Interface um Objekt Inhalte zu definieren (string, number, etc.)
//Für jedes Array im Interface mit []-Klammern markieren
interface Satz {
    deutsch: string[];
    spanisch: string[];
}

//Für jedes Objekt einzelnes Interface

let sammlung: Satz[] = [

    {
        deutsch: ["Wie", "heißt", "du?"],
        spanisch: ["¿Cuál", "es", "su nombre?"]
    },

    {
        deutsch: ["Ich", "liebe", "programmieren."],
        spanisch: ["me", "encanta", "programar."]

    },

    {
        deutsch: ["Ich", "mag", "Brezeln."],
        spanisch: ["me", "gustan", "los pretzels."]
    },

    {
        deutsch: ["Luke", "ich", "bin", "dein", "Vater."],
        spanisch: ["Luke", "yo", "soy", "tu", "padre."]
    },

    {
        deutsch: ["Chantal,", "heul", "leise!"],
        spanisch: ["¡Chantal,", "llora", "en silencio!"]
    },

    {
        deutsch: ["Möge", "die", "Macht", "mit", "dir", "sein!"],
        spanisch: ["¡Que", "la", "fuerza", "esté", "con", "usted!"]
    },

    {
        deutsch: ["Nach", "Hause", "telefonieren!"],
        spanisch: ["Para", "llamar", "a", "casa!"]
    },

    {
        deutsch: ["Das", "Leben", "ist", "wie", "eine", "Schachtel", "Pralinen,", "man", "weiß", "nie", "was", "man", "kriegt."],
        spanisch: ["La", "vida", "es", "como", "una", "caja", "de bombones,", "nunca", "sabes lo", "que te va", "a tocar"]
    },

    {
        deutsch: ["Dumm", "ist", "der,", "der", "dummes", "tut."],
        spanisch: ["Tonto", "es", "el", "que", "hace", "tonterías."]
    },

    {
        deutsch: ["Yippie-Ya-Yeah,", "Schweinebacke"],
        spanisch: ["¡Yippie-Ya-Sí,", "mejilla de cerdo!"]
    },

    {
        deutsch: ["Mein", "Name", "ist", "Bond.", "James", "Bond."],
        spanisch: ["Mi", "nombre", "es", "Bond.", "James", "Bond"]
    },

    {
        deutsch: ["Ich", "bin", "der", "König", "der", "Welt!"],
        spanisch: ["¡Soy", "el", "rey", "del", "mundo!"]
    },

    {
        deutsch: ["Lauf", "Forrest!", "Lauf!"],
        spanisch: ["¡Corre", "Forrest!", "¡correr!"]
    },

    {
        deutsch: ["Für", "Frodo"],
        spanisch: ["¡Por", "Frodo"]
    },

    {
        deutsch: ["Der", "Winter", "naht!"],
        spanisch: ["¡Viene", "el", "invierno!"]
    }

];

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
//In Zeile vier und fünf werden die abgerufenen Parameter in der Variable "langLern" und "diffLern" abgespeichert
let langLern: string = queryParamsLern.get("lang");
let diffLern: number = parseInt(queryParamsLern.get("diff"));

let spracheLern: string = langLern;
let stufeLern: number = diffLern;

//if if-else Bedingung, um ausgewählte Sprache ausgeben zu lassen
if (langLern == "es") {
    spracheLern = "Spanisch";
}
else if (langLern == "ua") {
    spracheLern = "Ukrainisch";
}
document.querySelector("h1").innerHTML = spracheLern;


let currentCount: number = 0;

//Variable um Reihenfolge der Wörter funktionsübergreifend zu nutzen
let currentSentence: string[] = [];

//Variable um geklickte Wort-Reihenfolge zu speichern. Um später mitWort-Reihenfolge von "currentSentence" zu vergleichen
let currentClick: string[] = [];


function satzGenerator(fremdsprache: string): void {
    //".pop" entfernt das letzte Element aus der Liste => Sätze werden nicht mehrmals aufgerufen.
    let satz: Satz = sammlung.pop();
    let deutsch: string[] = satz.deutsch;
    //"sprache" als leere Liste definiert
    let sprache: string[] = [];
    
    if (fremdsprache == "es") {
        sprache = satz.spanisch;
    }
    else if (fremdsprache == "ua") {
        //sprache = satz.ukrainisch;
    }

    currentSentence = sprache;

    //toString überprüfen!!
    document.querySelector("#satz").innerHTML = deutsch.toString();

}



function wortGenerator (): void {
    let worte: string[] = shuffleList(currentSentence);
     
    for (let index = 0; index < worte.length; index++) {
        document.querySelector("#buttons").innerHTML
        
     }
 
}
