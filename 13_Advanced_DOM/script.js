"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(function (btn) {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//SELECTING, CREATING AND DELETING ELEMENTS

const message = document.createElement(`div`);
message.classList.add(`cookie-message`);
message.innerHTML = `We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>`;

const header = document.querySelector(`header`);
header.append(message);

document
  .querySelector(`.btn--close-cookie`)
  .addEventListener(`click`, function () {
    message.remove();
  });

//STYLES
message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

// document.documentElement.style.setProperty(`--color-primary`, `orangered`);

//SMOOTH SCROLLING

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.getElementById(`section--1`);

btnScrollTo.addEventListener(`click`, function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // window.scrollTo({
  //   left: s1coords.left,
  //   top: s1coords.top + window.scrollY,
  //   behavior: `smooth`,
  // });
  section1.scrollIntoView({ behavior: `smooth` });
});

//EVENTS DELEGATION

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

//DOM Traversing

//CHILDRENS

// const h1 = document.querySelector(`h1`);

// console.log(h1.querySelectorAll(`.highlight`));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = `brown`;
// h1.lastElementChild.style.color = `yellow`;

// //PARENTS

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(`.header`).style.backgroundColor = `#03ffea`;

// //SIBLINGS

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

//ATRIBUTES
// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.setAttribute(`Janusz`, `Wojciechowski`);

// console.log(logo.getAttribute(`Janusz`));
// logo.setAttribute(`data-version-number`, `3.0`);
// logo.setAttribute(`data-version-name`, `ruby`);

// console.log(logo.dataset.versionNumber);
// console.log(logo.dataset.versionName);

//TYPES OF EVENTS

// const h1 = document.querySelector(`h1`);

// const h1event = function (e) {
//   alert(`siema`);
// };

// h1.addEventListener(`mouseenter`, h1event);

// const navLogo = document.getElementById(`logo`);

// navLogo.addEventListener(`mouseenter`, function () {
//   h1.removeEventListener(`mouseenter`, h1event);
// });

// const randomInt = function (max) {
//   return Math.floor(Math.random() * max) + 1;
// };
// const randomColor = `rgb(${randomInt(255)},${randomInt(255)},${randomInt(
//   255
// )})`;
