const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var engine,world
var polygonImg 
var ball 
var stand1,stand2;
var sling

function preload(){
polygonImg = loadImage("polygon.png")

}

function setup(){
    createCanvas(900,400)

    engine = Engine.create()
    world = engine.world
    Engine.run(engine)

    
    ball = Bodies.circle(50,200,20)
    World.add(world,ball)

    stand1= new ground(390,300,230,10)
    stand2= new ground(700,200,180,10)
    Ground = new ground(450,390,900,20)
    //level 1
    block1 = new block(300,275,30,40)
    block2= new block(330,275,30,40)
    block3= new block(360,275,30,40)
    block4 = new block(390,275,30,40)
    block5 = new block(420,275,30,40)
    block6 = new block(450,275,30,40)
    block7 = new block(480,275,30,40)


    //level 2
    block8 = new block(330,235,30,40)
    block9 = new block(360,235,30,40)
    block10= new block(390,235,30,40)
    block11 = new block(420,235,30,40)
    block12 = new block(450,235,30,40)

    //level 3
    block13 = new block(360,195,30,40)
    block14= new block(390,195,30,40)
    block15 = new block(420,195,30,40)

    //top
    block16= new block(390,155,30,40)

    //stack 2 level 1
    block17= new block(640,155,30,40)
    block18= new block(670,155,30,40)
    block19= new block(700,155,30,40)
    block20= new block(730,155,30,40)
    block21= new block(760,155,30,40)

    //stack 2 level 2
    block22= new block(670,115,30,40)
    block23= new block(700,115,30,40)
    block24= new block(730,115,30,40)

    //stack 2 top
    block25= new block(700,75,30,40)



sling =  new slingshot(this.ball,{x:100,y:200})
}


function draw() {

background(60,46,46)
//Engine.update()


imageMode(CENTER)
image(polygonImg,ball.position.x,ball.position.y,40,40)
stroke("black")
stand1.display();
stand2.display();
Ground.display();

fill(" skyblue")
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill("pink")
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill("turquoise")
block13.display();
block14.display();
block15.display();
fill("grey")
block16.display();
fill('skyblue')
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
fill("turquoise")
block22.display();
block23.display();
block24.display();
fill("pink")
block25.display();



sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly()
}


