const data = [
  {
    question: 'What method is used to change state in React?',
    choices: ['setState', 'changeState', 'replaceState'],
    answerIndex: 0,
  },
  {
    question: 'What is an IIFE?',
    choices: [
      'Internally Indexed File Extension',
      'Immediately Invoked Function Expression',
      'Initially Integrated Functional Element',
    ],
    answerIndex: 1,
  },
  {
    question: 'Which of the following is an aspect of a pure function?',
    choices: [
      'Produces side effects',
      "Given the same input, it'll return the same output",
      'All of the above',
    ],
    answerIndex: 1,
  },
  {
    question: 'Which of the following values is truthy in JavaScript?',
    choices: ['undefined', '"" (empty string)', '[] (empty array)'],
    answerIndex: 2,
  },
];

module.exports = {
  questions: data,
};
