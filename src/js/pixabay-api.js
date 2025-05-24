import axios from 'axios';


const API_KEY = '50473817-3aff601f70e503f6e91238097'; 
const BASE_URL = 'https://pixabay.com/api/';


export async function getImagesByQuery(query) {
    const params = {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    };
  
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  }




