class Question{
    constructor() {
        this.input = createInput("Enter your name here..")
        this.input2 = createInput("Enter your answer here..")
        this.button = createButton("Submit")
        this.title = createElement('h1')
        this.question = createElement('h3')
        this.option1 = createElement('h4')
        this.option2 = createElement('h4')
        this.option3 = createElement('h4')
        this.option4 = createElement('h4')
      }
    hide(){
      this.title.hide()
      this.button.hide()
      this.input.hide()
      this.input2.hide()
    }
      display(){
        
        this.title.html("My Quize Game");
        this.title.position(350, 0);
        
        this.question.html("Question:- What starts and ends with 'E' , but has only letter ?");
        this.question.position(150, 80);
        
        this.option1.html("1:Everone");
        this.option1.position(150, 100);

        this.option2.html("2:Envelope");
        this.option2.position(150, 120);

        this.option3.html("3:Estimate");
        this.option3.position(150, 140);

        this.option4.html("4:Example");
        this.option4.position(150, 160);

        this.input2.position(350, 230);
        this.input.position(150, 230);
        this.button.position(250, 300);
    
       this.button.mousePressed(()=>{
        this.title.hide()
      this.button.hide()
      this.input.hide()
      this.input2.hide()
         contestant.name = this.input.value();
         contestant.name = this.input2.value();
          contestantrCount=+1;
          contestant.update()
          contestant.updateCount(contestantCount);
          contestant.index = contestantCount
        
        });
    
    }
}
