"use strict";
/*
console.log(`------------CHALLANGE-1-----------`);

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...playerNames) {
  //let z = 0;
  //for (let x = 0; x < playerNames.length; x++) {
  //z++;
  //}
  console.log(
    `Today's score is ${playerNames.length} and the scorers are`,
    ...playerNames
  );
};

printGoals(...game.scored);

team2 > team1 && console.log(game.team1);
team1 > team2 && console.log(game.team2);

console.log(`------------CHALLANGE-2-----------`);

//TASK 1

for (const [x, y] of game.scored.entries()) {
  console.log(`Goal ${x + 1}: ${y}`);
}

//TASK 2

let avgOdd = 0;
const values1 = Object.values(game.odds);

for (const odd of values1) {
  avgOdd += odd;
}

console.log(`The avarage odd is ${avgOdd / values1.length}`);

//TASK 3

const names = Object.keys(game.odds);

for (const name of names) {
  if (name === `team1` || name === `team2`) {
    console.log(`Odd of victory ${game[name]}: ${game.odds[name]}`);
  } else {
    console.log(`Odd of draw: ${game.odds.x}`);
  }
}

//TASK 4

const scorers = {};

game.scored.forEach((element) => {
  scorers[element] = (scorers[element] || 0) + 1;
});

console.log(scorers);

//SOLUTION #2

// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// 

console.log(`------------CHALLANGE-3-----------`);

const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

const events = [...new Set(gameEvents.values())];

gameEvents.delete(64);
console.log(gameEvents);

let eventCounter = 90 / gameEvents.size;
console.log(`An event happened, on 
average, every ${eventCounter} minutes`);

//here is second method

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [a, b] of gameEvents) {
  if (a < 45) {
    console.log(`[FIRST HALF] ${a}: ${b} `);
  } else {
    console.log(`[SECOND HALF] ${a}: ${b} `);
  }
}*/

/*
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/

console.log(`------------CHALLANGE-4-----------`);

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const btn = document.querySelector(`button`);

btn.addEventListener(`click`, function () {
  const text = document.querySelector(`textarea`).value;
  const textArr = text.split(`\n`);
  let i = 0;
  for (let word of textArr) {
    const wordTrimmed = word.trim();
    const index = wordTrimmed.indexOf(`_`);
    const wordRemoved = wordTrimmed.replace(`_`, ``);
    const wordToLower = wordRemoved.toLowerCase();
    const wordCorrect =
      wordToLower.slice(0, index) +
      wordToLower[index].toUpperCase() +
      wordToLower.slice(index + 1);
    i++;
    console.log(wordCorrect.padEnd(20), `✅`.repeat(i));
  }
});

//MY SOLUTION ⬆⬆⬆⬆⬆⬆

//TEACHER SOLUTION ⬇⬇⬇⬇⬇⬇
