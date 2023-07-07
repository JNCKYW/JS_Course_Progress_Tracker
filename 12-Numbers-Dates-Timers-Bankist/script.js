"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2023-07-01T23:36:17.929Z",
    "2023-07-04T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const startLogoutTimer = function () {
  let time = 300;
  const tick = function () {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      currentAccount = ``;
    }
    time--;
  };
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

const numberFormatter = function (number, locale, curr) {
  const formated = new Intl.NumberFormat(locale, {
    style: `currency`,
    currency: curr,
  }).format(number);
  return formated;
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    //IMPLEMENTING DATES
    const time = new Date(acc.movementsDates[i]);
    const today = new Date();
    const daysPassed = Math.floor((today - time) / (1000 * 60 * 60 * 24));
    let displayDate = ``;

    if (daysPassed === 1) {
      displayDate = `Yesterday`;
    } else if (daysPassed === 0) {
      displayDate = `Today`;
    } else if (daysPassed <= 7) {
      displayDate = `${daysPassed} Days ago`;
    } else {
      // const year = time.getFullYear();
      // const month = `${time.getMonth()}`.padStart(2, 0);
      // const day = `${time.getDate()}`.padStart(2, 0);
      // displayDate = `${day}/${month}/${year}`;
      const options = {
        year: `numeric`,
        month: `numeric`,
        day: `numeric`,
      };
      displayDate = `${new Intl.DateTimeFormat(
        currentAccount.locale,
        options
      ).format(time)}`;
    }

    const formattedMov = numberFormatter(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const balanceFormatted = numberFormatter(
    acc.balance,
    acc.locale,
    acc.currency
  );
  labelBalance.textContent = `${balanceFormatted}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const incomesFormatted = numberFormatter(incomes, acc.locale, acc.currency);

  labelSumIn.textContent = `${incomesFormatted}`;
  //

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  const outFormatted = numberFormatter(out, acc.locale, acc.currency);

  labelSumOut.textContent = `${outFormatted}`;
  //

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  const interestFormatted = numberFormatter(interest, acc.locale, acc.currency);

  labelSumInterest.textContent = `${interestFormatted}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  if (timer) {
    clearInterval(timer);
  }
  timer = startLogoutTimer();
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount, timer;
// //FAKE LOGGING TO NOT LOG ALWAYS AS WE MAKE A CHANGE IN CODE
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

///////////////////////////////////////
// Event handlers

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    //SHOW CURRENT TIME
    // const time = new Date();
    // const timeDay = `${time.getDate()}`.padStart(2, 0);
    // const timeMonth = `${time.getMonth() + 1}`.padStart(2, 0);
    // const timeYear = time.getFullYear();
    // const timeMin = `${time.getMinutes()}`.padStart(2, 0);
    // const timeHours = `${time.getHours()}`.padStart(2, 0);

    // labelDate.textContent = `${timeDay}/${timeMonth}/${timeYear}, ${timeHours}:${timeMin}`;

    const time = new Date();
    const options = {
      hour: `numeric`,
      minute: `numeric`,
      day: `numeric`,
      month: `long`,
      year: `numeric`,
      weekday: `long`,
    };
    const locale = currentAccount.locale;

    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      time
    );

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // ADD TRANSFER DATE
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // ADD TRANSFER DATE
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 3000);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const separators = 287_032_124;
// console.log(separators);

// const now = new Date();
// console.log(now);

// console.log(new Date(account1.movementsDates[0]));

// const future = new Date(2037, 10, 22, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDay());
// console.log(future.getDate());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());
// console.log(new Date(2142253380000));
// console.log(Date.now());

const future = new Date(2037, 10, 22, 15, 23);

console.log(Number(future));

const daysPassed = (date1, date2) =>
  Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

const days1 = daysPassed(
  new Date(2023, 9, 11, 10, 8),
  new Date(2023, 9, 20, 15, 19)
);

console.log(days1);

const num = 38965381762.2;

const options = {
  style: `percent`,
  unit: `celsius`,
};

console.log(`US:`, new Intl.NumberFormat(`en-US`, options).format(num));
console.log(
  `MINE:`,
  new Intl.NumberFormat(navigator.locale, options).format(num)
);
console.log(`GER:`, new Intl.NumberFormat(`de-DE`, options).format(num));
console.log(`SYRIA:`, new Intl.NumberFormat(`ar-SY`, options).format(num));

const ingredients = [`spinach`, `olives`];

const pizza = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1}, ${ing2}`),
  3000,
  ...ingredients
);

ingredients.includes(`spinach`) && clearTimeout(pizza);

//setInterval

// setInterval(function () {
//   const now = new Date();
//   const hour = `${now.getHours()}`.padStart(2, 0);
//   const minute = `${now.getMinutes()}`.padStart(2, 0);
//   const second = `${now.getSeconds()}`.padStart(2, 0);
//   console.log(`${hour}:${minute}:${second}`);
// }, 1000);
