import { createSelector } from 'reselect';

import { checkIfCorrectAnswerIsAvailable } from './answers';
import { getCurrentQuestionIndex, getQuestionCount } from './questions';
import { getPercentage } from '../utils/percentage';

export const checkIfQuizIsFinished = createSelector(
  checkIfCorrectAnswerIsAvailable,
  getCurrentQuestionIndex,
  getQuestionCount,
  (isCorrectAnswerAvailable, currentQuestionIndex, questionCount) =>
    isCorrectAnswerAvailable && currentQuestionIndex === questionCount - 1
);

export const getAnsweredQuestionsPercentage = createSelector(
  checkIfCorrectAnswerIsAvailable,
  getCurrentQuestionIndex,
  getQuestionCount,
  (isCorrectAnswerAvailable, currentQuestionIndex, questionCount) =>
    isCorrectAnswerAvailable
      ? getPercentage(currentQuestionIndex + 1, questionCount)
      : getPercentage(currentQuestionIndex, questionCount)
);
