/*
 * DOTS: Level One
 *
 */
let score = 0;
const ball = document.querySelector(".js-ball ");

const scoreDispaly = document.querySelector(".js-score");
const levelWinner = document.querySelector(".level-winner");

ball.addEventListener("click", () => {
  score += 10;
  scoreDispaly.innerText = score;
  if (score === 100) {
    levelWinner.style.opacity = 1;
  }
});
