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
      `Your Delivery is 
      lmost complete. ${this.starterMenu[starterID]} and ${this.mainMenu[mainID]} will be delivered to ${address} at ${delTime}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(`Pizza with ${mainIng} and ${otherIng}`);
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

/*const xxx = {
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

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];

console.log(newArr);

console.log(...newArr);

const starterMenu = ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"];
const mainMenu = ["Pizza", "Pasta", "Risotto"];
const newMenu = [...mainMenu, `gnocci`];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...mainMenu];

//Join 2 or more arrays together
const menu2 = [...starterMenu, ...mainMenu];
console.log(menu);

/*const ingredients = [
  prompt(`ingredient 1: `),
  prompt(`ingredient 2: `),
  prompt(`ingredient 3: `),
];

restaurant.orderPasta(...ingredients);

const newRestaurant = { ...restaurant, founder: `Guiseppe`, foundedIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };

const starterMenu = ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"];
const mainMenu = ["Pizza", "Pasta", "Risotto"];

const menu2 = [...starterMenu, ...mainMenu];

const [pizza, , risotto, ...otherFood] = menu2;

console.log(pizza, risotto, otherFood);

const {
  openingHours: {
    sat: { open: open1, close: close1 },
    ...weekdays
  },
} = restaurant;

console.log(weekdays);
console.log(open1, close1);

const add = function (...numbers) {
  let sum = 0;
  for (let x = 0; x < numbers.length; x++) {
    sum += numbers[x];
  }
  console.log(numbers, sum);
};

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);

const d = [10, 20, 30];

add(...d);

restaurant.orderPizza(`buba`, `czoko`, `shaggy`);
restaurant.orderPizza(`buba`);

console.log(0 || `text`);
console.log(undefined || null || 0 || 3);

restaurant.guestNum = 10;

//zamiast tego poniżej zrób short circuiting z operatorem ||
const guests = restaurant.guestNum ? restaurant.guestNum : 0;
console.log(guests);

const guests2 = restaurant.guestNum || 0;
console.log(guests2);

console.log(`------------^^^---OR---^^^---------------`);
console.log(`------------vvv---AND---vvv--------------`);

console.log(7 && 0);
console.log(10 && 9 && null && 3);
console.log(`text` && 3 && `buba`);

//zamiast tego poniżej zrób short circuiting z operatorem &&
if (restaurant.orderPizza) {
  console.log(
    restaurant.orderPizza(`mushrooms`, `mozarella`, `chorizo`, `olives`)
  );
}

restaurant.orderPizza &&
  restaurant.orderPizza(`mushrooms`, `mozarella`, `chorizo`, `olives`);

restaurant.guestNum = 0;

const guests2 = restaurant.guestNum || 10;
console.log(guests2);

const nullishGuests = restaurant.guestNum ?? 0;
console.log(nullishGuests);*/

const rest1 = {
  name: `Capri`,
  numGuests: 0,
};

const rest2 = {
  name: `Buba`,
  owner: `Czoko`,
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1.numGuests);
console.log(rest2.numGuests);

// rest2.owner = rest2.owner && `<ANONYMOUS>`;

rest2.owner &&= `<ANONYMOUS>`;

console.log(rest2.owner);

let michal = 10;

michal &&= 20;

console.log(michal);

