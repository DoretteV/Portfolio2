// declare variables
let story = document.getElementById("story");
let siteFooter = document.getElementById("siteFooter");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let yourAnswer = document.getElementById("yourAnswer");
let submit = document.getElementById("submit");

// todo: make an empty array called answers

let answers = [];

/* todo: listen for clicks on the submit button and call the getAnswer() function when they happen */

submit.addEventListener("click", getAnswer);

// todo: call the function to ask the first question
askQuestion(0);

/* askQuestion() asks a question, based on the number passed to it */
function askQuestion(questionNumber) {
  answer.style.display = "block";
  answer.length = questionNumber;

  switch (questionNumber) {
    case 0:
      question.innerHTML = "Are you ready to play?";
      break;
    case 1:
      question.innerHTML = "Go to Mars, or stay home?";
      break;
    case 2:
      question.innerHTML = "Risk it, or go home.";
      break;
    default:
      break;
  }
}

/* getAnswer() gets the answer from the text field and pushes it into the answers array, then calls the continueStory function*/
function getAnswer() {
  cleanInput = yourAnswer.value.toUpperCase();
  answers.push(cleanInput);
  yourAnswer.value = "";

  continueStory(answers.length - 1);
}

/* continueStory() displays part of the story or an error based on the value of an item in the answers array */
function continueStory(answerNumber) {
  switch (answerNumber) {
    case 0:
      if (answers[0] === "YES") {
        console.log("insertingAnswer01");
        story.innerHTML = document.getElementById("answer01").innerHTML;
        askQuestion(1);
      } else if (answers[0] === "NO") {
        story.innerHTML = document.getElementById("answer02").innerHTML;
        askQuestion(0);
      } else {
        story.innerHTML = document.getElementById("err0").innerHTML;
        askQuestion(0);
      }
      break;
    case 1:
      if (answers[1] === "GO TO MARS") {
        story.innerHTML = document.getElementById("answer11").innerHTML;
        askQuestion(2);
      } else if (answers[1] === "STAY HOME") {
        story.innerHTML = document.getElementById("answer12").innerHTML;
        theEnd();
      } else {
        story.innerHTML = document.getElementById("err1").innerHTML;
        askQuestion(1);
      }
      break;
    case 2:
      if (answers[2] === "RISK IT") {
        story.innerHTML = document.getElementById("answer21").innerHTML;
        theEnd();
      } else if (answers[2] === "GO HOME") {
        story.innerHTML = document.getElementById("answer22").innerHTML;
        theEnd();
      } else {
        story.innerHTML = document.getElementById("err2").innerHTML;
        askQuestion(2);
      }
      break;
    default:
      story.innerHTML = "The story is over!";
      break;
  }
}

/* theEnd() ends the story and hides the input field */
function theEnd() {
  story.innerHTML += "<p>The End.</p>";
  question.innerHTML = "";
  answer.style.display = "none";
}
