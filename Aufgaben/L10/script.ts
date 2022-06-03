interface Eingabe {
    input: string;
}

let x: number = 0;

let inputs: Eingabe[] = [

    {
        input: "Hier To-Do's hinzufügen :)"
    }
];

console.log(inputs);

function addList(): void {
    let inputValue = (<HTMLInputElement>document.getElementById("input")).value;

   /**inputs.push(
        { input: "TEST" }
    ); */ 
    inputs[x + 1] = { input: inputValue};
    x++;
    document.getElementById("gesamt").innerHTML = inputs.length.toString();
    console.log(inputs);
}

function removeList(): void {
  
    inputs.splice(x, 1);
    console.log(inputs);
    x--;
    document.getElementById("gesamt").innerHTML = inputs.length.toString();
};



document.querySelector("#test").addEventListener("click", () => { addList(); });
document.querySelector("#gesamt").addEventListener("click", () => { removeList(); });
