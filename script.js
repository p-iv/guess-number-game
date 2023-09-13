const computer_number = document.querySelector(".number");

const random_number = Math.trunc(Math.random() * 20) + 1;

const my_number = Number(document.querySelector(".your-number").value);

const check_button = document.querySelector(".check-button");

const result = document.querySelector(".result");

const score = document.querySelector(".score");

const container = document.querySelector(".main-container");

const title = document.querySelector(".title");

let totalScore = 10;

check_button.addEventListener("click", function () {
  let my_number = Number(document.querySelector(".your-number").value);

  checkResult(my_number);

  changeResult(my_number);

  changeBackground(my_number);

  youLoose(totalScore);
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

function changeResult(my_number) {
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
    container.textContent = "You Loose!!!";
    container.classList.add("youLoose");
  }
}
