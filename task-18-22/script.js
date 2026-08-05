// ====================
// Task 1
// ====================
console.log(10 + ((20 * 15) % 3) * 190 - (10 % 400)); // 0

// ====================
// Task 2
// ====================
{
  let num = 3;

  // One
  console.log(num + num); // 6

  // Two
  console.log(num * (true + true)); // 6

  // Three
  console.log(num / (true / (true + true))); // 6

  // Four
  console.log(num << true); // 6

  // Five
  console.log(++num + (true + true)); // 6
  num--;

  // Six
  console.log(num + true + true + true); // 6
}

// ====================
// Task 3

{
  let num = "10";

  // Solution One
  console.log(+num + +num); // 20

  // Solution Two
  console.log(Number(num) + Number(num)); // 20

  // Solution Three
  console.log(parseInt(num) * true + parseInt(num)); // 20

  // Solution Four
  console.log(num * (true + true)); // 20

  // Solution Five
  console.log(num - -num); // 20
}

// ====================
// Task 4
// ====================
{
  let points = 10;

  points += 3;

  console.log(points); // 13

  points -= 5;

  console.log(points); // 8
}