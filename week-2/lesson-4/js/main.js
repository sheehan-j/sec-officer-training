const myNumber = 42;
const myFloat = 42.016213;
const myString = "42";

console.log(myFloat);

console.log(myNumber === myString);

console.log(myNumber === Number(myString));

console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(Number.parseInt(myFloat)));
console.log(Number.isInteger(Number.parseFloat(myNumber)));

console.log(myFloat.toFixed(2))
console.log(typeof myFloat.toString());