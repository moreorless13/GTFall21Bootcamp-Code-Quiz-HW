// bind document elements to logical variables 
var body = document.body;
var header = document.createElement("header"); 
var h1E1 = document.createElement("h1");
var h2E1 = document.createElement("h2");
var h3E1 = document.createElement("h3");
var btn1 = document.createElement("button");
var timer1 = document.createElement("time");
var form1 = document.createElement("form");
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
h1E1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
h3E1.setAttribute("style", "margin:auto; width:50%; text-align:center;");
btn1.setAttribute("style", "margin:auto; background-color:purple; color:white; border-radius:8px; text-align:center;");
btn1.addEventListener('click', function(){
    // start quiz function here
})
// after clicking the start button present question and start timer in the upper right hand corner of the screen 
// appending elements to second page
header.appendChild(highScores);
header.appendChild(timer1);
const countdown = () => {
    let timeLeft = 75;
    let timeInterval = setInterval(() => {
        timeLeft--;
        timer1.textContent = timeLeft;
        switch(timeLeft) {
            case (timeLeft === 0):
                // end quiz
                clearInterval(timeInterval);
                break;
            default:
                break;
        };
    }, 1000);
}




// question presentation has the question at top and four buttons as answers 

// answering the question displays whether your answer was correct or incorrect at the bottom before advancing to the next screen 

// answering the question advances to the next screen with another question

// incorrect answers will subtract more time from the timer 

// when all questions are answered or the timer runs out the user is brought to a final page 

// on the final page there is a text box to store high scores which can be accessed at a later date 
// final page also displays your final score 