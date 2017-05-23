  $(document).ready(function() {

   
    //_______________VARIABLES_____________
    //_____________________________________

    //stores html element in var questionsArray
    var questionsArray = $('.question');
    console.log(typeof questionsArray);
    console.log(questionsArray);

    //variable to keep track of array index
    var questionCounter = 0;

    var timeCounter = 30;
    //variables to keep track of right and wrong answers
    var rightAnswerCounter = 0;
    var wrongAnswerCounter = 0;
    var unansweredCounter = 0;

    //_______________FUNCTIONS_____________
    //_____________________________________

    /*function toggle(){
        $('#question1').toggle();
        // if id correct = clicked. invoke correctAnswer function, else, invoke wrongAnswer function
    }*/


    //function that toggles a start game screen 
    function startGame(){
        $('#questionsArray').hide();
    }
    

    //function that hides inactive questions?
    function hideInactiveQuestions() {
        /*for(i=0; i<questionsArray.length; i++){ 
            if (questionsArray[i].display === true) {
                $('.questions').hide();}
            }
            }
        */
        $('#question2').hide();
        $('#question3').hide();
    }

    //function that loads the next question?
    function newQuestionLoader() {
 console.log("running newQuestionLoader");
 questionCounter++
 console.log(" adding to question questionCounter")
 console.log(questionCounter)

 questionsArray[questionCounter];
 console.log( questionsArray[questionCounter]);

$(questionsArray[questionCounter]).show();
$(questionsArray[questionCounter- 1]).hide();
console.log(questionsArray[questionCounter]);
}

    //function that sets a timer for each question
    function gloabalTimer(){
    timeCounter --;

    }

    //function that loads a correct answer notification
    function correctAnswerScreen() {
        $('#answerStatus').html('<h1>correct</h1>');
            rightAnswerCounter ++;
           
    }

    //function that loads a wrong answer notification
    function wrongAnswerScreen() {
        $('#answerStatus').html('<h1>wrong</h1>');      
            wrongAnswerCounter ++;

    }

    function displayScores() {
        if (questionCounter === 3){
            $('#scoreTally').html('<h1> Wrong Answers: '+ wrongAnswerCounter + '</h1> <br>' + '<h1> Right Answers: '+ rightAnswerCounter + '</h1> <br>');
     
        }
    }

    //_______________MAIN CODE_____________
    //_____________________________________
    startGame();
    hideInactiveQuestions();

    // start game event listener 
    $('.btn-primary').click(function(){
        $('#questionsArray').show();
        $('#startScreen').hide();
    })

    //questions loader event listern 
    $('button').click(function() {

        if (this.value == 'correct') {
           correctAnswerScreen();
                newQuestionLoader();
          
        } else if (this.value == 'wrong') {
            wrongAnswerScreen();   
            newQuestionLoader();
        }
        displayScores();
    });

 });


    //_____________________________________


