import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, LinearProgress, Paper } from '@material-ui/core';

import './QuestionCard.css';
import { checkIfCorrectAnswerIsAvailable, getCorrectAnswerIndex } from '../../selectors/answers';
import { checkIfQuizIsFinished, getAnsweredQuestionsPercentage } from '../../selectors/progress';
import { getCurrentQuestion, getCurrentQuestionIndex } from '../../selectors/questions';
import { fetchAnswer, switchToNextQuestion } from '../../actions';
import ChoiceList from './choices/ChoiceList';

class QuestionCard extends Component {
  state = {
    selectedChoiceValue: '',
  };

  onSelectedChoiceChange = event => {
    if (!this.props.isCorrectAnswerAvailable) {
      this.setState({ selectedChoiceValue: event.target.value });
    }
  };

  onSubmitClick = (currentQuestionIndex, selectedChoiceValue) => {
    if (this.state.selectedChoiceValue !== '') {
      this.props.fetchAnswer(currentQuestionIndex, parseInt(selectedChoiceValue, 10));
    }
  };

  onContinueClick = () => {
    this.setState({ selectedChoiceValue: '' });
    this.props.switchToNextQuestion();
  };

  render() {
    return (
      <Paper className="question-card">
        <div className="question">{this.props.currentQuestion.question}</div>
        <LinearProgress variant="determinate" value={this.props.answeredQuestionsPercentage} />

        <div className="choice-container">
          <ChoiceList
            choices={this.props.currentQuestion.choices}
            isCorrectAnswerAvailable={this.props.isCorrectAnswerAvailable}
            correctAnswerIndex={this.props.correctAnswerIndex}
            selectedChoiceValue={this.state.selectedChoiceValue}
            onSelectedChoiceChange={this.onSelectedChoiceChange}
          />

          <div className="button-container">
            <Button
              variant="raised"
              color="primary"
              onClick={() =>
                this.onSubmitClick(this.props.currentQuestionIndex, this.state.selectedChoiceValue)
              }
              disabled={this.props.isCorrectAnswerAvailable}
              className="submit-button"
            >
              Submit
            </Button>

            {this.props.isQuizFinished ? (
              <Button variant="raised" color="primary">
                Finish
              </Button>
            ) : (
              <Button
                variant="raised"
                color="primary"
                onClick={this.onContinueClick}
                disabled={!this.props.isCorrectAnswerAvailable}
              >
                Continue
              </Button>
            )}
          </div>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  currentQuestionIndex: getCurrentQuestionIndex(state),
  currentQuestion: getCurrentQuestion(state),
  correctAnswerIndex: getCorrectAnswerIndex(state),
  isCorrectAnswerAvailable: checkIfCorrectAnswerIsAvailable(state),
  isQuizFinished: checkIfQuizIsFinished(state),
  answeredQuestionsPercentage: getAnsweredQuestionsPercentage(state),
});

const mapDispatchToProps = dispatch => ({
  switchToNextQuestion: () => dispatch(switchToNextQuestion()),
  fetchAnswer: (questionId, selectedAnswerIndex) =>
    dispatch(fetchAnswer(questionId, selectedAnswerIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
