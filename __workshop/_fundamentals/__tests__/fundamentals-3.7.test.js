// We import (require) the function that we want to test.
const repeat = require("../fundamentals-3.7");

// Write 3 more expect functions to test the function you just wrote.


test("Exercise 7", () => {
  expect(repeat(["foo", 3])).toBe("foofoofoo");
  // add more tests here...
  expect(repeat(["meow", 5])).toBe("meowmeowmeowmeowmeow");
  expect(repeat(["chugga chugga ", 2])).toBe("chugga chugga chugga chugga ");
  expect(repeat(["choochoo", 1])).toBe("choochoo");
  expect(repeat([2, 3])).toBe(undefined);
  expect(repeat(["ayecaramba", "3"])).toBe(undefined);
});// nothing I have put in my typeof if conditions is passing

// More info on jest expect: https://jestjs.io/docs/en/expect
