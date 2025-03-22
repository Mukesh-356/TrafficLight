var REd=document.getElementById("on");
var Yellow=document.getElementById("yellow");
var green=document.getElementById("green");
var imgRed=document.getElementById("redd");
var imgYelo=document.getElementById("yel");
var imgGreen=document.getElementById("gr");

function on(){
    imgGreen.src="white.png"
     imgYelo.src="white.png"
    imgRed.src="red.png";
}
function off(){
       imgRed.src="white.png"
       imgGreen.src="white.png"
    imgYelo.src="yellow.svg.png";
}
function grn(){
    imgYelo.src="white.png"
     imgYelo.src=" white.png"
    imgGreen.src="green.png";
}
