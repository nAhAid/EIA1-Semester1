//Variable zum Speichern, welche Sprache ausgewählt wurde
let ausgewaehlteSprache: string = "";

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


//Variable zum Speichern, welche Schwierigkeit gewählt wurde
let ausgewaehlteSchwierigkeit: number = -1;


//Navigation zwischen HTML Dokumenten
//if-Bedingung prüft, auf welchem HTML-Dokument der Browser gerade ist
/* if (window.location.href.includes("schwierigkeit.html")) {
    document.querySelector("h1").innerHTML = ausgewaehlteSprache;
    document.querySelector("#leicht").addEventListener("click", () => {
        ausgewaehlteSchwierigkeit = 1;
        window.location.href = "lern.html";

    });

    document.querySelector("#mittel").addEventListener("click", () => {
        ausgewaehlteSchwierigkeit = 2;
        window.location.href = "lern.html";

    });

    document.querySelector("#schwer").addEventListener("click", () => {
        ausgewaehlteSchwierigkeit = 3;
        window.location.href = "lern.html";

    });
} */




//Nächstes HTML-Dkoument: lern.html























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

console.log(sammlung.length);

function randomize(arrayPoint: number): void {
    //let shuffled = Array.from(sammlung).sort(() => 0.5 - Math.random());

}
