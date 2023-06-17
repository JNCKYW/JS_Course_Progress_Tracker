"use strict";
/*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


let arr = [`a`, `b`, `c`, `d`, `e`];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));

console.log(arr.slice());
console.log([...arr]);

// SPLICE
//console.log(arr.splice(2));
//arr.splice(-1);
arr.splice(1, 3);
console.log(arr);

// REVERSE
arr = [`a`, `b`, `c`, `d`, `e`];
let arr2 = [`f`, `g`, `h`, `i`, `j`];
console.log(arr.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);

// JOIN
console.log(letters.join(` - `));

const arr = [23, 11, 64];

console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log(arr.at(-1));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUsd = movements.map((mov) => mov * eurToUsd);

console.log(movementsUsd);

const movementDescription = movements.map(function (value, i) {
  return `Movement ${
    i + 1
  }: You ${value > 0 ? `deposited` : `withdrew`} ${value}`;
});

console.log(movementDescription);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);


for (const [z, x] of movements.entries()) {
  if (x > 0) {
    console.log(`${z + 1}: DEPOSITED ${x}`);
  } else {
    console.log(`${z + 1}: WITHDRAW ${Math.abs(x)}`);
  }
}

console.log(`----FOR EACH----`);

movements.forEach(function (variable, index, array) {
  console.log(
    variable > 0
      ? `${index + 1}: Deposited ${variable}`
      : `${index + 1}: Withdrawed ${variable}`
  );
});


// MAP

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(value, key, map);
});

// SET

const xxx = new Set([`USD`, `GBP`, `USD`, `EUR`, `EUR`]);

xxx.forEach(function (value, valueDuplicate, set) {
  console.log(value, valueDuplicate, set);
});
*/

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = ``;
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};
displayMovements(account1.movements);

const usernameCreator = function (acc) {
  acc.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(` `)
      .map(function (x) {
        return x[0];
      })
      .join(``);
  });
};

usernameCreator(accounts);
