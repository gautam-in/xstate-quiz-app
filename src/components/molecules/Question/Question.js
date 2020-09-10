import React from 'react';
import {
  QuestionStyled,
  QuestionCounter,
  QuestionLabel,
} from './Question.style';

const Question = ({ label, currentQuestionCount, totalQuestionsCount }) => (
  <QuestionStyled>
    <QuestionCounter>
      Question {currentQuestionCount} of {totalQuestionsCount}
    </QuestionCounter>
    <QuestionLabel>{label}</QuestionLabel>
  </QuestionStyled>
);

export default Question;
