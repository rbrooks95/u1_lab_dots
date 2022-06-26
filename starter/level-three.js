/*
 * DOTS: Level Three
 *
 */
let balls = document.querySelectorAll(".js-ball");

let header = document.querySelector(".js-score");
let levelWinner = document.querySelector(".level-winner");

let score = 0;
for (let i = 0; i < balls.length; i++) {
  balls[i].addEventListener("click", () => {
    score += parseInt(balls[i].getAttribute("data-increment"));
    header.innerText = score;
    if (score === 100) {
      levelWinner.getElementsByClassName.opacity = 1;
    }
  });
}
