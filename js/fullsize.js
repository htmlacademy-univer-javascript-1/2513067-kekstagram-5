// fullsize.js
let commentsToShow = 5;
let currentComments = [];

export function openFullSizePhoto(photo) {
  currentComments = photo.comments.slice();
  commentsToShow = 5;

  const bigPicture = document.querySelector('.big-picture');
  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.big-picture__img img').alt = photo.description;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;

  bigPicture.querySelector('.social__comment-count').classList.remove('hidden');
  bigPicture.querySelector('.comments-loader').classList.remove('hidden');

  document.body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  const closeButton = bigPicture.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', closeFullSizePhoto);
  document.addEventListener('keydown', onEscKeyDown);

  renderComments();
}

function renderComments() {
  const commentsContainer = document.querySelector('.social__comments');
  commentsContainer.innerHTML = ''; // Очищаем контейнер комментариев

  const commentsFragment = document.createDocumentFragment();
  const commentsToRender = currentComments.slice(0, commentsToShow);

  commentsToRender.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const imgElement = document.createElement('img');
    imgElement.classList.add('social__picture');
    imgElement.src = comment.avatar;
    imgElement.alt = comment.name;
    imgElement.width = 35;
    imgElement.height = 35;

    const textElement = document.createElement('p');
    textElement.classList.add('social__text');
    textElement.textContent = comment.message;

    commentElement.appendChild(imgElement);
    commentElement.appendChild(textElement);
    commentsFragment.appendChild(commentElement);
  });

  commentsContainer.appendChild(commentsFragment);

  updateCommentCount();
  toggleLoadMoreButton();
}

function updateCommentCount() {
  const commentCountElement = document.querySelector('.social__comment-count');
  commentCountElement.innerHTML = `${Math.min(commentsToShow, currentComments.length)} из ${currentComments.length} комментариев`;
}

function toggleLoadMoreButton() {
  const loadMoreButton = document.querySelector('.comments-loader');
  if (commentsToShow >= currentComments.length) {
    loadMoreButton.classList.add('hidden');
  } else {
    loadMoreButton.classList.remove('hidden');
    loadMoreButton.addEventListener('click', onLoadMoreClick);
  }
}

function onLoadMoreClick() {
  commentsToShow += 5;
  renderComments();
}

function closeFullSizePhoto() {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  const closeButton = bigPicture.querySelector('.big-picture__cancel');
  closeButton.removeEventListener('click', closeFullSizePhoto);
  document.removeEventListener('keydown', onEscKeyDown);

  const loadMoreButton = document.querySelector('.comments-loader');
  loadMoreButton.removeEventListener('click', onLoadMoreClick);
}

function onEscKeyDown(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    closeFullSizePhoto();
  }
}
