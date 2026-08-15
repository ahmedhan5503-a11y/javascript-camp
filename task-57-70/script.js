// chalange 1
function showDetails(a, b, c) {
  let name;
  let age;
  let status;

  if (typeof a === "string") {
    name = a;
  } else if (typeof a === "number") {
    age = a;
  } else {
    status = a;
  }

  if (typeof b === "string") {
    name = b;
  } else if (typeof b === "number") {
    age = b;
  } else {
    status = b;
  }

  if (typeof c === "string") {
    name = c;
  } else if (typeof c === "number") {
    age = c;
  } else {
    status = c;
  }

  console.log(
    `Hello ${name}, Your Age Is ${age}, You Are ${
      status ? "Available" : "Not Available"
    } For Hire`,
  );
}

showDetails("Osama", 38, true);
showDetails(38, "Osama", true);
showDetails(true, 38, "Osama");
showDetails(false, "Osama", 38);

// chalange 2 arrow funcation

let names = function (...args) {
  return `String [${args.join("], [")}] => Done!`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// arrow funcation
let nam = (...args) => {
  return `String [${args.join("], [")}] => Done!`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// ===============chalange 2-2==========
// Arrow Function
let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) =>
  one + two + nums.reduce((sum, num) => sum + num, 0);

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80

// Regular Function
let myNumber = [20, 50, 10, 60];

function calcRegular(one, two, ...nums) {
  return one + two + nums.reduce((sum, num) => sum + num, 0);
}

console.log(calcRegular(10, myNumber[0], myNumber[1])); // 80

// ==================== Task 01 ====================

function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // Hello Mr Osama
sayHello("Eman", "Female"); // Hello Miss Eman
sayHello("Sameh"); // Hello Sameh

// ==================== Task 02 ====================

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
    return;
  }

  if (operation === "add" || operation === undefined) {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// ==================== Task 03 ====================
// Age Challenge - Using Array

function ageInTime(theAge) {
  let timeUnits = [
    theAge * 12,
    theAge * 52,
    theAge * 365,
    theAge * 365 * 24,
    theAge * 365 * 24 * 60,
    theAge * 365 * 24 * 60 * 60,
  ];

  let units = ["Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"];

  if (theAge > 10 && theAge < 100) {
    for (let i = 0; i < timeUnits.length; i++) {
      console.log(`${timeUnits[i]} ${units[i]}`);
    }
  } else {
    console.log("Age Out Of Range");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range

ageInTime(38);
// 456 Months
// 1976 Weeks
// 13870 Days
// 332880 Hours
// 19972800 Minutes
// 1198368000 Seconds

// ==================== Task 04 ====================
// Challenge

function checkStatus(a, b, c) {
  let data = [a, b, c];

  let name;
  let age;
  let status;

  for (let value of data) {
    if (typeof value === "string") {
      name = value;
    } else if (typeof value === "number") {
      age = value;
    } else if (typeof value === "boolean") {
      status = value;
    }
  }

  console.log(
    `Hello ${name}, Your Age Is ${age}, You Are ${
      status ? "Available" : "Not Available"
    } For Hire`,
  );
}

// Test
checkStatus("Osama", 38, true);
// Hello Osama, Your Age Is 38, You Are Available For Hire

checkStatus(38, "Osama", true);
// Hello Osama, Your Age Is 38, You Are Available For Hire

checkStatus(true, 38, "Osama");
// Hello Osama, Your Age Is 38, You Are Available For Hire

checkStatus(false, "Osama", 38);
// Hello Osama, Your Age Is 38, You Are Not Available For Hire

// Needed Output
checkStatus("Osama", 38, true);
checkStatus(38, "Osama", true);
checkStatus(true, 38, "Osama");
checkStatus(false, "Osama", 38);

// ==================== Task 05 ====================

function createSelectBox(startYear, endYear) {
  document.write("<select>");

  for (let year = startYear; year <= endYear; year++) {
    document.write(`<option value="${year}">${year}</option>`);
  }

  document.write("</select>");
}

createSelectBox(2000, 2021);

// ==================== Task 06 ====================

function multiply(...numbers) {
  let result = 1;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue;
    }

    result *= Math.trunc(numbers[i]);
  }

  console.log(result);
}

// Needed Output
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
// ==================== Task 7 ====================

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let name = zName.split(" ");
    return `${name[0]} ${name[1].charAt(0).toUpperCase()}.`;
  }

  function ageWithMessage(zAge) {
    let age = parseInt(zAge);
    return `Your Age Is ${age}`;
  }

  function countryTwoLetters(zCountry) {
    let country = zCountry.slice(0, 2).toUpperCase();
    return `You Live In ${country}`;
  }

  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }

  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// ==================== Task 8 ====================

// Function One

let itsMe = () => {
  return `Iam A Normal Function`;
};

console.log(itsMe());
// Iam A Normal Function

// Function Two

let urlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};

console.log(urlCreate("https", "elzero", "org"));
// https://www.elzero.org

// ==================== Task 9 ====================
// Currying Function

let checker = (zName) => {
  return (status) => {
    return (salary) => {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
};

console.log(checker("Osama")("Available")(4000));
// Osama, My Salary Is 4000

console.log(checker("Ahmed")("Not Available")());
// Iam Not Avaialble

// ==================== Task 10 ====================

function specialMix(...data) {
  let result = 0;
  let hasNumber = false;

  for (let value of data) {
    if (typeof value === "number") {
      result += value;
      hasNumber = true;
    } else if (typeof value === "string") {
      let number = parseInt(value);

      if (!isNaN(number)) {
        result += number;
        hasNumber = true;
      }
    }
  }

  if (!hasNumber) {
    console.log("All Is Strings");
  } else {
    console.log(result);
  }
}

// Test Cases

console.log(specialMix(10, 20, 30));
// 60

console.log(specialMix("10Test", "Testing", "20Cool"));
// 30

console.log(specialMix("Testing", "10Testing", "40Cool"));
// 50

console.log(specialMix("Test", "Cool", "Test"));
// All Is Strings
