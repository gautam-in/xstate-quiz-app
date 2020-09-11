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
import { Machine, assign, interpret } from 'xstate';
import registerUser from '../services/registerUser';
import getQuestions from '../services/getQuestions';

const QuizMachine = Machine(
  {
    id: 'quizMachine',
    initial: 'register',
    context: {
      name: '',
      email: '',
      org: '',
      response: {},
      questions: [],
      currentQuestion: null,
      totalQuestions: null,
    },
    states: {
      register: {
        initial: 'editing',
        states: {
          editing: {
            on: {
              NAME_CHANGED: { target: 'editing', actions: 'updateName' },
              EMAIL_CHANGED: { target: 'editing', actions: 'updateEmail' },
              ORG_CHANGED: { target: 'editing', actions: 'updateOrg' },
              SUBMIT: 'submitting',
            },
          },
          submitting: {
            invoke: {
              src: registerUser,
              onDone: '#quizMachine.quiz',
              onError: 'error',
            },
          },
          error: {
            on: {
              SUBMIT: 'submitting',
            },
          },
        },
      },
      quiz: {
        initial: 'fetching',
        states: {
          fetching: {
            invoke: {
              src: getQuestions,
              onDone: {
                target: 'answering',
                actions: [
                  'setQuestions',
                  'resetCurrentQuestion',
                  'setTotalQuestions',
                ],
              },
              onError: 'fetching',
            },
          },
          answering: {
            on: {
              SELECT: {
                target: 'selected',
                actions: 'setAnswer',
              },
            },
          },
          selected: {
            on: {
              NEXT: [
                { target: 'submitting', cond: 'isLastQuestion' },
                { target: 'selected', actions: 'loadNextQuestion' },
              ],
              SELECT: {
                target: 'selected',
                actions: 'setAnswer',
              },
            },
          },
          submitting: {
            on: {
              ON_SUCCESS: '#quizMachine.result',
              ON_ERROR: 'error',
            },
          },
          error: {
            RETRY: 'submitting',
          },
        },
      },
      result: { type: 'final' },
    },
  },
  {
    actions: {
      updateName: assign((_context, event) => ({ name: event.value })),
      updateEmail: assign((_context, event) => ({ email: event.value })),
      updateOrg: assign((_context, event) => ({ org: event.value })),
      setQuestions: assign((_context, event) => ({
        questions: event.data.questions,
      })),
      resetCurrentQuestion: assign((context) => ({ currentQuestion: 0 })),
      setTotalQuestions: assign((context) => ({
        totalQuestions: context.questions.length,
      })),
      loadNextQuestion: assign((context) => ({
        currentQuestion: context.currentQuestion + 1,
      })),
      setAnswer: assign((context, event) => {
        return {
          response: {
            ...context.response,
            [event.data.id]: event.data.selected,
          },
        };
      }),
    },
    guards: {
      isLastQuestion: (context) =>
        context.currentQuestion + 1 === context.totalQuestions,
    },
  }
);

export const QuizMachineService = interpret(QuizMachine, { devTools: true });

export default QuizMachine;
