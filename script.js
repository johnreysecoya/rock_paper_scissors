"use strict";

const TO_CHOOSE = ["rock", "paper", "scissor"];

// General Function

// Computer and User Choice

// Get Computer Choice in the choices/availble choices array
function computer_choice(choices) {
  let random_index = Math.floor(Math.random() * choices.length);
  return choices[random_index];
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

// Check which of the two piece wins, ie, paper vs rock etc
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

// Check which user holds the winning piece
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
function one_game_result(choice, to_choose) {
  let user = choice;
  let computer = computer_choice(to_choose);
  let user_computer = [user, computer];
  let [win_piece, message] = winning_piece(user_computer);
  let round_winner = who_won(win_piece, user_computer);
  display_user_choice(user);
  display_computer_choice(computer);
  display_round_winner(round_winner, message);
  return round_winner;
}

// Check who is the grand winner of the game
function grand_winner(user_score) {
  if (user_score == 5) {
    return "User";
  } else {
    return "Computer";
  }
}

// The game loop, loop until someone reaches a score of 5
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

function update_score(winner) {
  if (winner == "user") {
    user_score += 1;
  } else if (winner == "computer") {
    computer_score += 1;
  }
}

function update_text_score() {
  let user_score_text = document.querySelector(".user_score");
  let computer_score_text = document.querySelector(".computer_score");
  user_score_text.textContent = `User Score: ${user_score}`;
  computer_score_text.textContent = `Computer Score: ${computer_score}`;
}

// // game_loop();
let rockbtn = document.querySelector(".rock");
let paperbtn = document.querySelector(".paper");
let scissorbtn = document.querySelector(".scissor");

let user_score = 0;
let computer_score = 0;

rockbtn.addEventListener("click", () => {
  let winner = one_game_result(rockbtn.textContent, TO_CHOOSE);
  if (user_score == 5 || computer_score == 5) {
    alert("Game is over");
  } else {
    update_score(winner);
    update_text_score();
    display_winner_text(winner);
  }
});

paperbtn.addEventListener("click", () => {
  let winner = one_game_result(paperbtn.textContent, TO_CHOOSE);
  if (user_score == 5 || computer_score == 5) {
    alert("Game is over");
  } else {
    update_score(winner);
    update_text_score();
    display_winner_text(winner);
  }
});

scissorbtn.addEventListener("click", () => {
  let winner = one_game_result(scissorbtn.textContent, TO_CHOOSE);
  if (user_score == 5 || computer_score == 5) {
    alert("Game is over");
  } else {
    update_score(winner);
    update_text_score();
    display_winner_text(winner);
  }
});
