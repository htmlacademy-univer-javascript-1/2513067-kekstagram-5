// main.js
import { generatePhotos } from './data.js';
import { renderPhotos } from './render.js';
import './form.js';


const photos = generatePhotos(25);
renderPhotos(photos);
