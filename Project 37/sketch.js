var canvas, backgroundImage;
var allContestants
var gameState = 0;
var contestantCount;
var answer;
var database;

var question, contestant, quize;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quize = new Quize();
  quize.getState();
  quize.start();
}


function draw(){
  background("pink")
  if(contestantCount === 4){
    quize.update(1)
  }
  if(gameState === 1){
    clear()
    quize.play()
  }
}
