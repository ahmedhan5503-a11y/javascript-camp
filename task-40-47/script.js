// chalange array
let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// ["Osama", "Elham", "Mazero", "Ahmed"]
console.log(my.reverse().slice(--counter));

// "Elzero"
console.log(
  my[counter + true].slice(zero, counter - true) +
  my[counter + true + true].slice(counter)
);

// "rO"
console.log(
  my[counter + true + true].slice(counter) +
  my[counter - true][zero]
);
// task1 
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.splice(num)); // ["Ahmed", "Elham", "Osama"]

// Method 2
console.log(myFriends.filter((friend, index) => index < num)); // ["Ahmed", "Elham", "Osama"]

// task2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

// task3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = [arrTwo.pop(), ...arrOne.reverse(), ...arrTwo.reverse()];

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// task4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop().shift().replace(/^./, "").toUpperCase()); // ZERO
// task5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Solution 1
if (haystack.includes(needle)) {
  console.log("Found");
}

// Solution 2
if (~haystack.indexOf(needle)) {
  console.log("Found");
}

// Solution 3
if (haystack.find((item) => item === needle)) {
  console.log("Found");
}
// task6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = [...arr1, ...arr2]
  .filter((letter) => letter > "E")
  .sort()
  .join("")
  .toLowerCase();

console.log(allArrs); // fxy