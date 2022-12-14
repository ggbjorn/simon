//alert("this is a test!");
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    //console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  }
  else{
    //console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key To Restart");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

//$("html").one("keypress", function () {
  //nextSequence();
//});


function nextSequence(){
  userClickedPattern = [];
  level = level + 1;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

//$("button".id(randomChosenColour).animate(transition: 1s ease;).animate(brightness:3;));

//ALTERNATE way which plays the sequence prior to the new addition. Cannot get the timing right

/*  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(function() {
      $("#" + gamePattern[i]).fadeIn(100).fadeOut(100).fadeIn(100);
            }, 1000);
      playSound(gamePattern[i]);

    }
*/



//COMMENT out next two lines if playing sequence prior
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);

  }



function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
  }

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
