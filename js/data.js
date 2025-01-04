// data.js
import { getRandomInt, getRandomElement } from './util.js';

function generateComment(id) {
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  const names = ['Артём', 'Иван', 'Мария', 'Елена', 'Ольга', 'Дмитрий', 'Алексей', 'Сергей', 'Анна', 'Наталья'];

  return {
    id: id,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: getRandomElement(messages),
    name: getRandomElement(names)
  };
}

function generatePhotoDescription(id) {
  const commentsCount = getRandomInt(0, 30);
  const comments = Array.from({ length: commentsCount }, (_, index) => generateComment(index));

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Описание фотографии ${id}`,
    likes: getRandomInt(15, 200),
    comments: comments
  };
}

export function generatePhotos(count) {
  return Array.from({ length: count }, (_, index) => generatePhotoDescription(index + 1));
}
