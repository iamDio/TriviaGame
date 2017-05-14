  $(document).ready(function() {

   
    //_______________VARIABLES_____________
    //_____________________________________

    //stores html element in var questionsArray
    var questionsArray = $('.question');
    console.log(typeof questionsArray);
    console.log(questionsArray);

    //variable to keep track of array index
    var questionCounter = 0;

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

/*     for (var i = 0; i < questionsArray.length; i++) {
            hideInactiveQuestions();
            //$('#questionsArray').empty();
            $('.question').show(questionsArray[i]);
*/
            
    
/*
    for (var i in questionsArray) {
         $('questionsArray').each(questionsArray[i]);
         console.log(questionsArray);

         //show next question
         $('#questionsArray').show(questionsArray[i]);
        
     }
}*/

    //function that sets a timer for each question
    function gloabalTimer(){

    }

    //function that loads a correct answer notification
    function correctAnswerScreen() {
        /*$('section').toggle();*/
        //$('#questionsArray').hide();
        $('#correctAnswer').html('<h1>correct</h1>');
           
    }

    //function that loads a wrong answer notification
    function wrongAnswerScreen() {
        /*$('section').toggle();*/
        //$('#questionsArray').hide();
        $('#correctAnswer').html('<h1>wrong</h1>');      
    }

    //hides the answer screen after timer 
    function answerTimer(){
        $('#correctAnswer').hide();

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
           setTimeout(answerTimer, 3*1000);
            clearTimeout();    
                newQuestionLoader();
            
        } else if (this.value == 'wrong') {
            /*alert('wrong was clicked');*/
            wrongAnswerScreen();
            setTimeout(answerTimer(), 3*1000);
            clearTimeout();
            newQuestionLoader();

        }

    });

 });


    //_____________________________________


