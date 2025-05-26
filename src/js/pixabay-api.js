import axios from 'axios';


const API_KEY = '50473817-3aff601f70e503f6e91238097'; 
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;


  export async function getImagesByQuery(query, page = 1) {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: PER_PAGE,
      },
    });
    return response.data;
  }




