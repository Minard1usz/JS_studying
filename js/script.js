let number1 = /380\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/;
let number2 = /\+380\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/;
let number3 = /380\-\d{2}\-\d{3}\-\d{2}\-\d{2}$/;
let number4 = /\+380\-\d{2}\-\d{3}\-\d{2}\-\d{2}$/;

function validateData() {
    let inputData = prompt('Enter your mobile starting with +380 / 380');
    if (number1.test(inputData) || number2.test(inputData) || number3.test(inputData) || number4.test(inputData)) {
        let res = inputData.replace(/\D/g, '')
        res = res.replace(/^38/, '');
        console.log(`your number is ${res}`);
    }   
    else if (!number1.test(inputData) || !number2.test(inputData) || !number3.test(inputData) || !number4.test(inputData)) {
        console.log(null);
    }
    return inputData;   
}

validateData();
