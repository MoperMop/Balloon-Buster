class Balloon{
  constructor(x,y,color){
    balloon = createSprite(x,y,21,52);
    //balloonGroup.add(balloon);
    switch(color){
      case 1:
        balloon.addImage("blueBalloon", blueBalloonImage);
        balloon.scale = 0.12;


        balloon.setCollider("circle", 0, -50, 245);
      break;
      case 2:
        balloon.addImage("greenBalloon", greenBalloonImage);
        balloon.scale = 0.107;


        balloon.setCollider("circle", 0, -122.5, 285);
      break;
      case 3:
        balloon.addImage("redBalloon", redBalloonImage);
        balloon.scale = 0.115;


        balloon.setCollider("circle", 0, -115, 275);
      break;
      case 4:
        balloon.addImage("pinkBalloon", pinkBalloonImage)
        balloon.scale = 1.45;


        balloon.setCollider("circle", 0, -8.5, 22)
      break;
    }
  }
  /*checkPop(){
    if(balloon.isTouching(arrow)){
      balloon.visible = false;


      score = score+1;
    }
  }*/
}