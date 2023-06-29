// // 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
let num = 10;
while (num <= 20) {
    document.write(num + ', ');     
    num++;
}
document.write('<br>')
document.write('<br>')

// // або
// for(let number = 10; number <= 20; number = number + 1)
// console.log(number);

// // 2. Вивести квадрати чисел від 10 до 20.
let num2 = 10;

for (; num2 <= 20; num2++) {
    if (num2) {
        console.log(num2**2);
    }
}

// //3. Вивести таблицю множення на 7
let num3 = 1;
let multiplier = 7;
for(; num3 <= 10; num3++) {
    if (num3) {
        console.log(num3*multiplier);
    }
}

// //4. Знайти суму всіх цілих чисел від 1 до 15.
let sum4 = 0;
for(let num4 = 0; num4 <= 15; num4++) {
    sum4 = sum4 + num4;
}
console.log(sum4);

// //5. Знайти добуток усіх цілих чисел від 15 до 35.
let mult5 = 1;
for(let num5 = 15; num5 <= 35; num5++) {
    mult5 = mult5*num5;
}
console.log(mult5);

// //6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let sum6 = 0;
let divider6 = 2;
let result6;

for(let num6 = 1; num6 <= 500; num6++) {
    sum6 = sum6 + num6;
    result6 = sum6 / divider6
}
console.log(result6);

// //7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
let num7 = 30;
let sum7 = 0;

for(; num7 <= 80; num7 = num7 + 2) {
    sum7 = sum7 + num7;
}
console.log(sum7);

// //8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let num8 = 100;

for(; num8 <= 200; num8++) {
    if (num8 % 3 === 0) {
        console.log(num8);
    }
}

//9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let n = +prompt('Введіть натуральне число');

for (i = 1; i <= n; i++) {
    if (n % i == 0) {
        alert(`Дільники вашого числа це: ${i}`);
        console.log(i);
        document.write(i + ', ');
    }
}

//10. Визначити кількість його парних дільників.
let n = +prompt('Введіть натуральне число');
let divisorsNumber = 0;

for (i = 0; i <= n; i = i + 2) {
    if (n % i == 0) {
        alert(`Парні дільники вашого числа це: ${i}`);
        console.log(i);
    } 
}

//11. Знайти суму його парних дільників.
let n = +prompt('Введіть натуральне число');
let sum11 = 0;

for (i = 0; i <= n; i = i + 2) {
    if (n % i == 0) {
        alert(`Парні дільники вашого числа це: ${i}`);
        console.log(i);
        sum11 = sum11 + i;
    }
}
console.log(sum11);

//12. Надрукувати повну таблицю множення від 1 до 10.
for (i = 1; i <= 10; i = i + 1) {
    for (j = 1; j <= 10; j = j + 1) {
        number = i * j;
        document.write(' ' + number + ' ')
    }
    document.write('<br>')
}