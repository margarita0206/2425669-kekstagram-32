import {
  POSTS_COUNT, AVATAR_MIN_COUNT, AVATAR_MAX_COUNT, LIKES_MIN_COUNT, LIKES_MAX_COUNT, COMMENT_MIN_COUNT, COMMENT_MAX_COUNT, COMMENT_MAX_ID, COMENT_NAMES, POSTS_COMMENTS, DESCRIPTIONS
} from './constant.js';

import {
  getRandomInteger, getUniqueInteger, getRandomArrayElement
} from './utils.js';

const randomPostId = getUniqueInteger(1, POSTS_COUNT);
const randomPostUrl = getUniqueInteger(1, POSTS_COUNT);
const randomCommentID = getUniqueInteger(1, COMMENT_MAX_ID);

const createPost = () => {

  const randomPostDescription = getRandomArrayElement(DESCRIPTIONS);

  const createComment = () => ({
    'id': randomCommentID,
    'avatar': `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT,AVATAR_MAX_COUNT)}.svg`,
    'message': getRandomArrayElement(POSTS_COMMENTS),
    'name': getRandomArrayElement(COMENT_NAMES),
  });

  return {
    'id': randomPostId(),
    'url': `photos/${randomPostUrl()}.jpg`,
    'description': randomPostDescription,
    'likes': getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
    'comments': Array.from({length: getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT)}, createComment),
  };
};

const randomPosts = Array.from({ length: POSTS_COUNT }, createPost);

export {randomPosts};
