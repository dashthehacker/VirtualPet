function worksleep(delayInSeconds) {
  return new Promise(resolve => setTimeout(resolve, delayInSeconds * 1000));
}


const workButton = document.getElementById("work");
const mathProblemElement = document.createElement('h3');
try {if (localStorage.getItem("mobile")  === "true") {mathProblemElement.id="mathproblem";}} catch {}
const answerInput = document.createElement('input');
const timerElement = document.createElement('h3');
document.body.appendChild(mathProblemElement);
document.body.appendChild(answerInput);
document.body.appendChild(timerElement);
answerInput.type="number";
mathProblemElement.classList.add('hidden');
answerInput.classList.add('hidden');
timerElement.classList.add('hidden');
let score = 0;
let timeLeft = 30;
let timer;
let currentAnswer = 0;  
workButton.addEventListener("click", startChallenge);
function startChallenge() {
  score = 0;
  timeLeft = 30;
  updateTimerDisplay();
  workButton.style.display = "none";
  mathProblemElement.classList.remove('hidden');
  answerInput.classList.remove('hidden');
  timerElement.classList.remove('hidden');
  fadeInElements();
  startTimer();
  generateMathProblem();
  answerInput.addEventListener('keydown', handleAnswer);
  answerInput.focus();  
}
function updateTimerDisplay() {
  timerElement.textContent = `Time Left: ${timeLeft}s`;
}
function startTimer() {
  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);  
      endChallenge();
    } else {
      timeLeft--;
      updateTimerDisplay();  
    }
  }, 1000);
}
function generateMathProblem() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operator = Math.random() > 0.5 ? '+' : '-';
  mathProblemElement.textContent = `Solve: ${num1} ${operator} ${num2}`;
  currentAnswer = operator === '+' ? num1 + num2 : num1 - num2;
}
function handleAnswer(event) {
  if (event.key === 'Enter') {
    const userInput = answerInput.value; 
    if (userInput === "") {
      console.log("Why do people type nothing T-T")
    }
    else {
      const userAnswer = parseInt(userInput, 10);
      if (!isNaN(userAnswer)) {
        if (userAnswer === currentAnswer) {
          score++; 
          try { earnMoney(5); } catch (error) { console.error("earnMoney() function missing or errored:", error); }
        }
      } else {
        console.error(`Invalid input: "${userInput}" is neither a valid secret code nor a number.`);
      }
    }
    answerInput.value = '';
    generateMathProblem();
  }
}
function endChallenge() {
  mathProblemElement.textContent = `Time's up! You answered ${score} questions correctly.`;
  fadeOutElements();
  mathProblemElement.classList.add('hidden');
  answerInput.classList.add('hidden');
  timerElement.classList.add('hidden');
  workButton.style.display = "block";
}
function fadeInElements() {
  mathProblemElement.classList.remove('fade-out');
  answerInput.classList.remove('fade-out');
  timerElement.classList.remove('fade-out');

  mathProblemElement.classList.add('fade');
  answerInput.classList.add('fade');
  timerElement.classList.add('fade');
}
function fadeOutElements() {
  mathProblemElement.classList.add('fade-out');
  answerInput.classList.add('fade-out');
  timerElement.classList.add('fade-out');
}
function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
