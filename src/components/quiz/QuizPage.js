import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

import './QuizPage.css';
import { checkIfQuestionsAreBeingFetched } from '../../selectors/questions';
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
        {this.props.isFetchingQuestions ? (
          <CircularProgress />
        ) : (
          <div className="quiz">
            <QuestionCard />
            <Score />
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetchingQuestions: checkIfQuestionsAreBeingFetched(state),
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizPage);
