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
  { name: 'Petro', age: '37' },
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
