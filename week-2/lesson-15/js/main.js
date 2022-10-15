// const myArray = [];

// myArray[0] = "Jordan";
// myArray[1] = 1001;
// myArray[2] = false;

// // access ***********************
// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[myArray.length - 1]);

// // pushing to array ***********************
// myArray.push("array");
// console.log(myArray);
// const lastItem = myArray.pop();
// console.log(lastItem);
// console.log(myArray);

// // adding to beginning ***********************
// const newLength = myArray.unshift(42);
// console.log(newLength);
// console.log(myArray);

// delete ***********************
// delete myArray[1]; // Removes the data from the position, but doesn't remove the position
// console.log(myArray);

// splice with no deletion ***********************
// myArray.splice(1, 0, 42); // Don't replace anything, just add the one element before the index 1
// console.log(myArray);

// splice with replacement ***********************
// myArray.splice(1, 1, 42); // Replace one element at index 1 with 42
// console.log(myArray);

// splice with deleting 2 elements ***********************
// myArray.splice(1, 2); // remove two element from the array at the first index
// console.log(myArray);

const myArray = ["A", "B", "C", "D", "E", "F"];

// reverse ***********************
// console.log(newArray.reverse());

// join ***********************
const newString = myArray.join();
const newArrayA = newString.split(",");

// contact *****************
const arrayA = ["A", "B", "C"];
const arrayB = ["D", "E", "F"];

const newArrayB = arrayA.concat(arrayB);
console.log(newArrayB);

// spread operator *****************
// rather than creating an array of 2 arrays, spread the values of the arrays out into the newArray
const newArrayC = [...arrayA, ...arrayB];
console.log(newArrayC);
const newArrayD = [arrayA, arrayB]; // This is two nested arrays, rather than 6 values
console.log(newArrayD);
