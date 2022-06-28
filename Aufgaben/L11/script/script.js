//Für jedes Objekt einzelnes Interface
//Für jedes Array im Interface mit []-Klammern markieren
let sammlung = [
    {
        deutsch: ["wort", "worte", "worte"],
        spanisch: ["wort", "worte2", "worte"]
    }
];
function randomize(arrayPoint) {
    //let shuffled = Array.from(sammlung).sort(() => 0.5 - Math.random());
}
;
let shuffled = Array.from(sammlung).sort(() => 0.5 - Math.random());
console.log(shuffled);
for (let index = 0; index < sammlung.length; index++) {
    console.log(index);
}
//# sourceMappingURL=script.js.map