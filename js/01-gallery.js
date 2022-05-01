import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  basicLightbox
    .create(`<img class="modal" src="${e.target.dataset.source}"/>`, {
      onShow: (instance) => {
        window.addEventListener("keydown", (e) => {
          if (e.code === "Escape") {
            instance.close();
          }
        });
      },
    })
    .show();
});
