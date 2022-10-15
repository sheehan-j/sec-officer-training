const myObj = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON); // JSON does not send functions
console.log(typeof sendJSON);
console.log(sendJSON.name); // cannot access, it is a string now

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON); // back to object, but function is lost
