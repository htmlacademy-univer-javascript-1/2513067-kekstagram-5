import { isEscapeKey } from './util.js';

const bigPictureForm = document.querySelector('.big-picture');
const bigPictureComments = bigPictureForm.querySelector('.social__comments');
const loadCommentButton = bigPictureForm.querySelector('.comments-loader');
const COMMENTS_TO_SHOW = 5;

function onStartCreateBigPicture(photosData) {
  const bigPictureOpenForm = document.querySelector('.pictures');
  bigPictureOpenForm.addEventListener('click', (evt) => {
    const idPicture = onFindIdPhoto(evt);
    const photo = onFindPhoto(photosData, idPicture);
    onOpenBigPicture(photo);
    evt.preventDefault();
  });
}

function onFindIdPhoto(evt) {
  const pictureElement = evt.target.closest('[data-id-picture]');
  if (!pictureElement) {
    return;
  }
  return pictureElement.dataset.idPicture;
}

function onFindPhoto(photosData, idPicture) {
  return photosData.find((item) => item.id === Number(idPicture));
}

function onAddCommentsForBigPicture(commentsArray) {
  bigPictureComments.innerHTML = '';
  commentsArray.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    commentElement.innerHTML = `<img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
    <p class="social__text">${comment.message}</p>`;
    bigPictureComments.appendChild(commentElement);
  });

  const commentsItems = bigPictureComments.children;
  bigPictureForm.querySelector('.loaded-comments').textContent = commentsItems.length > COMMENTS_TO_SHOW ? COMMENTS_TO_SHOW : commentsItems.length;
  for (let i = COMMENTS_TO_SHOW; i < commentsItems.length; i++) {
    commentsItems[i].classList.add('hidden');
  }

  if (commentsItems.length > COMMENTS_TO_SHOW) {
    loadCommentButton.classList.remove('hidden');
    loadCommentButton.addEventListener('click', onLoadComments);
  } else {
    loadCommentButton.classList.add('hidden');
  }
}

function onLoadComments() {
  const commentsItems = bigPictureComments.children;
  const loadedCommentsCountElement = bigPictureForm.querySelector('.loaded-comments');
  const loadedCommentsCount = parseInt(loadedCommentsCountElement.textContent, 10);
  const currentComments = loadedCommentsCount + COMMENTS_TO_SHOW > commentsItems.length ? commentsItems.length - loadedCommentsCount : COMMENTS_TO_SHOW;
  for (let i = 0; i < currentComments; i++) {
    document.querySelector('.social__comment.hidden').classList.remove('hidden');
  }
  loadedCommentsCountElement.textContent = loadedCommentsCount + currentComments;
  if (loadedCommentsCount + currentComments === commentsItems.length) {
    loadCommentButton.classList.add('hidden');
  }
}

function onOpenBigPicture(photo) {
  const bigPictureImg = bigPictureForm.querySelector('.big-picture__img img');
  const bigPictureLikesCount = bigPictureForm.querySelector('.likes-count');
  const bigPictureCommentCount = bigPictureForm.querySelector('.comments-count');
  const bigPictureDesc = bigPictureForm.querySelector('.social__caption');

  bigPictureImg.src = photo.url;
  bigPictureImg.alt = photo.alt;
  bigPictureLikesCount.textContent = photo.likes;
  bigPictureCommentCount.textContent = photo.comments.length;
  onAddCommentsForBigPicture(photo.comments);
  bigPictureDesc.textContent = photo.description;

  bigPictureForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  const bigPictureCloseForm = bigPictureForm.querySelector('.big-picture__cancel');
  bigPictureCloseForm.addEventListener('click', onCloseBigPicture);

  document.addEventListener('keydown', onDocumentEscKeyDown);
}

function onDocumentEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    onCloseBigPicture();
  }
}

function onCloseBigPicture() {
  bigPictureForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscKeyDown);
}

export { onStartCreateBigPicture };
