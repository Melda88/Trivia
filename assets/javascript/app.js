function populate () {
	console.log(quiz);
	if (quiz.isEnded()) {
		console.log('test');
	}
	
	else {
		//Questions not
		var element = document.getElementById("questions");

		element.innerHTML = quiz.getQuestionIndex().text;
		console.log(quiz);
		//Choices should appear here
		var choices = quiz.getQuestionIndex();
		console.log(choices);
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i );
			element.innerHTML = choices [i];

		}
	}
}

var questions=[
	
	new Question ("What is the name of John Snow's Dire-Wolf?", ["Puppers","Snow","Ghost","Nymeria"], "Ghost"),
	new Question ("What is the name often used when referring to the undead?", ["White-Walkers","The Horde","Living Dead","The Skinny Dudes"], "White-Walkers"),
	new Question ("Who are the faceless men of Braavos?", ["Assassins","Pirates","Famous Cooks","Prisoners"], "Assassins"),
	new Question ("How many times has Sanza Stark been married?", ["Once","Three Times","Never been married","Twice"], "Three Times"),
	new Question ("Who is the mother of dragons?", ["Arya Stark","Daenerys Targaryen","Cersei Lannister","Sansa Stark"], "Daenerys Targaryen"),

];




function Question(text, choices, answer) {
	this.text=text;
	this.choices=choices;
	this.answer = answer;	
}


Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
	
}

function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}


Quiz.prototype.getQuestionIndex= function() {
	return this.questions [this.questionIndex];
}

Quiz.prototype.isEnded = function () {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function (answer) {
	this.questionIndex;

	if(this.questionIndex().correctAnswer(answer)) {
		this.score;
	}
}

var quiz = new Quiz("questions");
populate();

//timer goes here ( not working???)
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var threeMinutes = 60 * 4,
        display = document.querySelector('#time');
    startTimer(fourMinutes, display);
};

