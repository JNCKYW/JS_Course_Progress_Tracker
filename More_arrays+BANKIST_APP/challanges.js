"use strict";

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

checkDogs(dogsJulia, dogsKate);
