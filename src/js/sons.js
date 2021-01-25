const printHtmlQuestionsSons = (i) => {
  timeEachQuestion();
  currentQuestionIndex++;
  const q = questions[1][i];
  const html = document.querySelector(".sons--container");
  let allAnswer = q.Answer;
  rightAnswer = allAnswer[0];
  console.log(questions[1][0]);
  a = allAnswer.sort((a, b) => Math.floor(Math.random() * 3) - 1);
  const htmlAnswerArray = a.map(
    (eachAnswer) =>
      `<h3 class="quiz--containerAnswer"><button class="sons--btn" onClick="answerOk('${eachAnswer}', this)">X</button><span class="sons--answer">${eachAnswer}</span></h3>`
  );
  const htmlAnswer = htmlAnswerArray.join(" ");
  html.innerHTML = `<h1 class="sons--question">${q.Question}</h1><div>${htmlAnswer}</div>`;

  if (q.Id == 10) {
    btnFinal.style.display = "flex";
  }
  answerOk();
};
