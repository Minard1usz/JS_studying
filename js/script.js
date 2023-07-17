

let myArray = ["Taylor Swift", "The Weekend", "Billie Eilish", "Rihanna", "Ariana Grande", "Bruno Mars", "Dua Lipa", "Ed Sheeran", "Lady Gaga", "Beyonce", "Miley Cyrus"];

function removeElement (array, element) {
    array = myArray;
    element = myArray.splice(element, 1);
    console.log(myArray);
}

removeElement(myArray, 1);

// Пример аргументов функции
// function calcSum(numOne, numTwo) {
//     console.log(`Первая переменная : ${numOne}`);
//     console.log(`Вторая переменная : ${numTwo}`);
// }

// calcSum(1, 2);