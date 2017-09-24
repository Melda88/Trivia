// initialize the .js document 
$( document ).ready(function() {

// this game object holds all of the questions, possible answers, and then the index number if the correct number
	var game = {
		questions: [
		
		{
		question: 'Who won the battle of the bastards?',
		possibles: ['Renley Baratheon','Ned Stark', 'Jon Snow', 'Jamie Lannister'],
		id: 'question-eleven',
		answer: 2
		},
		{
		question: "What is the name of Cersei's personal guard?",
		possibles: ['The Hound','The Mountain','BigFoot','Lurch'],
		id: 'question-ten',
		answer: 1
		}, 
		{
		question: "Who are the nights watch?",
		possibles: ['Guards of the Ice Wall','Pirates','Clock Makers','Kings Guards',],
		id: 'question-nine',
		answer: 0
		}, 
		{
		question: "Who was killed then later resurected from the dead?",
		possibles: ['Daenerys Targaryen','Jon Snow','Robert Baratheon','Theon Grayjoy'],
		id: 'question-eight',
		answer: 1
		}, 
		{
		question: "What is the primary continent that Game of thrones takes place on?",
		possibles: 	['England','Casterly Rock','Iron Island','Westeros'],
		id: 'question-seven',
		answer: 3
		}, 
		{
		question: "What was the name of Daenerys Targaryen's first husband?",
		possibles: 	['Jaime Lannister','Jon Snow','Robert Barathion','Khal Drogo'],
		id: 'question-six',
		answer: 3
		},
		{
		question: "Who is the mother of dragons?",
		possibles: 	['Arya Stark','Daenerys Targaryen','Cersei Lannister','Sansa Stark'],
		id: 'question-five',
		answer: 1
		}, 
		{
		question: "How many times has Sanza Stark been married?",
		possibles: ['Once','Three Times ','Never been married','Twice'],
		id: 'question-four',
		answer: 1
		}, 
		{
		question: "Who are the faceless men of Braavos?",
		possibles: ['Assassins','Pirates','Famous Cooks','Prisoners'],
		id: 'question-three',
		answer: 0
		}, 
		{
		question: "What is the name often used when referring to the undead?",
		possibles: ['White-Walkers','The Horde','Living Dead','The skinny dudes'],
		id: 'question-two',
		answer: 0
		},
		{
	   	question: "What is the name of John Snows Dire-Wolf?",
	   	possibles: ['Puppers','Snow','Ghost','Nymeria'],
	   	id: 'question-one',
	   	answer: 2
		}, 
		 
		]}

	var message = 'Finished!!';


    // Need:Timer (starting at 60)
    var number = 60;
    $('#timeLeft').on('click', run);

	// This function enables the number of seconds to decrease with time. 
    function decrease(){
        // Decrease number by one.
        number--;
        // Show the number in the #timeLeft div.
        $('#timeLeft').html('<h2>' + number + " seconds"+'</h2>');
        // When the number is equal to zero, 
        if (number === 0){
        // run the stop function.
        stop();
        }
    }
	// the run function sets the spacing of the  function's time interval so that
	// it can be equal to a second per number decrease.
    function run(){
        counter = setInterval(decrease, 1000);
    }
    
    // The stop function
    function stop(){
    // Clears our "counter" interval. The interval name is passed to the clearInterval function.
        clearInterval(counter);
    }

    // Execute the run function.
    run();

// this function dynamically creates the inputs needed for the form and relates them to the
// items held within the game object 
function formTemplate(data) {
// the first variable relates the form field for question with the data in the object for
// each question so that the questions can be inputed into that form field
	var qString = "<form id='questionOne'>"+ data.question +"<br>";
// this variable to access the question object's possibles array needed to answer each question
	var possibles = data.possibles;
// a for loop to go through the possibles array for each question to add the values of each possibles
// array and using qString, add them as radio buttons to the question to which they are
// associated
	for (var i = 0; i < possibles.length; i++) {
		var possible = possibles[i];
		console.log(possible);
		qString = qString + "<input type='radio' name='"+data.id+"' value="+ i +">"+possible;

	}
	return qString + "</form>";
}
window.formTemplate = formTemplate;

// this function takes the template created in the last function and by appending it,
// allows it to be displayed on the page
function buildQuestions(){
	var questionHTML = ''
	for (var i = 0; i<game.questions.length; i++) {
		questionHTML = questionHTML + formTemplate(game.questions[i]);
	}
	$('#questions-container').append(questionHTML);

}

// function that 
function isCorrect(question){
	var answers = $('[name='+question.id+']');
	var correct = answers.eq(question.answer);
	var isChecked = correct.is(':checked');
	return isChecked;
}

// call the buildQuestions function
buildQuestions();

// function to build the display of guesser results
function resultsTemplate(question){
	var htmlBlock = '<div>'
	htmlBlock = htmlBlock + question.question + ': ' + isChecked;
	return htmlBlock + "</div>";
}

// function to tabulate the guesser results
function checkAnswers (){

// Need:Scoreboard
	var resultsHTML = '';
	var guessedAnswers = [];
	var correct = 0;
	var incorrect = 0;
	var unAnswered =0

// for loop iterates through each question and passes the questions at each index first into
// the isCorrect function to see if they match the indices of correct answers, and if they do,
// increments up the correct score
	for (var i = 0; i<game.questions.length; i++) {
		if (isCorrect(game.questions[i])) {
			correct++;
		} else {
// then this statement runs the questions at each index through the checkAnswered function
// to determine whether the user clicked an answer, or did not click an answer, so that
// incorrect and unAnswered scores can be delineated from each other
			if (checkAnswered(game.questions[i])) {
				incorrect++;
			} else {
				unAnswered++;
			}
		}

	}
// display the results of the function in the results div and use strings of text to relate the
// results of the for loop with their corresponding values
	$('.results').html('correct: '+correct+ "<br>" +'incorrect: '+incorrect+ "<br>" +'unanswered: '+unAnswered);
}

// checks whether the guesser actually checked an answer 
function checkAnswered(question){
	var anyAnswered = false;
	var answers = $('[name='+question.id+']');
// the for loop creates a condition to check if the buttons were checked and and then sets
// the anyAnswered variable to true if they were
	for (var i = 0; i < answers.length; i++) {
		if (answers[i].checked) {
			anyAnswered = true;
		}
	}
// then return the anyAnswered variable so it can be tabulated in the last function to distinguish
// between incorrect answers and those answers that were not attempted
	return anyAnswered;

}

// create a function with an onclick event for the doneButton that both checks the Answers 
// and stops the clock when "done" button is pressed
	$('#doneButton').on('click', function() {
	checkAnswers();
	stop();
	$("#messageDiv").html("Finished!");
	})
});