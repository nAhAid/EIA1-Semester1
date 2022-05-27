var names = ["Ben", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo",];
var names_zahl = names.length.toString();
console.log(names.length);
console.log(names_zahl);
document.querySelector('#zahl').innerHTML = 'Gesamtzahl aller Namen: ' + names_zahl;
let count = 0;
/**function printListOnlyOnce() {

    if (count == 0) {
        printList();
        count = count+1;
      
    }
    else {
        console.log(count)
    }

}*/
let alreadyPrinted = false;
function printListOnlyOnce() {
    console.log(alreadyPrinted);
    if (!alreadyPrinted) {
        printList();
        alreadyPrinted = true;
    }
}
function printList() {
    for (let index = 0; index < names.length; index++) {
        console.log(names[index]);
        document.querySelector('#liste').innerHTML += names[index] + "<br>";
    }
}
//ich möchte die liste der namen ausgeben lassen, aber nur einmal. nicht jedes mal wenn ich klicke
/**for (let index = 0; index < names.length; index++) {
    console.log(names[index])
    document.querySelector('#liste').innerHTML += names[index] + "<br>";

    counter=counter+1;
    console.log(counter);
}

}*/
document.querySelector('#buttonAufsteigend').addEventListener('click', function () {
    printList();
});
//# sourceMappingURL=script.js.map