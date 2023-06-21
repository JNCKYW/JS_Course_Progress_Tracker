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

const movementsInUsd = movements
  .filter(function (mov) {
    return mov > 0;
  })
  .map(function (mov) {
    return mov * eurToUsd;
  })
  .reduce(function (sum, mov) {
    return sum + mov;
  }, 0);

console.log(movementsInUsd);


const balance = movements.reduce(function (sum, val) {
  return sum + val;
}, 0);

console.log(balance);

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

// FIND

const firstWithdrawal = account1.movements.find(function (mov) {
  return mov < 0;
});

console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(function (acc) {
  return acc.owner === `Jessica Davis`;
});

console.log(account);
let accountt = ``;
for (const acc of accounts) {
  if (acc.owner === `Jessica Davis`) {
    accountt = acc;
  }
}

console.log(accountt);
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

const displayMovements = function (acc) {
  containerMovements.innerHTML = ``;
  acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};

const balanceCalc = function (acc) {
  acc.balance = acc.movements.reduce(function (sum, val) {
    return sum + val;
  }, 0);
  return (labelBalance.textContent = `${acc.balance}€`);
};

// const maxCalc = function (acc) {
//   const maximum = acc.movements.reduce(function (max, value) {
//     if (value > max) {
//       max = value;
//     }
//     return max;
//   }, 0);
//   console.log(maximum);
// };

// maxCalc(account1);

const calcDisplaySummary = function (acc) {
  //
  const incomes = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (sum, mov) {
      return sum + mov;
    }, 0);
  //
  const outcomes = acc.movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (sum, mov) {
      return sum + mov;
    }, 0);
  //
  const interest = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .map(function (mov) {
      return (mov * acc.interestRate) / 100;
    })
    .filter(function (mov) {
      return mov >= 1;
    })
    .reduce(function (sum, mov) {
      return sum + mov;
    }, 0);

  labelSumInterest.textContent = `${interest}€`;
  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${outcomes}€`;
};

const updateUI = function (acc) {
  // DISPLAY MOVEMENTS
  displayMovements(acc);
  // DISPLAY balance
  balanceCalc(acc);
  // DISPLAY summary
  calcDisplaySummary(acc);
};

/// ##### LOGIN TO APP #####

let currentAccount;
btnLogin.addEventListener(`click`, function (event) {
  event.preventDefault();
  currentAccount = accounts.find(function (acc) {
    if (inputLoginUsername.value === acc.username) {
      return acc;
    }
  });
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // DISPLAY UI
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(` `)[0]
    }`;
    containerApp.style.opacity = 100;
    // CLEAR INPUT FIELDS
    inputLoginUsername.value = inputLoginPin.value = ``;
    //UPDATE UI
    updateUI(currentAccount);
  } else {
    labelWelcome.textContent = `!!! WRONG LOGIN OR PIN !!!`;
  }
});

// ##### TRANSFERS #####
btnTransfer.addEventListener(`click`, function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(function (acc) {
    if (acc.username === inputTransferTo.value) {
      return acc;
    }
  });
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username &&
    recieverAcc !== undefined
  ) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);
  }
  updateUI(currentAccount);
  inputTransferTo.value = inputTransferAmount.value = ``;
});

// ##### CLOSE ACCOUNT #####
btnClose.addEventListener(`click`, function (e) {
  e.preventDefault();

  //FIND INDEX OF USER
  const currentAccountIndex = accounts.findIndex(function (acc) {
    if (acc.username === currentAccount.username) {
      return acc;
    }
  });

  //DELETE USER
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    accounts.splice(currentAccountIndex, 1);
  }

  // HIDE UI
  containerApp.style.opacity = 0;

  // CLEAR INPUTS
  inputCloseUsername.value = inputClosePin.value = ``;
});
