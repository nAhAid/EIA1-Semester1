var names: string[] = ["Ben", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo",];

var names_zahl: string = names.length.toString();
console.log(names.length)
console.log(names_zahl)
document.querySelector('#zahl').innerHTML = 'Gesamtzahl aller Namen: ' + names_zahl;





function list() {
    var counter : number = 0;
    if (counter = 0) {
        list2();
        counter = counter+1;
      
    }
    else {
        console.log(counter)
    }

}

function list2(){
    for (let index = 0; index < names.length; index++) {
        console.log(names[index])

        document.querySelector('#liste').innerHTML += names[index] + "<br>";

        clearInterval(index)
    }
}


    /**for (let index = 0; index < names.length; index++) {
        console.log(names[index])
        document.querySelector('#liste').innerHTML += names[index] + "<br>";

        counter=counter+1;
        console.log(counter);
    }

}*/

document.querySelector('#buttonAufsteigend').addEventListener('click', function () {
    list()
});