let available_choice = ["rock", "paper", "scissor"];

function computer_choice(choices) {
  let random_index = Math.floor(Math.random() * choices.length);
  return choices[random_index];
}

function user_choice(choices) {
  user_choice = prompt("Choose rock/papaer/scissors").toLowerCase();
  while (true)
    if (is_valid(user_choice, choices)) {
      break;
    } else {
      user_choice = prompt(
        "Please Try again! Choose rock/papaer/scissors"
      ).toLowerCase();
    }
  return user_choice;
}

function is_valid(user_choice, choices) {
  return choices.includes(user_choice);
}

function winning_piece(two_choice) {
  if (two_choice[0] == two_choice[1]) {
    return "draw";
  } else {
    if (two_choice.includes("paper") && two_choice.includes("rock")) {
      return "paper";
    } else if (two_choice.includes("rock") && two_choice.includes("scissor")) {
      return "rock";
    } else {
      return "scissor";
    }
  }
}

function who_won(piece) {
  if (piece == user) {
    console.log("You won!");
  } else if (piece == computer) {
    console.log("Computer Won!");
  } else {
    console.log("Draw!");
  }
}

let user = user_choice(available_choice);
let computer = computer_choice(available_choice);

let user_computer = [user, computer];

let win_piece = winning_piece(user_computer);

console.log(user);
console.log(computer);
console.log(who_won(win_piece));
