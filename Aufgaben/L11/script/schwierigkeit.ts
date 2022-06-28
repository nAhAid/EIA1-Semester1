//In Zeile zwei werden alle in der URL mitgegebenen Parameter abgerufen
let queryParams: URLSearchParams = new URLSearchParams(window.location.search);
//In Zeile vier werden die abgerufenen Parameter in der Variable "lang" abgespeichert
let lang: string = queryParams.get("lang");


//Variable um ausgewählte Sprache in HTML anzeigen zu lassen
let sprache: string = "Sprache";

//Variable zum Speichern, welche Schwierigkeit gewählt wurde
let ausgewaehlteSchwierigkeit: number = -1;

//if/ if-else Bedingung, um ausgewählte Sprache ausgeben zu lassen
if (lang == "es") {
    sprache = "Spanisch";
}
else if (lang == "ua") {
    sprache = "Ukrainisch";
}

document.querySelector("h1").innerHTML = sprache;
document.querySelector("#leicht").addEventListener("click", () => {
    ausgewaehlteSchwierigkeit = 1;
    //Der URL wird zusätzlich zum lang Parameter noch ein Parameter für die ausgewählte Schwierigkeit übergeben
    window.location.href = "lern.html?lang=" + lang + "&diff=1";

});

document.querySelector("#mittel").addEventListener("click", () => {
    ausgewaehlteSchwierigkeit = 2;
    //Der URL wird zusätzlich zum lang Parameter noch ein Parameter für die ausgewählte Schwierigkeit übergeben
    window.location.href = "lern.html?lang=" + lang + "&diff=2";

});

document.querySelector("#schwer").addEventListener("click", () => {
    ausgewaehlteSchwierigkeit = 3;
    //Der URL wird zusätzlich zum lang Parameter noch ein Parameter für die ausgewählte Schwierigkeit übergeben
    window.location.href = "lern.html?lang=" + lang + "&diff=3";

});