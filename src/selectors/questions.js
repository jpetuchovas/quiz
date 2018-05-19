import { createSelector } from 'reselect';

const getQuestionsState = state => state.questions;

const getQuestions = state => getQuestionsState(state).questions;

export const getQuestionCount = createSelector(
  getQuestions,
  questions => questions.length
);

export const checkIfQuestionsAreBeingFetched = createSelector(
  getQuestionsState,
  questionsState => questionsState.isFetching
);

export const getCurrentQuestionIndex = createSelector(
  getQuestionsState,
  questionsState => questionsState.currentQuestionIndex
);

export const getCurrentQuestion = createSelector(
  getQuestions,
  getCurrentQuestionIndex,
  (questions, currentQuestionIndex) => questions[currentQuestionIndex]
);
