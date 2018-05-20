import questionsReducer from './questions';
import {
  FETCH_QUESTIONS_LOADING,
  FETCH_QUESTIONS_SUCCESS,
  RESTART_QUIZ,
  SWITCH_TO_NEXT_QUESTION,
} from '../actions';

const questions = [
  {
    question: 'Which one is a letter?',
    choices: ['a', '1', ')'],
  },
  {
    question: 'Which one is a number?',
    choices: ['1', '^', 'u'],
  },
];

describe('questions reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      questions: [],
      currentQuestionIndex: 0,
      isFetching: false,
    };

    expect(questionsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_QUESTIONS_LOADING', () => {
    const action = { type: FETCH_QUESTIONS_LOADING };

    const expectedState = {
      questions: [],
      currentQuestionIndex: 0,
      isFetching: true,
    };

    expect(questionsReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle FETCH_QUESTIONS_SUCCESS', () => {
    const action = {
      type: FETCH_QUESTIONS_SUCCESS,
      questions,
    };

    const expectedState = {
      questions,
      currentQuestionIndex: 0,
      isFetching: false,
    };

    expect(questionsReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SWITCH_TO_NEXT_QUESTION when there are questions left', () => {
    const startingState = {
      questions,
      currentQuestionIndex: 0,
      isFetching: false,
    };
    const action = { type: SWITCH_TO_NEXT_QUESTION };

    const expectedState = {
      questions,
      currentQuestionIndex: 1,
      isFetching: false,
    };

    expect(questionsReducer(startingState, action)).toEqual(expectedState);
  });

  it('should handle SWITCH_TO_NEXT_QUESTION when there are no questions left', () => {
    const startingState = {
      questions,
      currentQuestionIndex: 1,
      isFetching: false,
    };
    const action = { type: SWITCH_TO_NEXT_QUESTION };

    expect(questionsReducer(startingState, action)).toEqual(startingState);
  });

  it('should handle RESTART_QUIZ', () => {
    const startingState = {
      questions,
      currentQuestionIndex: 2,
      isFetching: false,
    };
    const action = { type: RESTART_QUIZ };

    const expectedState = {
      questions: [],
      currentQuestionIndex: 0,
      isFetching: false,
    };

    expect(questionsReducer(startingState, action)).toEqual(expectedState);
  });
});
