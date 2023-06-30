var numberofdurms=document.querySelectorAll(".drum").length;

for(var i=0; i<numberofdurms; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",function (){
    var button = this.innerHTML;
makesound(button);
activebutton(button);
  });
}
document.addEventListener("keydown",function(event){
  makesound(event.key);
  activebutton(event.key);
})


function makesound(key){
  switch(key){
    case "w":
      var crash = new Audio("/Users/venkatarevanthnaidudanala/Desktop/Drum Kit Starting Files/sounds/crash.mp3");
      crash.play();
    break;
    case "a":
      var kick = new Audio("/Users/venkatarevanthnaidudanala/Desktop/Drum Kit Starting Files/sounds/kick-bass.mp3");
      kick.play();
    break;
    case "s":
      var snare = new Audio("/Users/venkatarevanthnaidudanala/Desktop/Drum Kit Starting Files/sounds/snare.mp3");
      snare.play();
    break;
    case "d":
      var tom1 = new Audio("/Users/venkatarevanthnaidudanala/Desktop/Drum Kit Starting Files/sounds/tom-1.mp3");
      tom1.play();
    break;
    case "j":
      var tom2 = new Audio("/Users/venkatarevanthnaidudanala/Desktop/Drum Kit Starting Files/sounds/tom-2.mp3");
      tom2.play();
    break;
    case "k":
      var tom3 = new Audio("/Users/venkatarevanthnaidudanala/Desktop/Drum Kit Starting Files/sounds/tom-3.mp3");
    tom3.play();
    break;
    case "l":
      var tom4 = new Audio("/Users/venkatarevanthnaidudanala/Desktop/Drum Kit Starting Files/sounds/tom-4.mp3");
      tom4.play();
    break;
    default:
    console.log(key);
}
}


function activebutton(currentkey){
  var activekey = document.querySelector("."+currentkey);
  activekey.classList.add("pressed");
  setTimeout(function(){
    activekey.classList.remove("pressed");
  },100);
}
