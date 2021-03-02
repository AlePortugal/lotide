// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:${actual} === ${expected}.`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed:${actual} !== ${expected}.`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("orange","orange");
assertEqual("apples","bananas");
assertEqual(572, 572);
assertEqual(45, 13);

