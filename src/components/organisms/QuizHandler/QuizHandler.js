import React from 'react';
import { Form } from '../../atoms/Form';
import Box from '../../atoms/Box';
import Question from '../../molecules/Question';
import QuestionOptions from '../../molecules/QuestionOptions';
import Button from '../../atoms/Button';
import { useService } from '@xstate/react';
import { QuizMachineService } from '../../../machines/QuizMachine';

const QuizHandler = () => {
  const [state, send] = useService(QuizMachineService);
  const currentQuestion =
    state.context.questions.length > 0
      ? state.context.questions[state.context.currentQuestion]
      : null;
  return (
    <>
      {currentQuestion ? (
        <Form>
          <Box>
            {/* 🔥 Update the question with information dynamically */}
            <Question
              label={currentQuestion.question}
              currentQuestionCount={state.context.currentQuestion + 1}
              totalQuestionsCount={state.context.totalQuestions}
            />
            <QuestionOptions
              options={currentQuestion.options}
              selected={
                state.context.response[currentQuestion.questionID] || ''
              }
              onChange={(e) => {
                // 🔥 Handle registering response here
                send({
                  type: 'SELECT',
                  data: {
                    id: currentQuestion.questionID,
                    selected: e.target.id,
                  },
                });
              }}
            />
          </Box>
          <Button
            type="submit"
            disabled={state.matches('answering')}
            onClick={(e) => {
              // 🔥 Handle form next and final submission here
              e.preventDefault();
              send('NEXT');
            }}
          >
            Next
          </Button>
        </Form>
      ) : null}
    </>
  );
};

export default QuizHandler;
