"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

let map;
let mapEvent;

//############################################################
//HOW TO USE GEOLOCATION + LEAFLET EXTERNAL LIBRARY
//############################################################

navigator.geolocation.getCurrentPosition(
  function (position) {
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longitude;
    console.log(
      `https://www.google.com/maps/@${latitude},${longtitude},17z?hl=pl-PL&entry=ttu`
    );

    map = L.map("map").setView([latitude, longtitude], 13);

    L.tileLayer("http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}", {
      maxZoom: 20,
      subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(map);

    // L.marker([latitude, longtitude])
    //   .addTo(map)
    //   .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
    //   .openPopup();

    map.on(`click`, function (mapE) {
      mapEvent = mapE;

      form.classList.remove(`hidden`);
      inputDistance.focus();
    });
  },
  function () {
    alert(`Could not get your position :(`);
  }
);

form.addEventListener(`submit`, function (e) {
  e.preventDefault();

  //Clear input fields
  inputCadence.value =
    inputDistance.value =
    inputDuration.value =
    inputElevation.value =
      ``;

  //Display marker
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `running-popup`,
      })
    )
    .setPopupContent(`Workout`)
    .openPopup();

  form.classList.add(`hidden`);
});

inputType.addEventListener(`change`, function () {
  inputElevation.closest(`.form__row`).classList.toggle(`form__row--hidden`);
  inputCadence.closest(`.form__row`).classList.toggle(`form__row--hidden`);
});
