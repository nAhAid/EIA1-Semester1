interface Eingabe {
    input: string;
}

let inputs: Eingabe[] = [

    {
        input: "Hier To-Do's hinzufügen :)"
    }
];

console.log(inputs);

function addList(): void {
    inputs.push(
        { input: "TEST" }
    );
    console.log(inputs);
}



document.querySelector("#test").addEventListener("click", () => { addList(); });
