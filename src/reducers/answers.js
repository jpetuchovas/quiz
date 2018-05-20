import {
  FETCH_ANSWER_LOADING,
  FETCH_ANSWER_SUCCESS,
  RESTART_QUIZ,
  SWITCH_TO_NEXT_QUESTION,
} from '../actions';

const initialState = {
  correctAnswerIndex: null,
  correctlyAnsweredQuestionsCount: 0,
  isFetching: false,
};

const answers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ANSWER_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_ANSWER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        correctAnswerIndex: action.correctAnswerIndex,
        correctlyAnsweredQuestionsCount:
          action.correctAnswerIndex === action.selectedAnswerIndex
            ? state.correctlyAnsweredQuestionsCount + 1
            : state.correctlyAnsweredQuestionsCount,
      };
    case SWITCH_TO_NEXT_QUESTION:
      return {
        ...state,
        correctAnswerIndex: null,
      };
    case RESTART_QUIZ:
      return initialState;
    default:
      return state;
  }
};

export default answers;
