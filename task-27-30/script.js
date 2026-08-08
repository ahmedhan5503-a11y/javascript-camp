// ==================== Task 01 ====================

let userName = "Elzero";

// Solution One: charAt()
console.log(userName.charAt(0).toLowerCase()); // e

// Solution Two: []
console.log(userName[0].toLowerCase()); // e

// Solution Three: substring()
console.log(userName.substring(0, 1).toLowerCase()); // e

// Solution Four: slice()
console.log(userName.slice(0, 1).toLowerCase()); // e

// Solution Five: substr()
console.log(userName.substr(0, 1).toLowerCase()); // e

// Solution Six: repeat()
console.log(userName[0].toLowerCase().repeat(3)); // eee


// ==================== Task 02 ====================

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

// Check if Z exists inside the word
console.log(word.toLowerCase().includes(letterZ)); // true

// Check if the word starts with E
console.log(word.startsWith("E")); // true

// Check if the word ends with O
console.log(word.toLowerCase().endsWith(letterO.toLowerCase())); // true