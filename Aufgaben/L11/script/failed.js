//In Zeile zwei werden alle in der URL mitgegebenen Parameter abgerufen
let queryParamsFailed = new URLSearchParams(window.location.search);
//In Zeile vier werden die abgerufenen Parameter in der Variable "lang" abgespeichert
let langFailed = queryParamsFailed.get("lang");
let diffFailed = parseInt(queryParamsFailed.get("diff"));
if (langFailed == "es") {
    sprache = "Spanisch";
}
else if (langFailed == "ua") {
    sprache = "Ukrainisch";
}
//Navigation zwischen HTML Dokumenten
//if-Bedingung prüft, auf welchem HTML-Dokument der Browser gerade ist
if (window.location.href.includes("failed.html")) {
    document.querySelector("#ja").addEventListener("click", () => {
        //In der URL werden zusätzliche Parameter mitgegeben. Eingeleitet durch "?". Parameter "lang" mit wert "es"
        window.location.href = "lern.html?lang=" + langFailed + "&diff=" + diffFailed;
    });
    document.querySelector("#nein").addEventListener("click", () => {
        //Navigation zu "sprache.html"
        window.location.href = "sprache.html";
    });
}
//# sourceMappingURL=failed.js.map