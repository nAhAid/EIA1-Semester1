function popup() {
    alert("der Daumen");
}
document.querySelector('#button1').addEventListener('click', popup);
function counter() {
    this.zahl = this.zahl + 1;
    document.querySelector("#result").innerHTML = result;
}
var zahl = 0;
var result = "1";
document.querySelector('#button2').addEventListener('click', counter);
//# sourceMappingURL=uebung.js.map