//Variable zum Speichern, welche Sprache ausgewählt wurde
let ausgewaehlteSprache = "";
//Navigation zwischen HTML Dokumenten
//if-Bedingung prüft, auf welchem HTML-Dokument der Browser gerade ist
if (window.location.href.includes("sprache.html")) {
    document.querySelector("#spanisch").addEventListener("click", () => {
        ausgewaehlteSprache = "Spanisch";
        //In der URL werden zusätzliche Parameter mitgegeben. Eingeleitet durch "?". Parameter "lang" mit wert "es"
        window.location.href = "schwierigkeit.html?lang=es";
    });
    document.querySelector("#ukrainisch").addEventListener("click", () => {
        ausgewaehlteSprache = "Ukrainisch";
        //In der URL werden zusätzliche Parameter mitgegeben. Eingeleitet durch "?". Parameter "lang" mit wert "ua"
        window.location.href = "schwierigkeit.html?lang=ua";
    });
}
//Nächstes HTML-Dkoument: schwierigkeit.html -> Auswählen der Schwierigkeit
//# sourceMappingURL=sprache.js.map