'use strict';

/*const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

const BMW = new Car(`BMW`, 120);
const Mercedes = new Car(`Mercedes`, 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.brand} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.brand} going at ${this.speed} km/h`);
};

BMW.accelerate();
Mercedes.accelerate();

BMW.brake();
Mercedes.brake();


//##################################
// ES6 Classes
//##################################

class CarCl {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.brand} going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const Ford = new CarCl(`Ford`, 100);

// Ford.accelerate();
// Ford.brake();
console.log(Ford.speedUS);
Ford.speedUS = 100;
console.log(Ford.speed);
*/

//##################################
// CONSTRUCTOR FUNCTIONS INHERITAGE
//##################################

const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.brand} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.brand} going at ${this.speed} km/h`);
};

//new child constructor function
const EV = function (brand, speed, charge) {
  Car.call(this, brand, speed);
  this.charge = charge;
};

//linking Car prototype to EV prototype
EV.prototype = Object.create(Car.prototype);

//adding new methods to EV
EV.prototype.chargeBattery = function (battery) {
  this.charge = battery;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.brand} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV(`Tesla`, 120, 23);
