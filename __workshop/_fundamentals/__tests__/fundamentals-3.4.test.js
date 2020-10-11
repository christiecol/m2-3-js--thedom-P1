// We import (require) the function that we want to test.
const sum = require("../fundamentals-3.4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(sum([3, 4, 5])).toBe(12);
  // add more tests here...
  expect(sum([3, 4, 5])).toBe(12);
  expect(sum([10, 40, 30, 50])).toBe(130);
  expect(sum(["never gonna let you down"])).toBe(undefined);
  expect(sum(["boots and [2, 3] cats"])).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
