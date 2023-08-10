class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  sayName() {
    console.log(`Ім'я: ${this.name}`, `Стать: ${this.gender}`)
  }
}

class Apartment {
  residents = [];
  addResidents(resi) {
    this.residents.push(resi);
    return 
  }
}


const maxNumberOfFlats = 4;
class Building {
  flats = [];
  constructor(maxNumberOfFlats) {
    this.maxNumberOfFlats = maxNumberOfFlats;
  }
  addApartment(flat) {
    if (this.flats.length < maxNumberOfFlats) {
      this.flats.push(flat);
    } else {
      console.log('Вибачте, але всі квартири в цьому будинку вже куплені');
    }
    return;
  }
}

let person1 = new Person('Kate Smith', 'female');
console.log(person1);

let person2 = new Person('Daria Lavrinenko', 'female');
console.log(person2);

let person3 = new Person('David Bay', 'male');
console.log(person3);

let person4 = new Person('Alex McGale', 'male');
console.log(person4);

let person5 = new Person('Kirill Valerianov', 'male');
console.log(person5);



let apartment1 = new Apartment();
console.log(apartment1);

let apartment2 = new Apartment();
console.log(apartment2);

let apartment3 = new Apartment();
console.log(apartment3);

let apartment4 = new Apartment();
console.log(apartment4);

let apartment5 = new Apartment();
console.log(apartment5);

apartment1.addResidents(person1);
apartment2.addResidents(person2);
apartment3.addResidents(person3);
apartment4.addResidents(person4);
apartment5.addResidents(person5);



let building1 = new Building();
console.log(building1);

building1.addApartment(apartment1);
building1.addApartment(apartment2);
building1.addApartment(apartment3);
building1.addApartment(apartment4);
building1.addApartment(apartment5);