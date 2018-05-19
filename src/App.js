import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  CircularProgress,
  LinearProgress,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  withStyles,
} from '@material-ui/core';

import './App.css';
import {
  checkIfQuestionsAreBeingFetched,
  getCurrentQuestion,
  getCurrentQuestionIndex,
  getQuestionCount,
} from './selectors/questions';
import { fetchAnswer, fetchQuestions, switchToNextQuestion } from './actions';
import {
  checkIfCorrectAnswerIsAvailable,
  getCorrectAnswerIndex,
  getCorrectlyAnsweredQuestionsCount,
} from './selectors/answers';
import { getAnsweredQuestionsPercentage, checkIfQuizIsFinished } from './selectors/progress';

const styles = {
  correctAnswerLabel: {
    fontWeight: 'bold',
  },

  incorrectAnswerLabel: {
    textDecoration: 'line-through',
    opacity: 0.5,
  },
};

class App extends Component {
  componentDidMount() {
    this.props.fetchQuestions();
  }

  state = {
    value: null,
  };

  handleChange = event => {
    if (this.props.correctAnswerIndex === null) {
      this.setState({ value: event.target.value });
    }
  };

  onContinueClick = () => {
    this.setState({ value: null });
    this.props.switchToNextQuestion();
  };

  render() {
    return (
      <div className="container">
        {this.props.isFetchingQuestion ? (
          <CircularProgress />
        ) : (
          <div className="question-card-container">
            <Paper className="question-card">
              <div className="question">{this.props.currentQuestion.question}</div>
              <LinearProgress variant="determinate" value={this.props.answeredQuestionsPercentage} />
              <div className="question-card-content">
                <div>
                  <RadioGroup value={this.state.value} onChange={this.handleChange}>
                    {this.props.currentQuestion.choices.map((choice, choiceIndex) => (
                      <FormControlLabel
                        classes={
                          !this.props.isCorrectAnswerAvailable
                            ? null
                            : choiceIndex === this.props.correctAnswerIndex
                              ? { label: this.props.classes.correctAnswerLabel }
                              : { label: this.props.classes.incorrectAnswerLabel }
                        }
                        key={choiceIndex}
                        value={choiceIndex.toString()}
                        control={<Radio color="primary" />}
                        label={choice}
                      />
                    ))}
                  </RadioGroup>
                </div>
                <div className="button-container">
                  <Button
                    variant="raised"
                    color="primary"
                    onClick={() =>
                      this.props.onSubmitClick(
                        this.props.currentQuestionIndex,
                        this.state.value !== '' ? Number(this.state.value) : null
                      )
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
            <div className="score">
              Score: {this.props.correctlyAnsweredQuestionsCount} / {this.props.questionCount}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetchingQuestion: checkIfQuestionsAreBeingFetched(state),
  currentQuestionIndex: getCurrentQuestionIndex(state),
  currentQuestion: getCurrentQuestion(state),
  correctAnswerIndex: getCorrectAnswerIndex(state),
  questionCount: getQuestionCount(state),
  isCorrectAnswerAvailable: checkIfCorrectAnswerIsAvailable(state),
  correctlyAnsweredQuestionsCount: getCorrectlyAnsweredQuestionsCount(state),
  isQuizFinished: checkIfQuizIsFinished(state),
  answeredQuestionsPercentage: getAnsweredQuestionsPercentage(state),
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  switchToNextQuestion: () => dispatch(switchToNextQuestion()),
  onSubmitClick: (questionId, selectedAnswerIndex) =>
    dispatch(fetchAnswer(questionId, selectedAnswerIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
