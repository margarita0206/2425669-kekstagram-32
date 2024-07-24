import {
  HASHTAG_CHECK,
  SPACE,
  MAX_HASHTAG,
  MAX_MESSAGE_LENGTH
} from './constant.js';

import {
  init as initEffect
} from './effects-img.js';

const imgUploadform = document.querySelector('.img-upload__form');
const fieldComments = imgUploadform.querySelector('.text__description');
const fieldHashtag = imgUploadform.querySelector('.text__hashtags');

const pristine = new Pristine(imgUploadform, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const normalizeHashtage = (value) => !value.length ? [] : fieldHashtag.value.toLowerCase().replaceAll(SPACE, ' ').trim().split(' ');

const validateFormatHashtag = (value) => {
  const hashes = normalizeHashtage(value);
  return hashes.every((hashtag) => HASHTAG_CHECK.test(hashtag));
};

const checkUnique = (value) => {
  const hashes = normalizeHashtage(value);
  const uniques = [...new Set(hashes)];
  return hashes.length === uniques.length;
};

const checkCount = (value) => {
  const hashes = normalizeHashtage(value);
  return hashes.length <= MAX_HASHTAG;
};

pristine.addValidator(
  fieldHashtag,
  validateFormatHashtag,
  'Неверный формат',
  1,
  true
);

pristine.addValidator(
  fieldHashtag,
  checkUnique,
  'Хэштег должен быть уникальным!',
  2,
  true
);

pristine.addValidator(
  fieldHashtag,
  checkCount,
  'Допустимое количество хэштегов - 5',
  3,
  true
);

const validateComment = () => fieldComments.value.length <= MAX_MESSAGE_LENGTH;

pristine.addValidator(
  fieldComments,
  validateComment,
  `Длина комментария не может превышать ${MAX_MESSAGE_LENGTH} символов`
);

const isValid = () => pristine.validate();
initEffect();

export { isValid };
