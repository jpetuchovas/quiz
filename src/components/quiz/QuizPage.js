import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import './QuizPage.css';
import { checkIfQuestionsAreAvailable } from '../../selectors/questions';
import { fetchQuestions } from '../../actions';
import QuestionCard from '../questions/QuestionCard';
import Score from '../score/Score';

class QuizPage extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  render() {
    return (
      <Fragment>
        {this.props.areQuestionsAvailable ? (
          <div className="quiz">
            <QuestionCard />
            <Score />
          </div>
        ) : (
          <CircularProgress />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  areQuestionsAvailable: checkIfQuestionsAreAvailable(state),
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
