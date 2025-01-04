import { generatePhotos } from './data.js';
import { renderPhotos } from './render.js';

const photosArray = generatePhotos();
renderPhotos(photosArray);
