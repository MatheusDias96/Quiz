const form = document.querySelector(".quiz-form");
const resultWrapper = document.querySelector(".result-wrapper");
const result = document.querySelector(".result");
const button = document.querySelector(".btn");
const resultQuiz = document.querySelector("span");
const correctAnswers = ["A", "C", "C", "A", "B", "A", "B", "C", "B", "C"];

const showResult = (event) => {
  event.preventDefault();

  let score = 0;
  let counter = 0;

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
    form.inputQuestion5.value,
    form.inputQuestion6.value,
    form.inputQuestion7.value,
    form.inputQuestion8.value,
    form.inputQuestion9.value,
    form.inputQuestion10.value,
  ];
  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 10;
    }
  });
  scrollTo(0, 0);
  resultWrapper.style.display = "block";

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }
    resultQuiz.textContent = `${counter}%`;

    counter++;
  }, 10);
  if (score >= 50) {
    result.setAttribute("class", "bg-success");
    return;
  }
  result.setAttribute("class", "bg-danger");
};

const existResult = (event) => {
  const classOfClicked = event.target.classList[0];
  const classNames = ["result-close", "result-button", "result-wrapper"];
  const shoulResult = classNames.some(
    (classNames) => classNames === classOfClicked
  );
  if (shoulResult) {
    resultWrapper.style.display = "none";
  }
};

form.addEventListener("submit", showResult);
result.addEventListener("click", existResult);
