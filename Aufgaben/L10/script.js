let inputs = [
    {
        input: "Hier To-Do's hinzufügen :)"
    }
];
console.log(inputs);
function addList() {
    inputs.push({ input: "TEST" });
    console.log(inputs);
}
document.querySelector("#test").addEventListener("click", () => { addList(); });
//# sourceMappingURL=script.js.map