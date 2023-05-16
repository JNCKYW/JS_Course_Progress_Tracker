"use strict";

// Data needed for a later exercise
//const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterID, mainID) {
    return [this.starterMenu[starterID], this.mainMenu[mainID]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    address = `its destination`,
    mainID = 1,
    delTime = `as soon as possible`,
    starterID = 0,
  }) {
    console.log(
      `Your Delivery is almost complete. ${this.starterMenu[starterID]} and ${this.mainMenu[mainID]} will be delivered to ${address} at ${delTime}.`
    );
  },
};

restaurant.orderDelivery({
  delTime: `21:30`,
  starterID: 2,
  mainID: 2,
  address: `piotrkowska 123`,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
  menu = [],
} = restaurant;

console.log(restaurantName, hours, tags, menu);

let a = 2;
let b = 1;

const obj = { a: 10, b: 20, c: 30 };

({ a, b } = obj);
console.log(a, b);

const {
  openingHours: {
    fri: { open, close },
  },
} = restaurant;
console.log(open, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [first, , secondary] = restaurant.categories;
// console.log(first, secondary);

// [first, secondary] = [secondary, first];
// console.log(first, secondary);

// const nested = [2, 3, [4, 5]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//console.log(restaurant.order(2, 0));

//const [starter, main] = restaurant.order(2, 0);
//console.log(starter, main);

const xxx = {
  buba: `BUBA`,
  czoko: `CZOKO`,
  shaggy: `SHAGGY`,
  pets: {
    age1: 8,
    age2: [8, 1],
  },
};

const {
  pets: {
    age2: [czokoAge, humusAge],
  },
} = xxx;

console.log(czokoAge, humusAge);
