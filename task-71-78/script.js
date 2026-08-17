// ============chalange for map==================

let myStrin = "1,2,3,EE,1,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myStrin
  .split(",")
  .filter((element) => isNaN(element) && element !== "EE" && element !== "Z")
  .map((element) => (element === "_" ? " " : element))
  .reduce((acc, current) => acc + current);

console.log(solution); // Elzero Web School

// ==================== Task 1 ====================

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let resul = mix
  .map(function (element) {
    return typeof element === "string" ? element : "";
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(resul); // Elzero

// ==================== Task 2 ====================

let myString = "EElllzzzzzzzeroo";

let resu = [...myString]
  .filter(function (element, index) {
    return myString.indexOf(element) === index;
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(resu); // Elzero

// ==================== Task 3 ====================

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = myArray
  .reduce(function (acc, current) {
    return acc.concat(current);
  }, [])
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(result); // Elzero

// ==================== Task 4 ====================

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let res = numsAndStrings
  .filter(function (element) {
    return typeof element === "number";
  })
  .map(function (element) {
    return -element;
  });

console.log(res); // [-1, -10, 10, 20, -5, -3]

// ==================== Task 5 ====================

let nums = [2, 12, 11, 5, 10, 1, 99];

let re = nums.reduce(function (acc, current) {
  if (current % 2 === 0) {
    return acc * current;
  } else {
    return acc + current;
  }
}, 1);

console.log(re); // 500
