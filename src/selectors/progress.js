import { createSelector } from 'reselect';
import { checkIfCorrectAnswerIsAvailable } from './answers';
import { getCurrentQuestionIndex, getQuestionCount } from './questions';

export const checkIfQuizIsFinished = createSelector(
  checkIfCorrectAnswerIsAvailable,
  getCurrentQuestionIndex,
  getQuestionCount,
  (isCorrectAnswerAvailable, currentQuestionIndex, questionCount) =>
    isCorrectAnswerAvailable && currentQuestionIndex === questionCount - 1
);

const getPercentage = (part, total) => part / total * 100;

export const getAnsweredQuestionsPercentage = createSelector(
  checkIfCorrectAnswerIsAvailable,
  getCurrentQuestionIndex,
  getQuestionCount,
  (isCorrectAnswerAvailable, currentQuestionIndex, questionCount) =>
    isCorrectAnswerAvailable
      ? getPercentage(currentQuestionIndex + 1, questionCount)
      : getPercentage(currentQuestionIndex, questionCount)
);
