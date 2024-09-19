import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let lightbox;

export function renderGallery(images) {
  const galleryEl = document.querySelector('.gallery');
  const markup = images.map(image => `
    <a class="gallery-item" href="${image.largeImageURL}">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      <div class="info">
        <p><b>Likes:</b> ${image.likes}</p>
        <p><b>Views:</b> ${image.views}</p>
        <p><b>Comments:</b> ${image.comments}</p>
        <p><b>Downloads:</b> ${image.downloads}</p>
      </div>
    </a>
  `).join('');

  galleryEl.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

export function showError(message) {
  iziToast.error({
    title: 'Error',
    message,
  });
}

export function showSuccess(message) {
  iziToast.success({
    title: 'Success',
    message,
  });
}

export function showLoading() {
  iziToast.info({
    title: 'Loading',
    message: 'Searching for images...',
    timeout: false,
    progressBar: true,
  });
}

export function hideLoading() {
  iziToast.hide({}, document.querySelector('.iziToast-info'));
}
