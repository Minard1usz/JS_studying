// 1) Знайти суму та кількість позитивних елементів.
// сума позитивних елементів
let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sumOfPositiveElements = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sumOfPositiveElements +=arr[i];
    }
}
console.log('сума позитивних елементів масиву = ' + sumOfPositiveElements);

//кількість позитивних елементів
let numberOfPositiveElements = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        numberOfPositiveElements++;
    }
}
console.log('кількість позитивних елементів масиву = ' + numberOfPositiveElements);

// 2) Знайти мінімальний елемент масиву та його порядковий номер
let minNumber = arr[0];
for (const item of arr) {
    if (item < minNumber) {
       minNumber = item;
    }
}
console.log('мінімальний елемент масиву = '+ minNumber);
console.log('порядковий номер мінімального елементу масиву = ' + arr.indexOf(minNumber));


// 3) Знайти максимальний елемент масиву та його порядковий номер.
maxNumber = arr[0];
for (const item of arr) {
    if (item > maxNumber) {
       maxNumber = item;
    }
}
console.log('максимальний елемент масиву = ' + maxNumber);
console.log('порядковий номер мінімального елементу масиву = ' + arr.indexOf(maxNumber));

// 4) Визначити кількість негативних елементів
numberOfNegativeElements = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        numberOfNegativeElements++;
    }
}
console.log('кількість негативних елементів масиву = ' + numberOfNegativeElements);

// 5) Знайти кількість непарних позитивних елементів
let numberOfOddPositiveElements = 0;
    for (i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) !== 0 && arr[i] > 0) {
            numberOfOddPositiveElements++;
        }
    }
console.log('кількість непарних позитивних елементів масиву = ' + numberOfOddPositiveElements);

// 6) Знайти кількість парних позитивних елементів
let numberOfEvenPositiveElements = 0;
    for (i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) === 0 && arr[i] > 0) {
            numberOfEvenPositiveElements++;
        }
    }
console.log('кількість парних позитивних елементів масиву = ' + numberOfEvenPositiveElements);

// 7) Знайти суму парних позитивних елементів.
let sumOfEvenPositiveElements = 0;
for (i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) === 0 && arr[i] > 0) {
        sumOfEvenPositiveElements += arr[i];
    }
}
console.log('сума парних позитивних елементів масиву = ' + sumOfEvenPositiveElements);

//  8) Знайти суму непарних позитивних елементів.
let sumOfOddPositiveElements = 0;
for (i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) !== 0 && arr[i] > 0) {
        sumOfOddPositiveElements += arr[i];
    }
}
console.log('сума непарних позитивних елементів масиву = ' + sumOfOddPositiveElements);

// 9) Знайти добуток позитивних елементів.
let multiplicationOfPositiveElements = 1;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        multiplicationOfPositiveElements = multiplicationOfPositiveElements * arr[i];
    }
}
console.log('добуток позитивних елементів масиву елементів масиву = ' + multiplicationOfPositiveElements);

// 10) Знайти найбільший серед елементів масиву, решту обнулити.
maxNumber = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
    }
}
let res = arr.map(val => maxNumber !== val ? 0 : val);
console.log(res);