// Exercise 6
//
// Part 1 - Write
// ---------------
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub", return their difference.
//      - "mul", return their product.
//      - "div", return the quotient of the two numbers.
//      - Anything else return undefined.
// - If the two values are not numbers, return undefined

// For example:
// calculator(["add", 10, 20]); // 30

//keeps failing and I can't figure out why
function calculator(arr) {
  // Your code here
  let calculation = arr[0];
  let value1 = arr[1];
  let value2 = arr[2];

  if (typeof value1 !== "number" || typeof value2 !== "nnumber") {
    return undefined;
  }

  switch (calculation) {
    case "add":
      return value1 + value2;
      break;
    case "sub":
      return value1 - value2;
      break;
    case "mul":
      return value1 * value2;
      break;
    case "div":
      return value1 / value2;
      break;
    default:
      return undefined;
  } // nothing I have put in my typeof if condition is passing
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = calculator;
