/* The quiz controller handles the score, the number of questions etc */

// The Quiz constructor
function Quiz(questions) {
	this.score = 0;
	this.questions = questions;
	this.questionIndex = 0;
}


// Get the index of the current question
Quiz.prototype.getQuestionIndex = function() {
	return this.questions[this.questionIndex];
}


// Check whether the quiz has ended or not
Quiz.prototype.isEnded = function() {
	return this.questionIndex === this.questions.length;
}

// Move to next question and increase score if the answer is correct
Quiz.prototype.guess = function(answer) {
	if(this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}

	this.questionIndex++;
}
