import {getPhotos} from './Photo.js';
import {MAX_PHOTO} from './Photo.js';

const newItemPicture = document.querySelector('#picture').content.querySelector('.picture');
const picturesBlock = document.querySelector('.pictures');
const picturePhotos = getPhotos(MAX_PHOTO);

const renderPhoto = function(element){
  const pictureElement = newItemPicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = element.url;
  pictureElement.querySelector('.picture__comments').textContent = element.comments;
  pictureElement.querySelector('.picture__likes').textContent = element.likes;
  return pictureElement;
};

const renderPhotos = function( block, elements) {
  const conteiner = document.createDocumentFragment();
  elements.forEach ( (element)  => {
    conteiner.appendChild(renderPhoto(element));
  });
  block.appendChild(conteiner);
};

renderPhotos(picturesBlock, picturePhotos);
