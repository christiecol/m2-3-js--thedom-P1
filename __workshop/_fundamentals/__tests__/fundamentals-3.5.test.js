// We import (require) the function that we want to test.
const getLetterAtIndex = require("../fundamentals-3.5");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 5", () => {
  expect(getLetterAtIndex("bacon", 2)).toBe("c");
  // add more tests here...
  expect(getLetterAtIndex("wibbly wobbly timey wimey... stuff", 13)).toBe(
    undefined
  );
  expect(
    getLetterAtIndex("reverse the !polarity of the neutron flow", 12)
  ).toBe("!");
  expect(getLetterAtIndex([6, 5, 8], 1)).toBe(undefined);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
