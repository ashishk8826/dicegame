var randomDice= Math.floor(Math.random()*6)+1;
var imgsrc="images/dice"+randomDice+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imgsrc);




var randomDice2=Math.floor(Math.random()*6)+1;
var imgSrc2="images/dice"+randomDice2+".png";
document.querySelectorAll("img")[1].setAttribute("src", imgSrc2);
if(randomDice>randomDice2){
    document.querySelector("h1").innerHTML="PLAYER-1 WINNER";
}
else if(randomDice2>randomDice){
    document.querySelector("h1").innerHTML="PLAYER-2 WINNER";
}
else{
    document.querySelector("h1").innerHTML="DRAW!!";
}
