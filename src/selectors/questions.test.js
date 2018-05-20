import {
  checkIfQuestionsAreAvailable,
  getCurrentQuestion,
  getCurrentQuestionIndex,
  getQuestionCount,
} from './questions';

const getQuestions = () => {
  return [
    {
      question: 'Which one is a letter?',
      choices: ['a', '1', ')'],
    },
    {
      question: 'Which one is a number?',
      choices: ['1', '^', 'u'],
    },
  ];
};

describe('question selectors', () => {
  describe('getQuestionCount selector', () => {
    it('should return the number of questions', () => {
      const questions = getQuestions();
      const state = {
        questions: {
          questions,
        },
      };

      expect(getQuestionCount(state)).toEqual(questions.length);
    });
  });

  describe('checkIfQuestionsAreAvailable selector', () => {
    it('should return true if there are questions and they are not being fetched', () => {
      const state = {
        questions: {
          questions: getQuestions(),
          isFetching: false,
        },
      };

      const areQuestionsAvailable = true;

      expect(checkIfQuestionsAreAvailable(state)).toEqual(areQuestionsAvailable);
    });

    it('should return false if questions are being fetched', () => {
      const state = {
        questions: {
          questions: getQuestions(),
          isFetching: true,
        },
      };

      const areQuestionsAvailable = false;

      expect(checkIfQuestionsAreAvailable(state)).toEqual(areQuestionsAvailable);
    });
  });

  describe('getCurrentQuestionIndex selector', () => {
    it('should return current question index', () => {
      const currentQuestionIndex = 1;
      const state = {
        questions: {
          currentQuestionIndex,
        },
      };

      expect(getCurrentQuestionIndex(state)).toEqual(currentQuestionIndex);
    });
  });

  describe('getCurrentQuestion selector', () => {
    it('should return current question', () => {
      const questions = getQuestions();
      const questionIndex = 1;

      expect(getCurrentQuestion.resultFunc(questions, questionIndex)).toEqual(
        questions[questionIndex]
      );
    });
  });
});
