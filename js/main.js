import { getData, sendData } from './requests.js';
import { similarPictures } from './render-thumbnail.js';
import { renderBigPicture } from './big-picture.js';
import { openAndCloseForm, onFormSubmit, onCloseForm } from './form.js';
import { getEditImg } from './edit-picture.js';
import { openErrorMessage, openSuccessMessage, openErrorGallery } from './succes-error.js';
import { setupPictureFilters } from './pictures-filter.js';

onFormSubmit(async (data) => {
  try {
    await sendData(data);
    onCloseForm();
    openSuccessMessage();
  } catch {
    openErrorMessage();
  }
});

getData()
  .then((data) => {
    similarPictures(data);
    renderBigPicture(data);
    openAndCloseForm();
    getEditImg();
    setupPictureFilters(data);
  })
  .catch(() => {
    openErrorGallery();
  });
