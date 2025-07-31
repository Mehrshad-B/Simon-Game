var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

var blueAudio = new Audio("sounds/blue.mp3");
var greenAudio = new Audio("sounds/green.mp3");
var redAudio = new Audio("sounds/red.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var wrongAudio = new Audio("sounds/wrong.mp3");

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  buttonColours.push(randomChosenColour);
  gamePattern.push(randomChosenColour);

  $(`#${randomChosenColour}`).fadeOut("10").fadeIn("10");
  makeSound(randomChosenColour);
  $("h1").text(`Level ${level}`);
  level++;
}

$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  makeSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern[userClickedPattern.length - 1]);
});

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

function checkAnswer(currentLevel) {
  if (gamePattern[userClickedPattern.length - 1] === currentLevel) {
    if (arraysAreEqual(gamePattern, userClickedPattern)) {
      setTimeout(nextSequence(), 1000);
      userClickedPattern = [];
    }
  } else {
    makeSound("wrong");
    $("body").addClass("game-over");
    animateGameOver();
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  $(document).keypress(function () {
    level = 0;
    nextSequence();
  });
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

$(document).keypress(function () {
  nextSequence();
});
