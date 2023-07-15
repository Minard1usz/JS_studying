//Homework 10: Arrays
/* Створити масив, довжину та елементи якого задає користувач.
Відсортувати масив за зростанням.
Видалити елементи з масиву з 2 по 4 (включно!). */


//строкові дані
let promptFootballers = prompt("Enter the names of at least 5 your favorite footballers").split(" ");
let arrData = [];
arrData.push(promptFootballers);

if (promptFootballers) {
    alert(`Your favorite footballers are ${arrData}`);
    promptFootballers.sort();
} else {
    alert(`Sorry to bother you :(`)
}


console.log(`Your favorite footballers are ${arrData}`)
promptFootballers.splice(1,3);

realHeroes = confirm("Do you want to know who are the real heroes of our time?");
if (realHeroes) {
    alert(`Here they are - ` + `${arrData}`)
} else { 
    alert(`Sorry to bother you :(`)
}

console.log('Result is ' + arrData);
