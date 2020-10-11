// We import (require) the function that we want to test.
const calculator = require("../fundamentals-3.6");

// Write 3 more expect functions to test the function you just wrote.
// nothing I have put in my typeof if conditions is passing
test("Exercise 6", () => {
  expect(calculator(["add", 10, 15])).toBe(25);
  // add more tests here...
  // expect(calculator(["div", "", 15])).toBe(undefined);
  // expect(calculator(["mul", 10, 15, 42])).toBe(undefined);
  // expect(calculator(["sub", "10", 15])).toBe(undefined);
  // expect(calculator(["mul", 10, 5])).toBe(50);
  // expect(calculator(["add", 30, 15])).toBe(45);
  // expect(calculator(["sub", 30, 15])).toBe(15);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
