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


//################################
// INHERITANCE BETWEEN CLASSES //CONSTRU FUN
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

//################################
// INHERITANCE BETWEEN CLASSES //ES6
//################################

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    const now = new Date();
    return now.getFullYear() - this.birthYear;
  }

  static hey() {
    console.log(`Hey there`);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `Hi my name is ${
        this.firstName
      }, I am ${this.calcAge()} years old and I attend ${this.course} course`
    );
  }
}

const martha = new StudentCl(`Martha`, 1998, `CS`);

martha.introduce();

//################################
// INHERITANCE BETWEEN CLASSES //Object.create()
//################################

const PersonProto = {
  calcAge() {
    const now = new Date();
    return now.getFullYear() - this.birthYear;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init(`Steven`, 1998);

//
//
//

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(
    `Hi my name is ${
      this.firstName
    }, I am ${this.calcAge()} years old and I attend ${this.course} course`
  );
};

const jay = Object.create(StudentProto);
jay.init(`Jay`, 1996, `Computer Science`);

console.log(jay);
jay.introduce();
*/

//################################
// SETTING PRIVATE METHODS AND VARIABLES
//################################

class Account {
  //public fields
  locale = navigator.language;
  //private fields
  #movements = [];
  #pin;

  constructor(owner, curr, pin) {
    this.owner = owner;
    this.curr = curr;
    //setting private pin
    this.#pin = pin;
  }
  // Public Interface (API)
  deposit(mov) {
    this.#movements.push(mov);
    return this;
  }

  withdrawal(mov) {
    this.#movements.push(-mov);
    return this;
  }

  getLoan(mov) {
    if (this.#approveLoan()) {
      this.#movements.push(mov);
    }
    return this;
  }

  //PRIVATE METHOD
  #approveLoan(mov) {
    return true;
  }
}

const acc1 = new Account(`Janusz`, `EUR`, 1234);

acc1.deposit(200);
acc1.withdrawal(150);
acc1.getLoan(250);

console.log(acc1);

//################################
// CHAINING METHODS
//################################

//If you want to have chaining methods You have to add //return this//
//to every method that You want to be chainable

acc1.deposit(500).deposit(300).withdrawal(200).getLoan(300);

console.log(acc1);
