var spaceShip , spaceshipImage;
var spaceImage ;
var bulletImg;
var shootSound;
function preload(){
    spaceImage = loadImage("images/space.jpg");
    spaceshipImage = loadImage("images/spaceship.png");
   // move1 = loadAnimation("images/move1.png");
    bulletImg = loadImage("images/fireball.png");
    shootSound = loadSound("shoot.wav");
}
function setup(){
    createCanvas(1350,650);
    spaceShip = createSprite(650,580,50,50);
    spaceShip.addImage(spaceshipImage);
    spaceShip.scale = 0.3;

    
}
function draw(){
    background(spaceImage);
    textSize(30);
    fill("white");
    text("Press Left and Right arrow to control the spaceship And Press Space to shoot",100,100);
    
   // spaceShip.x = mouseX;
    if(keyDown("space")){
        shootSound.play();

        createBullet();
        
    }
    if(keyDown(LEFT_ARROW)){
        if(spaceShip.x > 70){
        spaceShip.x = spaceShip.x-10;
        }
    }
    if(keyDown(RIGHT_ARROW)){
        if(spaceShip.x < 1300){
        spaceShip.x = spaceShip.x+10;
        }
    }
    drawSprites();
}
function createBullet(){
    var bullet = createSprite(650,580,20,20);
    bullet.addImage(bulletImg);
    bullet.x = spaceShip.x;
    bullet.velocityY = -10;
    bullet.lifetime = 150;
    bullet.scale = 0.1;
    return bullet;

}

