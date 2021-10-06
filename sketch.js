const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gameState = "start";

var emptyRoom, emptyRoomImage

var nextButton1, nextButtonImage
var nextButton2

var begntext1, begntext1Image, begntext2, begntext2Image, 
begntext3, begntext3Image, begntext4, begntext4Image, begntext5, begntext5Image

function preload() {
    emptyRoomImage = loadImage ("images/emptyroom.png")

    begntext1Image = loadImage ("images/begntext1.png")
    begntext2Image = loadImage ("images/begntext2.png")
    begntext3Image = loadImage ("images/begntext3.png")
    begntext4Image = loadImage ("images/begntext4.png")
    begntext5Image = loadImage ("images/begntext5.png")

    nextButtonImage = loadImage ("images/nextbutton.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    emptyRoom = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    emptyRoom.addImage(emptyRoomImage);
    emptyRoom.scale=1.2

    nextButton1 = createSprite(1010, 430);
    nextButton1.addImage(nextButtonImage);
    nextButton1.scale = 0.2
    nextButton1.visible = false

    nextButton2 = createSprite(1010, 400);
    nextButton2.addImage(nextButtonImage);
    nextButton2.scale = 0.2
    nextButton2.visible = false

    begntext1 = createSprite(700,125);
    begntext1.addImage(begntext1Image);
    begntext1.visible = false

    begntext2 = createSprite(650,150);
    begntext2.addImage(begntext2Image);
    begntext2.visible = false

    begntext3 = createSprite(670,195);
    begntext3.addImage(begntext3Image);
    begntext3.visible = false

    begntext4 = createSprite(670,260);
    begntext4.addImage(begntext4Image);
    begntext4.visible = false

    begntext5 = createSprite(670,125);
    begntext5.addImage(begntext5Image);
    begntext5.visible = false


}

function draw(){
    background(0);
    text(mouseX+','+mouseY , 10,10);

    if (gameState === "start"){
        begntext1.visible = true;
        begntext2.visible = true;
        begntext3.visible = true;
        begntext4.visible = true;
        nextButton1.visible = true;

        if(mousePressedOver(nextButton1)){
            begntext1.destroy();
            begntext2.destroy();
            begntext3.destroy();
            begntext4.destroy();
            gameState = "instructions";
        }
    }

    else if(gameState === "instructions"){
        nextButton1.destroy();
        begntext5.visible = true;
        nextButton2.visible = true;

        if(mousePressedOver(nextButton2)){
            begntext5.destroy();
            gameState = "choose";
        }
    }

    else if(gameState === "choose"){
        nextButton2.destroy();
    }


    drawSprites();

    Engine.update(engine);
}

function mouseDragged(){
 
}

function mouseReleased(){

}

function keyPressed(){
}
