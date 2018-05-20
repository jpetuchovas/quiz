import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  FETCH_ANSWER_LOADING,
  FETCH_ANSWER_SUCCESS,
  FETCH_QUESTIONS_LOADING,
  FETCH_QUESTIONS_SUCCESS,
  fetchAnswer,
  fetchQuestions,
} from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async action creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  describe('fetchQuestions', () => {
    it('should dispatch FETCH_QUESTIONS_LOADING and FETCH_QUESTIONS_SUCCESS actions when fetch is successful', () => {
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

      fetchMock.once('/api/questions', {
        body: questions,
        headers: { 'content-type': 'application/json' },
      });

      const store = mockStore({});

      const expectedActions = [
        { type: FETCH_QUESTIONS_LOADING },
        {
          type: FETCH_QUESTIONS_SUCCESS,
          questions,
        },
      ];

      store.dispatch(fetchQuestions()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('fetchAnswer', () => {
    it('should not dispatch any actions when fetch is already happening', () => {
      const questionIndex = 0;
      const selectedAnswerIndex = 1;

      const store = mockStore({
        answers: {
          isFetching: true,
        },
      });

      const expectedActions = [];

      store.dispatch(fetchAnswer(questionIndex, selectedAnswerIndex));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('should dispatch FETCH_ANSWER_LOADING and FETCH_ANSWER_SUCCESS actions when fetch is successful', () => {
      const questionIndex = 0;
      const correctAnswerIndex = 1;
      const selectedAnswerIndex = 1;

      fetchMock.once(`/api/questions/${questionIndex}/answer`, {
        body: { answer: correctAnswerIndex },
        headers: { 'content-type': 'application/json' },
      });

      const store = mockStore({
        answers: {
          isFetching: false,
        },
      });

      const expectedActions = [
        { type: FETCH_ANSWER_LOADING },
        {
          type: FETCH_ANSWER_SUCCESS,
          correctAnswerIndex,
          selectedAnswerIndex,
        },
      ];

      store.dispatch(fetchAnswer(questionIndex, selectedAnswerIndex)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
