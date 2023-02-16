// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const createGallery = galleryItems
.map(item => `<li class="gallery__item"><a href="${item.original}" class="gallery__link"><img src="${item.preview}" 
class="gallery__image" alt="${item.description}"></a></li>`)
 .join("");  
 gallery.insertAdjacentHTML("beforeend", createGallery);
 const lightbox = new SimpleLightbox(".gallery a", {  captionsData: "alt",  captionDelay: 250,});

