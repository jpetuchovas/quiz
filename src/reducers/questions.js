import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_LOADING,
  SWITCH_TO_NEXT_QUESTION,
  RESTART_QUIZ,
} from '../actions';

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  isFetching: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.questions,
        isFetching: false,
      };
    case SWITCH_TO_NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex:
          state.currentQuestionIndex < state.questions.length - 1
            ? state.currentQuestionIndex + 1
            : state.questions.length - 1,
      };
    case RESTART_QUIZ:
      return initialState;
    default:
      return state;
  }
};
