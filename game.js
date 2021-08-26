class Game{

    constructor(){


  }


  getState(){

    var gameStateref = database.ref("gameState");
    gameStateref.on("value",function(data){
    gameState = data.val();
    })
  }



  update(state){

    database.ref("/").update({gameState : state});
 
  }

play(){

  form.hide();
  text("GAME START",120,100);
  Player.getPlayerInfo();

  if(allPlayers !== undefined){

    background(groundImg);
    image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);

   var index = 0;
   var x = 175
   var y 

    for(var plr in allPlayers){

      index = index + 1;
      x = x + 200;
      y = displayHeight - allPlayers[plr].distance
      cars[index - 1].x = x
      cars[index - 1].y = y

      if(index === player.index){
        cars[index - 1].shapeColor = "red";
        camera.position.x = displayWidth/2
        camera.position.y = cars[index-1].y
        stroke(10);
        fill("red");
        ellipse(x,y,90,90);
      }

    }
  }

  if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance+=50;
    player.update();
  }

  if(player.distance>4000){
    gameState = 2
  }

 drawSprites();

}

End(){
  console.log("GAME-ENDED")
}



  start(){

    if(gameState === 0){

      player = new Player();
      player.getCount();
      form = new Form();
      form.display();


    }

    car1 = createSprite(100,200);
    car1.addImage(carImg1);

    car2 = createSprite(300,200);
    car2.addImage(carImg2);

    car3 = createSprite(500,200);
    car3.addImage(carImg3);

    car4 = createSprite(700,200);
    car4.addImage(carImg4);

    cars = [car1,car2,car3,car4];



  }


}






