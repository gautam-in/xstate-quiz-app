/*
 🔥  States for this machine:
  - register
    - editing
    - submitting
    - success
    - error
  - quiz
    - fetching
    - fetchError
    - answering
    - submitting
    - error
  - result
*/
import { Machine } from 'xstate';

const QuizMachine = Machine({
  id: 'quiz',
  initial: 'register',
  states: {
    register: {
      initial: 'init',
      states: {
        init: {
          SUBMIT: 'validate',
        },
        validate: {
          SUCCESS: 'pending',
          ERROR: 'init',
        },
        pending: {},
        error: {},
      },
    },
    quiz: {
      initial: 'pending',
      states: {
        pending: {},
        fetchError: {},
        unselected: {},
        selected: {},
        submitting: {},
      },
    },
    result: { on: {} },
  },
});

export default QuizMachine;
