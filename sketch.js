const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var pig=[];
var engine, world;
var boggie1,boggie2,boggie3,boggie4,boggie5,boggie6;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var flag
var score = 0;
function preload() {
    bg=loadImage("images/bg.jpg")
    tc=loadSound("sound/train.mp3")
    crash=loadSound("sound/train_crossing.mp3")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    boggie1 = new Boggie(50,170,70,70);
    boggie2 = new Boggie(150,170,70,70);
    boggie3 = new Boggie(250,170,70,70);
    boggie4 = new Boggie(350,170,70,70);
    boggie5 = new Boggie(450,170,70,70);
    boggie6 = new Boggie(550,170,70,70);        
    chain1= new Chain(boggie1.body,boggie2.body)
    chain2= new Chain(boggie2.body,boggie3.body)
    chain3= new Chain(boggie3.body,boggie4.body)
    chain4= new Chain(boggie4.body,boggie5.body)
    chain5= new Chain(boggie5.body,boggie6.body)
    rock = new Rock(1100,200,100,100)
    ground = new Ground(600,height,1200,20);
    
}

function draw(){
   
        background(bg);
    

        boggie1.show()
        boggie2.show()
        boggie3.show()
        boggie4.show()
        boggie5.show()
        boggie6.show()

            chain1.show()
            chain2.show()
            chain3.show()
            chain4.show()
            chain5.show()
            
        rock.show()
        
        var collision = Matter.SAT.collides(boggie6.body, rock.body)
        if(collision.collided){
            flag = 1
        }
        
        if (flag === 1){

        textSize(35)
        fill("white")
        text("CRASH  ", width/2, 50)
        crash.play()
        }
    Engine.update(engine);
    //strokeWeight(4);
       
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW ){
    Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x,y:boggie6.body.position.y}, {x:0.5,y:0})  
    tc.play()
    }



}

