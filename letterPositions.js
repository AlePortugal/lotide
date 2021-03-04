const eqArrays = function (arrayOne, arrayTwo) {
  for (i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false
    }
  }
  return true
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:${actual} === ${expected}.`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed:${actual} !== ${expected}.`);
  }
};


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (! results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);

        }
    }
  }
  console.log(results);
  // logic to update results here
  return results;
};

assertEqual(letterPositions("hello").e, [1]);
// assertEqual(letterPositions("hello").o, [4]);
// assertEqual(letterPositions("hello").h, [1]);