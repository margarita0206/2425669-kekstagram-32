const POSTS_COUNT = 25;

const COMENT_NAMES = [
  'Анна',
  'Александр',
  'Светлана',
  'Юра',
  'Сергей',
  'Полина',
  'Олег',
  'Андрей',
  'Юля',
  'Анастасия',
  'Соня',
  'Татьяна',
  'Алексей',
  'Артем',
  'Вера',
  'Ирина',
  'Николай',
  'Ева',
  'Ольга',
  'Алиса'
];

const POSTS_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Моя жизнь меняется, потому что меняю ее я.',
  'Не слушай никого, лишь твое сердце, оно все знает.',
  'Чтобы достичь новых берегов, мы должны плыть, а не дрейфовать.',
  'Навстречу новым приключениям.',
  'Каждое мгновенье жизни — еще одна возможность.',
  'Пусть эта фотография будет здесь',
  'Одна хорошая мысль утром меняет смысл целого дня.',
  'Как мало нужно для счастья.',
  'Этой фотографии описание не нужно'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

function getUniqueInteger (min,max) {
  const previousValues = [];

  return function () {
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);

    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const randomPostId = getUniqueInteger(1, 25);
const randomPostUrl = getUniqueInteger(1, 25);
const randomCommentID = getUniqueInteger(1, 500000);

const createPost = () => {

  const randomPostDescription = getRandomArrayElement(DESCRIPTIONS);

  const createComment = () => ({
    'id': randomCommentID,
    'avatar': `img/avatar-${getRandomInteger(1, 6)}.svg`,
    'message': getRandomArrayElement(POSTS_COMMENTS),
    'name': getRandomArrayElement(COMENT_NAMES),
  });

  return {
    'id': randomPostId(),
    'url': `photos/${randomPostUrl()}.jpg`,
    'description': randomPostDescription,
    'likes': getRandomInteger(15, 200),
    'comments': Array.from({length: getRandomInteger(0, 30)}, createComment),
  };
};

const randomPosts = Array.from({length: POSTS_COUNT}, createPost);

console.log(randomPosts);
