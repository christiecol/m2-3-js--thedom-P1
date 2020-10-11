// We import (require) the function that we want to test.
const reverseIt = require("../fundamentals-3.8");

// Write 3 more expect functions to test the function you just wrote.
//This one gives me a super error related to jest so I just made sure it worked in the console
test("Exercise 8", () => {
  expect(reverseIt("abcdefgh")).toBe("hgfedcba");
  // add more tests here...
  expect(reverseIt("meow meow meow!")).toBe("!weom weom weom");
  expect(reverseIt("hiphopapotamus")).toBe("sumatopapohpih");
  expect(reverseIt("3, 7, 8")).toBe("8 ,7 ,3");
});

// More info on jest expect: https://jestjs.io/docs/en/expect
