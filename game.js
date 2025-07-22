var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var audio = newAudio

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()];

buttonColours.push(randomChosenColour);

console.log(randomChosenColour);
console.log(buttonColours);

$(`#${randomChosenColour}`).fadeOut(10).fadeIn(10);

$(`#${randomChosenColour}`).on("click", function () {
  audio.play();
});
