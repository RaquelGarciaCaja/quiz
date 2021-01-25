const printHtmlQuestionsFringe = (i) => {
  timeEachQuestion();
  currentQuestionIndex++;
  const q = questions[4][i];
  const html = document.querySelector(".fringe--container");
  let allAnswer = q.Answer;
  rightAnswer = allAnswer[0];

  a = allAnswer.sort((a, b) => Math.floor(Math.random() * 3) - 1);
  const htmlAnswerArray = a.map(
    (eachAnswer) =>
      `<h3 class="quiz--containerAnswer"><button class="fringe--btn" onClick="answerOk('${eachAnswer}', this)">X</button><span class="fringe--answer">${eachAnswer}</span></h3>`
  );
  const htmlAnswer = htmlAnswerArray.join(" ");
  html.innerHTML = `<h1 class="fringe--question">${q.Question}</h1><div>${htmlAnswer}</div>`;

  if (q.Id == 10) {
    btnFinal.style.display = "flex";
  }
  answerOk();
};
