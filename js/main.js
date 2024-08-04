import { generateThumbnails } from './thumbnail.js';
import { getData, sendData } from './api.js';
import { showAlert } from './utils.js';
import { setOnFormSubmit, imgUploadForm } from './form-modal.js';
import { showMessageSuccess, showMessageError } from './success-error.js';
import './filters.js';

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
  generateThumbnails(data);
} catch {
  showAlert();
}
