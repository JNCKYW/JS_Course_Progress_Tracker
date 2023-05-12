'use strict';

/*function calcAge(birthYear) {
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

const f = janusz.calcAge;
f();
*/

const janusz = {
  year: 1994,
  firstName: `Janusz`,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);

    //SOLUTION 1
    //   const self = this; //bez tej linijki nie bylibyśmy w stanie używać this keyword w poniszej funkcji
    //   const isMillenial = function () {
    //     console.log(self.year >= 1981 && self.year <= 1996);
    //   };
    //   isMillenial();
    // },

    //SOLUTION 2
    // arrow function bierze this keyword z funkcji która ją otacza więc będzie takie samo jak dla funkcji calcAge
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  //tutaj bedzie undefined bo arrow function bierze this keyword z funkcji w ktorej sie znajduje a tutaj nie jest w żadnmej funkcji!!
  greet: () => console.log(`Hey ${this.firstName}`),
};

janusz.greet();
janusz.calcAge();

//ARGUMENTS KEYWORD

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(addExpr(2, 5, 6, 7, 8, 9));

//arguments keyword pokazuje nam wszystkie argumenty które zostały przekazane jakie zostały przekazane funkcji
//dodawanie więcej argumentów niż to pierwotnie zadeklarowano w funkcji jest kompletnie w porządku
//po prostu nie zostaną wykonane bo nie ma w funkcji opisane co z nimi zrobić

//OBJECTS VS PRIMITIVES

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: `Janusz`,
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(friend.age);
console.log(me.age);
