

alert('Будемо знаходить рішення квадратного рівняння виду:\nax^2 + bx + c = 0');
    

function promptUserForNumber() {

    while (isNaN(numberOne)) {
        alert('Це не число, будь ласка, введіть число');
        numberOne = prompt('Введіть число "a"'); 
    }   
    while (isNaN(numberTwo)) {
        alert('Це не число, будь ласка, введіть число');
        numberTwo = prompt(`Користувач ввів число "a" = ${numberOne}` + ' \nВведіть число "b" ');
    } 
    while (isNaN(numberThree)) {
        alert('Це не число, будь ласка, введіть число');
        numberThree = prompt(`Користувач ввів число "a" = ${numberOne}` + `\nКористувач ввів число "b" = ${numberTwo}` + ' \nВведіть число "c" ');
    } 
    if (!isNaN(numberOne)) {
        console.log(numberOne, numberTwo, numberThree);
    } 

    return alert(`Користува ввів число "a" = ${numberOne}` + `\nКористувач ввів число "b" = ${numberTwo}` + `\nКористувач ввів число "c" = ${numberThree}`), 
    alert(quad(a = `${numberOne}`, b = `${numberTwo}`, c = `${numberThree}`)),
    console.log(quad(a = `${numberOne}`, b = `${numberTwo}`, c = `${numberThree}`)); 
}

function checkForNull() {

    numberOne = prompt('Введіть число "a" ');
    if (numberOne === null || !numberOne) {
        alert('Жаль. Сподіваюсь ще побачитись!');
        console.log('Користувач відмовився вводити дані');
        return numberOne;
    } 
    numberTwo = prompt(`Користувач ввів число "a" = ${numberOne}` + ' \nВведіть число "b" ');
    if (numberTwo === null || !numberTwo) {
        alert('Жаль. Сподіваюсь ще побачитись!');
        console.log('Користувач відмовився вводити дані');
        return numberTwo;
    } 
    numberThree = prompt(`Користувач ввів число "a" = ${numberOne}` + `\nКористувач ввів число "b" = ${numberTwo}` + ' \nВведіть число "c" ');
    if (numberThree === null || !numberThree) {
        alert('Жаль. Сподіваюсь ще побачитись!');
        console.log('Користувач відмовився вводити дані');
        return numberThree;
    } 
}


function quad(a, b, c) {
    if(a == 0) return "a = 0. Рівняння не має рішень";
    const D = b * b - 4 * a * c;
    let x1, x2;
    if(D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        return "Коефіцієнти: a = "+a+", b = "+b+", c = "+c+" \nКорені рівняння: X1 = " + x1 + ", X2 = " + x2 + "\nДискримінант(D) = " + D;
    } else if (D == 0) {
        x1 = -b / (2*a);
        return "D = 0. Єдиний корень рівняння: " + x1 + "";
    } else if (D < 0) {
        return "D < 0. Рівняння не має рішень";
    } return;
} 


promptUserForNumber(checkForNull());

