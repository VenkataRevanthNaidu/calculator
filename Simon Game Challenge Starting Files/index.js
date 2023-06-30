var buttonColours=["red","blue", "green", "yellow"];


var gamePattern=[];

var userClickedPattern=[];

var levle= 0;


var started=false;
$(document).keypress(function(){
  if(!started){
    $("#level-title").text("Level"+levle);
    nextSequence();
    started=true;
  }
});
function nextSequence(){
    userClickedPattern = [];
levle++;
$("#level-title").text("Level"+levle);

  var num = Math.floor(Math.random()*4);
  // if(num<=3){
  //   var randomNumber = num;
  // }
  var randomChosenColour=buttonColours[num];
  gamePattern.push(randomChosenColour);
  // console.log(gamePattern);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
// /Users/venkatarevanthnaidudanala/Desktop/Simon Game Challenge Starting Files/sounds/blue.mp3
playSound(randomChosenColour);
}
function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {
    var audio2= new Audio("sounds/wrong.mp3");
    audio2.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
  }, 100);
  $("#level-title").text("Game Over, Press Any Key to Restart");
    console.log("wrong");
    startOver();

  }
}
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");

userClickedPattern.push(userChosenColour);

// console.log(userClickedPattern);
 playSound(userChosenColour);
 animatePress(userChosenColour);
 checkAnswer(userClickedPattern.length-1);
});
function playSound(name){
  var audio= new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
}, 100);
}
