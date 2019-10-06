// Create Questions for quiz
var allQuestions = [{
    question: "What is  a binary variable, having two possible values called “true” and “false.”.?",
    options: ["String", "Boolean", "Number", "object"],
    answer: 1
  }, {
    question: "A ______ can be any text inside double or single quotes",
    options: ["String", "Boolean", "Number", "Object"],
    answer: 0
  }, {
    question: "_______ can be written with or without decimals.",
    options: ["Boolean", "String", "function","Numbers"],
    answer: 3
  },{
    question: "A JavaScript ______ is a block of code designed to perform a particular task?",
    options: ["Object", "Function", "String", "Boolean"],
    answer: 1
  }, {
    question: "JavaScript ______ are used to store multiple values in a single variable.?",
    options: ["Functions", "Numbers", "Arrays", "Booleans"],
    answer: "Numbers"
  }
];

questionNum = 0;
 //Create a for loop to go through the questions
 for( var i =0; i < allQuestions.length; i++) {
   return allQuestions[i];

 }
function startGame(){ 
  //starttimeer
  setTimeout(() => {
    
  }, 5000);
  renderQ(questionNum)
}

function renderQ(questionIndex){
  //show question
  var q = document.createElement("div")
  q.attr("class","title")
  q.textContent = allQuestions[questionIndex].question;

  //loop here and create a button for each q.options
  //also add an event listenter for click of each one
  
    //thebutton.addEventListener("click", function(){
      if(this.value == q.answer){
        //nextQuestion
      }else{
        //decrement timer
        //nextquestion
      }
   //}
  
}


//checkif done
questionNum++;
renderQ(questionNum)
 
