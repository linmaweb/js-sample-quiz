import { view } from './view';
import { shuffle } from "./variables";

const game = {
  start(quiz) {
    this.score = 0;
    this.questions = [...quiz];
    view.setup();
    this.secondsRemaining = 60;
    this.timer = setInterval(this.countdown, 1000);
    this.ask();
  },

  countdown() {
    game.secondsRemaining--;
    view.render(view.timer, game.secondsRemaining);
    if (game.secondsRemaining <= 0) {
      game.gameOver();
    }
  },

  ask() {
    if (this.questions.length > 2) {
      shuffle(this.questions);
      this.question = this.questions.pop();
      const options = [
        this.questions[0].a,
        this.questions[1].a,
        this.question.a,
      ];
      shuffle(options);
      const question = `What is ${this.question.q}?`;
      view.render(view.question, question);
      view.render(view.response, view.buttons(options));
    } else {
      this.gameOver();
    }
  },

  check(event) {
    const response = event.target.textContent;
    const answer = this.question.a;
    if (response === answer) {
      view.render(view.result, "Correct!", { class: "correct" });
      this.score++;
      view.render(view.score, this.score);
    } else {
      view.render(
        view.result,
        `<p>Wrong!</p> <p>The correct answer for <strong>"What is ${this.question.q}"</strong> was: </p> <p><em>${answer}<em></p>`,
        {
          class: "wrong",
        }
      );
    }

    this.ask();
  },

  gameOver() {
    view.render(
      view.info,
      `<p>Game Over! You scored ${this.score} point${
        this.score !== 1 ? "s" : ""
      }</p>`
    );
    view.teardown();
    clearInterval(this.timer);
  },

  hiScore() {
    const hi = localStorage.getItem("highScore") || 0;
    if (this.score > hi || hi === 0)
      localStorage.setItem("highScore", this.score);
    return localStorage.getItem("highScore");
  }

};

export { game };
