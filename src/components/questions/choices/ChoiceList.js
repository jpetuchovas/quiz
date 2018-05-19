import React from 'react';
import { RadioGroup } from '@material-ui/core';

import Choice from './Choice';

const ChoiceList = ({
  choices,
  isCorrectAnswerAvailable,
  correctAnswerIndex,
  selectedChoiceValue,
  onSelectedChoiceChange,
}) => (
  <RadioGroup className="choice-list" value={selectedChoiceValue} onChange={onSelectedChoiceChange}>
    {choices.map((choice, choiceIndex) => (
      <Choice
        key={choiceIndex}
        label={choice}
        value={choiceIndex.toString()}
        shouldIndicateIfCorrect={isCorrectAnswerAvailable}
        isCorrect={choiceIndex === correctAnswerIndex}
      />
    ))}
  </RadioGroup>
);

export default ChoiceList;
