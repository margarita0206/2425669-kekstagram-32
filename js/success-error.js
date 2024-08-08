import { isEscapeKey } from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successFragment = document.createDocumentFragment();
const errorFragment = document.createDocumentFragment();

const body = document.querySelector('body');

const onEscapeSuccessKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    document.querySelector('.success').remove();
    document.removeEventListener('keydown', onEscapeSuccessKeydown);
  }
};

const showMessageSuccess = () => {
  const messageSuccess = successTemplate.cloneNode(true);
  successFragment.appendChild(messageSuccess);
  body.appendChild(successFragment);
  const buttonSuccess = document.querySelector('.success__button');
  const sectionSuccess = document.querySelector('.success');
  document.addEventListener('keydown', onEscapeSuccessKeydown);
  sectionSuccess.addEventListener(('click'), (evt) => {
    if (evt.target === buttonSuccess || evt.target.classList.contains('success')) {
      sectionSuccess.remove();
      document.removeEventListener('keydown', onEscapeSuccessKeydown);
    }
  });
};

const onEscapeErrorKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    document.querySelector('.error').remove();
    document.removeEventListener('keydown', onEscapeErrorKeydown);
  }
};

const showMessageError = () => {
  const messageError = errorTemplate.cloneNode(true);
  errorFragment.appendChild(messageError);
  body.appendChild(errorFragment);
  const buttonError = document.querySelector('.error__button');
  const sectionError = document.querySelector('.error');
  document.addEventListener('keydown', onEscapeErrorKeydown);
  sectionError.addEventListener(('click'), (evt) => {
    if (evt.target === buttonError || evt.target.classList.contains('error')) {
      sectionError.remove();
      document.removeEventListener('keydown', onEscapeErrorKeydown);
    }
  });
};

export {showMessageSuccess, showMessageError};

