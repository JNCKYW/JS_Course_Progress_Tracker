'use strict';

//////////////////////////////////////
//CONSTRUCTOR FUNCTIONS

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER DO THIS vvvv
  // this.calcAge = function () {
  //   console.log(2023 - this.birthYear);
  // };
};

const janusz = new Person(`Janusz`, 1998);
const matilda = new Person(`Matilda`, 1999);

console.log(janusz);
console.log(matilda);

// 1. New {} is created
// 2. function is called and this keyword = {}
// 3. {} is linked to prototype
// 4. function automatically return {}

console.log(janusz instanceof Person);

// Prototypes

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

janusz.calcAge();
matilda.calcAge();

Person.prototype.species = `Homo Sapiens`;

console.log(janusz.species);
console.log(matilda.species);
