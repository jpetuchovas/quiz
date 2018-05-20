import answersReducer from './answers';
import {
  FETCH_ANSWER_LOADING,
  FETCH_ANSWER_SUCCESS,
  RESTART_QUIZ,
  SWITCH_TO_NEXT_QUESTION,
} from '../actions';

describe('answers reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      correctAnswerIndex: null,
      correctlyAnsweredQuestionsCount: 0,
      isFetching: false,
    };

    expect(answersReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_ANSWER_LOADING', () => {
    const action = { type: FETCH_ANSWER_LOADING };

    const expectedState = {
      correctAnswerIndex: null,
      correctlyAnsweredQuestionsCount: 0,
      isFetching: true,
    };

    expect(answersReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle FETCH_ANSWER_SUCCESS when selected answer is correct', () => {
    const action = {
      type: FETCH_ANSWER_SUCCESS,
      correctAnswerIndex: 1,
      selectedAnswerIndex: 1,
    };

    const expectedState = {
      correctAnswerIndex: 1,
      correctlyAnsweredQuestionsCount: 1,
      isFetching: false,
    };

    expect(answersReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle FETCH_ANSWER_SUCCESS when selected answer is not correct', () => {
    const action = {
      type: FETCH_ANSWER_SUCCESS,
      correctAnswerIndex: 1,
      selectedAnswerIndex: 0,
    };

    const expectedState = {
      correctAnswerIndex: 1,
      correctlyAnsweredQuestionsCount: 0,
      isFetching: false,
    };

    expect(answersReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SWITCH_TO_NEXT_QUESTION', () => {
    const startingState = {
      correctAnswerIndex: 1,
      correctlyAnsweredQuestionsCount: 0,
      isFetching: false,
    };
    const action = { type: SWITCH_TO_NEXT_QUESTION };

    const expectedState = {
      correctAnswerIndex: null,
      correctlyAnsweredQuestionsCount: 0,
      isFetching: false,
    };

    expect(answersReducer(startingState, action)).toEqual(expectedState);
  });

  it('should handle RESTART_QUIZ', () => {
    const startingState = {
      correctAnswerIndex: 1,
      correctlyAnsweredQuestionsCount: 5,
      isFetching: false,
    };
    const action = { type: RESTART_QUIZ };

    const expectedState = {
      correctAnswerIndex: null,
      correctlyAnsweredQuestionsCount: 0,
      isFetching: false,
    };

    expect(answersReducer(startingState, action)).toEqual(expectedState);
  });
});
