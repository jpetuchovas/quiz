import { combineReducers } from 'redux';

import questions from './questions';
import answers from './answers';

export default combineReducers({
  questions,
  answers,
});
