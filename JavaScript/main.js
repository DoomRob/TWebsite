// Code for Drawing Canvas
const canvas = document.getElementById('myCanvas');

// Circle 1 on top right corner
var circle1 = document.getElementById("canvas");
var circle1tx = circle1.getContext("2d");
circle1tx.beginPath();
circle1tx.arc(60,50,40,0,2*Math.PI);
circle1tx.stroke();
circle1tx.fillStyle="yellow";
circle1tx.fill();

// Circle 2 on bottom right
var circle2 = document.getElementById("canvas");
var circle2tx = circle2.getContext("2d");
circle2tx.beginPath();
circle2tx.arc(60,350,40,0,2*Math.PI);
circle2tx.stroke();
circle2tx.fillStyle="yellow";
circle2tx.fill();

// Circle 3 on top center 
var circle3 = document.getElementById("canvas");
var circle3tx = circle3.getContext("2d");
circle3tx.beginPath();
circle3tx.arc(720,50,40,0,2*Math.PI);
circle3tx.stroke();
circle3tx.fillStyle="yellow";
circle3tx.fill();

// Circle 4 on far right top
var circle4 = document.getElementById("canvas");
var circle4tx = circle4.getContext("2d");
circle4tx.beginPath();
circle4tx.arc(1440,50,40,0,2*Math.PI);
circle4tx.stroke();
circle4tx.fillStyle="yellow";
circle4tx.fill();

// Circle 5 on bottom right
var circle5 = document.getElementById("canvas");
var circle5tx = circle5.getContext("2d");
circle5tx.beginPath();
circle5tx.arc(1440,350,40,0,2*Math.PI);
circle5tx.stroke();
circle5tx.fillStyle="yellow";
circle5tx.fill();

// Circle 6 on bottom center
var circle6 = document.getElementById("canvas");
var circle6tx = circle6.getContext("2d");
circle6tx.beginPath();
circle6tx.arc(720,350,40,0,2*Math.PI);
circle6tx.stroke();
circle6tx.fillStyle="yellow";
circle6tx.fill();