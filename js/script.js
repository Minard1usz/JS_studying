class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(`Ім'я: ${this.name}`, `Вік: ${this.age}`)
  } 
}

class Car {
  brand;
  model;
  releaseYear;
  numberPlate;
  constructor(brand, model, releaseYear, numberPlate) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
    this.numberPlate = numberPlate;
  }
  assignOwner(owner) {
    if (owner.age >= 18) {
      return this.owner = owner;
    } else if (owner.age < 18) {
      return console.log(`Власнику ${owner.name} ще немає 18 років`);
    }
  }

  carInfo() {
  console.log(`Марка авто: ${this.brand}, Модель авто: ${this.model}, Рік випуску авто: ${this.releaseYear}, Реєстраційний номер: ${this.numberPlate}`);  
  if (this.owner) {
    console.log('Інформація про власника:');
    return this.owner.sayName();
  } else {
    console.log('Це авто ще не має власника.');
  }

  }

}

let person1 = new Person('Alex', 30);
console.log(person1);

let person2 = new Person('Maria', 25);
console.log(person2);

let person3 = new Person('Kirill', 16);
console.log(person3);

let person4 = new Person('Maria', 15);
console.log(person4);


let carOne = new Car('Daewoo', 'Lanos', 2006, 'AE2006DC');
console.log(carOne);

let carTwo = new Car('Mazda', '6', 2010, 'AA2010DC');
console.log(carTwo);

let carThree = new Car('Seat', 'Ibiza', 2012, 'AC2012DC');
console.log(carThree);

let carFour = new Car('Renault', 'Logan', 2018, 'BC2018KA');
console.log(carFour);

carOne.assignOwner(person1);
carTwo.assignOwner(person2);
carThree.assignOwner(person3);
carFour.assignOwner(person4);

carOne.carInfo();
carTwo.carInfo();
carThree.carInfo();
carFour.carInfo();