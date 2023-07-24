function sum(result) {
    result = 0;
    return function (elem) {
        result += elem;
        console.log(result);
    }
}


let outcome = sum();

outcome(3);
outcome(5);
outcome(20);
