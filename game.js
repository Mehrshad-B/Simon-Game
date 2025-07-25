var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
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
});

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

$(document).keyPress(function () {
  if (gamePattern.length == 0) {
    nextSequence();
  } else {
  }
});
