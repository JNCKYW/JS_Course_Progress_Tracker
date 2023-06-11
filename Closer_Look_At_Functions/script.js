"use strict";

/*
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 600) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking(`LH123`);
createBooking(`LH123`, 2, 400);
createBooking(`LH123`, undefined, 1000);


const flight = `LH234`;
const jonas = {
  name: `Janusz Wojciechowski`,
  passportNum: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = `LH999`;
  passenger.name = `Mr.` + passenger.name;

  if (passenger.passportNum === 123456789) {
    alert(`CHECKED IN`);
  } else {
    alert(`Wrong Passport!!!!`);
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passportNum = Math.trunc(Math.random() * 10000000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

const transformer = function (str, fn) {
  console.log(fn(str));
  console.log(`transformed by: ${fn.name}`);
};

transformer(`JavaScript is the best`, upperFirstWord);
transformer(`JavaScript is the best`, oneWord);


const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetWitaj = greet(`Witaj`);
greetWitaj(`Michał`);
greetWitaj(`Janusz`);

greet(`Siema`)(`Eniu`);


const lufthansa = {
  airline: `Lutfhansa`,
  iataCode: `LH`,
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, `Janusz Wojciechowski`);
console.log(lufthansa.bookings);

const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

//CALL CALL CALL CALL

const book = lufthansa.book;

book.call(eurowings, 23, `Janusz Lulu`);
book.call(lufthansa, 222, `Buba Czoko`);

const flightData = [583, `Buba Hummus`];
book.call(eurowings, ...flightData);

//BIND BIND BIND BIND

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(222, `BUBA BUBA`);
bookLH(333, `CHLEB CHLEB`);

const bookEW23 = book.bind(eurowings, 23);

bookEW23(`Janusz`);
bookEW23(`Ola`);

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(`.buy`)
  .addEventListener(`click`, lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * (rate / 100);

console.log(addTax(10, 200));

const addVat = addTax.bind(null, 23);

console.log(addVat(300));

const taxCalc = function (tax) {
  return function (price) {
    console.log((tax / 100) * price + price);
  };
};

const taxCalc23 = taxCalc(23);

taxCalc23(100);
taxCalc(23)(100);


// const runOnce = function () {
//   console.log(`This will never happen again`);
// };

// runOnce();

(function () {
  console.log(`This will never happen again`);
})();

(() => console.log(`This will never happen again`))();

{
  const privateData = 23;
}


const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();


let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

const boardPassengers = function (num, wait) {
  const perGroup = num / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${num} passengers`);
    console.log(`Thera are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 10);
*/
