const getNthElement = (index, array) => {
  while (index >= array.length) {
    index -= array.length;
  }
  return array[index];
};

const arrayToCSVString = array => array.toString();

const csvStringToArray = string => string.split(",");

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => array.concat(element);

const removeNthElement = (n, array) => array.splice(n, 1);

const numbersToStrings = numbers => numbers.map(String);

const uppercaseWordsInArray = strings =>
  strings.map(strings => strings.toUpperCase());

const reverseWordsInArray = strings =>
  strings.map(strings =>
    strings
      .split("")
      .reverse()
      .join("")
  );

const onlyEven = numbers => numbers.filter(number => number % 2 === 0);

const removeNthElement2 = (index, array) => {
  const toDelete = index;
  const answer = array.filter((element, index) => index !== toDelete);
  return answer;
};

const elementsStartingWithAVowel = strings =>
  strings.filter(strings => /^[aeiou]/gi.test(strings));

const removeSpaces = string => string.replace(/\s/g, "");

const sumNumbers = numbers =>
  numbers.reduce((a, b) => {
    return a + b;
  }, 0);

const sortByLastLetter = strings =>
  strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
