
var player1 =  Math.floor(Math.random() * (6)) +1;

var randomDice1 = "images/" +"dice" +player1 +".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("scr", randomDice1);


var player2 =  Math.floor(Math.random() * (6)) +1;

var randomDice2 = "images/" +"dice" +player1 +".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("scr", randomDice2);


if(player1 > player2){
  document.querySelector("h1").innerHTML = "player1 won";
}
else if(player1 < player2){
  document.querySelector("h1").innerHTML = "player2 won";
}

else{
  document.querySelector("h1").innerHTML = "draw";
}
