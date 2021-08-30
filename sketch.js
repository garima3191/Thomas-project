var road,roadImg;
var spiderman,spidermanImg;
var dococt,dococtImg;
var greenGob,greenGobImg;
var thanos,thanosImg;
var sandman,sandmanImg
var lizard,lizardImg;
var time,timeImg;
var power,powerImg;
var reality,realityImg;
var space,spaceImg;
var mind,mindImg;
var soul,soulImg;
var gameOver,gameOverImg;
var dococtG,greenGobG,thanosG,sandmanG,lizardG,timeG,powerG,realityG,spaceG,mindG,soulG;

var score = 0;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
    roadImg = loadImage("MergedImages.png");
    spidermanImg = loadImage("Spiderman.gif");
    dococtImg = loadImage("Dococt.png");
    greenGobImg = loadImage("Ggob.png");
    thanosImg = loadImage("Thanos.png");
    sandmanImg = loadImage("Sandman.png");
    lizardImg = loadImage("Lizard.png");
    timeImg = loadImage("Time.png");   
    powerImg = loadImage("Power.png");
    realityImg = loadImage("Reality.png");
    spaceImg = loadImage("Space.png");
    mindImg = loadImage("Mind.png");
    soulImg = loadImage("Soul.png");
    gameOverImg = loadImage("GameOver.png");



}

function setup() {
    createCanvas(1200,300);
    road = createSprite(800,200,600,200);
    road.addImage(roadImg);
    road.velocityX = -10;
    //road.x=road.width/2;
    //road.scale=1
    
    spiderman = createSprite(70,150,);
    spiderman.addImage("spidermanRunning",spidermanImg);
    spiderman.scale = 0.3

    gameOver = createSprite(650,150);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.2;
    gameOver.visible = false;  

    dococtG = new Group();
    greenGobG = new Group();
    thanosG = new Group();
    sandmanG = new Group();
    lizardG = new Group();
    timeG = new Group();
    powerG = new Group();
    realityG = new Group();
    spaceG = new Group();
    mindG = new Group();
    soulG = new Group();
}

function draw() {
    
 if(gameState===PLAY){
    background(0);
    
    spiderman.y = World.mouseY;

    edges= createEdgeSprites();
    spiderman.collide(edges);
 
    if(road.x <200 ){
        road.x = 800;
      }

    createDococt();
    createGreenGob();
    createThanos();
    createSandman();
    createLizard();
    createSoul();
    createMind();
    createSpace();
    createReality();
    createPower();
    createTime();

    if (soulG.isTouching(spiderman)) {
        soulG.destroyEach();
        score=score+10;
      }

     else if (mindG.isTouching(spiderman)) {
        mindG.destroyEach();
        score=score+20;
     }

     else if (spaceG.isTouching(spiderman)) {
        spaceG.destroyEach();
        score=score+40;
     }

     else if (realityG.isTouching(spiderman)) {
        realityG.destroyEach();
        score=score+60;
     }

     else if (powerG.isTouching(spiderman)) {
        powerG.destroyEach();
        score=score+80;
     }

     else if (timeG.isTouching(spiderman)) {
        timeG.destroyEach();
        score=score+100;
     }

 }


        if(dococtG.isTouching(spiderman)){
        gameState = END;
      }

      if(greenGobG.isTouching(spiderman)){
        gameState = END;
      }
  
      if(thanosG.isTouching(spiderman)){
        gameState = END;
      }

      if(sandmanG.isTouching(spiderman)){
        gameState = END;
        spiderman.velocityY = 0;
      }

      if(lizardG.isTouching(spiderman)){
        gameState = END;
      }

   else if (gameState === END) {
     
       road.visible=false
       textSize(25);
       fill("red");
       text("Press Up Arrow to Restart the Game",490,20)
       gameOver.visible = true;
        
       road.velocityX = 0;
       spiderman.velocityX = 0;     
     
       dococtG.setVelocityXEach(0);
       dococtG.setLifetimeEach(-1);

       greenGobG.setVelocityXEach(0);
       greenGobG.setLifetimeEach(-1);

       thanosG.setVelocityXEach(0);
       thanosG.setLifetimeEach(-1);

       sandmanG.setVelocityXEach(0);
       sandmanG.setLifetimeEach(-1);

       lizardG.setVelocityXEach(0);
       lizardG.setLifetimeEach(-1);

       soulG.setVelocityXEach(0);
       soulG.setLifetimeEach(-1);

       mindG.setVelocityXEach(0);
       mindG.setLifetimeEach(-1);

       spaceG.setVelocityXEach(0);
       spaceG.setLifetimeEach(-1);

       realityG.setVelocityXEach(0);
       realityG.setLifetimeEach(-1);

       powerG.setVelocityXEach(0);
       powerG.setLifetimeEach(-1);
       
       dococtG.destroyEach();
       greenGobG.destroyEach();
       thanosG.destroyEach();
       sandmanG.destroyEach();
       lizardG.destroyEach();
       soulG.destroyEach();
       mindG.destroyEach();
       spaceG.destroyEach();
       realityG.destroyEach();
       powerG.destroyEach();
       timeG.destroyEach();


       if(keyDown("SPACE")){
           reset();
       }
     
            

    }

    


    drawSprites();
    textSize(20);
    fill(255);
    text("Score: "+ score,900,30);
}

function createDococt() {
    if (World.frameCount % 200 == 0) {
        var dococt = createSprite(1100,Math.round(random(50, 250), 10, 10));
        dococt.addImage(dococtImg);
        dococt.scale=0.11;
        dococt.velocityX = -25;
        dococt.lifetime = 170;
        dococtG.add(dococt);
        }
}

function createGreenGob() {
    if (World.frameCount % 220 == 0) {
        var greenGob = createSprite(1100,Math.round(random(50, 250), 10, 10));
        greenGob.addImage(greenGobImg);
        greenGob.scale =0.05;
        greenGob.velocityX = -30;
        greenGob.lifetime = 170;
        greenGobG.add(greenGob);
        }
}

function createThanos(){
    if (World.frameCount % 250 == 0) {
        var thanos = createSprite(1100,Math.round(random(50, 250), 10, 10));
        thanos.addImage(thanosImg);
        thanos.scale=0.15;
        thanos.velocityX = -35;
        thanos.lifetime = 170;
        thanosG.add(thanos);
        }       
}

function createSandman(){
    if (World.frameCount % 265 == 0) {
        var sandman = createSprite(1100,Math.round(random(50, 250), 10, 10));
        sandman.addImage(sandmanImg);
        sandman.scale=0.5;
        sandman.velocityX = -35;
        sandman.lifetime = 170;
        sandmanG.add(sandman);
        }       
}



function createLizard(){
    if (World.frameCount % 300 == 0) {
        var lizard = createSprite(1100,Math.round(random(50, 250), 10, 10));
        lizard.addImage(lizardImg);
        lizard.scale=0.08;
        lizard.velocityX = -35;
        lizard.lifetime = 170;
        lizardG.add(lizard);
        }       
}

function createSoul(){
    if (World.frameCount % 210 == 0) {
        var soul = createSprite(1100,Math.round(random(50, 250), 10, 10));
        soul.addImage(soulImg);
        soul.scale=0.1;
        soul.velocityX = -30;
        soul.lifetime = 170;
        soulG.add(soul);
        }
}

function createMind(){
    if (World.frameCount % 220 == 0) {
        var mind = createSprite(1100,Math.round(random(50, 250), 10, 10));
        mind.addImage(mindImg);
        mind.scale=0.2;
        mind.velocityX = -30;
        mind.lifetime = 170;
        mindG.add(mind);
        }
}

function createSpace(){
    if (World.frameCount % 230 == 0) {
        var space = createSprite(1100,Math.round(random(50, 250), 10, 10));
        space.addImage(spaceImg);
        space.scale=0.1;
        space.velocityX = -30;
        space.lifetime = 170;
        spaceG.add(space);
        }
}

function createReality(){
    if (World.frameCount % 240 == 0) {
        var reality = createSprite(1100,Math.round(random(50, 250), 10, 10));
        reality.addImage(realityImg);
        reality.scale=0.1;
        reality.velocityX = -30;
        reality.lifetime = 170;
        realityG.add(reality);
        }
}

function createPower(){
    if (World.frameCount % 250 == 0) {
        var power = createSprite(1100,Math.round(random(50, 250), 10, 10));
        power.addImage(powerImg);
        power.scale=0.1;
        power.velocityX = -30;
        power.lifetime = 170;
        powerG.add(power);
        }
}

function createTime(){
    if (World.frameCount % 260 == 0) {
        var time = createSprite(1100,Math.round(random(50, 250), 10, 10));
        time.addImage(timeImg);
        time.scale=0.1;
        time.velocityX = -30;
        time.lifetime = 170;
        timeG.add(time);
        }
}

function reset(){
    gameState=PLAY;
    gameOver.visible = false;
    road.visible=true;
    spiderman.addAnimation("SpideyRunning",spidermanImg);
    road.addImage(roadImg);
    road.velocityX = -20
    dococtG.destroyEach();
    greenGobG.destroyEach();
    thanosG.destroyEach();
    sandmanG.destroyEach();
    lizardG.destroyEach();
    soulG.destroyEach();
    mindG.destroyEach();
    spaceG.destroyEach();
    realityG.destroyEach();
    powerG.destroyEach();
    timeG.destroyEach();
    

    score=0;
}