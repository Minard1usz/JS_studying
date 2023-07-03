// // 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let num = 20;
let half = 0.5;
for(; num <= 30; num = num + half) {
    console.log(num);
}

// // 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let rate = 27;
let total = 10;
let sum;
for(total; total <= 100; total = total + 10) {
    sum = total / rate;
    console.log(sum.toFixed(2));
}

// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let n = prompt('Введіть ціле число');
let i = 1;
let sum3;
for(i; i <= 100; i++) {
    if(sum3 = i * i <= n) {
    console.log(i); }
}

// 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// let n = prompt('Введіть ціле число аби отримати відповідь, просте воно чи складене');

let number = parseInt(prompt('Введіть ціле число аби отримати відповідь, просте воно чи складене'));
let isPrime = true;

if (number === 1) {
    alert('1 не є ні простим, ні складеним числом')
    console.log('1 не є ні простим, ні складеним числом')
}   else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        alert(`${number} це просте число`);
        console.log(`${number} це просте число`);
    } else {
        alert(`${number} це складене число`);
        console.log(`${number} це складене число`);
    }
}

// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
let number = parseInt(prompt('Введіть число '));
let result;

while (number % 3 == 0) {
       result = number /= 3;
       console.log(result);     
    } if (result == 1) {
        console.log('possible');
    } else {
        console.log('impossible');
    }

