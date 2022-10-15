// var x = 1; // var does not throw an error
// var x = 2; // if you redefine an error like this

// let x = 1;
// let x = 2; // let fixes this issue

//global scope
var x = 1;
let y = 2;
const z = 3;

// local scope
{
  let y = 4;
  console.log(y);
}

// local scope
function myFunc() {
  const z = 5;
}
