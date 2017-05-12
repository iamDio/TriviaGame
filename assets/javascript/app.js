    //_______________VARIABLES_____________
    //_____________________________________

    var questionsArray = $('.question');
    console.log(typeof questionsArray);
    console.log(questionsArray);



    //_______________FUNCTIONS_____________
    //_____________________________________

    /*function toggle(){
        $('#question1').toggle();
        // if id correct = clicked. invoke correctAnswer function, else, invoke wrongAnswer function
    }*/

    //function that starts the game 

    function startGame(){
        $()
    }
    //function that hides inactive questions?
    function hideInactiveQuestions() {
        $('#question2').hide();
        $('#question3').hide();
    }

    //function that loads the next question?
    function newQuestionLoader() {

        for (var i = 0; i < questionsArray.length; i++) {
           // $('#questionsArray').empty();
            /*$('.question').show(questionsArray[1]);*/
            console.log(questionsArray[i]);
        } 
    }
/*
    for (var i in questionsArray) {
         $('questionsArray').each(questionsArray[i]);
         console.log(questionsArray);

         //show next question
         $('#questionsArray').show(questionsArray[i]);
        
     }
}*/

    //function that loads a correct answer notification
    function correctAnswerScreen() {
        /*$('section').toggle();*/
        $('#questionsArray').hide();
        $('#correctAnswer').html('<h1>correct</h1>');
    }


    //function that loads a wrong answer notification
    function wrongAnswerScreen() {
        /*$('section').toggle();*/
        $('#questionsArray').hide();
        $('#correctAnswer').html('<h1>wrong</h1>');      
    }


    //_______________MAIN CODE_____________
    //_____________________________________
    
    hideInactiveQuestions();


    $('button').click(function() {

        if (this.value == 'correct') {
            correctAnswerScreen();
                newQuestionLoader();

        } else if (this.value == 'wrong') {
            /*alert('wrong was clicked');*/
            wrongAnswerScreen();
            newQuestionLoader();
        }

    });




    //_____________________________________