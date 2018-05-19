import {
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_LOADING,
  SWITCH_TO_NEXT_QUESTION,
} from '../actions';

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  isFetching: true,
  isFetchSuccessful: true,
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
        isFetchSuccessful: true,
      };
    case SWITCH_TO_NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex:
          state.currentQuestionIndex < state.questions.length - 1
            ? state.currentQuestionIndex + 1
            : state.questions.length - 1,
      };
    default:
      return state;
  }
};
