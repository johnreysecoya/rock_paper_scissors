"use strict";

const TO_CHOOSE = ["rock", "paper", "scissor"];

let rockbtn = document.querySelector(".rock");
let paperbtn = document.querySelector(".paper");
let scissorbtn = document.querySelector(".scissor");

let user_score = 0;
let computer_score = 0;

let user_choice = "";
let computer_choice = "";
let message_result = "";

let user_name = "";

// Compute Choice

// To return who is the winner of a single game

function one_game_result(choice, to_choose) {
  user_choice = choice;
  computer_choice = computer_choice_f(to_choose);
  let user_computer = [user_choice, computer_choice];
  let [win_piece, win_message] = winning_piece(user_computer);
  message_result = win_message;
  let round_winner = who_won(win_piece, user_computer);

  return round_winner;
}

function computer_choice_f(choices) {
  let random_index = Math.floor(Math.random() * choices.length);
  return choices[random_index];
}

// Check which of the two piece wins, ie, paper vs rock etc
function winning_piece(two_choice) {
  let [user, computer] = two_choice;
  if (user == computer) {
    return ["draw", "No one wins"];
  } else {
    if (two_choice.includes("paper") && two_choice.includes("rock")) {
      return ["paper", "Paper beats Rock!"];
    } else if (two_choice.includes("rock") && two_choice.includes("scissor")) {
      return ["rock", "Rock beats Scissor!"];
    } else {
      return ["scissor", "Scissor beats Paper!"];
    }
  }
}

// Check which user holds the winning piece
function who_won(win_piece, user_computer) {
  let [user, computer] = user_computer;
  if (win_piece == user) {
    return `${user_name}`;
  } else if (win_piece == computer) {
    return "computer";
  } else {
    return "draw";
  }
}

// Check who is the grand winner of the game
function grand_winner(user_score) {
  if (user_score == 5) {
    return "User";
  } else {
    return "Computer";
  }
}

function display_winner_text(winner) {
  let p_winner = document.querySelector(".winner_text");
  if (winner != "draw") {
    p_winner.textContent = `The winner is ${winner}`;
  } else {
    p_winner.textContent = "It's a draw!";
  }
  p_winner.classList.remove("hidden");

  if (user_score == 5) {
    p_winner.textContent = `Congratulations! You are the Grand Champion!`;
  } else if (computer_score == 5) {
    p_winner.textContent = `Sorry you lose. Computer is the Grand Champion!`;
  }
}

function display_user_computer_choice() {
  let user_para = document.querySelector(".user_choice_p");
  let computer_para = document.querySelector(".computer_choice_p");
  let message_para = document.querySelector(".result_message");

  user_para.textContent = `${user_name} chooses ${user_choice}`;
  computer_para.textContent = `Computer chooses ${computer_choice}`;
  message_para.textContent = `${message_result}`;
}

function update_score(winner) {
  if (winner == `${user_name}`) {
    user_score += 1;
  } else if (winner == "computer") {
    computer_score += 1;
  }
}

function update_text_score() {
  let user_score_text = document.querySelector(".user_score");
  let computer_score_text = document.querySelector(".computer_score");
  user_score_text.textContent = `${user_name} Score: ${user_score}`;
  computer_score_text.textContent = `Computer Score: ${computer_score}`;
}

function game(winner) {
  if (user_score == 5 || computer_score == 5) {
    alert("Game is over");
  } else {
    update_score(winner);
    update_text_score();
    display_user_computer_choice();
    display_winner_text(winner);
  }
}

// Game Start

while (true) {
  user_name = prompt("Enter your name: ");
  if (user_name == "") {
    alert("Name cannot be empty Try Again!");
  } else {
    break;
  }
}

let user_score_text = document.querySelector(".user_score");
user_score_text.textContent = `${user_name} Score: ${user_score}`;

// Event Listener

rockbtn.addEventListener("click", () => {
  let winner = one_game_result(rockbtn.textContent, TO_CHOOSE);
  game(winner);
});

paperbtn.addEventListener("click", () => {
  let winner = one_game_result(paperbtn.textContent, TO_CHOOSE);
  game(winner);
});

scissorbtn.addEventListener("click", () => {
  let winner = one_game_result(scissorbtn.textContent, TO_CHOOSE);
  game(winner);
});
