let numberOne;
let numberTwo;
let numberThree;

alert('Будемо знаходить рішення квадратного рівняння виду:\nax^2 + bx + c = 0');

function numbersChecker() {
    numberOne = prompt('Введіть число "a" ');
    while (isNaN(numberOne)) {
        alert('Це не число, будь ласка, введіть число');
        numberOne = prompt('Введіть число "a"');
    } if (!isNaN(numberOne)) {
        console.log(numberOne);
    } if (numberOne === null || !numberOne) {
        alert('Жаль. Сподіваюсь ще побачитись!');
        console.log('Користувач відмовився вводити дані');
        return;
    } 


    numberTwo = prompt(`Користува ввів число "a" = ${numberOne}` + ' \nВведіть число "b" ');
    while (isNaN(numberTwo)) {
        alert('Це не число, будь ласка, введіть число');
        numberTwo = prompt('Введіть число "b"');
    } if (!isNaN(numberTwo)) {
        console.log(numberTwo);
    } if (numberTwo === null || !numberTwo) {
        alert('Жаль. Сподіваюсь ще побачитись!');
        console.log('Користувач відмовився вводити дані');
        return;
    } 

    numberThree = prompt(`Користува ввів число "a" = ${numberOne}` + `\nКористувач ввів число "b" = ${numberTwo}` + ' \nВведіть число "c" ');
    while (isNaN(numberThree)) {
        alert('Це не число, будь ласка, введіть число');
        numberThree = prompt('Введіть число "c" ');
    } if (!isNaN(numberThree)) {
        console.log(numberThree);
    } if (numberThree === null || !numberThree) {
        alert('Жаль. Сподіваюсь ще побачитись!');
        console.log('Користувач відмовився вводити дані');
        return;
    } 

    return alert(`Користува ввів число "a" = ${numberOne}` + `\nКористувач ввів число "b" = ${numberTwo}` + `\nКористувач ввів число "c" = ${numberThree}`), 
    alert(quad(a = `${numberOne}`, b = `${numberTwo}`, c = `${numberThree}`)),
    console.log(quad(a = `${numberOne}`, b = `${numberTwo}`, c = `${numberThree}`)); 
    
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

numbersChecker();
