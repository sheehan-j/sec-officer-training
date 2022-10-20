// How Node differs from Vanilla JS
// 1. Node runs on a server - not in a browser; backend rather than frontend
// 2. Console is the terminal window, not DevTools
// 3. Global object instead of window object
// 4. Has common core modules (relates to OS, file system, and other things done on the server)
//      These are imported with CommonJS modules instead of ES6 modules (require statement)
// 5. Missing some JS APIs like fetch, but we can always import other packages to replace them

// console.log("Hello, World!");
// console.log(global);

const os = require("os");
const path = require("path");
// const math = require("./math"); // Alternative for importing entire file
const { add, subtract, multiply, divide } = require("./math");

console.log(math.add(2, 3));
console.log(math.subtract(2, 3));
console.log(math.multiply(2, 3));
console.log(math.divide(2, 3));

/*
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename)); // Gets an object with all the previous values (root, dir, base, ext, name)
*/
