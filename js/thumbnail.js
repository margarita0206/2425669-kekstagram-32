import { openBigPictureWindow } from './modal-pictures.js';

const thumbNailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const localPictures = [];

const createThumbnail = ({id, url, description, likes, comments}) => {
  const thumbnail = thumbNailTemplate.cloneNode(true);
  thumbnail.dataset.id = id;
  const pictureImage = thumbnail.querySelector('.picture__img');
  pictureImage.src = url;
  pictureImage.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  return thumbnail;
};

const generateThumbnails = (pictures) => {
  localPictures.length = 0;
  localPictures.push(...pictures.slice());
  const pictureFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    pictureFragment.append(thumbnail);
  });

  container.append(pictureFragment);
};

container.addEventListener('click', (evt) => {
  if(evt.target.closest('.picture')) {
    const currentId = Number(evt.target.closest('.picture').dataset.id);
    const currentPicture = localPictures.find(({id}) => id === currentId);
    openBigPictureWindow(currentPicture);
  }
});

export { generateThumbnails, container };
