// window.alert(window.location); // do not have to type "window"
// alert(location); // it is implied

const myArray = ["eat", "sleep", "code"];
const myObj = {
  name: "Jordan",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

// sessionStorage.setItem("mySessionStore", myObj);
// const mySessionData = sessionStorage.getItem("mySessionStore");
// console.log(mySessionData);

// sessionStorage.setItem("mySessionStore", myArray);
// const mySessionData = sessionStorage.getItem("mySessionStore");
// console.log(typeof mySessionData);

// *** Use JSON to store and retrieve an object
// sessionStorage.setItem("mySessionStore", JSON.stringify(myObj));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// console.log(mySessionData);

// *** Use JSON to store and retrieve an array
// localStorage.setItem("myLocalStore", JSON.stringify(myArray));
// const mySessionData = JSON.parse(localStorage.getItem("myLocalStore"));
// console.log(mySessionData);
// localStorage.removeItem("myLocalStore");

// *** Keys
localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const key = localStorage.key(0);
const len = localStorage.length; // *** This could include storage from other websites
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(key);
console.log(len);
