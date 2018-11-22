/**let animal = {
  age: 20,
  color: "black",
  run: function() {
    console.log("Running");
  }
};

//console.log(animal.age); // 20
console.log(animal.run()); // “Running”
*/

/** 
 * let animal = {
  eats: false
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;
console.log(animal.eats);
*/

/**
 * let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
let longEar = {
  earLength: 10,
  __proto__: rabbit
};
// walk is taken from the prototype chain
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)
 */

// animal has methods
/** 
 * let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};
let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// modifies rabbit.isSleeping
animal.walk();
//console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined (no such property in the prototype)

*/

/** BABY STEPS
 * Create the objects
 * then inherit from objects above the last object in the sequence
 * pockets-bed-table-head
 * then console.log the test cases.
 * Use console.time and console.timeEnd to check both object calls
 */
/*let head = {
  glasses: 1
};
let table = {
  pen: 3,
  __proto__: head
};
let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};
let pockets = {
  money: 2000,
  __proto__: bed
};
//console.log(pockets.pen);
console.log("Pocket Glasses");
console.time(pockets.glasses);
console.timeEnd(pockets.glasses);
console.log("Head Glasses");
console.time(head.glasses);
console.timeEnd(head.glasses);
//console.log(head.glasses);

*/
/*
let animal = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
console.log(rabbit.eats); // true
console.log(rabbit.name); // White Rabbit
*/

// function Rabbit() {}
// // by default:
// // Rabbit.prototype = { constructor: Rabbit }
// let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}
// console.log(rabbit.constructor == Rabbit); // true (from prototype)

/*
function Rabbit(name) {
  this.name = name;
  alert(name);
}

let rabbit = new Rabbit("White Rabbit");
let rabbit2 = new rabbit.constructor("Black Rabbit");
*/

/*
function User(name) {
  this.name = name;
}
User.prototype.sayHi = function() {
  alert(this.name);
};
let user = new User();
user.sayHi();

*/

/*
class User {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }
  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user = new User("John");
alert(user.name); // John
*/
/*
try {
  alert("try");
  //if (confirm("Make an error?")) BAD_CODE();
} catch (e) {
  console.log("catch", e);
} finally {
  console.log("finally");
}
*/

let ourTable = document.getElementById("redtable");
let tableRow = ourTable.rows.length;
for (let i = 0; i < tableRow; i++) {
  ourTable.rows[i].cells[i].style.backgroundColor = "red";
}
