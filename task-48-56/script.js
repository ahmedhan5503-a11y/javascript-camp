// chalenge or loop
/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];

let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

// Get number of admins before Stop
let adminsCount = 0;

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }

  adminsCount++;
}

document.write(`<div>We Have ${adminsCount} Admins</div>`);
document.write(`<hr>`);

// Print admins and their employees
for (let i = 0; i < adminsCount; i++) {
  document.write(`<div>`);

  document.write(`<p>The Admin For Team ${i + 1} Is ${myAdmins[i]}</p>`);

  document.write(`<h3>Team Members:</h3>`);

  let coun = 1;

  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0]) {
      document.write(`<p>- ${coun} ${myEmployees[j]}</p>`);

      coun++;
    }
  }

  document.write(`</div>`);
  document.write(`<hr>`);
}

// ==================== Task 1 ====================

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) {
    continue;
  }

  console.log(i);
}

// ==================== Task 2 ====================

let start2 = 10;
let end2 = 0;
let stop = 3;

for (let i = start2; i >= stop; i--) {
  console.log(i < start2 ? `0${i}` : i);
}

// ==================== Task 3 ====================

let start3 = 1;
let end3 = 6;
let breaker = 2;

for (let i = start3; i <= end3; i++) {
  console.log(i);

  for (let j = breaker; j <= end3; j += breaker) {
    console.log(`-- ${j}`);
  }
}

// ==================== Task 4 ====================

let inde = 10;
let jump = 2;

for (;;) {
  if (inde < jump) {
    break;
  }

  console.log(inde);
  inde -= jump;
}

// ==================== Task 5 ====================

let friend = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];

let letter = "a";

let counr = start;

for (let i = start; i < friend.length; i++) {
  if (friend[i].toLowerCase().startsWith(letter)) {
    continue;
  }

  counr++;
  console.log(`${counr - start} => ${friend[i]}`);
}

// ==================== Task 6 ====================

let start6 = 0;
let swappedName = "elZerO";

let result = "";

for (let i = start6; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    result += swappedName[i].toLowerCase();
  } else {
    result += swappedName[i].toUpperCase();
  }
}

console.log(result);

// ==================== Task 7 ====================

let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start7; i < mix.length; i++) {
  if (typeof mix[i] === typeof start7 && mix[i] > start7) {
    console.log(mix[i]);
  }
}
// Task 7

let frien = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let ind = 0;
let count = 0;

while (ind < frien.length) {
  if (typeof frien[ind] === "string" && !frien[ind].startsWith("A")) {
    count++;
    console.log(`${count} => ${frien[ind]}`);
  }

  ind++;
}
