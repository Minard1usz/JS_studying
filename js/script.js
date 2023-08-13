class Hamburger {
  constructor(size, stuffing, name) {
    this.name = name;
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }
  
  addTopping(topping) {
    this.toppings.push(topping);
  }
  
  calculatePrice() {
    const priceForSize = this.size.price;
    const priceForStuffing = this.stuffing.price;
    const priceForToppings = this.toppings.reduce((total, topping) => total + topping.price, 0);
    return priceForSize + priceForStuffing + priceForToppings;
  }

  calculateCalories() {
    const caloriesForSize = this.size.calories;
    const caloriesForStuffing = this.stuffing.calories;
    const caloriesForToppings = this.toppings.reduce((total, topping) => total + topping.calories, 0);
    return caloriesForSize + caloriesForStuffing + caloriesForToppings;
  }
}

class ProductItem {
  constructor(name, price, calories) {
    this.name = name;
    this.price = price;
    this.calories = calories;
  }
}

const SIZE_SMALL = new ProductItem('small', 50, 20);
const SIZE_BIG = new ProductItem('big', 100, 40);

const STUFFING_CHEESE = new ProductItem('cheese', 10, 20);
const STUFFING_LETTUCE = new ProductItem('lettuce', 20, 5);
const STUFFING_FRIES = new ProductItem('fries', 15, 10);

const TOPPING_SPICE = new ProductItem('spice', 15, 0);
const TOPPING_MAYO = new ProductItem('mayo', 20, 5);



const hamburgerCheese = new Hamburger(SIZE_SMALL, STUFFING_CHEESE, 'the Spicy Hamburger');
hamburgerCheese.addTopping(TOPPING_SPICE);
console.log(hamburgerCheese);

const hamCheeseTP = hamburgerCheese.calculatePrice();
console.log(`Total price for ${hamburgerCheese.name} is ${hamCheeseTP}`);

const hamCheeseCal = hamburgerCheese.calculateCalories();
console.log(`Total calories for ${hamburgerCheese.name} is ${hamCheeseCal}`);




const hamburgerMayo = new Hamburger(SIZE_BIG, STUFFING_FRIES, 'the Hamburger with Mayo');
hamburgerMayo.addTopping(TOPPING_MAYO);
console.log(hamburgerMayo);

const hamMayoTP = hamburgerMayo.calculatePrice(); 
console.log(`Total price for ${hamburgerMayo.name} is ${hamMayoTP}`)

const hamMayoCal = hamburgerCheese.calculateCalories();
console.log(`Total calories for ${hamburgerMayo.name} is ${hamMayoCal}`);




const hamburgerLettuce = new Hamburger(SIZE_SMALL, STUFFING_LETTUCE, 'the Hamburger with Lettuce');
hamburgerLettuce.addTopping(STUFFING_LETTUCE);
console.log(hamburgerLettuce);

const hamLettuceTP = hamburgerLettuce.calculatePrice();
console.log(`Total price for ${hamburgerLettuce.name} is ${hamLettuceTP}`);

const hamLettuceCal = hamburgerLettuce.calculateCalories();
console.log(`Total calories for ${hamburgerLettuce.name} is ${hamLettuceCal}`);


