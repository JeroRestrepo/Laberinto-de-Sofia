var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4a50cb6b-a650-4ff0-8320-647f507401be","a2f7815d-434b-4758-ab8e-9096f4cbcc95"],"propsByKey":{"4a50cb6b-a650-4ff0-8320-647f507401be":{"name":"cup","sourceUrl":"assets/api/v1/animation-library/gamelab/PRkI5l8nw93v8.QqAKEyTDO9Rhk3L66A/category_board_games_and_cards/flat_medal1.png","frameSize":{"x":41,"y":74},"frameCount":1,"looping":true,"frameDelay":2,"version":"PRkI5l8nw93v8.QqAKEyTDO9Rhk3L66A","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":74},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PRkI5l8nw93v8.QqAKEyTDO9Rhk3L66A/category_board_games_and_cards/flat_medal1.png"},"a2f7815d-434b-4758-ab8e-9096f4cbcc95":{"name":"Sofia","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"fLLMBzKOFtfYlUU8AOZKKcwQj0v.coFd","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a2f7815d-434b-4758-ab8e-9096f4cbcc95.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Crear al jugador Sofía
var Sofia = createSprite(0,398, 30, 30);
Sofia.shapeColor="blue"



 createEdgeSprites();
  Sofia.bounceOff(topEdge);
  Sofia.bounceOff(bottomEdge);
Sofia.bounceOff(leftEdge);
Sofia.bounceOff(rightEdge)
//Crear las paredes del laberinto (wall1 - wall2)
  var wall1=createSprite(59,396,25,120);
      wall1.shapeColor="yellowgreen"
  var wall2=createSprite(0,268,90,25);
      wall2.shapeColor="yellowgreen"
  var wall3=createSprite(80,269,70,25)
      wall3.shapeColor="yellowgreen"
  var wall4=createSprite(134,400,25,125)
      wall4.shapeColor="yellowgreen"
  var wall5=createSprite(170,350,50,25)
      wall5.shapeColor="yellowgreen"
  var wall6=createSprite(115,230,25,100)
      wall6.shapeColor="yellowgreen"
  var wall7=createSprite(185,230,25,100) 
      wall7.shapeColor="yellowgreen"
  var wall8=createSprite(223,267,100,25)  
      wall8.shapeColor="yellowgreen"
  var wall9=createSprite(284,230,25,100)    
      wall9.shapeColor="yellowgreen"
  var wall10=createSprite(325,350,145,25)  
      wall10.shapeColor="yellowgreen"
  var wall11=createSprite(321,192,50,25) 
      wall11.shapeColor="yellowgreen"
  var wall12=createSprite(357,209,25,60)
      wall12.shapeColor="yellowgreen"
  var wall13=createSprite(375,251,60,25)
      wall13.shapeColor="yellowgreen"
  var wall14=createSprite(197,182,50,25) 
      wall14.shapeColor="yellowgreen"
  var wall15=createSprite(15,192,55,25)
      wall15.shapeColor="YELLOWGREEN"
  var wall16=createSprite(115,110,25,50) 
      wall16.shapeColor="yellowgreen"
  var wall17=createSprite(19,97,50,25)
      wall17.shapeColor="yellowgreen"
  var wall18=createSprite(115,0,25,200)
      wall18.shapeColor="yellowgreen"
  var wall19=createSprite(400,115,455,25 ) 
      wall19.shapeColor="yellowgreen"
  var wall20=createSprite(176,0,25,100)  
      wall20.shapeColor="yellowgreen"
  var wall21=createSprite(235,0,25,100)
      wall21.shapeColor="yellowgreen"
  var wall22=createSprite(400,51,200,25)  
      wall22.shapeColor="yellowgreen"
      
//Crear la copa.
var cup=createSprite(25,45,1,1)
    cup.shapeColor="yellow"
  
function draw() {
  //Coloca el fondo de color rosa.
  background("pink");
  createEdgeSprites();
  if (keyDown("up")) {
    Sofia.y=Sofia.y-10;
  }
 if (keyDown("down")){
   Sofia.y=Sofia.y+10;
 }
 if (keyDown("left"))
    Sofia.x=Sofia.x-5 
  if (keyDown("right"))
    Sofia.x=Sofia.x+5 
  Sofia.bounceOff(topEdge);
  Sofia.bounceOff(bottomEdge);
Sofia.bounceOff(leftEdge);
Sofia.bounceOff(rightEdge)
Sofia.bounce(wall1)
Sofia.bounce(wall2)
Sofia.bounce(wall3)
Sofia.bounce(wall4)
Sofia.bounce(wall5)
Sofia.bounce(wall6)
Sofia.bounce(wall7)
Sofia.bounce(wall8)
Sofia.bounce(wall9)
Sofia.bounce(wall10)
Sofia.bounce(wall11)
Sofia.bounce(wall12)
Sofia.bounce(wall13)
Sofia.bounce(wall14)
Sofia.bounce(wall15)
Sofia.bounce(wall16)
Sofia.bounce(wall17)
Sofia.bounce(wall18)
Sofia.bounce(wall19)
Sofia.bounce(wall20)
Sofia.bounce(wall21)
Sofia.bounce(wall22)
Sofia.bounce(cup)

  cup.setAnimation("cup");
  drawSprites();

}
function resetSofia()
{
  Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
}
if(Sofia.collide(cup))
{
  background("white")
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200);
  }
}























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
