const myName = "Jordan";

console.log(myName.charAt(Math.floor(Math.random() * myName.length)));

let soup = "chicken noodle soup";
let reply;
let isBanned = false;
let crackers = true;

if (isBanned) {
    reply = "No soup";
} else if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = `Sorry, we're out of ${soup}`;
}
console.log(reply);