'use strict';

//################################
// CONSTRUCTOR FUNCTIONS
//################################

/*const Person = function (firstName, birthYear) {
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

const h1 = document.querySelector(`h1`);

console.dir(h1);


//################################
// ES6 CLASSES
//################################

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    const now = new Date();
    console.log(now.getFullYear() - this.birthYear);
  }
}

PersonCl.prototype.greeter = function () {
  console.log(`Hey, how are you ${this.firstName}`);
};

const janusz = new PersonCl(`Janusz`, 1998);

console.log(janusz);
janusz.calcAge();
janusz.greeter();

//1. Classes are not hoisted - we cant use them before we declare them
//2. Classes are first-class citizens - we can pass them info functions and get them from functions
//3. Classes are executed in strict mode always

//################################
// SETTER AND GETTER
//################################

// Every object in JS have setter and getter property which is function that get or set value

const account = {
  owner: `Janusz`,
  movements: [100, 50, 60, 79],

  get latest() {
    return this.movements.slice().pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

//getter
console.log(account.latest);

//setter
account.latest = 50;
console.log(account.movements);

//Getters and setters can be usefull in data validations

//################################
// HOW TO ADD STATIC METHODS THAT ARE NOT INHERITED
//################################

PersonCl.hey = function () {
  console.log(`hey there`);
};
PersonCl.hey();

Or You can just add method like normall one into PersonCl but add
//static keyword before it:
//
//
//static hey(){
  console.log(`hey there`);
}


const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

steven.init(`Steven`, 2002);
steven.calcAge();
console.log(steven);
*/

//################################
// INHERITANCE BETWEEN CLASSES
//################################

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  const now = new Date();
  return now.getFullYear() - this.birthYear;
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes (methods that we defined on Person object)
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(
    `Hi my name is ${
      this.firstName
    }, I am ${this.calcAge()} years old and I attend ${this.course} course`
  );
};

const mike = new Student(`Mike`, 1998, `Computer science`);

mike.introduce();
