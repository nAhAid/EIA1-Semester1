interface Eingabe {
    input: string;
    isDone: boolean;
}

let inputs: Eingabe[] = [

];

console.log(inputs);

function addList(): void {
    let inputValue: string = (<HTMLInputElement>document.getElementById("input")).value;

    /**inputs.push(
         { input: "TEST" }
     ); */
    inputs.push({ input: inputValue, isDone: false });
    counter();
    console.log(inputs);
    writeList();

}

function removeList(toDoIndex: string): void {
    inputs.splice(parseInt(toDoIndex), 1);
    writeList();
    counter();

}

function clickList(toDoIndex: string): void {

    inputs[parseInt(toDoIndex)].isDone = !inputs[parseInt(toDoIndex)].isDone;
    writeList();
}


// "\" vor Anführungszeichen für sog. escaping um zu verhindern, dass er raus "springt". Macht man mit option + shift + 7
function writeList(): void {
    document.querySelector("#liste").innerHTML = "";

    inputs.forEach((value, index) => {
        let classes: string = value.isDone ? "done" : "open";
        document.querySelector("#liste").innerHTML += "<li onclick=\"clickList(" + index + ")\" class=\"" + classes + "\">" + value.input + " <img onclick =\"removeList(" + index + ")\" class=\"trash\" src=\"assets/trash.png\"></li>";

    });

}

function counter(): void {
    document.getElementById("gesamt").innerHTML = inputs.length.toString();
}





