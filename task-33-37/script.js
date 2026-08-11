// ==================== Task 1 ====================

{
  // Test Case 1
  let number = 9; // "009"

  // Test Case 2
  let num = 20; // "020"

  // Test Case 3
  let numb = 110; // "110"

  let numbe = 9;

  if (numbe < 10) {
    console.log(`00${numbe}`);
  } else if (numbe > 10 && numbe < 100) {
    console.log(`0${numbe}`);
  } else {
    console.log(numbe);
  }
}

// ==================== Task 2 ====================

{
  let num1 = 9;
  let str = "9";
  let str2 = "20";

  // Condition 1
  if (num1 === Number(str)) {
    console.log(`${num1} Is The Same Value As ${str}`);
  }

  // Condition 2
  if (num1 === Number(str) && typeof num1 !== typeof str) {
    console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
  }

  // Condition 3
  if (num1 !== Number(str2) && typeof num1 !== typeof str2) {
    console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
  }

  // Condition 4
  if (str !== str2 && typeof str === typeof str2) {
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
  }
}

// ==================== Task 3 ====================

{
  let num1 = 10;
  let num2 = 30;
  let num3 = "30";

  if (num3 > num1) {
    if (typeof num3 !== typeof num1) {
      console.log(
        `${num3} Is Larger Than ${num1} And Type ${typeof num3} Not The Same Type As ${typeof num1}`,
      );
    }

    if (num3 === String(num2) && typeof num3 !== typeof num2) {
      console.log(
        `${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type ${typeof num3} Not The Same Type As ${typeof num2}`,
      );
    }

    if (
      num3 !== num1 &&
      typeof num3 !== typeof num1 &&
      typeof num3 !== typeof num2
    ) {
      console.log(
        `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same Type As ${num2}`,
      );
    }
  }
}

// ==================== Task 4 ====================

{
  let num1 = 10;
  let num2 = 1;
  let num3 = 10;
  let num4 = 40;

  // Condition 1

  if (num1 > num2) {
    console.log("True");
  } else {
    console.log("False");
  }

  // Condition 2

  if (num1 > num2 && num1 < num4) {
    console.log("True");
  } else {
    console.log("False");
  }

  // Condition 3

  if (num1 > num2 && num1 === num3) {
    console.log("True");
  } else {
    console.log("False");
  }

  // Condition 4

  if (num1 + num2 < num4) {
    console.log("True");
  } else {
    console.log("False");
  }

  // Condition 5

  if (num1 + num3 < num4) {
    console.log("True");
  } else {
    console.log("False");
  }

  // Condition 6

  if (num1 + num2 + num3 < num4) {
    console.log("True");
  } else {
    console.log("False");
  }

  // Condition 7

  if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
  } else {
    console.log("False");
  }
}
