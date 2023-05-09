'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName} You are ${age} years old born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = `Michał`;
      const str = `millenial ${firstName}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const firstName = `Janusz`;

calcAge(1995);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = `Janusz`;
// let job = `call center`;
// const year = 1991;

// console.log(declaration(2, 3));
// console.log(expression(2, 3));
// console.log(arrow(2, 3));

// function declaration(a, b) {
//   return a + b;
// }

// const expression = function (a, b) {
//   return a + b;
// };

// const arrow = (a, b) => a + b;

console.log(this);

const calcAgee = function (a) {
  console.log(2023 - a);
  console.log(this);
};

calcAgee(1998);

const calcAgeArrow = a => {
  console.log(2023 - a);
  console.log(this);
};

calcAgeArrow(1998);

const janusz = {
  year: 1998,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

janusz.calcAge();

const ania = {
  year: 1991,
};

ania.calcAge = janusz.calcAge;

ania.calcAge();
