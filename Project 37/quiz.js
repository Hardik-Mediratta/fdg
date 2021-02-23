class Quize {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value")
        if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val()
            contestant.getCount();
        }
        
        question = new Question()
        question.display();
      }
    }
    play(){
        question.hide()
        background("yellow")
      textSize(30);
      text("Result of the Quize",340,50)
      text("-----------------------------",320,65)

      contestant.getcontestantInfo()
      if(allcontestant !== undefined){
        debugger;
        var display_Answer = 230
        fill("blue")
        textSize(20);
         text("Note :- Contestant who answered correctly are highlighted whit green color ",130,230)

        for(var plr in allcontestants){
            debugger;
            var correctAnswer = "2"
          if (correctAnswer === allContestants[plr].answer)
          fill("green")
          else        
          fill("red")

          display_Answer+=30
          textSize(20)
          text(allcontestant[plr].name+":"+allcontestant[plr].answer,250,display_Answer)
        }
      }
     
  
    }
  }
  