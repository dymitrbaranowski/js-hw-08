// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// import { sum as fnSum, add } from './02-video';
// import * as data from './02-video';
// const sum = 10;
// // console.log(fnSum(4, 5));
// // console.log(sum);
// // console.log(add(2, 2));
// console.log(data.add);

console.log(galleryItems);

const ulContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
ulContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
       <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
      </li>
  `;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  animationSpeed: 250,
  overlayOpacity: 0.7,
  captionsData: 'alt',
  captionDelay: 250,
});
