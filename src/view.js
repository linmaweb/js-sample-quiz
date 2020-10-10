import {score, question, result, info, start, response, timer, hiScore } from "./variables";
import {game} from './game'

const view = {

  score, 
  question, 
  result, 
  info, 
  start, 
  response, 
  timer, 
  hiScore,
  
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

export { view };