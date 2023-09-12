let computer_number = document.querySelector(".number");

let random_number = Math.floor(Math.random() * 20 + 1);

let my_number = document.querySelector(".your-number").value;

let check_button = document.querySelector(".check-button");

let result = document.querySelector(".result");

computer_number.innerHTML = random_number;

console.log(my_number);
check_button.addEventListener("click", function () {
  change_result(random_number);
});

function change_result(random_number) {
  if (my_number.value > random_number) {
    result.innerHTML = "too high";
  } else if (my_number.value < random_number) {
    result.innerHTML = "too low";
  } else {
    result.innerHTML = "correct number";
  }
}
