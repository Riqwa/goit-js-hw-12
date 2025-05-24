import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');



form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search term!', position: 'topRight' });
    return;
    }
    

    clearGallery();
    showLoader();
    
    const data = await getImagesByQuery(query);
    
    hideLoader();
    
    if (data.hits.length === 0) {
     
    } else {
      createGallery(data.hits);
    }
    


  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.info({ message: 'Sorry, there are no images matching your search query. Please try again!', position: 'topRight' });
    } else {
      createGallery(data.hits);
    }
  } catch (err) {
    iziToast.error({ message: 'Something went wrong. Please try again later.', position: 'topRight' });
  } finally {
    hideLoader();
  }
});
  
  








