import { openBigPictureWindow } from './modal-pictures.js';
import { isEnterKey } from './utils.js';

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const generateThumbnails = (pictures) => {
  picturesContainer.querySelectorAll('.picture').forEach((element) => element.remove());

  const similarListFragment = document.createDocumentFragment();

  pictures.forEach(({ id, url, description, likes, comments }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').dataset.id = id;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    similarListFragment.appendChild(pictureElement);

    pictureElement.addEventListener('click', () => {
      openBigPictureWindow({ url, description, likes, comments });
    });

    pictureElement.addEventListener('keydown', (evt) => {
      if (isEnterKey(evt)) {
        openBigPictureWindow({ url, description, likes, comments });
      }
    });

    picturesContainer.append(similarListFragment);
    pictureElement.classList.remove('hidden');
  });
};

export { generateThumbnails };
