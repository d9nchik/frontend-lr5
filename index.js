'use strict';

/* Functional programming */

// forEach - 1
const petArray = ['cat', 'dog', 'mouse', 'hamster'];
petArray.forEach(pet => console.log(`Pet type is ${pet}`));

// forEach - 2
document
  .querySelectorAll('ol li')
  .forEach(node => node.classList.remove('active'));

// map - 1

console.log(petArray.map(pet => [pet, pet.length]));

// map - 2
const players = [
  { name: 'Vasyl', age: 35 },
  { name: 'Dmytro', age: 22 },
  { name: 'Ivan', age: 34 },
  { name: 'Petro', age: 37 },
];

const nameOfPlayers = players.map(({ name }) => name);
console.log(`names of players: ${nameOfPlayers}`);

// filter - 1
const olderThan32 = nameOfPlayers.filter(({ age }) => age > 32);
console.log(`Players older than 32: ${olderThan32}`);

// filter - 2
const animalsThatContainsLetterA = petArray.filter(pet => pet.includes('a'));
console.log(`Animals that contains letter a: ${animalsThatContainsLetterA}`);

// some - 1
if (players.some(({ age }) => age < 18)) {
  console.log('Not adult team');
} else {
  console.log('Only adults');
}

// some - 2
const points = [60, 55, 76, 80, 100];
if (points.some(number => number < 60)) {
  console.log('Welcome to dopka!');
} else {
  console.log(`You're lucky boy)`);
}

// every - 1
if (points.every(number => number % 2)) {
  console.log('Every number is odd');
} else {
  console.log('Not every number is odd');
}

// every - 2
if (petArray.every(pet => pet.length > 2)) {
  console.log('all pets name are valid');
}

// reduce - 1
const sumOfAllPoints = points.reduce((prev, current) => prev + current);
console.log(`Sum of all points: ${sumOfAllPoints}`);

// reduce - 2
const totalAgeOfPlayers = players
  .map(({ age }) => age)
  .reduce((total, current) => total + current);

console.log(`Total age of sportsman is ${totalAgeOfPlayers}`);

// reduceRight - 1
console.log(
  petArray.reduceRight((previous, current) => `${previous} ${current}`)
);

// reduceRight - 2
console.log(
  players
    .map(({ name }) => name)
    .reduceRight((previous, current) => `${previous} ${current}`)
);

/* Object Oriented Programming */

// Prototypes
function Car(model) {
  this.model = model;
}

Car.prototype.ridding = function () {
  console.log(`ridding!`);
};

Car.prototype.getModel = function () {
  console.log(`Car model is ${this.model}!`);
};

const PrivateCar = function (model, ownerName) {
  Car.call(this, model);
  this.ownerName = ownerName;
  this._privateRideNoise = 'broom broom!';
};

PrivateCar.prototype = Object.create(Car.prototype);
PrivateCar.prototype.constructor = PrivateCar;
PrivateCar.prototype.getModel = function () {
  console.log(`${this.model}: owner - ${this.ownerName}!`);
  this.ridding();
};
PrivateCar.prototype.ridding = function () {
  console.log(this._privateRideNoise);
};

const myCar1 = new Car('Mustang');
myCar1.ridding();
myCar1.getModel();

const myPrivateCar = new PrivateCar('Porsche', 'Danylo');
myPrivateCar.ridding();
myPrivateCar.getModel();

console.log(myPrivateCar instanceof Car);
console.log(myPrivateCar instanceof PrivateCar);
console.log(myCar1 instanceof Car);
console.log(myCar1 instanceof PrivateCar);

// Functional style, closure

function funcCar(brand) {
  this.brand = brand;

  this.drive = function () {
    console.log('driving!');
  };

  this.presentCar = function () {
    console.log(`Car brand is ${this.brand}!`);
  };
}

function funcPrivateCar(brand, ownerName) {
  funcCar.call(this, brand);
  this.ownerName = ownerName;
  const _privateVoice = 'broom, broom!';

  function privateDrive() {
    console.log(_privateVoice);
  }

  this.presentCar = function () {
    console.log(`${this.brand}: owner - ${this.ownerName}!`);
    privateDrive();
  };
}

const myCar2 = new funcCar('Toyota');
myCar2.drive();
myCar2.presentCar();

const myPrivateCar2 = new funcPrivateCar('Mazda', 'Andrew');
myPrivateCar2.drive();
myPrivateCar2.presentCar();

// ES6+
class PerfectCar {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log('zhoom zhoom!');
  }

  present() {
    console.log(`Car name is ${this.brand}`);
  }
}

class PerfectPrivateCar extends PerfectCar {
  constructor(brand, ownerName) {
    super(brand);
    this.ownerName = ownerName;
    this.#privateVoice = 'dzin dzin!';
  }

  #privateVoice;

  #secretDrive() {
    return this.#privateVoice;
  }

  present() {
    console.log(
      `Hi, I'm smart car ${this.brand}, and I love my owner ${
        this.ownerName
      }! ${this.#secretDrive()}!`
    );
  }
}

const myAnimal3 = new PerfectCar('BMW');
myAnimal3.drive();
myAnimal3.present();

const myDog3 = new PerfectPrivateCar('RolsRoyce', 'Niemand');
myDog3.drive();
myDog3.present();
