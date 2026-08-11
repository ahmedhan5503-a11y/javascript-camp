// Task1
console.log(100 == "100"); // true

console.log(100 < 1000); // true

console.log(110 > 100 && 10 < 20); // true

console.log(-10 == "-10"); // true

console.log(!-50 == !+"-40"); // true

console.log(!10 == !"-40"); // true

console.log(+"10" == 10); // true

console.log(!20 == false); // true

//  TASK 2

let num1 = 10;
let num2 = 20;

// Solution One
console.log(typeof num1 === typeof num2); // true

// Solution Two
console.log(num2 - num1 >= num1); // true

// Solution Three
console.log(!!(num1 + num2)); // true

// Solution Four
console.log(num1 < num2); // true

// Solution Five
console.log(num2 > num1); // true

// Solution Six
console.log(num1 !== num2); // true

// Task 3
let a = 20;
let b = 30;
let c = 10;

// Solution One
console.log((a < b && a > c) || a < b); // true

// Solution Two
console.log(a < b && a > c); // true

// Solution Three
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
