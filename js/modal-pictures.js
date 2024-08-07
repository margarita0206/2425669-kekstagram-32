import { isEscapeKey } from './utils.js';

const bigPicturesModal = document.querySelector('.big-picture');
const body = document.querySelector('body');
const closeBigPicturesButton = bigPicturesModal.querySelector('.big-picture__cancel');

const loadCommentsButton = bigPicturesModal.querySelector('.comments-loader');
const commentTotalCount = bigPicturesModal.querySelector('.social__comment-total-count');
const commentShowCount = bigPicturesModal.querySelector('.social__comment-shown-count');
const commentsList = bigPicturesModal.querySelector('.social__comments');
const commentTemplate = bigPicturesModal.querySelector('.social__comment');

const localComment = [];
let renderedCommentsCount = 0;
let total = 0;

const renderLoader = () => {
  if (renderedCommentsCount < total) {
    loadCommentsButton.classList.remove('hidden');
  } else {
    loadCommentsButton.classList.add('hidden');
  }
};

const renderStatistic = () => {
  commentShowCount.textContent = renderedCommentsCount;
  commentTotalCount.textContent = total;
};

const renderComments = () => {
  const commentFragment = document.createDocumentFragment();
  localComment.splice(0, 5).forEach((item) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = item.avatar;
    commentElement.querySelector('.social__picture').alt = item.name;
    commentElement.querySelector('.social__text').textContent = item.message;
    commentFragment.append(commentElement);

    renderedCommentsCount++;
  });
  commentsList.append(commentFragment);
  renderLoader();
  renderStatistic();
};

const fillDataBigPicture = ({ url, likes, comments, description}) => {
  bigPicturesModal.querySelector('.big-picture__img img').src = url;
  bigPicturesModal.querySelector('.likes-count').textContent = likes;
  bigPicturesModal.querySelector('.social__caption').textContent = description;

  localComment.length = 0;
  localComment.push(...comments.slice());
  commentsList.innerHTML = '';
  renderedCommentsCount = 0;
  total = comments.length;

  renderComments();
};

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    bigPicturesModal.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const openBigPictureWindow = (photo) => {
  bigPicturesModal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  fillDataBigPicture(photo);
};

const closeBigPictureWindow = () => {
  bigPicturesModal.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

closeBigPicturesButton.addEventListener('click', () => {
  closeBigPictureWindow();
});

loadCommentsButton.addEventListener('click', renderComments);

export { openBigPictureWindow };
