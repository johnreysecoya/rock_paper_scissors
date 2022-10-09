"use strict";

let available_choice = ["rock", "paper", "scissor"];

// General Function

// Computer and User Choice
function computer_choice(choices) {
  let random_index = Math.floor(Math.random() * choices.length);
  return choices[random_index];
}

function user_choice(choices) {
  let choice = prompt("Choose rock/papaer/scissors").toLowerCase();
  while (true)
    if (is_valid(choice, choices)) {
      break;
    } else {
      choice = prompt(
        "Please Try again! Choose rock/papaer/scissors"
      ).toLowerCase();
    }
  return choice;
}

// Display functions
function display_user_choice(user) {
  console.log(`User chooses ${user}`);
}

function display_computer_choice(computer) {
  console.log(`Computer chooses ${computer}`);
}

function display_round_winner(winner, message) {
  if (winner == "draw") {
    console.log("Draw!");
  } else {
    console.log(
      `${
        winner.charAt(0).toUpperCase() + winner.slice(1)
      } wins this round, ${message}`
    );
  }
}

function display_score(score_1, score_2) {
  console.log(`User Score: ${score_1}`);
  console.log(`Computer Score: ${score_2}`);
}

function display_grand_winner(user) {
  let winner = grand_winner(user);
  console.log(`${winner} is the champion`);
}

// Checking functions

function is_valid(user_choice, choices) {
  return choices.includes(user_choice);
}

// main functions

// Check which of the two piece wins ie, paper vs rock etc
function winning_piece(two_choice) {
  let [user, computer] = two_choice;
  if (user == computer) {
    return "draw";
  } else {
    if (two_choice.includes("paper") && two_choice.includes("rock")) {
      return ["paper", "paper beats rock"];
    } else if (two_choice.includes("rock") && two_choice.includes("scissor")) {
      return ["rock", "rock beats scissor"];
    } else {
      return ["scissor", "scissor beats paper"];
    }
  }
}

// to check which user holds the winning piece
function who_won(win_piece, user_computer) {
  let [user, computer] = user_computer;
  if (win_piece == user) {
    return "user";
  } else if (win_piece == computer) {
    return "computer";
  } else {
    return "draw";
  }
}

// To return who is the winner of a single game
function one_game_result(choices) {
  let user = user_choice(choices);
  let computer = computer_choice(choices);
  let user_computer = [user, computer];
  let [win_piece, message] = winning_piece(user_computer);
  let round_winner = who_won(win_piece, user_computer);
  display_user_choice(user);
  display_computer_choice(computer);
  display_round_winner(round_winner, message);
  return round_winner;
}

function grand_winner(user_score) {
  if (user_score == 5) {
    return "User";
  } else {
    return "Computer";
  }
}

function game_loop() {
  let user_score = 0;
  let computer_score = 0;

  while (user_score != 5 && computer_score != 5) {
    display_score(user_score, computer_score);
    let one_game = one_game_result(available_choice);
    if (one_game == "user") {
      user_score += 1;
    } else if (one_game == "computer") {
      computer_score += 1;
    }
  }
  display_grand_winner(user_score);
}

game_loop();
