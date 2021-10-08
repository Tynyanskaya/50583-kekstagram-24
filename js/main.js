const getRandomNumber = function (first, second) {
  const min = Math.min(Math.abs(first), Math.abs(second));
  const max = Math.max(Math.abs(first), Math.abs(second));
  return (Math.round(Math.random() * (max - min + 1) + min));
};
getRandomNumber(3, 23);


const getLineLength = function (number, line) {
 return !(line.length >= number);
};
const phrase = 'Съешь ещё этих мягких французских булок';
console.log(getLineLength(12, phrase));

