import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery, showError, showLoading, hideLoading, showSuccess } from './js/render-functions';

const form = document.querySelector('#search-form');
const input = form.querySelector('input[name="searchQuery"]');
const gallery = document.querySelector('.gallery');
let page = 1;

form.addEventListener('submit', onSearch);

function onSearch(event) {
  event.preventDefault();
  const query = input.value.trim();

  if (query === '') {
    showError('Please enter a search query');
    return;
  }

  clearGallery(); 
  page = 1;
  fetchAndRenderImages(query); 
}

function fetchAndRenderImages(query) {
  showLoading(); 
  fetchImages(query, page)
    .then(data => {
      if (data.hits.length === 0) {
        showError('Sorry, there are no images matching your search query. Please try again!');
        return;
      }
      renderGallery(data.hits);
      showSuccess(`Found ${data.totalHits} images`);
    })
    .catch(error => {
      showError('Something went wrong. Please try again later.');
    })
    .finally(() => {
      hideLoading(); 
    });
}
