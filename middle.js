// FUNCTION IMPLEMENTATION

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

const middle = function(array) {
  let middleindex = Math.floor(array.length/2)
  let newArray = [];
  if(array.length <= 2){
    return [];
  } else if(array.length%2 !== 0){
    return [array[middleindex]];
  } else {
    newArray = [array[middleindex-1],array[middleindex]];
   
   return newArray;
    }
  };

  const result= eqArrays(middle([23,45,57]),[1, 2, 3, 4, 5]);// => [2]
  assertEqual(result, false);
  const result2 = eqArrays(middle ([]),[]);

// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([11, 12, 70, 114, 15, 16])); // => [3, 4]

