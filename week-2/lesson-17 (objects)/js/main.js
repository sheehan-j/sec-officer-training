//Objects - key-value pairs in curly braces
// const myObj = { name: "Dave" };
// console.log(myObj.name);

// const myObj2 = {
//   alive: true,
//   answer: 42,
//   hobbies: ["Eat", "Sleep", "Code"],
//   beverage: {
//     morning: "Coffee",
//     afternoon: "Iced Tea",
//   },
//   action: function () {
//     return `Time for ${this.beverage.morning}`;
//   },
// };

// console.log(myObj2["alive"]);
// console.log(myObj2["beverage"]);
// console.log(myObj2.beverage.afternoon);
// console.log(myObj2.action());

// const vehicle = {
//   wheels: 4,
//   engine: function () {
//     return "Vroom";
//   },
// };

// const truck = Object.create(vehicle);
// truck.doors = 2;
// console.log(truck);
// console.log(truck.wheels); // Inheritance
// console.log(truck.engine());

// const car = Object.create(vehicle);
// car.doors = 4;
// car.engine = function () {
//   return "Whoosh";
// };
// console.log(car.engine());

// const tesla = Object.create(car);
// console.log(tesla.wheels);
// tesla.engine = function () {
//   return "Shhhh...";
// };
// console.log(tesla.engine());

const band = {
  value1: "1",
  value2: "2",
  value3: "3",
  value4: "4",
};

delete band.value1;
console.log(band.hasOwnProperty("value1"));
console.log(Object.keys(band));
console.log(Object.values(band));

for (let value in band) {
  console.log(`In ${value}, is ${band[value]}`);
}

// destructuring
const { value2: myVariable, value3: myVariable2 } = band;
// destructures into variables with the exact same name
const { value2, value3, value4 } = band;
console.log(myVariable);
console.log(myVariable2);
console.log(value2);
console.log(value3);
console.log(value4);

// Takes in the entire object as an argument
function sings({ value2 }) {
  return `Value is ${value2}`;
}
console.log(sings(band));
