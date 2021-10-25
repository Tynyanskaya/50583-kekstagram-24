import {getRandomNumber, getRandomElement} from './Random.js';
import {getComments} from './Comments.js';

const DESCRIPTIONS = ['№1','№2', '№3', '№4', '№5', '№6', '№7', '№8', '№9', '№10', '№11', '№12', '№13', '№14', '№15', '№16', '№17', '№18',
  '№19', '№20', '№21', '№22', '№23', '№24', '№25'];

const MAX_PHOTO = 25;
const COMMENT_NUM = 3;
const likesCount = {
  MIN: 15,
  MAX: 200,
};

const getPhotoUrl = function(id) {
  return `photos/${ id }.jpg`;
};

const getPhoto = function (id) {
  return {
    id: id,
    url: getPhotoUrl(id),
    description: getRandomElement(DESCRIPTIONS),
    likes: getRandomNumber(likesCount.MIN, likesCount.MAX),
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
getPhotos(MAX_PHOTO);
