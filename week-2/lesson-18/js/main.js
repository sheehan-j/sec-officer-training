// class Pizza {
//   constructor(pizzaType, pizzaSize) {
//     this.size = pizzaSize;
//     this.crust = "original";
//     this.type = pizzaType;
//     this.toppings = [];
//   }
//   get pizzaCrust() {
//     return this.crust;
//   }
//   // Alternative to get keyword
//   getCrust() {
//     return this.crust;
//   }
//   set pizzaCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
//   setToppings(topping) {
//     this.toppings.push(topping);
//   }
//   getToppings() {
//     return this.toppings;
//   }
//   bake() {
//     console.log(`Baking a ${this.size} ${this.type} ${this.crust} pizza.`);
//   }
// }

// const myPizza = new Pizza("pepperoni", "small");
// myPizza.pizzaCrust = "thin";
// myPizza.setCrust("thinner");
// myPizza.setToppings("sausage");
// myPizza.setToppings("olives");
// myPizza.bake();
// console.log(myPizza.getToppings());

// *** Factory Function
// Uses scope so that the variables are contained within the function
// cannot be accessed outside
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`),
  };
}

const myPizza = pizzaFactory("small");
myPizza.bake();

// Class Inheritance, public and private fields
class Pizza {
  crust = "original";
  #sauce = "traditional";
  #size; // declare this as private first before constructing
  constructor(pizzaSize) {
    // **** underscore shows that these are intended to be private
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  serve() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`
    );
  }
}

const myPizza2 = new Pizza("large");
myPizza2.serve();
console.log(myPizza2.crust); // this works
console.log(myPizza2.size); // this doesnt work

// class SpecialityPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize); // calling constructor for superclass
//     this.type = "The Works";
//   }
//   slice() {
//     // this.size is from the parent class
//     console.log(`Our ${this.type} ${this.size} pizza. has 8 slices.`);
//   }
// }

// const mySpeciality = new SpecialityPizza("medium");
// mySpeciality.slice();
