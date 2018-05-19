import React from 'react';
import { FormControlLabel, Radio, withStyles } from '@material-ui/core';

const styles = {
  correctAnswerLabel: {
    fontWeight: 'bold',
  },

  incorrectAnswerLabel: {
    textDecoration: 'line-through',
    opacity: 0.5,
  },
};

const Choice = ({ label, value, shouldIndicateIfCorrect, isCorrect, classes, ...props }) => (
  <FormControlLabel
    className="choice"
    classes={
      !shouldIndicateIfCorrect
        ? null
        : isCorrect
          ? { label: classes.correctAnswerLabel }
          : { label: classes.incorrectAnswerLabel }
    }
    value={value}
    control={<Radio color="primary" />}
    label={label}
    {...props}
  />
);

export default withStyles(styles)(Choice);
