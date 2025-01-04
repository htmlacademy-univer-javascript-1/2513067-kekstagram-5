import { renderPhotos } from './render.js';
import { generatePhotos } from './data.js';

const photos = generatePhotos(25);
renderPhotos(photos);


