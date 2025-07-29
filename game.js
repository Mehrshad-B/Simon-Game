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
  checkAnswer(gamePattern[gamePattern.length - 1]);
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[userClickedPattern.length - 1] === currentLevel) {
    if (userClickedPattern == gamePattern) {
      //come to this for checking if both arrays are the same so game can continue
      setTimeout(nextSequence(), 1000);
      userClickedPattern = [];
    }
  } else {
    alert("wrong");
  }
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

    default:
      wrongAudio.play();
      break;
  }
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
