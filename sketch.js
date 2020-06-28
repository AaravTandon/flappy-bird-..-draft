var bird , bg;
var ground;

function preload (){
bg = loadImage ("images/bg img flappy bird.png");
birdimg = loadImage ("images/flappy bird 2.png");
groundimg = loadImage ("images/ground flappy bird.png");
groundimg2 = loadImage ("images/ground2 flappy bird.png");
}

function setup (){
    createCanvas (400,400);
    bird = createSprite (200,250,20,20);
    bird.addImage ("flappyBird", birdimg);
    bird.scale = 0.07;

    ground = createSprite (200,380,400,20);
    ground.addImage ("ground", groundimg);
    ground.scale = 0.3;
    ground.velocityX = -4;
    ground.x = ground.width/2;
    ground.debug = true;

    ground2 = createSprite (400,380,400,20);
    ground2.addImage ("ground2", groundimg2);
    ground2.scale = 0.3;
    ground2.velocityX = -4;
    ground2.x = ground2.width/2;
}

function draw (){
background(255);

if (keyDown ('space')){
    bird.velocityY = -5;
}

if (ground.x < 0){
    ground.x = ground.width/2;
}

if (ground2.x < 0){
    ground2.x = ground2.width/2;
}


bird.velocityY = bird.velocityY + 0.6;


drawSprites ();
}


