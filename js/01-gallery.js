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
      data-original="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

function onEsc(e) {
  if (e.code === "Escape") {
    onEsc.instaceRef.close();
  }
}

function showFullImage(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  basicLightbox
    .create(`<img class="modal" src="${e.target.dataset.original}"/>`, {
      onShow: (instance) => {
        onEsc.instaceRef = instance;
        window.addEventListener("keydown", onEsc);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEsc);
      },
    })
    .show();
}

gallery.addEventListener("click", showFullImage);
