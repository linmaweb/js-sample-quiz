import { shuffle } from "./utilities";

const view = {
  score: document.querySelector("#score strong"),
  question: document.querySelector("#question"),
  result: document.querySelector("#result"),
  info: document.querySelector("#info"),
  start: document.querySelector("#start"),
  response: document.querySelector("#response"),
  timer: document.querySelector("#timer strong"),
  hiScore: document.querySelector("#hiScore strong"),

  render(target, content, attributes) {
    for (const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
  },

  show(element) {
    element.style.display = "block";
  },

  hide(element) {
    element.style.display = "none";
  },

  setup() {
    this.show(this.question);
    this.show(this.response);
    this.show(this.result);
    this.hide(this.start);
    this.render(this.score, game.score);
    this.render(this.result, "");
    this.render(this.info, "");
    this.render(this.hiScore, game.hiScore());
  },

  teardown() {
    this.hide(this.question);
    this.hide(this.response);
    this.hide(this.result);
    this.show(this.start);
    this.render(this.hiScore, game.hiScore());
  },

  buttons(array) {
    return array.map((value) => `<button>${value}</button>`).join("");
  }

};

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

  ask(name) {
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

export { view, game };
