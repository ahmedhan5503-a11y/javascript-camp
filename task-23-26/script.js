// =======================
// task1
// ====================
console.log(10 ** 5); // 100000

console.log(10000 * 10); // 100000

console.log(1000 * 100); // 100000

console.log(50000 + 50000); // 100000

console.log(200000 / 2); // 100000

console.log(100000.0); // 100000

console.log(1e5); // 100000

console.log(100_00 * 10); // 100000

console.log(Number("100000")); // 100000

console.log(parseInt("100000")); // 100000
// ==================
// task 2
// ==================
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
// ==================
// task 3
// ==================
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16
// ==================
// task 4
// ==================
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100

console.log(parseFloat(myVar).toFixed(2) * 1); // 100.57
// ==================
// task 5
// ==================
let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

// ==================
// task 6
// ==================
let flt = 10.4;

console.log(Math.floor(flt)); // 10

console.log(Math.trunc(flt)); // 10

console.log(Math.round(flt)); // 10

console.log(parseInt(flt)); // 10

console.log(flt.toFixed()); // 10
// ==================
// task 7
// ==================
console.log(Math.floor(Math.random() * 5));