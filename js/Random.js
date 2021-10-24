export const getRandomNumber = function (first, second) {
  const min = Math.min(Math.abs(first), Math.abs(second));
  const max = Math.max(Math.abs(first), Math.abs(second));
  return (Math.floor(Math.random() * (max - min + 1) + min));
};

export const getRandomElement = function (array) {
  const element = array[getRandomNumber(1, array.length)];
  return element;
};
