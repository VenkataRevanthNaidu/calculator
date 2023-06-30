 var randomnumber1 =Math.round(Math.random()*6)+1;

 var randomsource="images/dice"+randomnumber1+".png";

 var image1=document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomsource);


 var randomnumber2 =Math.round(Math.random()*6)+1;

 var randomsource1="images/dice"+randomnumber2+".png";

 var image2=document.querySelectorAll("img")[1];

 image2.setAttribute("src",randomsource1);

 if(randomnumber1>randomnumber2){
   document.querySelector("h1").innerHTML="Player 1 wins";
 }
 else if (randomnumber1<randomnumber2) {
   document.querySelector("h1").innerHTML="Player 2 wins";
 }
 else{
   document.querySelector("h1").innerHTML="Draw!";
 }
