"use strict";

// arr.pop(); метод удаления (с конца);
// arr.push(10); метод добавления (в конец);
// for; используем цикл. Цикл будет отрабатывать до тех пор, пока не закончатся элементы внутри массива;
// for of; конструкция перебора, которая работает только с массиво-подобными сущностями:
// (массив, строка, псевдомассив, map, set, определенные элементы со страницы);
// forEach; (самый часто используемый метод), позволяет гибко перебрать все элементы массива;
// 

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }

// const arr = [2, 3, 6, 8, 10];

// arr.forEach(function(item, i, arr){
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// for / for of - используем, когда нужно будет остановить цикл (break, continue) полностью, либо пропустить одно повторение
// forEach - нельзя будет остановить, так как break и continue здесь не работают

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; ")); 

const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b,) {
	return a - b;
}