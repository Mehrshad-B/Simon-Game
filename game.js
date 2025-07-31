var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

var blueAudio = new Audio("sounds/blue.mp3");
var greenAudio = new Audio("sounds/green.mp3");
var redAudio = new Audio("sounds/red.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var wrongAudio = new Audio("sounds/wrong.mp3");

$(document).keypress(function () {
  if (!started) {
    started = true;
    nextSequence();
  }
});

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  buttonColours.push(randomChosenColour);
  gamePattern.push(randomChosenColour);

  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  makeSound(randomChosenColour);
  $("h1").text(`Level ${level}`);
  level++;
}

$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  makeSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    makeSound("wrong");
    animateGameOver();
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

function makeSound(key) {
  switch (key) {
    case "green":
      greenAudio.play();
      break;
    case "blue":
      blueAudio.play();
      break;

    case "red":
      redAudio.play();
      break;

    case "yellow":
      yellowAudio.play();
      break;

    case "wrong":
      wrongAudio.play();
      break;
  }
}

function animateGameOver() {
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 100);
}

function animatePress(currentcolour) {
  $(`#${currentcolour}`).addClass("pressed");
  setTimeout(function () {
    $(`#${currentcolour}`).removeClass("pressed");
  }, 100);
}
