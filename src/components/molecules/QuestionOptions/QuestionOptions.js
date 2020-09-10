import React from 'react';
import { QuestionOptionsStyled } from './QuestionOptions.style';
import OptionRadio from '../../atoms/OptionRadio';

const QuestionOptions = ({ options, onChange }) => (
  <QuestionOptionsStyled>
    {options.map((option, index) => {
      let optionKey = 'question_' + (index + 1);
      return (
        <OptionRadio
          onChange={onChange}
          key={optionKey}
          id={optionKey}
          label={option}
        />
      );
    })}
  </QuestionOptionsStyled>
);

export default QuestionOptions;
