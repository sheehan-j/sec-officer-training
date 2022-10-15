// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(2, 6));

// function getUserNameFromEmail(email) {
//   return email.slice(0, email.indexOf("@"));
// }

// console.log(getUserNameFromEmail("jordansheehan26@gmail.com"));

// *** Anonymous function
// const getUserNameFromEmail = function (email) {
//   return email.slice(0, email.indexOf("@"));
// }

// *** Arrow functions
// const getUserNameFromEmail = (email) => {
//   return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNameFromEmail("jordansheehan26@gmail.com"));

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("jOrDaN"));
