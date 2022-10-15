// syntax for ternary operator
// condition ? ifTrue : ifFalse;

let soup = "chicken noodle soup";
let isCustomerBanned = false;
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response);

let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you."
  : soup
  ? `Yes, we have ${soup} today.`
  : "Sorry, no soup today.";
console.log(soupAccess);
