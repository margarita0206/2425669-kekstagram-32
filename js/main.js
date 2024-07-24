import {randomPosts} from './data.js';
import {generateThumbnails} from './thumbnail.js';
import './modal-pictures.js';
import './form-modal.js';
import './form-validate.js';

const currentPictures = randomPosts();

generateThumbnails(currentPictures);
