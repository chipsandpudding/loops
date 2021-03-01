var containerEle = document.body.querySelector(".container");

var humanLife = 5;
var dragonLife = 10;
var winner = ""; 
while(humanLife > 0 && dragonLife > 0){
var userNumber = Number(prompt("Give me a number between 1 and 5"));

if (userNumber > 5){userNumber = 1;
  
}else if (userNumber < 1){ userNumber =1;
  
}else{}
 
humanLife = humanLife - Math.ceil(Math.random() * 2);
dragonLife = dragonLife - Math.ceil(Math.random() * userNumber);
  
}//end while

if (humanLife <=0 && dragonLife <=0){
  winner = "It's a double KO";
}
else if (humanLife <= 0){
  winner = "The Dragon is the winner";
}
else if (dragonLife <= 0){
 winner = "The human is the winner";
 
}else{}

containerEle.innerHTML = "Human damage: " + (5 - humanLife) + "<br>Dragon damage: " + (10 - dragonLife) + "<br>" + winner;