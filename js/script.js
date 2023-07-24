// Перший варіант
let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this
    },
    down: function () {
        this.step--;
        return this

    },
    showStep: function () {
        alert(this.step);
        return this

    }
};

ladder.up().up().down().showStep();





// Другий варіант (стосується саме перевірки виклику)
// let ladder = {
//     step: 0,
//     up: function () {
//         this.step++;
//         return this
//     },
//     down: function () {
//         this.step--;
//         return this
//     },
//     showStep: function () {
//         alert(this.step);
//         return this
//     }
// };

// let result = ladder.up?.().up?.().down?.().showStep?.();

// console.log(result);