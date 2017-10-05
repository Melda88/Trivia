function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;



    if (question1 == "Ghost") {
        correct++;
    }
    if (question2 == "Walkers") {
        correct++;
    }
    if (question3 == "Assassins") {
        correct++;
    }
    if (question4 == "Three") {
        correct++;
    }
    if (question5 == "Dani") {
        correct++;
    }


    var messages = ["You've won the game of Trivia!", "You played....well", "Wrong...take the black oath and try again."];
    var pictures = ["assets/images/Cheers.gif", "assets/images/samblink.gif", "assets/images/Almost.gif"]
    var range;

    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 3) {
        range = 1;
    }

    if (correct > 2) {
        range = 0;
    }



        


    document.getElementById("afterSubmit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("numberCorrect").innerHTML = "You got  " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
}