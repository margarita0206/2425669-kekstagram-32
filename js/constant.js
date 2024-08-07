export const FILE_TYPES = ['jpg', 'jpeg', 'png', 'pdf'];

export const PICTURES_COUNT = 10;

export const TIME_OUT_DELAY = 500;

export const SHOW_TIME = 5000;

export const HASHTAG_CHECK = /^#[a-zа-яё0-9]{1,19}$/i;
export const SPACE = /\s+/g;
export const MAX_HASHTAG = 5;
export const MAX_MESSAGE_LENGTH = 140;

export const SCALE_STEP = 25;
export const MIN_SCALE = 25;
export const MAX_SCALE = 100;
export const DEFAULT_SCALE = 100;

export const effect = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

export const effectToFilter = {
  [effect.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [effect.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [effect.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [effect.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [effect.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};

export const effectToSliderOption = {
  [effect.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [effect.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [effect.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [effect.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [effect.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [effect.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  },
};
