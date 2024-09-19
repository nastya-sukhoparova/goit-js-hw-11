const gallery = document.querySelector('.gallery');

export function renderGallery(images) {
  const markup = images.map(image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}" class="gallery-link">
        <img src="${image.webformatURL}" alt="${image.tags}" class="gallery-image" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${image.likes}</p>
        <p class="info-item"><b>Views:</b> ${image.views}</p>
        <p class="info-item"><b>Comments:</b> ${image.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
      </div>
    </li>
  `).join('');

  gallery.insertAdjacentHTML('beforeend', markup); 
}

export function clearGallery() {
  gallery.innerHTML = ''; 
}

export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

export function showSuccess(message) {
  iziToast.success({
    title: 'Success',
    message: message,
  });
}

export function showLoading() {
  const loader = document.querySelector('.loader'); 
  loader.style.display = 'block'; 
}

export function hideLoading() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none'; 
}

