"use strict";
/*
// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (arr1, arr2) {
  const dogsJuliaCorrect = arr1.slice(1, -2);

  const allAges = [...dogsJuliaCorrect, ...arr2];

  allAges.forEach(function (age, i) {
    const checker =
      age >= 3
        ? `Dog number ${i + 1} is an adult, and is ${age} years old`
        : `Dog number ${i + 1} is still a puppy`;
    console.log(checker);
  });
};

// checkDogs(dogsJulia, dogsKate);

const Data1 = [5, 2, 4, 1, 15, 8, 3];
const Data2 = [16, 6, 10, 5, 6, 1, 4];

const calcHumanAge = function (ages) {
  const humanAges = ages
    .map(function (age) {
      if (age <= 2) {
        return age * 2;
      } else {
        return 16 + age * 4;
      }
    })
    .filter(function (age) {
      if (age >= 18) {
        return age;
      }
    })
    .reduce(function (sum, age, i, arr) {
      return sum + age / arr.length;
    }, 0);
  return humanAges;
};

console.log(calcHumanAge(Data1));
console.log(calcHumanAge(Data2));
*/

// MINE VERSION OF BANKIST SITE REDONE FROM SCRATCH

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

// ##### VARIABLES #####
let currentAccount;

// ##### SHOW MOVEMENTS #####

const displayMovements = function (movements) {
  containerMovements.innerHTML = ``;
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `        
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// ##### CALC BALANCE #####

const balanceCalc = function (acc) {
  acc.balance = acc.movements.reduce(function (sum, mov) {
    return sum + mov;
  }, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// ##### CALC SUMMARY #####

const calcSummary = function (acc) {
  const income = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (sum, mov) {
      return sum + mov;
    }, 0);

  const outcome = acc.movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (sum, mov) {
      return sum - mov;
    }, 0);

  const interest = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .map(function (mov) {
      return mov * (acc.interestRate / 100);
    })
    .filter(function (mov) {
      return mov >= 1;
    })
    .reduce(function (sum, mov) {
      return sum + mov;
    }, 0);

  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${outcome}€`;
  labelSumInterest.textContent = `${interest}€`;
};

// ##### CREATE USERNAME #####

const usrenameCreator = function (arr) {
  arr.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(` `)
      .map(function (x) {
        return x[0];
      })
      .join(``);
  });
};

usrenameCreator(accounts);

// ##### SHOW UI #####

const showUI = function (acc) {
  displayMovements(acc.movements);
  calcSummary(acc);
  balanceCalc(acc);
};

// ##### LOGIN #####

btnLogin.addEventListener(`click`, function (e) {
  e.preventDefault();

  accounts.find(function (acc) {
    if (inputLoginUsername.value === acc.username) {
      currentAccount = acc;
    }
  });
  labelWelcome.textContent = `Welcome back ${
    currentAccount.owner.split(` `)[0]
  }!`;
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    showUI(currentAccount);
    containerApp.style.opacity = 100;
    inputLoginPin.value = inputLoginUsername.value = ``;
  } else {
    alert(`WRONG PIN`);
  }
});

// ##### TRANSFERS #####

btnTransfer.addEventListener(`click`, function (e) {
  e.preventDefault();
  const reciever = accounts.find(function (acc) {
    if (acc.username === inputTransferTo.value) {
      return acc;
    }
  });
  const amount = Number(inputTransferAmount.value);

  if (
    reciever !== currentAccount &&
    amount > 0 &&
    currentAccount.balance >= amount &&
    reciever !== undefined
  ) {
    currentAccount.movements.push(-amount);
    reciever.movements.push(amount);
  }

  showUI(currentAccount);
  inputTransferAmount.value = inputTransferTo.value = ``;
});

// ##### CLOSE ACCOUNT #####

btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(function (acc) {
      return acc === currentAccount;
    });
    accounts.splice(index, 1);
    currentAccount = undefined;

    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Login to get started`;
    inputCloseUsername.value = inputClosePin.value = ``;
  }
});

// ##### SORT #####
let sorted = true;
btnSort.addEventListener(`click`, function (e) {
  e.preventDefault();
  let movementsSorted = currentAccount.movements.slice().sort(function (a, b) {
    return b - a;
  });
  if (sorted === true) {
    displayMovements(movementsSorted);
    document.querySelector(`.btn--sort`).innerHTML = `&downarrow; SORT`;
  } else if (sorted === false) {
    displayMovements(currentAccount.movements);
    document.querySelector(`.btn--sort`).innerHTML = `SORT`;
  }
  sorted = !sorted;
});
