import { isValid, resetValidation } from './form-validate.js';
import { isEscapeKey } from './utils.js';
import { resetScale } from './scale.js';
import {
  reset as resetEffect
} from './effects-img.js';
import { loadingPicture } from './load-pictures.js';

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SUBMITTING: 'Отправляю'
};

const body = document.querySelector('body');
const imgUploadForm = document.querySelector('.img-upload__form');
const redactForm = document.querySelector('.img-upload__overlay');
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadCancelButton = document.querySelector('.img-upload__cancel');
const fieldComments = document.querySelector('.text__description');
const fieldHashtag = document.querySelector('.text__hashtags');
const submitButton = imgUploadForm.querySelector('.img-upload__submit');

const openRedactForm = () => {
  redactForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  loadingPicture();
};

const closeRedactForm = () => {
  resetScale();
  resetEffect();
  redactForm.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadInput.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
  resetValidation();
  imgUploadForm.reset();
};

const toggleSubmitButton = (isDisabled) => {
  submitButton.disabled = isDisabled;
  submitButton.textContent = isDisabled
    ? SubmitButtonText.SUBMITTING
    : SubmitButtonText.IDLE;
};

imgUploadInput.addEventListener('change', () => {
  openRedactForm();

});

imgUploadCancelButton.addEventListener('click', () => {
  closeRedactForm();
});

const isErrorMessageShown = () => Boolean(document.querySelector('.error'));

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt) && !isErrorMessageShown()) {
    evt.preventDefault();
    closeRedactForm();
  }
}

fieldComments.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

fieldHashtag.addEventListener('keydown', (evt) => {
  if(isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

const setOnFormSubmit = (callback) => {
  imgUploadForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    if (isValid()) {
      toggleSubmitButton(true);
      await callback(new FormData(imgUploadForm));
      toggleSubmitButton();
    }
  });
};

export { setOnFormSubmit, closeRedactForm };
