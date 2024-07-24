import {
  EFFECT,
  EFFECT_TO_FILTER,
  EFFECT_TO_SLIDER_OPTIONS
} from './constant.js';

const modalElement = document.querySelector('.img-upload');
const imgElement = modalElement.querySelector('.img-upload__preview');
const effectsElement = modalElement.querySelector('.effects');
const slider = modalElement.querySelector('.effect-level__slider');
const sliderContainer = modalElement.querySelector('.img-upload__effect-level');

const effectLevelElement = modalElement.querySelector('.effect-level__value');

let chosenEffect = EFFECT.DEFAULT;

const isDefault = () => chosenEffect === EFFECT.DEFAULT;

const setImageStyle = () => {
  if (isDefault()) {
    imgElement.style.filter = null;
    return;
  }

  const { value } = effectLevelElement;
  const { style, unit } = EFFECT_TO_FILTER[chosenEffect];
  imgElement.style.filter = `${style}(${value}${unit})`;
};

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const onSliderUpdate = () => {
  effectLevelElement.value = slider.noUiSlider.get();
  setImageStyle();
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
    updateSlider(EFFECT_TO_SLIDER_OPTIONS[chosenEffect]);
    showSlider();
  }
};

const setEffect = (effect) => {
  chosenEffect = effect;
  setSlider();
  setImageStyle();
};

const reset = () => {
  setEffect(EFFECT.DEFAULT);
};

const onEffectsChange = (evt) => {
  setEffect(evt.target.value);
};

const init = () => {
  createSlider(EFFECT_TO_SLIDER_OPTIONS[chosenEffect]);
  effectsElement.addEventListener('change', onEffectsChange);
};

export { init, reset };
