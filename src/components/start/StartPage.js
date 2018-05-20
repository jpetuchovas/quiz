import React from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import School from '@material-ui/icons/School';

import './StartPage.css';

const StartPage = () => (
  <div className="start-page-container">
    <Link to="/quiz" className="start-link">
      <Paper className="start-page grow">
        <School className="school-icon" />
        <div className="start-text">Start the developer quiz</div>
      </Paper>
    </Link>
  </div>
);

export default StartPage;
