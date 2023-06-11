"use strict";
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  displayResults(input = `array`) {
    if (input === `array`) {
      console.log(this.answers);
    } else {
      console.log(`Poll results are: ${this.answers.join(`, `)}`);
    }
  },
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n${this.options.join(`\n`)}\n(Write option number)`
      )
    );
    if (typeof answer === `number` && answer < this.answers.length) {
      this.answers[answer]++;
    } else {
      alert(`!!!You put not a valid number!!! \n\nTRY AGAIN`);
    }
    this.displayResults();
    this.displayResults(`string`);
  },
};

document
  .querySelector(`.poll`)
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector(`body`).addEventListener(`click`, function () {
    header.style.color = `blue`;
  });
})();
*/
