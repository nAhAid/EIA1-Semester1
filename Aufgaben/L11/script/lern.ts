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
        spanisch: ["Me", "encanta", "programar."],
        ukrainisch: ["я", "люблю", "програмувати"]
    },

    {
        deutsch: ["Ich", "mag", "Brezeln."],
        spanisch: ["Me", "gustan", "los pretzels."],
        ukrainisch: ["я", "люблю", "кренделі"]
    },

    {
        deutsch: ["Luke,", "ich", "bin", "dein", "Vater."],
        spanisch: ["Luke,", "yo", "soy", "tu", "padre."],
        ukrainisch: ["Лука,", "я", "твій", "батько"]
    },

    {
        deutsch: ["Chantal,", "heul", "leise!"],
        spanisch: ["¡Chantal,", "ilora", "en silencio!"],
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
        deutsch: ["Macht", "ist", "Macht."],
        spanisch: ["El poder", "es", "poder."],
        ukrainisch: ["влада", "є", "сила."]
    },

    {
        deutsch: ["Dumm", "ist", "der,", "der", "dummes", "tut."],
        spanisch: ["Tonto", "es", "el", "que", "hace", "tonterías."],
        ukrainisch: ["Тупий", "той,", "хто", "робить", "дурні", "речі"]
    },

    {
        deutsch: ["Yippie-Ya-Yeah,", "Schweinebacke!"],
        spanisch: ["¡Yippie-Ya-Sí,", "mejilla de cerdo!"],
        ukrainisch: ["Юпі-я-так,", "свиняча щока"]
    },

    {
        deutsch: ["Mein", "Name", "ist", "Bond.", "James", "Bond."],
        spanisch: ["Mi", "nombre", "es", "Bond.", "James", "Bond."],
        ukrainisch: ["мене", "звати", "Бонд", ".", "Джеймс", "Бонд."]
    },

    {
        deutsch: ["Ich", "bin", "der", "König", "der", "Welt!"],
        spanisch: ["¡Soy", "el", "rey", "del", "mundo!"],
        ukrainisch: ["Я", "король", "світу!"]
    },

    {
        deutsch: ["Lauf", "Forrest!", "Lauf!"],
        spanisch: ["¡Corre", "Forrest!", "¡correr!"],
        ukrainisch: ["світу", "Форрест!", "біжи!"]
    },

    {
        deutsch: ["Für", "Frodo!"],
        spanisch: ["¡Por", "Frodo!"],
        ukrainisch: ["За", "Фродо!"]
    },

    {
        deutsch: ["Der", "Winter", "naht!"],
        spanisch: ["¡Viene", "el", "invierno!"],
        ukrainisch: ["Зима", "наближається!"]
    },

    {
        deutsch: ["Ich", "bin", "Iron", "Man"],
        spanisch: ["Yo", "soy", "Iron", "Man"],
        ukrainisch: ["я", "залізна", "людина"]
    }

];


//Mit URLSearschParams werden alle in der URL mitgegebenen Parameter abgerufen
let queryParamsLern: URLSearchParams = new URLSearchParams(window.location.search);
//In folgenden zwei Zeilen werden die abgerufenen Parameter in der Variable "langLern" und "diffLern" abgespeichert
let langLern: string = queryParamsLern.get("lang");
let diffLern: number = parseInt(queryParamsLern.get("diff"));

//Leere Variable um später Sprache in ausgeschriebener Form zu speichern
let spracheLern: string = "";
let stufeLern: number = diffLern;

//Variable um Sprachkürzel zu speichern
let language: string = "";

//Variable um Fortschritt der geklickten Wörter im Satz zu speichern.
let satzProgress: number = 0;

//Variable für if-Bedingung für Anzahl der Durchläufe, *5 um 5/10/15 Durchläufe zu erreichen
let schwierigkeit: number = stufeLern * 5;

//Variable zum zählen der Sätze
let satzCount: number = 0;

//Variable um Reihenfolge der Wörter, vom aktuellen Satz funktionsübergreifend zu nutzen
let currentSentence: string[] = [];

//Variable um aktuelle Punktanzahl zu zählen
let punkte: number = 0;

//Variable um CSS der geklickten Buttons zu ändern
let style: boolean = false;


//Funktion zum "mischen" von Inhalten der übergebenen Liste
function shuffleList(list: any[]): any[] {

    return list
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value); 

}
//Beim aufrufen der Funktion shuffleList, wird das Array "sammlung" neu zusammen gewürfelt
sammlung = shuffleList(sammlung);


//if-else Bedingung, um ausgewählte Sprache ausgeben zu lassen
if (langLern == "es") {
    spracheLern = "Spanisch";
    language = "es";
}
else if (langLern == "ua") {
    spracheLern = "Ukrainisch";
    language = "ua";
}
document.querySelector("h1").innerHTML = spracheLern;
document.querySelector(".lang").innerHTML = spracheLern;



function satzGenerator(fremdsprache: string): void {
    //".pop" ruft letztes Listen-Element auf und entfernt es aus der Liste => Sätze werden nicht mehrmals aufgerufen.
    let satz: Satz = sammlung.pop();
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
        document.querySelector("#buttons").innerHTML += "<button id=\"button" + index + "\" onClick = \"checkSatz()\" class=\"" + style + "\">" + currentSentence[index] + "</button>";


    }

    //for-Schleife um erstellte Buttons in zufälliger Reihenfolge im HTML anzeigen zu
    let ul: HTMLElement = document.querySelector("#buttons");
    for (let i: number = ul.children.length; i >= 0; i--) {
        //hängt zufälliges Kind-Element "hinten" an die "Liste" ran
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }

}

function checkPunkte(): void {
    if (punkte < 0) {
        window.location.href = "failed.html?lang=" + langLern + "&diff=" + diffLern;
    }
    else {
        return;
    }
}


function checkList(): void {
    let activeButton: HTMLElement = document.querySelector("button:hover");
    let activeID: string = activeButton.id.slice(-1);


    if (parseInt(activeID) == satzProgress) {
        document.querySelector("button:hover").classList.remove(String(style));
        style = !style;
        document.querySelector("button:hover").classList.add(String(style));
        style = !style;
        punkte++;
        document.querySelector("#points").innerHTML = String(punkte) + " ";
        document.querySelector("#ergebnis").innerHTML += currentSentence[satzProgress] + " ";
        satzProgress++;

    }
    else {
        punkte--;
        document.querySelector("#points").innerHTML = String(punkte) + " ";
        checkPunkte();
        alert("Leider Falsch");

    }
}

function clear(): void {
    document.querySelector("#satz").innerHTML = "";
    document.querySelector("#buttons").innerHTML = "";
    document.querySelector("#ergebnis").innerHTML = "";

}

function ausgabeSatz(): void {

    if (schwierigkeit > satzCount) {
        clear();
        satzGenerator(language);
        wortGenerator();
    }

    else if (schwierigkeit <= satzCount) {
        window.location.href = "bestanden.html?lang=" + langLern + "&points=" + punkte;
    }


}

ausgabeSatz();

function checkSatz(): void {
    if (satzProgress < currentSentence.length) {
        checkList();
    }

    if (satzProgress >= currentSentence.length) {
        satzCount++;
        ausgabeSatz();
        satzProgress = 0;

    }

}
