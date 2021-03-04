const assertEqual = function(actual, expected) {
    if (actual === expected) {
    console.log(`✅✅✅Assertion Passed:${actual} === ${expected}.`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed:${actual} !== ${expected}.`);
  }
};



const countLetters = function (str){
  let obj = {}
  for(const letter of str){
    console.log("letter:", letter, "str:", str);
     if (obj[letter]){
       obj[letter]++;
     } else {
       obj[letter] = 1
     }
  }
    return obj
};

console.log(countLetters("aabc"));