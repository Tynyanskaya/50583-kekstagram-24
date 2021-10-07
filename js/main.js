let randomNumber = function(max, min){
  if (max<= min){
   console.log(' max не может быть меньше min');
   return ' ';
  }
  return Math.round(Math.random()* (max-min +1)+min);

};
console.log(randomNumber(3, 23));


let lineLength=function (line, number){
if (line.length >= number){
  console.log('Максимальная длина комментария не больше ' + number );
  return '';
}
return line;
};

phrase = 'Съешь ещё этих мягких французских булок';
console.log(lineLength(phrase, 12));

