// Constructor function of Question
function Question(text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

//Detect whether the answer is correct
Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}