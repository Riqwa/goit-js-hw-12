import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  showLoadingText,
  hideLoadingText,
} from './js/render-functions.js';
import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  
  
  const form = document.querySelector('.form');
  const gallery = document.querySelector('.gallery');
  const loadMoreBtn = document.querySelector('.load-more');
  const loadingText = document.querySelector('.loading-text');
 
  
  let currentQuery = '';
  let currentPage = 1;
  let totalHits = 0;
  
  form.addEventListener('submit', async e => {
    e.preventDefault();
    currentQuery = e.target.elements['search-text'].value.trim();
  
    if (!currentQuery) {
      iziToast.warning({
        message: 'Please enter a search term!',
        position: 'topRight',
      });
      return;
    }
  
    currentPage = 1;
    clearGallery();
    hideLoadMoreButton();
    await fetchImages();
  });
  
  loadMoreBtn.addEventListener('click', async () => {
    hideLoadMoreButton();
    showLoadingText();

  currentPage += 1;
  await fetchImages();
    
    
  });
  
  async function fetchImages() {
    
    try {
      showLoader();
      const data = await getImagesByQuery(currentQuery, currentPage);
      totalHits = data.totalHits;
  
      if (data.hits.length === 0 && currentPage === 1) {
        iziToast.error({
          message: 'Sorry, no images found.',
          position: 'topRight',
        });
        return;
      }
  
      createGallery(data.hits);
  
      const shownImages = document.querySelectorAll('.gallery a').length;
      if (shownImages >= totalHits) {
    hideLoadMoreButton();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  } else {
    showLoadMoreButton();
  }
  
      if (currentPage > 1) scrollPage();
    } catch (error) {
      iziToast.error({
        message: 'Oops! Something went wrong.',
        position: 'topRight',
      });
      console.error(error);
    } finally {
      hideLoader();
      hideLoadingText();
    }
  }
  
  function scrollPage() {
    const { height: cardHeight } = gallery.firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
});

