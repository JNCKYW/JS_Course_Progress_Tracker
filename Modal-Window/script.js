'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnClose = document.querySelector(`.close-modal`);
const btnOpen = document.querySelectorAll(`.show-modal`);

function toggleHidden() {
  modal.classList.toggle(`hidden`);
  overlay.classList.toggle(`hidden`);
}

for (let x = 0; x < btnOpen.length; x++) {
  btnOpen[x].addEventListener(`click`, toggleHidden);
}

btnClose.addEventListener(`click`, toggleHidden);

overlay.addEventListener(`click`, toggleHidden);

document.addEventListener(`keydown`, function (e) {
  if (e.key == `Escape` && !modal.classList.contains(`hidden`)) {
    toggleHidden();
  }
});
