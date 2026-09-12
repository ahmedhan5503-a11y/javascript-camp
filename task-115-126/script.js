// ==================== TASK 1 ====================

let myNumbers = [1, 2, 3, 4, 5];

let A = myNumbers[4];
let E = myNumbers[0];

console.log(A * E); // 5

// ==================== TASK 2 ====================

let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

let [skillA, skillB, skillC, [skillD, skillE, [skillF, skillG]]] = mySkills;

console.log(
  `My Skills: ${skillA}, ${skillB}, ${skillC}, ${skillD}, ${skillE}, ${skillF}, ${skillG}`,
);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// ==================== TASK 3 ====================

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Prepare Arrays

let friends = [arr3[1], arr3[2], arr1[0]];

// Destructuring Assignment

let [friendA, friendB, friendC] = friends;

console.log(`My Best Friends: ${friendA}, ${friendB}, ${friendC}`);

// My Best Friends: Shady, Mahmoud, Ahmed

// ==================== TASK 4 ====================

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Destructuring Assignment

const {
  age: memberAge,
  working: memberWorking,
  country: memberCountry,
  hobbies: [h1, , h3],
} = member;

console.log(
  `My Age Is ${memberAge} And Iam ${memberWorking ? "" : "Not"} Working`,
);

console.log(`I Live in ${memberCountry}`);

console.log(`My Hobbies: ${h1} And ${h3}`);

// My Age Is 30 And Iam Not Working
// I Live in Egypt
// My Hobbies: Reading And Programming

// ==================== TASK 5 ====================

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Destructuring Game

const {
  title: gameTitle,
  developer: gameDeveloper,
  releases: {
    "Oath In Felghana": [USA, Japan],
    "Ark Of Napishtim": { US: usaPrice, JAP: japanPrice },
    Origin: originPrice,
  },
} = game;

let oath = "Oath In Felghana";
let ark = "Ark Of Napishtim";

console.log(`My Favourite Games Style Is ${gameTitle} Style`);

console.log(`And I Love ${gameDeveloper} Games`);

console.log(`My Best Release Is ${oath} It Released in ${USA} & ${Japan}`);

console.log(`Although I Love ${ark}`);

console.log(`${ark} Price in USA Is ${usaPrice}`);

console.log(`${ark} Price in Japan Is ${japanPrice}`);

console.log(`Origin Price Is ${originPrice}`);

// ==================== TASK 6 ====================

let chosen = 1;

let myFriends = [
  {
    title: "Osama",
    age: 39,
    available: true,
    skills: ["HTML", "CSS"],
  },

  {
    title: "Ahmed",
    age: 25,
    available: false,
    skills: ["Python", "Django"],
  },

  {
    title: "Sayed",
    age: 33,
    available: true,
    skills: ["PHP", "Laravel"],
  },
];

// Get The Chosen Friend

let [friend] = myFriends.slice(chosen - 1, chosen);

// Destructuring Object

let {
  title: friendTitle,
  age: friendAge,
  available: friendAvailable,
  skills: [, lastSkill],
} = friend;

console.log(friendTitle);
console.log(friendAge);
console.log(friendAvailable ? "Available" : "Not Available");
console.log(lastSkill);
