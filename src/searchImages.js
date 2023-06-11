import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '37189607-24fd4809c428b985013c85be9';

export async function searchImage(inputValue, page) {
    const response = await axios.get(
        `${URL}?key=${KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`);
    return response;
}