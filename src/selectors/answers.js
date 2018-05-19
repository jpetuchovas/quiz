import { createSelector } from 'reselect';

const answersStateSelector = state => state.answers;

export const getCorrectAnswerIndex = createSelector(
  answersStateSelector,
  answersState => answersState.correctAnswerIndex
);

export const checkIfCorrectAnswerIsAvailable = createSelector(
  getCorrectAnswerIndex,
  correctAnswerIndex => correctAnswerIndex !== null
);

export const getCorrectlyAnsweredQuestionsCount = createSelector(
  answersStateSelector,
  answersState => answersState.correctlyAnsweredQuestionsCount
);
