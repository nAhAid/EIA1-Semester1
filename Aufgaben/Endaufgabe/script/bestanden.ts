//In Zeile zwei werden alle in der URL mitgegebenen Parameter abgerufen
let queryParamsBestanden: URLSearchParams = new URLSearchParams(window.location.search);
//In Zeile vier werden die abgerufenen Parameter in der Variable "lang" abgespeichert
let langBestanden: string = queryParamsBestanden.get("lang");
let punkteBestanden: string = queryParamsBestanden.get("points");

if (langBestanden == "es") {
    sprache = "Spanisch";
}
else if (langBestanden == "ua") {
    sprache = "Ukrainisch";
}


//Navigation zwischen HTML Dokumenten
//if-Bedingung prüft, auf welchem HTML-Dokument der Browser gerade ist
if (window.location.href.includes("bestanden.html")) {
    document.querySelector("#ergebnis").innerHTML = punkteBestanden;
    document.querySelector("#schwierigkeit").addEventListener("click", () => {

        //In der URL werden zusätzliche Parameter mitgegeben. Eingeleitet durch "?". Parameter "lang" mit wert "es"
        window.location.href = "schwierigkeit.html?lang=" + langBestanden;
    });

    document.querySelector("#sprache").addEventListener("click", () => {

        //Navigation zu "sprache.html"
        window.location.href = "sprache.html";
    });
}