const NAMES = ['Артём', 'Катя', 'Вася', 'Марина', 'Алина', 'Света'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = ['№1','№2', '№3', '№4', '№5', '№6', '№7', '№8', '№9', '№10', '№11', '№12', '№13', '№14', '№15', '№16', '№17', '№18',
  '№19', '№20', '№21', '№22', '№23', '№24', '№25'];

// eslint-disable-next-line no-unused-vars
const MAX_PHOTO = 25;
const MAX_AVATAR = 6;
const COMMENT_NUM = 3;
const Likes = {
  MIN: 15,
  MAX: 200,
};

const getRandomNumber = function (first, second) {
  const min = Math.min(Math.abs(first), Math.abs(second));
  const max = Math.max(Math.abs(first), Math.abs(second));
  return (Math.floor(Math.random() * (max - min + 1) + min));
};

const getRandomElement = function (array) {
  const element = array[getRandomNumber(1, array.length)];
  return element;
};

const getPhotoUrl = function(id) {
  return `photos/${ id }.jpg`;
};

const getAvatar = function(i) {
  return `img/avatar-${  getRandomNumber(1, i)  }.svg`;
};

const getRandomComment = function() {
  return {
    id: Math.round(Math.random()*100),
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

const getPhoto = function (id) {
  return {
    id: id,
    url: getPhotoUrl(id),
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomNumber(Likes.MIN, Likes.MAX),
    comments: getComments(COMMENT_NUM),
  };
};

const getPhotos = function (count) {
  const photos = [];
  for (let i = 0; i < count; i++) {
    const id = i + 1;
    const photo = getPhoto(id);
    photos[i] = photo;
  }
  return photos;
};
getPhotos();

