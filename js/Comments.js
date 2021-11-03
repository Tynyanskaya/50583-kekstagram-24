import {getRandomNumber, getRandomElement} from './Random.js';

const NAMES = ['Артём', 'Катя', 'Вася', 'Марина', 'Алина', 'Света'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MAX_AVATAR = 6;

const getAvatar = function(max) {
  return `img/avatar-${  getRandomNumber(1, max)  }.svg`;
};

const getRandomComment = function() {
  return {
    id: getRandomNumber(1, 500),
    avatar: getAvatar(MAX_AVATAR),
    message: getRandomElement(MESSAGES),
    name: getRandomElement(NAMES),
  };
};

const getComments = function (count) {
  const comments = [];
  for (let i = 0; i < count; i++){
    const id = i + 1;
    comments[i] = getRandomComment(id);
  }
  return comments;
};
export {getComments};
