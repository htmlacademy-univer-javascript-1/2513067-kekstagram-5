// form.js

const form = document.querySelector('.img-upload__form');
const hashtagsInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');
const submitButton = form.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
});

function validateHashtags(value) {
  const hashtags = value.trim().toLowerCase().split(/\s+/);
  const uniqueHashtags = new Set(hashtags);

  if (hashtags.length > 5) {
    return false;
  }

  for (const hashtag of hashtags) {
    if (!/^#[a-zа-яё0-9]{1,19}$/i.test(hashtag)) {
      return false;
    }
  }

  return uniqueHashtags.size === hashtags.length;
}

function validateComment(value) {
  return value.length <= 140;
}

pristine.addValidator(hashtagsInput, validateHashtags, 'Неверный формат хэш-тега или превышено количество хэш-тегов');
pristine.addValidator(commentInput, validateComment, 'Комментарий не может быть длиннее 140 символов');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    form.submit();
  }
});

submitButton.addEventListener('click', () => {
  pristine.validate();
});
