import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  "beforeend",
  galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" title="${description}" alt="${description}" />
    </a>`;
    })
    .join("")
);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
