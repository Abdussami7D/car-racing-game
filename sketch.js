var database,position;
var gameState = 0;
var playerCount;
var form,player,game;
var allPlayers;
var car1 , car2 , car3 , car4;
var cars;
var carImg1,carImg2,carImg3,carImg4;
var groundImg;
var trackImg;


function preload(){

carImg1 = loadImage("images/car1.png");
carImg2 = loadImage("images/car2.png");
carImg3 = loadImage("images/car3.png");
carImg4 = loadImage("images/car4.png");

groundImg = loadImage("images/ground.png");
trackImg = loadImage("images/track.png");
}


function setup(){

    database = firebase.database();
    createCanvas(displayWidth - 20 , displayHeight - 20);

    game = new Game();
    game.getState();
    game.start();
    

    
}

function draw(){
    background("white");


   if(playerCount === 4){

       game.update(1);

}

if(gameState === 1){

    clear();
    game.play();

}

if(gameState===2){
    game.End()
}
}

