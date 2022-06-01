let numbers: number[] = [5, 17, 2, 34, 45, 45, 45, 6, 7576, 8, 86];
let summe: number = 0;
for (let index: number = 0; index < numbers.length; index++) {
    summe = summe + numbers[index];

}
console.log(summe);

//*Interface ist Blaupause für Objekte
interface Person {
    name: string;
    alter: number;
    studiengang: string;
    wohnort: string;
    haarfarbe: string;
    student: boolean;

}

//*Objekt nutzt Blaupause wie ne Variable number/string/boolean/void etc.
let bastian: Person = {
    name: "Bastian Aberle",
    alter: 25,
    studiengang: "MKB",
    wohnort: "Furtwangen",
    haarfarbe: "Schwarz",
    student: true
};

let rausch: Person = {
    name: "Prof. Dr. Gabriel Rausch",
    alter: 35,
    studiengang: "MKB",
    wohnort: "Furtwangen",
    haarfarbe: "Schwarz",
    student: false
};

let dennis: Person = {
    name: "Dennis Grützimacher",
    alter: 34,
    studiengang: "MKB",
    wohnort: "Villingen",
    haarfarbe: "Schwarz",
    student: true
};



let namen: Person[] = [
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

for (let index: number = 0; index < namen.length; index++) {
    console.log(namen[index].name);

}