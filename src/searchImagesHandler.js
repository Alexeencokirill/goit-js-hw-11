import { searchImages } from './searchImages';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Notify } from 'notiflix';
import Notiflix from 'notiflix';

export async function searchImagesHandler(inputValue, page) {
  try {
    Notiflix.Loading.standard('Loading...');

    const response = await searchImages(inputValue, page);

    return response.data;
  } catch (error) {
    // Notiflix.Notify.error('Download error, try again later');
    console.log(error);
  } finally {
    Notiflix.Loading.remove();
  }
}