// util.js
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomElement(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}
