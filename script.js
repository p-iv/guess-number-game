const computer_number = document.querySelector(".number");

const random_number = Math.trunc(Math.random() * 20) + 1;

const my_number = Number(document.querySelector(".your-number").value);

const check_button = document.querySelector(".check-button");

const result = document.querySelector(".result");

const score = document.querySelector(".score");

const container = document.querySelector(".main-container");

const title = document.querySelector(".title");

const again_button = document.querySelector(".again-button");

let totalScore = 10;

check_button.addEventListener("click", function () {
  let my_number = Number(document.querySelector(".your-number").value);

  checkResult(my_number);

  changeScore(my_number);

  changeBackground(my_number);

  youLoose(totalScore);
});

again_button.addEventListener("click", function () {
  location.reload();
});

function checkResult(my_number) {
  if (!my_number) {
    result.textContent = "not a number!!!";
  } else if (my_number === random_number) {
    result.textContent = "correct number";
    computer_number.textContent = random_number;
  } else if (my_number > random_number) {
    result.textContent = "too high";
  } else {
    result.textContent = "too low";
  }
}

function changeScore(my_number) {
  if (my_number !== random_number) {
    totalScore -= 1;
    score.textContent = totalScore;
  } else if (my_number === random_number) {
    totalScore += 5;
    score.textContent = totalScore;
  }
}

function changeBackground(my_number) {
  if (my_number === random_number) {
    container.classList.add("changeBackground");
    title.textContent = "Correct!!!";
  }
}

function youLoose(totalScore) {
  if (totalScore === 0) {
    title.textContent = "You Loose!!!";
    container.classList.add("youLoose");
  }
}
