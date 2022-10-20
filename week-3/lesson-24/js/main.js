// Modules
/* import playGuitar from "./guitars.js";
import { shredding as shred, plucking as pluck } from "./guitars.js";

console.log(playGuitar());
console.log(shred());
console.log(pluck()); */

import * as Guitars from "./guitars.js";
import User from "./user.js";

console.log(Guitars.default()); // Must refer to playGuitar() as default because that's how it was exported
// a good alternative may be to not have a default
console.log(Guitars.shredding());
console.log(Guitars.plucking());

const me = new User("jordansheehan26@gmail.com", "Jordan");
console.log(me);
console.log(me.greeting());
