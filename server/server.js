const express = require('express');
const path = require('path');
const data = require('./data');

const app = express();

const port = 3008;

app.use(express.static('build'));

const getQuestionsWithoutAnswers = questions =>
  questions.map(question => ({
    question: question.question,
    choices: question.choices,
  }));

app.get('/api/questions', (request, response) => {
  response.json(getQuestionsWithoutAnswers(data.questions));
});

const getAnswerIndex = (questions, questionIndex) => questions[questionIndex].answerIndex;

app.get('/api/questions/:questionIndex/answer', (request, response) => {
  const questionIndex = parseInt(request.params.questionIndex, 10);
  response.json({ answer: getAnswerIndex(data.questions, questionIndex) });
});

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}!`));
