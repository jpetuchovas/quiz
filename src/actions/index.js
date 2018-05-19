export const FETCH_QUESTIONS_LOADING = 'FETCH_QUESTIONS_LOADING';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';

export const FETCH_ANSWER_LOADING = 'FETCH_ANSWER_LOADING';
export const FETCH_ANSWER_SUCCESS = 'FETCH_ANSWER_SUCCESS';

export const SWITCH_TO_NEXT_QUESTION = 'SWITCH_TO_NEXT_QUESTION';

export const fetchQuestionsLoading = () => ({ type: FETCH_QUESTIONS_LOADING });
export const fetchQuestionsSuccess = questions => ({
  type: FETCH_QUESTIONS_SUCCESS,
  questions,
});
export const fetchQuestions = () => dispatch => {
  dispatch(fetchQuestionsLoading());
  return fetch('http://localhost:3008/api/questions')
    .then(response => response.json())
    .then(questions => dispatch(fetchQuestionsSuccess(questions)));
};

export const fetchAnswerLoading = () => ({ type: FETCH_ANSWER_LOADING });
export const fetchAnswerSuccess = (correctAnswerIndex, selectedAnswerIndex) => ({
  type: FETCH_ANSWER_SUCCESS,
  correctAnswerIndex,
  selectedAnswerIndex,
});
export const fetchAnswer = (questionIndex, selectedAnswerIndex) => (dispatch, getState) => {
  if (!getState().answers.isFetching) {
    dispatch(fetchAnswerLoading());
    return fetch(`http://localhost:3008/api/questions/${questionIndex}/answer`)
      .then(response => response.json())
      .then(data => dispatch(fetchAnswerSuccess(data.answer, selectedAnswerIndex)));
  }
};

export const switchToNextQuestion = () => ({ type: SWITCH_TO_NEXT_QUESTION });
