function popup() {
    alert("der Daumen");
}
document.querySelector('#button1').addEventListener('click', popup);
function counter3() {
    document.querySelector('#result');
    zahl = zahl + 1;
    document.querySelector("#result").innerHTML = String(zahl);
}
var zahl = 0;
var result = "1";
document.querySelector('#button2').addEventListener('click', counter3);
//# sourceMappingURL=uebung.js.map