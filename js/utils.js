import { TIME_OUT_DELAY, SHOW_TIME } from './constant.js';

const dataErrorTemplate = document
  .querySelector('#data-error')
  .content.querySelector('.data-error');

const showAlert = () => {
  const dataErrorElement = dataErrorTemplate.cloneNode(true);
  document.body.append(dataErrorElement);

  setTimeout(() => {
    dataErrorElement.remove();
  }, SHOW_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';


const debounce = (callback, timeoutDelay = TIME_OUT_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscapeKey, isEnterKey, showAlert, debounce };
