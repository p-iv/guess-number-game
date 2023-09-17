const computer_number = document.querySelector(".number");

const random_number = Math.trunc(Math.random() * 20) + 1;

const my_number = Number(document.querySelector(".your-number").value);

const check_button = document.querySelector(".check-button");

const result = document.querySelector(".result");

const score = document.querySelector(".score");

const container = document.querySelector(".main-container");

const title = document.querySelector(".title");

const win_again_button = document.querySelector(".win-again-button");

const loose_again_button = document.querySelector(".loose-again-button");

const win_modal = document.querySelector(".win-modal-window");

const overlay = document.querySelector(".overlay");

const modal_score = document.querySelector(".win-modal-score");

const loose_modal = document.querySelector(".loose-modal-window");

const loose_number = document.querySelector(".loose-modal-number");

const start_button = document.querySelector(".start-button");

const info_window = document.querySelector(".modal-info-window");

const info_button = document.querySelector(".info-button");

const close_button = document.querySelector(".close-button");

let totalScore = 5;

check_button.addEventListener("click", function () {
  let my_number = Number(document.querySelector(".your-number").value);

  checkResult(my_number);

  changeScore(my_number);

  youWon(my_number);

  youLoose(totalScore);
});

win_again_button.addEventListener("click", function () {
  location.reload();
});

loose_again_button.addEventListener("click", function () {
  location.reload();
});

start_button.addEventListener("click", function () {
  info_window.classList.add("hidden");
  overlay.classList.add("hidden");
});

close_button.addEventListener("click", function () {
  info_window.classList.add("hidden");
  overlay.classList.add("hidden");
});

info_button.addEventListener("click", function () {
  info_window.classList.remove("hidden");
  overlay.classList.remove("hidden");
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

function youWon(my_number) {
  if (my_number === random_number) {
    win_modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    modal_score.textContent = totalScore;
  }
}

function youLoose(totalScore) {
  if (totalScore === 0) {
    loose_modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    loose_number.textContent = random_number;
  }
}
