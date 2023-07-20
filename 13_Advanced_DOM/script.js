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
message.style.width = `100vw`;

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + `px`;

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

//TABBED COMPONENT

const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

tabsContainer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const button = e.target.closest(`.btn`);
  //GUARD CLAUSE
  if (!button) return;

  //Active tab
  tabs.forEach(function (tab) {
    tab.classList.remove(`operations__tab--active`);
  });
  button.classList.add(`operations__tab--active`);

  //Activate content area
  const contentToActivate = document.querySelector(
    `.operations__content--${button.dataset.tab}`
  );

  tabsContent.forEach(function (tab) {
    tab.classList.remove(`operations__content--active`);
  });
  contentToActivate.classList.add(`operations__content--active`);
});

//LINKS FADE OUT ANIMATION

const handleHOver = function (e, opacity) {
  e.preventDefault();
  if (e.target.classList.contains(`nav__link`)) {
    const hovered = e.target;
    const siblings = hovered.closest(`.nav`).querySelectorAll(`.nav__link`);
    const logo = hovered.closest(`.nav`).querySelector(`.nav__logo`);

    siblings.forEach(function (link) {
      if (link !== hovered) {
        link.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};

const navBar = document.querySelector(`.nav`);

navBar.addEventListener(`mouseover`, function (e) {
  handleHOver(e, 0.5);
});
navBar.addEventListener(`mouseout`, function (e) {
  handleHOver(e, 1);
});

//INTERSECTION OBSERVER API

const nav = document.querySelector(`.nav`);

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`,
};

const obsFn = function (entries) {
  const entry = entries[0];

  if (!entry.isIntersecting) {
    nav.classList.add(`sticky`);
  } else {
    nav.classList.remove(`sticky`);
  }
};

const headerObserver = new IntersectionObserver(obsFn, obsOptions);
headerObserver.observe(header);

// REVEALING SECTIONS
const allSections = document.querySelectorAll(`.section`);

const revealSection = function (entries, observer) {
  const entry = entries[0];

  if (entry.isIntersecting) {
    entry.target.classList.remove(`section--hidden`);
    observer.unobserve(entry.target);
  }
};

const sectionObsOptions = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(
  revealSection,
  sectionObsOptions
);

allSections.forEach(function (section) {
  section.classList.add(`section--hidden`);
  sectionObserver.observe(section);
});

//LAZY LOADING IMAGES

const allImg = document.querySelectorAll(`img[data-src]`);

const loadImg = function (entries, observer) {
  const entry = entries[0];

  if (entry.isIntersecting) {
    //Replace src atribute with data-src atribute
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener(`load`, function (e) {
      entry.target.classList.remove(`lazy-img`);
    });

    observer.unobserve(entry.target);
  }
};

const lazyImgObsOptions = {
  root: null,
  threshold: 0.2,
  rootMargin: `200px`,
};

const lazyImgObserver = new IntersectionObserver(loadImg, lazyImgObsOptions);

allImg.forEach(function (img) {
  lazyImgObserver.observe(img);
});

//SLIDER
const slider = function () {
  const slides = document.querySelectorAll(`.slide`);
  const btnLeft = document.querySelector(`.slider__btn--left`);
  const btnRight = document.querySelector(`.slider__btn--right`);
  const maxSlides = slides.length;
  const dotsContainer = document.querySelector(`.dots`);

  const createDots = function () {
    slides.forEach(function (_, i) {
      let html = `<button class="dots__dot" data-slide="${i}"></button>`;
      dotsContainer.insertAdjacentHTML(`beforeend`, html);
    });
  };

  const activateDot = function (slide) {
    const dots = document.querySelectorAll(`.dots__dot`);
    dots.forEach(function (d) {
      d.classList.remove(`dots__dot--active`);
    });

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add(`dots__dot--active`);
  };

  const goToSlide = function (slideNum) {
    slides.forEach(function (slide, i) {
      slide.style.transform = `translateX(${100 * (i - slideNum)}%)`;
    });
  };

  let currSlide = 0;

  const prevSlide = function (e) {
    if (currSlide === 0) {
      currSlide = maxSlides - 1;
    } else {
      currSlide--;
    }
    goToSlide(currSlide);
    activateDot(currSlide);
  };

  const nextSlide = function (e) {
    if (currSlide === maxSlides - 1) {
      currSlide = 0;
    } else {
      currSlide++;
    }

    goToSlide(currSlide);
    activateDot(currSlide);
  };

  // MAKING IT WORK

  goToSlide(0);
  createDots();
  activateDot(0);

  //BUTTONS

  btnRight.addEventListener(`click`, nextSlide);
  btnLeft.addEventListener(`click`, prevSlide);

  //DOTS

  dotsContainer.addEventListener(`click`, function (e) {
    e.preventDefault();
    if (e.target.classList.contains(`dots__dot`)) {
      const slide = e.target.dataset.slide;
      goToSlide(slide);
      currSlide = slide;
      activateDot(slide);
    }
  });

  //ARROWS

  document.addEventListener(`keydown`, function (e) {
    e.key === `ArrowLeft` && prevSlide();
    e.key === `ArrowRight` && nextSlide();
  });
};
slider();

// const obsFn = function (entries, observer) {
//   console.log(entries);
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsFn, obsOptions);
// observer.observe(section1);

//IMPLEMENTING STICKY NAV
// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener(`scroll`, function () {
//   if (this.window.scrollY > initialCoords.top) {
//     navBar.classList.add(`sticky`);
//   } else navBar.classList.remove(`sticky`);
// });

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
