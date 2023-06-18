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

// checkDogs(dogsJulia, dogsKate);

const Data1 = [5, 2, 4, 1, 15, 8, 3];
const Data2 = [16, 6, 10, 5, 6, 1, 4];

const calcHumanAge = function (ages) {
  const humanAges = ages
    .map(function (age) {
      if (age <= 2) {
        return age * 2;
      } else {
        return 16 + age * 4;
      }
    })
    .filter(function (age) {
      if (age >= 18) {
        return age;
      }
    })
    .reduce(function (sum, age, i, arr) {
      return sum + age / arr.length;
    }, 0);
  return humanAges;
};

console.log(calcHumanAge(Data1));
console.log(calcHumanAge(Data2));
