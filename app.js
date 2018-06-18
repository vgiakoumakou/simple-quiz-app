// Populate the question's text and choices
function populateQuestion() {
	if(quiz.isEnded()) {
		showScores();
	}
	else {
		// show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		// show question's choices
		var choices = quiz.getQuestionIndex().choices;
		for(var i=0; i<choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}

		showCurrentQuestionNumber();
	}
}

// call prototype.guess to detect whether the user has guessed correctly or not
// @param {string} id
// @param {string} guess
function guess(id, guessedOption) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guessedOption);

		populateQuestion();
	}
}

function showCurrentQuestionNumber() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
	
	// show score html content
	var scoreContent = "<h1>Result</h1>";
	scoreContent += "<h2 id='score'> Your score is: <b>" + quiz.score + "</b></h2>";

	// select the html quiz element and append 
	var element = document.getElementById("title-question-wrapper");
	element.innerHTML = scoreContent;

	// Remove option buttons 
	document.querySelectorAll('.choice-buttons').forEach(function(a){
		a.remove();
	});
	document.getElementById("progress").remove();

}

// Questions data
var questions = [
	new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

// Create an object according to the quiz constructor
var quiz = new Quiz(questions);

// Call the function that populates questions
populateQuestion();
