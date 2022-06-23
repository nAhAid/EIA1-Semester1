interface Satz {
    deutsch: string[];
    spanisch: string[];
}

//Für jedes Objekt einzelnes Interface
//Für jedes Array im Interface mit []-Klammern markieren
let sammlung: Satz[] = [
    {
        deutsch: ["wort", "worte", "worte"],
        spanisch: ["wort", "worte2", "worte"]

    },

    {
        deutsch: ["Wie", "heißt", "du"],
        spanisch: ["¿Cuál", "es", "su nombre?"]
    },

    {
        deutsch: ["Ich", "liebe", "programmieren"],
        spanisch: ["me", "encanta", "programar"]

    },

    {
        deutsch: ["Ich", "mag", "Brezeln"],
        spanisch: ["me", "gustan", "los pretzels"]
    }, 

    {
        deutsch: ["Luke", "ich", "bin", "dein", "Vater"],
        spanisch: ["Luke", "yo", "soy", "tu", "padre"]
    },

    {
        deutsch: [],
        spanisch: []
    }
];

function randomize(arrayPoint: number): void {
    //let shuffled = Array.from(sammlung).sort(() => 0.5 - Math.random());

};
let shuffled = Array.from(sammlung).sort(() => 0.5 - Math.random());
console.log(shuffled);


for (let index: number = 0; index < sammlung.length; index++) {
    console.log(index);


}
