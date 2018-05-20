const express = require('express');
const data = require('./data');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static('build'));

const getQuestionsWithoutAnswers = questions =>
  questions.map(question => ({
    question: question.question,
    choices: question.choices,
  }));

app.get('/api/questions', (request, response) => {
  response.json(getQuestionsWithoutAnswers(data.questions));
});

const getAnswer = (questions, questionIndex) => questions[questionIndex].answerIndex;

app.get('/api/questions/:questionIndex/answer', (request, response) => {
  const questionIndex = parseInt(request.params.questionIndex, 10);
  response.json({ answer: getAnswer(data.questions, questionIndex) });
});

const port = 3008;

app.listen(port, () => console.log(`Server running on port ${port}!`));
