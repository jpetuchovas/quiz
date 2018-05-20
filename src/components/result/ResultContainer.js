import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './ResultContainer.css';
import { checkIfQuizIsFinished } from '../../selectors/progress';
import Result from './Result';

const ResultContainer = ({ isQuizFinished }) => (
  <Fragment>
    {isQuizFinished ? (
      <div className="result-container">
        <Result />
      </div>
    ) : (
      <Redirect to="/" />
    )}
  </Fragment>
);

const mapStateToProps = state => ({
  isQuizFinished: checkIfQuizIsFinished(state),
});

export default connect(mapStateToProps)(ResultContainer);
