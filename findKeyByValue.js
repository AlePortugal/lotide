// FUNCTION IMPLEMENTATION

const eqArrays = function (arrayOne, arrayTwo) {
  for (i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false
    }
  }
  return true
}

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function (object, value) {
  const keys = Object.keys(object)
  for (key of keys) {
    if (object[key] === value) {
      return key;
    }
  }

}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
