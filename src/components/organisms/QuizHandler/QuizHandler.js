import React from 'react';
import { Form } from '../../atoms/Form';
import Box from '../../atoms/Box';
import Question from '../../molecules/Question';
import QuestionOptions from '../../molecules/QuestionOptions';
import Button from '../../atoms/Button';

const QuizHandler = () => (
  <Form>
    <Box>
      {/* 🔥 Update the question with information dynamically */}
      <Question
        label={'This is the question'}
        currentQuestionCount={2}
        totalQuestionsCount={3}
      />
      <QuestionOptions
        options={['a', 'b', 'c', 'd']}
        onChange={(event) => {
          // 🔥 Handle registering response here
        }}
      />
    </Box>
    <Button
      type="submit"
      onClick={(event) => {
        // 🔥 Handle form next and final submission here
      }}
    >
      Next
    </Button>
  </Form>
);

export default QuizHandler;
