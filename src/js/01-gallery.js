import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

for (const image of galleryItems) {
  const listEl = `<li class="gallery__item">
  <a class="gallery__link" href=${image.original}>
     <img class="gallery__image" src=${image.preview} alt=${image.description} />
  </a>
</li>`;
  galleryEl.insertAdjacentHTML('beforeend', listEl);

  galleryEl.addEventListener('click', event => event.preventDefault());
}

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
