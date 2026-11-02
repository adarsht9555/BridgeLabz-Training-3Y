const gallery = document.querySelector("#gallery");
const imageModal = document.querySelector("#imageModal");
const modalContent = document.querySelector(".modal-content");
const largeImage = document.querySelector("#largeImage");
const closeModalButton = document.querySelector("#closeModal");

gallery.addEventListener("click", function (event) {
  const clickedImage = event.target.closest("img");
  if (!clickedImage) return;

  largeImage.src = clickedImage.src;
  largeImage.alt = clickedImage.alt;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
});

imageModal.addEventListener("click", function () {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  largeImage.src = "";
});

modalContent.addEventListener("click", function (event) {
  event.stopPropagation();
});

closeModalButton.addEventListener("click", function (event) {
  event.stopPropagation();
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  largeImage.src = "";
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    imageModal.classList.remove("open");
    imageModal.setAttribute("aria-hidden", "true");
    largeImage.src = "";
  }
});