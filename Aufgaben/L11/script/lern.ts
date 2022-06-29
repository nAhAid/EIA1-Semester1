//Interface um Objekt Inhalte zu definieren (string, number, etc.)
//Für jedes Array im Interface mit []-Klammern markieren
interface Satz {
    deutsch: string[];
    spanisch: string[];
}

//Für jedes Objekt ein Interface

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
        //sprache = satz.ukrainisch;
    }

    //Variable "currentSentence" wird Satz in ausgewählter Sprache übergeben
    currentSentence = sprache;

    //toString überprüfen!!
    document.querySelector("#satz").innerHTML = deutsch.toString();

}



function wortGenerator(): void {
    //Aufruf der Funktion "shuffleList" um "currentSentence" Inhalte in zufälliger Reihenfolge ausgeben zu lassen.
    let worte: string[] = shuffleList(currentSentence);

    //for Schleife, die über "worte" loopt und aus einzelnen strings Buttons mit fortlaufender id generiert.
    for (let index: number = 0; index < worte.length; index++) {
        document.querySelector("#buttons").innerHTML = "<button id=\"button" + index + "\">" + worte[index] + "</button>";

    }

    document.querySelector("#buttons").addEventListener("click", () => {
        // Versuch ID auszuwählen
        let clickedButton: string = this.id;
    });

}
