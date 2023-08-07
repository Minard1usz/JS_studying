// firstName - ключ, "Denis" - значение
// кавычки используются для ключей, которые будут невалидны без кавычек (мат. операторы и т д)

const user = {
  firstName: "Denis",
  age: 30,
  isAdmin: true,
  email: 'test@test.com',
  'user-address': {
  city: "Kharkiv"
  },
  skills: ['html', 'css', 'js']
};

// как обратиться к значению:
// объявляем переменную, вызываем её и добавляем ключ через точку
// 1)
let value;
value = user.firstName;

// 2)
// через квадратные скобки + ключ в кавычках
value = user['isAdmin'];
value = user['user-address'];

// чтобы получить вложенные свойства в объекте, используем квадратные скобки + значение через точку

value = user['user-address'].city;
// либо, обязательно ключ в кавычках, иначе будет искать переменную
value = user['user-address']['city'];

// с использованием квадратных скобок можно подставлять переменные, а через точку - нельзя.
let prop = 'skills';
value = user[prop];

// если это массив, можно вызывать по индексу
value = user[prop][0];

// чтобы переписать свойства объекта, вызываем объект, затем после точки ключ и переназначаем его
user.firstName = 'Den';
value = user.firstName;

// если обратиться к свойству, которого НЕТ в это объекте, тогда в объекте будет создано новое поле и его значение
user.info = 'Some info';
value = user.info;

// если хотим перезаписать свойства вложенного объекта, нужно обратиться к объекту, квадратные скобки + ключ, точка, объект и перезаписываем значение
user['user-address'].city = 'Kyiv';

// также мы можем создать новый ключ, обращаясь к вложенному объекту
user['user-address'].country = 'Ukraine';

// если попытаться обратиться к несуществующему свойству и добавить новое свойство, тогда получим ошибку (нет существующего свойства = undefined)
// user.plan.basic = 'basic';

// но если бы там был объект (пустой, к примеру), тогда записать можно
user.plan = {};
user.plan.basic = 'basic';

console.log(user.plan);
console.log(value);
console.log(user);







//-----------------------------------------------------------------
// Udemy
// Объекты это структуры которые могут сохранять в себе абсолютно любые типы данных в формате ключ, значение
// их можно перебрать через for in
// получать свойства можем через точку или квадратные скобки
// у объекта бывают встроенные методы и свойства
// чтобы объект умел что-то делать, мы можем внутрь него записывать функции (методы нашего объекта)
// есть еще свойства акцесоры get и set


// создаеём объект
const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    console.log("Test");
  }
};

console.log(options.name)

// чтобы удалить свойство, используем delete
delete options.name;
console.log(options);

// чтобы перебрать свойства объекта, используем цикл for in (for of для объекта не работает)
for (let key in options) {
  console.log(`Свойство ${key} имеет значение ${options[key]}`);
}

// если есть вложенность, выдаст [object Object] (это не ошибка, консоль просто не может превратить этот объект в строку)
// чтобы вывести вложенный объект, необходимо сделать следующее
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      }  
    } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
  }

// у объектов нет метода length, поэтому чтобы узнать, сколько ключей есть в объекте, необходимо создать счётчик counter
let counter = 0;
for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      counter++;
      }  
    } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`);
      counter++;
    }
  }
  console.log(counter);

// либо с помощью метода Object.keys()
console.log(Object.keys(options));

// строки и массивы имеют свойство length
console.log(Object.keys(options).length);

// методы можно создавать вручную
// makeTest: function() {
//   console.log("Test");
// }
options.makeTest();


// деструктуризация объектов (можно вытаскивать отдельные переменные с наших объектов)
const {border, bg} = options.colors;
// мы вытащили свойства border и bg в отдельную переменную
console.log(border)