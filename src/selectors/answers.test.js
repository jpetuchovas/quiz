import {
  checkIfCorrectAnswerIsAvailable,
  getCorrectAnswerIndex,
  getCorrectlyAnsweredQuestionsCount,
} from './answers';

describe('answer selectors', () => {
  describe('getCorrectAnswerIndex selector', () => {
    it('should return correct answer index', () => {
      const correctAnswerIndex = 1;
      const state = {
        answers: {
          correctAnswerIndex,
        },
      };

      expect(getCorrectAnswerIndex(state)).toEqual(correctAnswerIndex);
    });
  });

  describe('checkIfCorrectAnswerIsAvailable selector', () => {
    it('should indicate when correct answer is not available', () => {
      const correctAnswerIndex = null;

      const isCorrectAnswerAvailable = false;

      expect(checkIfCorrectAnswerIsAvailable.resultFunc(correctAnswerIndex)).toEqual(
        isCorrectAnswerAvailable
      );
    });

    it('should indicate when correct answer is available', () => {
      const correctAnswerIndex = 1;

      const isCorrectAnswerAvailable = true;

      expect(checkIfCorrectAnswerIsAvailable.resultFunc(correctAnswerIndex)).toEqual(
        isCorrectAnswerAvailable
      );
    });
  });

  describe('getCorrectlyAnsweredQuestionsCount selector', () => {
    it('should return the number of correctly answered questions', () => {
      const correctlyAnsweredQuestionsCount = 2;
      const state = {
        answers: {
          correctlyAnsweredQuestionsCount,
        },
      };

      expect(getCorrectlyAnsweredQuestionsCount(state)).toEqual(correctlyAnsweredQuestionsCount);
    });
  });
});
