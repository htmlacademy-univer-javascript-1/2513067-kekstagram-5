function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(array) {
  return array[getRandomInt(0, array.length - 1)];
}

const descriptions = [
  'Прекрасный вид!',
  'Невероятная красота природы.',
  'Лучший момент дня.',
  'Воспоминания на всю жизнь.',
  'Удивительное приключение.'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = ['Артём', 'Иван', 'Ольга', 'Мария', 'Дмитрий', 'Елена'];

function generateComments() {
  const comments = [];
  const commentCount = getRandomInt(0, 30);
  for (let i = 0; i < commentCount; i++) {
    comments.push({
      id: getRandomInt(1, 1000),
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: getRandomElement(messages),
      name: getRandomElement(names)
    });
  }
  return comments;
}

function generatePhotos() {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomElement(descriptions),
      likes: getRandomInt(15, 200),
      comments: generateComments()
    });
  }
  return photos;
}

const photosArray = generatePhotos();
