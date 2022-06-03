let x = 0;
let inputs = [
    {
        input: "Hier To-Do's hinzufügen :)"
    }
];
console.log(inputs);
function addList() {
    let inputValue = document.getElementById("input").value;
    /**inputs.push(
         { input: "TEST" }
     ); */
    inputs[x + 1] = { input: inputValue };
    x++;
    document.getElementById("gesamt").innerHTML = inputs.length.toString();
    console.log(inputs);
}
function removeList() {
    inputs.splice(x, 1);
    console.log(inputs);
    x--;
    document.getElementById("gesamt").innerHTML = inputs.length.toString();
}
;
document.querySelector("#test").addEventListener("click", () => { addList(); });
document.querySelector("#gesamt").addEventListener("click", () => { removeList(); });
//# sourceMappingURL=script.js.map