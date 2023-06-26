const answers = [];
answers[0] = prompt("What's your date of birth?", "");
if (answers[0]) {
	alert(`Your date of birth is ${answers[0]}`);
}	else {
	alert(`It's a pitty that you didn't want to indicate your date of birth :(`);
	}
	
answers[1] = prompt("Where do you live?", "");
if (answers[1] == "Kyiv") {
	alert(`You live in a capital city ${answers[1]}`);
}	else if (answers[1] == "London") {
	alert(`You live in a capital city ${answers[1]}`);
} 	else if (answers[1] == "Washington") {
	alert(`You live in a capital city ${answers[1]}`);
} 	else if (answers[1]) {
	alert(`You live in ${answers[1]}`);
} 	else {
	alert(`It's a pitty that you didn't want to indicate your city :(`);
}

answers[2] = prompt("What's your favorite type of sport?", "");
	if (answers[2] == `Boxing`) {
	alert(`Awesome! Do you want to become another Oleksandrovych Usyk?`);
} 	else if (answers[2] == `Racing`) {
	alert(`Awesome! Do you wan to become another Lewis Hamilton?`);
} 	else if (answers[2] == "Football") {
	alert(`Awesome! Do you want to become another Lionel Messi?`);
} 	else if (answers[2]) {
	alert(`Very good choice!`)
}	else {
	alert(`It's a pitty that you didn't want to indicate your favorite type of sport :(`);
}

console.log(answers);