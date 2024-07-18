import {randomPosts} from './data.js';
import {generateThumbnails} from './thumbnail.js';
import './modal-pictures.js';

const currentPictures = randomPosts();

generateThumbnails(currentPictures);

export {currentPictures};
