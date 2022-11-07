//alert("this is a test!");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

//$("button".id(randomChosenColour).animate(transition: 1s ease;).animate(brightness:3;));

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();

}
