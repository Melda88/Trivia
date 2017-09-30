function populate () {
	if (quiz,isEnded()) {
	}
	
	else {

		var element = document.getElementById("question");
		console.log("question")

		element.innerHTML = quiz.getQuestionIndex().text;
	}
}



var question = [
	new Question ("What is the name of John Snow's Dire-Wolf?", ["Puppers","Snow","Ghost","Nymeria"], "Ghost"),
	new question ("What is the name often used when referring to the undead?", ["White-Walkers","The Horde","Living Dead","The Skinny Dudes"], "White-Walkers"),
	new	question ("Who are the faceless men of Braavos?", ["Assassins","Pirates","Famous Cooks","Prisoners"], "Assassins"),
	new Question ("How many times has Sanza Stark been married?", ["Once","Three Times","Never been married","Twice"], "Three Times"),
	new Question ("Who is the mother of dragons?", ["Arya Stark","Daenerys Targaryen","Cersei Lannister","Sansa Stark"], "Daenerys Targaryen"),

];

var quiz = new Quiz(questions);

populate();

function Question(text, choices, answers) {
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
	return.this.Question.length === this.questionIndex;
}

Quiz.prototype.guess = function (answer) {
	this.questionIndex;

	if(this.questionIndex().correctAnswer(answer)) {
		this.score;
	}
}






