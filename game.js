var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

var gamePattern = [];

var blueAudio = new Audio("./sounds/blue.mp3");
var greenAudio = new Audio("./sounds/green.mp3");
var redAudio = new Audio("./sounds/red.mp3");
var yellowAudio = new Audio("./sounds/yellow.mp3");
var wrongAudio = new Audio("./sounds/wrong.mp3");

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()];

buttonColours.push(randomChosenColour);

$(`#${randomChosenColour}`).fadeOut("10").fadeIn("10");

$(".btn").on("click", function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});
