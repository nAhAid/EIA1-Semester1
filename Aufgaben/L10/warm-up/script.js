let numbers = [5, 17, 2, 34, 45, 45, 45, 6, 7576, 8, 86];
let summe = 0;
for (let index = 0; index < numbers.length; index++) {
    summe = summe + numbers[index];
}
console.log(summe);
//*Objekt nutzt Blaupause wie ne Variable number/string/boolean/void etc.
let bastian = {
    name: "Bastian Aberle",
    alter: 25,
    studiengang: "MKB",
    wohnort: "Furtwangen",
    haarfarbe: "Schwarz",
    student: true
};
let rausch = {
    name: "Prof. Dr. Gabriel Rausch",
    alter: 35,
    studiengang: "MKB",
    wohnort: "Furtwangen",
    haarfarbe: "Schwarz",
    student: false
};
let dennis = {
    name: "Dennis Grützimacher",
    alter: 34,
    studiengang: "MKB",
    wohnort: "Villingen",
    haarfarbe: "Schwarz",
    student: true
};
let namen = [
    {
        name: "Dennis Grützimacher",
        alter: 34,
        studiengang: "MKB",
        wohnort: "Villingen",
        haarfarbe: "Schwarz",
        student: true
    },
    {
        name: "Prof. Dr. Gabriel Rausch",
        alter: 35,
        studiengang: "MKB",
        wohnort: "Furtwangen",
        haarfarbe: "Schwarz",
        student: false
    },
    {
        name: "Bastian Aberle",
        alter: 25,
        studiengang: "MKB",
        wohnort: "Furtwangen",
        haarfarbe: "Schwarz",
        student: true
    }
];
for (let index = 0; index < namen.length; index++) {
    console.log(namen[index].name);
}
//# sourceMappingURL=script.js.map