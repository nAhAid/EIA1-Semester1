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
//Interface für Fake-Wörter Objekt.
interface Fake {
    spanisch: string[];
    ukrainisch: string[];
}

//Liste an Objekten für Fake wörter, um ggf. ohne großen Aufwand weiter hinzufügen zu können.
let fakeSammlung: Fake[] = [
    {
        spanisch: ["Queso", "Embutido", "papas fritas", "Cazuela", "madre", "país"],
        ukrainisch: ["сир", "ковбаса", "картопля фрі", "Запіканка", "мати", "країна"]
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

//Variable um auf Liste für Fake-Wörte zuzugreifen.
let fakeSprache: string[] = [];


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
//ausgewählte Sprache wird ins HTML geschrieben.
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

    //for-Schleife, die über das Array loopt, welches den deutschen Satz enthält, und dabei die einzelnen Elemente ins HTML schreibt.
    for (let index: number = 0; index < satz.deutsch.length; index++) {
        document.querySelector("#satz").innerHTML += satz.deutsch[index] + " ";

    }

}


function wortGenerator(): void {
    //for-Schleife, die solange über das curretnSentence-Array loopt bis jedes Element einen eigenen Button hat. Jeder Button wird mit einer fortlaufenden Id belegt. Zuweisung der CSS-Eigenschaft "false"
    for (let index: number = 0; index < currentSentence.length; index++) {
        document.querySelector("#buttons").innerHTML += "<button id=\"button" + index + "\" onClick = \"checkSatz(" + index + ") \" class=\"" + style + "\">" + currentSentence[index] + "</button>";

    }

    //Zugriff auf Objekt-Liste je nach ausgewählter Sprache
    if (langLern == "es") {
        fakeSprache = fakeSammlung[0].spanisch;
    }
    else if (langLern == "ua") {
        fakeSprache = fakeSammlung[0].ukrainisch;
    }

    //Zahl wird zufällig, im Rahmen der fakeSprache.length, festgelegt
    let zalh: number = 1;
    zahl = Math.random() * fakeSprache.length;
    zahl = Math.floor(zahl);
    //Zufalls "zahl" sorgt für zufälliges auftauchen der Fake-Wörter
    let troll: string = fakeSprache[zahl];

    //Generiert einen Button für die Fake-Wörter, Id so gewählt, dass Funktion "checkList" in else-Anweisung springt
    document.querySelector("#buttons").innerHTML += "<button id=\"buttonX\" onClick = \"checkSatz(10000000)\" class=\"" + style + "\">" + troll + "</button>";


    //Variable, vom Typ HTML-Element, um darüber auf die child-Elemente zugreifen zu können.
    let ul: HTMLElement = document.querySelector("#buttons");
    //for-Schleife um erstellte Buttons in zufälliger Reihenfolge im HTML anzeigen zu
    for (let i: number = ul.children.length; i >= 0; i--) {
        //hängt zufälliges Kind-Element "hinten" an die "Liste" ran
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }

}

//Funktion prüft, ob Punktestand kleiner Null ist. Wenn ja wird auf "failed.html" geleitet
function checkPunkte(): void {
    if (punkte < 0) {
        window.location.href = "failed.html?lang=" + langLern + "&diff=" + diffLern;
    }
    else {
        return;
    }
}


function checkList(id: number): void {


    //if-Bedingung prüft ob die id dem "satzProgress" entspricht, "satzProgress" ist anfangs auf Null gesetzt. => Erstes array-Element immer = 0, erste Zahl von generiertem Button daher immer gleich Null.
    if (id == satzProgress) {
        //CSS: Entfernt class= false
        document.querySelector("#button" + id).classList.remove(String(style));
        //Boolean "style" wird umgedreht, also style = true
        style = !style;
        //CSS: Fügt neue class = true hinzu
        document.querySelector("#button" + id).classList.add(String(style));
        //Boolean "style" wird wieder umgedreht, um beim nächsten Click wieder von vorne anfangen zu können
        style = !style;

        //Variable zum Punkte Zählen, wird um "+1" hochgezählt.
        punkte++;
        //Neuer Punktestand wird ins HTML geschrieben
        document.querySelector("#points").innerHTML = String(punkte) + " ";
        //Inhalt des geklickten Buttons wird indirekt ins HTML geschrieben:
        //satzProgress = Stelle im aktuellen Satz-Array, durch "currentSentence[satzProgress]" wird auf das ursrpüngliche Element zugegriffen
        document.querySelector("#ergebnis").innerHTML += currentSentence[satzProgress] + " ";
        //Variable "satzProgress" wird um "+1" hochgezählt. Bsp.: von 0 auf 1. Dadurch immer an aktueller Stelle vom Satz.
        satzProgress++;

    }
    //else-FUnktionsblock immer dann, wenn if-Bedingung nicht zutriffft
    else {
        //Variable zum zählen der Punkte wird reduziert
        punkte--;
        //Neuer Punktestand ins HMTL
        document.querySelector("#points").innerHTML = String(punkte) + " ";
        //Funktionsaufruf: Funktion prüft ob Punktestand < 0 oder nicht
        checkPunkte();
        //alert für User, das Wort falsch war.
        alert("Leider Falsch");

    }
}


//Funktion cleared HTML, da "satzGenerator" und "wortGenerator", nur hinzufügen, und nicht ersetzen.
function clear(): void {
    document.querySelector("#satz").innerHTML = "";
    document.querySelector("#buttons").innerHTML = "";
    document.querySelector("#ergebnis").innerHTML = "";

}

//"ausgabeSatz" steuert "schreiben" der Sätze und navigieren zur "bestanden.hmtl"
function ausgabeSatz(): void {
    //prüft, ob nötige Anzahl an Sätzen für jeweilige Schwierigkeitsstufe erreicht wurde oder (noch) nicht

    //Ruft Funktionen in richtiger Reihenfolge auf, um neuen Satz mit Buttons ausgeben zu lassen.
    if (schwierigkeit > satzCount) {
        clear();
        satzGenerator(language);
        wortGenerator();
    }

    // leitet  weiter zur "bestanden.html"
    else if (schwierigkeit <= satzCount) {
        window.location.href = "bestanden.html?lang=" + langLern + "&points=" + punkte;
    }


}
//Funktionsaufruf zu Beginn, um zum ersten Mal einen Satz zu laden
ausgabeSatz();


//Funktion die beim Click auf einen Button aufgerufen wird.
function checkSatz(id: number): void {

    //if-Bedingung trifft zu, wenn geclicktes Wort noch nicht das letzte war
    if (satzProgress < currentSentence.length) {
        checkList(id);
    }

    //if-Bedingung trifft zu, wenn geclicktes Wort das letzte war.
    if (satzProgress >= currentSentence.length) {
        satzCount++;
        ausgabeSatz();
        satzProgress = 0;

    }

}
