import React from 'react';
import { connect } from 'react-redux';
import { Button, Paper } from '@material-ui/core';

import './Result.css';
import { getCorrectlyAnsweredQuestionsCount } from '../../selectors/answers';
import { getQuestionCount } from '../../selectors/questions';
import { restartQuiz } from '../../actions';
import { getPercentage } from '../../utils/percentage';

const Result = ({ correctlyAnsweredQuestionsCount, questionCount, onRestartClick }) => (
  <Paper className="result">
    <div className="congratulation">Congratulations! You've completed the quiz.</div>
    <hr />
    <div className="final-grade">
      Out of {questionCount} quiz questions, you answered {correctlyAnsweredQuestionsCount}{' '}
      correctly with a final grade of{' '}
      <b>{Math.round(getPercentage(correctlyAnsweredQuestionsCount, questionCount))}%</b>.
    </div>

    <Button variant="raised" color="primary" onClick={onRestartClick}>
      Restart quiz
    </Button>
  </Paper>
);

const mapStateToProps = state => ({
  correctlyAnsweredQuestionsCount: getCorrectlyAnsweredQuestionsCount(state),
  questionCount: getQuestionCount(state),
});

const mapDispatchToProps = dispatch => ({
  onRestartClick: () => dispatch(restartQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
