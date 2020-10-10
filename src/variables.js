const score = document.querySelector("#score strong");
const question = document.querySelector("#question");
const result = document.querySelector("#result");
const info = document.querySelector("#info");
const start = document.querySelector("#start");
const response = document.querySelector("#response");
const timer = document.querySelector("#timer strong");
const hiScore = document.querySelector("#hiScore strong");

const random = (a, b = 1) => {
  if (b === 1) {
    [a, b] = [b, a];
  }
  return Math.floor((b - a + 1) * Math.random()) + a;
}

const shuffle = (array) => {
  for (let i = array.length; i; i--) {
    let j = random(i) - 1;
    [array[i - 1], array[j]] = [array[j], array[i - 1]];
  }
}

export { score, question, result, info, start, response, timer, hiScore, random, shuffle };
