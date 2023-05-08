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
