import questions from '../questions';

export const FETCH_QUESTIONS_LOADING = 'FETCH_QUESTIONS_LOADING';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_FAILURE = 'FETCH_QUESTIONS_FAILURE';

export const FETCH_ANSWER_LOADING = 'FETCH_ANSWER_LOADING';
export const FETCH_ANSWER_SUCCESS = 'FETCH_ANSWER_SUCCESS';
export const FETCH_ANSWERS_FAILURE = 'FETCH_ANSWERS_FAILURE';

export const SWITCH_TO_NEXT_QUESTION = 'SWITCH_TO_NEXT_QUESTION';

export const fetchQuestionsLoading = () => ({ type: FETCH_QUESTIONS_LOADING });
export const fetchQuestionsSuccess = questions => ({
  type: FETCH_QUESTIONS_SUCCESS,
  questions,
});
export const fetchQuestionsFailure = () => ({ type: FETCH_QUESTIONS_FAILURE });
export const fetchQuestions = () => dispatch => {
  dispatch(fetchQuestionsLoading());
  setTimeout(() => dispatch(fetchQuestionsSuccess(questions)), 1000);
};

export const fetchAnswerLoading = () => ({ type: FETCH_ANSWER_LOADING });
export const fetchAnswerSuccess = (correctAnswerIndex, selectedAnswerIndex) => ({
  type: FETCH_ANSWER_SUCCESS,
  correctAnswerIndex,
  selectedAnswerIndex,
});
export const fetchAnswerFailure = () => ({ type: FETCH_ANSWERS_FAILURE });
export const fetchAnswer = (questionIndex, selectedAnswerIndex) => (dispatch, getState) => {
  if (!getState().answers.isFetching) {
    dispatch(fetchAnswerLoading());
    setTimeout(() =>
      dispatch(fetchAnswerSuccess(questions[questionIndex].answerIndex, selectedAnswerIndex))
    );
  }
};

export const switchToNextQuestion = () => ({ type: SWITCH_TO_NEXT_QUESTION });
