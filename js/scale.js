import {
  SCALE_STEP,
  MIN_SCALE,
  MAX_SCALE,
  DEFAULT_SCALE
} from './constant.js';

const scaleInput = document.querySelector('.scale__control--value');
const smallButtonElement = document.querySelector('.scale__control--smaller');
const bigButtonElement = document.querySelector('.scale__control--bigger');
const imgPreviewElement = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imgPreviewElement.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onSmallerClickButton = () => {
  scaleImage(
    Math.max(parseInt(scaleInput.value, 10) - SCALE_STEP, MIN_SCALE)
  );
};

const onBiggerClickButton = () => {
  scaleImage(
    Math.min(parseInt(scaleInput.value, 10) + SCALE_STEP, MAX_SCALE)
  );
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

smallButtonElement.addEventListener('click', onSmallerClickButton);
bigButtonElement.addEventListener('click', onBiggerClickButton);

export { resetScale };
