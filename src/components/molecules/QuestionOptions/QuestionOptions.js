import React from 'react';
import { QuestionOptionsStyled } from './QuestionOptions.style';
import OptionRadio from '../../atoms/OptionRadio';

const QuestionOptions = ({ options, onChange, selected }) => {
  return (
    <QuestionOptionsStyled>
      {options.map((option, index) => {
        let optionKey = index + 1;
        return (
          <OptionRadio
            checked={selected === optionKey}
            onChange={onChange}
            key={optionKey}
            id={optionKey}
            label={option}
          />
        );
      })}
    </QuestionOptionsStyled>
  );
};

export default QuestionOptions;
