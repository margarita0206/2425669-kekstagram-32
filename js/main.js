import { generateThumbnails } from './thumbnail.js';
import { getData, sendData } from './api.js';
import { showAlert, debounce } from './utils.js';
import { setOnFormSubmit, imgUploadForm } from './form-modal.js';
import { showMessageSuccess, showMessageError } from './success-error.js';
import { init as initFilter, getFilteredPictures } from './filters.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    imgUploadForm();
    showMessageSuccess();
  } catch {
    showMessageError();
  }
});

try {
  const data = await getData();
  const debounceRenderGallery = debounce(generateThumbnails);
  initFilter(data, debounceRenderGallery);
  generateThumbnails(getFilteredPictures());
} catch {
  showAlert();
}
