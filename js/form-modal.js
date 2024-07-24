import { isValid } from './form-validate.js';
import { isEscapeKey } from './utils.js';
import { resetScale } from './scale.js';
import {
  reset as resetEffect
} from './effects-img.js';

const imgUploadform = document.querySelector('.img-upload__form');
const redactForm = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');
const fieldComments = document.querySelector('.text__description');
const fieldHashtag = document.querySelector('.text__hashtags');

const openRedactForm = () => {
  redactForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeRedactForm = () => {
  resetScale();
  resetEffect();
  redactForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgUploadInput.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
};

imgUploadInput.addEventListener('change', () => {
  openRedactForm();
});

imgUploadCancelButton.addEventListener('click', () => {
  closeRedactForm();
});

function onDocumentKeydown(evt) {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeRedactForm();
  }
}

fieldComments.addEventListener('.keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

fieldHashtag.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

imgUploadform.addEventListener('submit', (evt) => {
  if(!isValid()){
    evt.preventDefault();
  }
});
