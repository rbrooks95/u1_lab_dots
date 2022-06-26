/*
 * DOTS: Level Two
 *
 */
const ball = document.querySelectorAll(".js-ball");
let score = document.querySelector(".js-score");
const scoreKepper = document.querySelector(".score");
const winner = document.querySelector(".level-winner");
const arr = [ball];

for (let i = 0; i < ball.length; i++) {
  ball[i].addEventListener("click", () => {
    score += 10;
    scoreKepper.innerText = score;
    if (score === 100) {
      winner.style.opacity = 1;
    }
  });
}
