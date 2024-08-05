import {
  effect,
  effectToFilter,
  effectToSliderOption
} from './constant.js';

const modalElement = document.querySelector('.img-upload');
const imgElement = modalElement.querySelector('.img-upload__preview img');
const effectsElement = modalElement.querySelector('.effects');
const slider = modalElement.querySelector('.effect-level__slider');
const sliderContainer = modalElement.querySelector('.img-upload__effect-level');
const effectLevel = modalElement.querySelector('.effect-level__value');

let chosenEffect = effect.DEFAULT;

const isDefault = () => chosenEffect === effect.DEFAULT;

const setImageStyle = () => {
  if (isDefault()) {
    imgElement.style.filter = null;
    return;
  }

  const { value } = effectLevel;
  const { style, unit } = effectToFilter[chosenEffect];
  imgElement.style.filter = `${style}(${value}${unit})`;
};

const onSliderUpdate = () => {
  effectLevel.value = slider.noUiSlider.get();
  setImageStyle();
};

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const createSlider = ({ min, max, step }) => {
  noUiSlider.create(slider, {
    range: { min, max },
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });

  slider.noUiSlider.on('update', onSliderUpdate);
  hideSlider();
};

const updateSlider = ({ min, max, step }) => {
  slider.noUiSlider.updateOptions({
    range: { min, max },
    step,
    start: max,
  });
};

const setSlider = () => {
  if (isDefault()) {
    hideSlider();
  } else {
    updateSlider(effectToSliderOption[chosenEffect]);
    showSlider();
  }
};

const setEffect = (currentEffect) => {
  chosenEffect = currentEffect;
  setSlider();
  setImageStyle();
};

const reset = () => {
  setEffect(effect.DEFAULT);
};

const onEffectsChange = (evt) => {
  setEffect(evt.target.value);
};

const init = () => {
  createSlider(effectToSliderOption[chosenEffect]);
  effectsElement.addEventListener('change', onEffectsChange);
};

export { init, reset };
