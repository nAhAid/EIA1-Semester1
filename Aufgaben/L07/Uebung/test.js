var meinName = "Gabriel";
/** Text in Klammer: Argument; nur im Gültigkeitsbereich der Funktionskalmmer nutzbar */
/** Mehrere Argumente mit "," trennen */
function meineFunktion(zahl1, zahl3) {
    var zahl2 = 2;
    var ergebnis = zahl1 * zahl2 + zahl3;
}
;
meineFunktion(5, 0);
meineFunktion(8, 4);
document.querySelector("h1").addEventListener('click', function () {
    meineFunktion(12, 5);
});
var neuerInhalt = "NEUER Test";
/** Nützlich für änderung druch Click: Bild src ändern, text ändern nach Namenseingabe etc.  */
document.querySelector("h1").innerHTML = neuerInhalt;
document.querySelector(".slideshow").setAttribute;
//# sourceMappingURL=test.js.map