const getRandomNumber = function (a, b){
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  return Math.round(Math.random() * (max - min + 1) + min);
};
getRandomNumber(3, 23);


const getLineLength=function (line, number){
return line.length >= number ? false : true;
};
let phrase = 'Съешь ещё этих мягких французских булок';
getLineLength(phrase, 12);

