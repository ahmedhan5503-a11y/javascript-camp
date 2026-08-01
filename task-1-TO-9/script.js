// document.querySelector("h1").style.color = "red";

// task2

document.write(`
<h1 style="
    color: blue;
    font-size: 80px;
    font-weight: bold;
    text-align: center;
    font-family: Arial;
">
    ElZERO
</h1>
`);
// TASK 2
console.log(
  "%cElzero %cWeb %cSchool",
  "color: red; font-size: 40px;",
  "color: green; font-size: 40px; font-weight: bold;",
  "color: blue; font-size: 40px;",
);

// TASK3
console.group("Group 1");
console.log("Message One");
console.log("Message Two");

console.group("Child Group");
console.log("Message One");
console.log("Message Two");

console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");

console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group 2");
console.log("Message One");
console.log("Message Two");
// TASK4
console.table(["fatma", "Ahmed", "ola", "khedr", "boda", "hatem"]);
// task5
// console.log("Iam In Console");
document.write(`
  <span style="color:red;font-size:100px">Iam </span>
  <span style="color:green; font-weight:bold; font-size:100px">In </span>
  <span style="color:blue;font-size:100px">Page</span>
`);
// task6