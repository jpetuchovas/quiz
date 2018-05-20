import React from 'react';
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';

import './Result.css';
import { getCorrectlyAnsweredQuestionsCount } from '../../selectors/answers';
import { getQuestionCount } from '../../selectors/questions';

const Result = ({ correctlyAnsweredQuestionsCount, questionCount }) => (
  <Paper className="result">
    <div className="congratulation">Congratulations! You've completed the quiz.</div>
    <hr />
    <div className="final-grade">
      Out of {questionCount} quiz questions, you answered {correctlyAnsweredQuestionsCount}{' '}
      correctly with a final grade of{' '}
      <b>{Math.round(correctlyAnsweredQuestionsCount / questionCount * 100)}%</b>.
    </div>
  </Paper>
);

const mapStateToProps = state => ({
  correctlyAnsweredQuestionsCount: getCorrectlyAnsweredQuestionsCount(state),
  questionCount: getQuestionCount(state),
});

export default connect(mapStateToProps)(Result);
