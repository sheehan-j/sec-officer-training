"use strict"; // enable strict mode
// variable = "Dave";
// console.log(variable);

// const name = "Dave";
// name = "Joe";

const makeError = () => {
  let i = 1;
  while (i < 6) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd number!");
      }
      console.log("Even number.");
      // or throw new customError("This is a custom error!");
    } catch (err) {
      console.error(err.stack);
    } finally {
      console.log("finally");
      i++;
    }
  }
};
makeError();

function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}: ${this.message}`;
}
