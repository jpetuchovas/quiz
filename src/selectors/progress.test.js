import { checkIfQuizIsFinished, getAnsweredQuestionsPercentage } from './progress';

describe('progress selectors', () => {
  describe('checkIfQuizIsFinished selector', () => {
    it('should return true if the last question is answered', () => {
      const isCorrectAnswerAvailable = true;
      const currentQuestionIndex = 1;
      const questionCount = 2;

      const isQuizFinished = true;

      expect(
        checkIfQuizIsFinished.resultFunc(
          isCorrectAnswerAvailable,
          currentQuestionIndex,
          questionCount
        )
      ).toEqual(isQuizFinished);
    });

    it('should return false if the last question is not answered', () => {
      const isCorrectAnswerAvailable = false;
      const currentQuestionIndex = 1;
      const questionCount = 2;

      const isQuizFinished = false;

      expect(
        checkIfQuizIsFinished.resultFunc(
          isCorrectAnswerAvailable,
          currentQuestionIndex,
          questionCount
        )
      ).toEqual(isQuizFinished);
    });

    it('should return false if the current question is not the last one', () => {
      const isCorrectAnswerAvailable = true;
      const currentQuestionIndex = 0;
      const questionCount = 2;

      const isQuizFinished = false;

      expect(
        checkIfQuizIsFinished.resultFunc(
          isCorrectAnswerAvailable,
          currentQuestionIndex,
          questionCount
        )
      ).toEqual(isQuizFinished);
    });
  });

  describe('getAnsweredQuestionsPercentage selector', () => {
    it('should calculate percentage including current question if it is answered', () => {
      const isCorrectAnswerAvailable = true;
      const currentQuestionIndex = 1;
      const questionCount = 4;

      const answeredQuestionsPercentage = 50;

      expect(
        getAnsweredQuestionsPercentage.resultFunc(
          isCorrectAnswerAvailable,
          currentQuestionIndex,
          questionCount
        )
      ).toEqual(answeredQuestionsPercentage);
    });

    it('should calculate percentage excluding current question if it is not answered', () => {
      const isCorrectAnswerAvailable = false;
      const currentQuestionIndex = 1;
      const questionCount = 4;

      const answeredQuestionsPercentage = 25;

      expect(
        getAnsweredQuestionsPercentage.resultFunc(
          isCorrectAnswerAvailable,
          currentQuestionIndex,
          questionCount
        )
      ).toEqual(answeredQuestionsPercentage);
    });
  });
});
