//данные с числами
let numbersData = [18, 10, 5, 29, 21, 56, 49, 31];
numbersData.sort(compareNum);
function compareNum(a, b) {
	return a-b;
}
sortedData = confirm("Do you want to see the data in ascending order?", "");
if (sortedData) {
	alert(numbersData);
} else {
	alert(`It's a pitty you didn't want to check the data of our company :(`);
}

numbersData.splice(2, 3);

changedData = confirm("And how about changed data?");
if (changedData) {
	alert(numbersData);
} else {
	alert(`So why did you come here? :D`)
}
console.log(numbersData);



// //строковые данные
const stringData = ["Kate", "Alex", "Masha", "Daniel", "Tania", "Jeremy", "Nika", "Conor"];
stringData.sort();

sortedString = confirm("Let's take a look at a string option of data?");
if (sortedString) {
	alert(stringData);
} else {
	alert("Aren't you interested even in this option?")
}

stringData.splice(2, 3);


changedString = confirm("And the last is a changed string option, ready to check?");
if (changedString) {
	alert(stringData);
} else {
	alert("Goodbye then :(")
}
console.log(stringData);


