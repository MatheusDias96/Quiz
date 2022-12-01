const form = document.querySelector(".quiz-form");
const resultWrapper = document.querySelector(".result-wrapper");
const result = document.querySelector(".result");
const button = document.querySelector(".btn");
const resultQuiz = document.querySelector("span");

const correctAnswers = ["A", "C", "C", "A", "B", "A", "B", "C", "B", "C"];

let score = 0;

const getUserAnswers = () => {
  const userAnswer = [];

  correctAnswers.forEach((_, index) => {
    const userAnswers = form[`inputQuestion${index + 1}`].value;
    userAnswer.push(userAnswers);
  });
  return userAnswer;
};

const calculateUserScore = (userAnswers) => {
  userAnswers.forEach((userAnswers, index) => {
    const isUserAnswerCorrect = userAnswers === correctAnswers[index];
    if (isUserAnswerCorrect) {
      score += 10;
      console.log(score);
    }
  });
};
const finalScore = () => {
  scrollTo(0, 0);
  resultWrapper.style.display = "block";
};

const successOrDanger = (score) => {
  if (score >= 50) {
    result.setAttribute("class", "bg-success");
    return;
  }
  result.setAttribute("class", "bg-danger");
};

const showResust = () => {
  let counter = 0;
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }
    resultQuiz.textContent = `${counter++}%`;
  }, 10);
  if (score >= 50) {
    result.setAttribute("class", "bg-success");
    return;
  }
  result.setAttribute("class", "bg-danger");
};

const closeTheResult = (event) => {
  const classOfClicked = event.target.classList[0];
  const classNames = ["result-close", "result-button", "result-wrapper"];
  const shoulResult = classNames.some(
    (classNames) => classNames === classOfClicked
  );
  if (shoulResult) {
    resultWrapper.style.display = "none";
  }
  score = 0;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userAnswers = getUserAnswers();
  calculateUserScore(userAnswers);
  showResust();
  finalScore();
});

result.addEventListener("click", closeTheResult);
