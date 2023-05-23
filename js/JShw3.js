//данные с числами
const numbersData = [18, 10, 5, 29, 21, 56, 49, 31];
numbersData.sort(compareNum);
function compareNum(a, b) {
	return a-b;
}
numbersData.splice(2, 3);
console.log(numbersData);





// //строковые данные
// const stringData = ["Kate", "Alex", "Masha", "Daniel", "Tania", "Jeremy", "Nika", "Conor"];
// stringData.sort();
// stringData.splice(2, 3);
// console.log(stringData);


