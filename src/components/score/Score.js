import React from 'react';
import { connect } from 'react-redux';

import './Score.css';
import { getCorrectlyAnsweredQuestionsCount } from '../../selectors/answers';
import { getQuestionCount } from '../../selectors/questions';

const Score = ({ correctlyAnsweredQuestionsCount, questionCount }) => (
  <div className="score">
    Score: {correctlyAnsweredQuestionsCount} / {questionCount}
  </div>
);

const mapStateToProps = state => ({
  correctlyAnsweredQuestionsCount: getCorrectlyAnsweredQuestionsCount(state),
  questionCount: getQuestionCount(state),
});

export default connect(mapStateToProps)(Score);
