// ==================== TASK 1 ====================

let setOfNumber = new Set([10]);

setOfNumber.add(20).add(setOfNumber.size);

console.log(setOfNumber);

console.log([...setOfNumber][2]);

// Output:
// Set(3) {10, 20, 2}
// 2

// ==================== TASK 2 ====================

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log([...new Set(myFriends)].sort());

// Output:
// ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// ==================== TASK 3 ====================

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myMap = new Map(Object.entries(myInfo));

console.log(myMap);

console.log(myMap.size);

console.log(myMap.has("role"));

// Output:
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

// ==================== TASK 4 ====================

let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""));

// Output:
// 123

// ==================== TASK 5 ====================

let theName = "Elzero";

// [1]
console.log(theName.split(""));

// [2]
console.log(Array.from(theName));

// [3]
console.log([...theName]);

// [4]
let emptyArrays = [];

for (let i = 0; i < theName.length; i++) {
  emptyArrays.push(theName[i]);
}

console.log(emptyArrays);

// [5]
console.log([...new Set(theName)]);

// [6]
console.log(Object.assign([], theName));

// Output:
// ['E', 'l', 'z', 'e', 'r', 'o']
// ==================== TASK 1 ====================

let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);

console.log([...setOfNumbers][2]);

// Output:
// Set(3) {10, 20, 2}
// 2

// ==================== TASK 2 ====================

let myFriend = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log([...new Set(myFriend)].sort());

// Output:
// ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

// ==================== TASK 3 ====================

let myInfos = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myMaps = new Map(Object.entries(myInfos));

console.log(myMaps);

console.log(myMaps.size);

console.log(myMaps.has("role"));

// Output:
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

// ==================== TASK 4 ====================

let theNumbers = 100020003000;

console.log(+[...new Set(theNumbers.toString())].sort().slice(true).join(""));

// Output:
// 123

// ==================== TASK 5 ====================

let theNames = "Elzero";

// [1]
console.log(theNames.split(""));

// [2]
console.log(Array.from(theNames));

// [3]
console.log([...theNames]);

// [4]
let emptyArray = [];

for (let i = 0; i < theNames.length; i++) {
  emptyArray.push(theNames[i]);
}

console.log(emptyArray);

// [5]
console.log([...new Set(theName)]);

// [6]
console.log(Object.assign([], theNames));

// Output:
// ['E', 'l', 'z', 'e', 'r', 'o']
// ==================== TASK 7 ====================

let numsOnes = [1, 2, 3];
let numsTwos = [4, 5, 6];

// ==================== TASK 7 ====================

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// [1] Spread Operator

console.log([...numsOne, ...numsTwo]);

// [2] concat()

console.log(numsOne.concat(numsTwo));

// [3] Spread + concat()

console.log([...[].concat(numsOne), ...[].concat(numsTwo)]);

// Output:
// [1, 2, 3, 4, 5, 6]

// ==================== TASK 8 ====================

let n1 = [10, 30, 10, 20];

let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...n2));

// Output:
// 210
