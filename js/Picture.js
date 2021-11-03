import {getPhotos} from './Photo.js';

const conteiner = document.createDocumentFragment();
const pictureTemplate = document.querySelector('#picture').content;
const newItemPicture = pictureTemplate.querySelector('.picture');
const picturesBlock = document.querySelector('.pictures');

const picturePhotos = getPhotos();
const renderPhoto = function(picPh){
  const pictureElement = newItemPicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picPh.url;
  pictureElement.querySelector('.picture__comments').textContent = picPh.comments;
  pictureElement.querySelector('.picture__likes').textContent = picPh.likes;
  return pictureElement;
};

const renderPhotos = function( block, elements){
  elements.forEach ( () => {
    conteiner.appendChild(renderPhoto(elements));
  } );
  block.appendChild(conteiner);
};

renderPhotos(picturesBlock, picturePhotos);
