// bind document elements to logical variables 
var body = document.body;
var header = document.createElement("header"); 
var h1E1 = document.createElement("h1");
var h2E1 = document.createElement("h2");
var h3E1 = document.createElement("h3");
var btn1 = document.createElement("button");
var a1btn = document.createElement("button");
var a2btn = document.createElement("button");
var a3btn = document.createElement("button");
var a4btn = document.createElement("button");
var timer1 = document.createElement("time");
var listE1 = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement('li');
var li3 = document.createElement("li");
var li4 = document.createElement('li');
var highScores = document.createElement("link")

// landing page with welcome message and start button 
h1E1.textContent = "Coding Quiz Challenge";
h3E1.textContent = "Try to answer all of the following questions before time runs out! Caution: Incorrect answers will subtract extra time. Choose wisely.";
btn1.textContent = "Start Quiz!";
// append these elements to the page 
body.appendChild(h1E1);
body.appendChild(h3E1);
body.appendChild(btn1);
// apply styling to these elements 
h1E1.setAttribute("style", "margin:auto; padding:2%; width:50%; text-align:center;");
h3E1.setAttribute("style", "margin:auto; padding:2%; width:50%; text-align:center;");
btn1.setAttribute("style", "margin:auto 45%; display:block; background-color:purple; color:white; border-radius:8px; text-align:center;");
// adding event listener to the start button
// adding functionality to start quiz when clicked
btn1.addEventListener('click', function () {
    startQuiz();
});
var playerScore = 0;
var questionNumber = 0; 
var timeLeft;

// defining the quiz questions
const questions = [
    {
        question: "Commonly used data types DO NOT include: ", 
        option1: 'strings',
        option2: 'booleans',
        option3: 'alert',
        option4: 'numbers',
        correctAnswer: 'option3'
    },
    {
        question: "The condition of an if/else statement is enclosed within ___",
        option1: 'quotes',
        option2: 'curly brackets',
        option3: 'parentheses',
        option4: 'square brackets',
        correctAnswer: 'option3'
    },
    {
        question: "Arrays in Javascript can be used to store ___",
        option1: 'numbers and strings',
        option2: 'other arrays',
        option3: 'booleans',
        option4: 'all of the above',
        correctAnswer: 'option4'
    },
    {
        question: "String values must be enclosed in _____ when being assigned to variables.",
        option1: 'commas',
        option2: 'curly brackets',
        option3: 'quotes',
        option4: 'none of the above',
        correctAnswer: 'option3'
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is: ",
        option1: 'Javascript',
        option2: 'terminal/bash',
        option3: 'for loops',
        option4: 'console log',
        correctAnswer: 'option4'
    }
];

console.log(questions);

// after clicking the start button present question and start timer in the upper right hand corner of the screen 
// appending elements to second page

const endQuiz = () => {


}
// define the countdown
const startCountdown = () => {
    let timeInterval = setInterval(() => {
        timeLeft--;
        timer1.textContent ="Time left: " + timeLeft;
        switch(timeLeft) {
            case (timeLeft === 0):
                endQuiz();
                clearInterval(timeInterval);
                break;
            case (timeLeft < 0):
                endQuiz();
            default:
                break;
        };
    }, 1000);
}




const questionLayout = () => {
    // body.appendChild(listE1);

    for (let i = questionNumber; i <= 0; i++) {
        
        body.appendChild(listE1);
        listE1.setAttribute("style", "display:flex; flex-direction:column; justify-content:center; text-align:center; margin:25%, font-weight:bold, font-size: 24px;");
        listE1.innerHTML = questions[i].question;
        listE1.appendChild(a1btn);
        a1btn.innerHTML = questions[i].option1;
        a1btn.setAttribute("style", "list-style-type:none, margin:auto; display:flex; flex-direction:row; justify-content:center; background-color:purple; color:white; border-radius:8px; text-align:center;");
        a1btn.setAttribute("id", "option1");
        a1btn.addEventListener('click', function(){
            checkAnswer();
        });
        listE1.appendChild(a2btn);
        a2btn.innerHTML = questions[i].option2;
        a2btn.setAttribute("style", "list-style-type:none, margin:auto; display:flex; flex-direction:row; justify-content:center; background-color:purple; color:white; border-radius:8px; text-align:center;");
        a1btn.setAttribute("id", "option2");
        a2btn.addEventListener('click', function(){
            checkAnswer();
        });
        listE1.appendChild(a3btn);
        a3btn.innerHTML = questions[i].option3;
        a3btn.setAttribute("style", "list-style-type:none, margin:auto; display:flex; flex-direction:row; justify-content:center; background-color:purple; color:white; border-radius:8px; text-align:center;");
        a1btn.setAttribute("id", "option3");
        a3btn.addEventListener('click', function(){
            checkAnswer();
        });
        listE1.appendChild(a4btn);
        a4btn.innerHTML = questions[i].option4;
        a4btn.setAttribute("style", "list-style-type:none, margin:auto; display:flex; flex-direction:row; justify-content:center; background-color:purple; color:white; border-radius:8px; text-align:center;");
        a1btn.setAttribute("id", "option4");
        a4btn.addEventListener('click', function(){
            checkAnswer();
        });

        // h1E1.textContent = questions[i].question;
        // a1btn.textContent = questions[i].option1;
        // a2btn.textContent = questions[i].option2;
        // a3btn.textContent = questions[i].option3;
        // a4btn.textContent = questions[i].option4;
    }

}

const checkAnswer = (questionNumber, playerScore) => {
    for (var i = questionNumber; i <= questions.length; i++)
    var currentQuestionAnswer = questionNumber[i].correctAnswer;
    var option1 = document.getElementById('option1');
    var option2 = document.getElementById('option2');
    var option3 = document.getElementById('option3');
    var option4 = document.getElementById('option4');

    if((currentQuestionAnswer == option1 || currentQuestionAnswer == option2 || currentQuestionAnswer == option3 || currentQuestionAnswer == option4) && timeLeft > 0){
        playerScore++;
        questionNumber++;
    } else {
        questionNumber++;

    }
    
}




const startQuiz = () => {
    h1E1.setAttribute("style", "display:none");
    h3E1.setAttribute("style", "display:none");
    btn1.setAttribute("style", "display:none");
    playerScore = 0;
    questionNumber = 0; 
    timeLeft = 75; 
    questionLayout(); 
    startCountdown();
    console.log(playerScore);
    
}

console.log(playerScore);



// question presentation has the question at top and four buttons as answers 

// answering the question displays whether your answer was correct or incorrect at the bottom before advancing to the next screen 

// answering the question advances to the next screen with another question

// incorrect answers will subtract more time from the timer 

// when all questions are answered or the timer runs out the user is brought to a final page 

// on the final page there is a text box to store high scores which can be accessed at a later date 
// final page also displays your final score 