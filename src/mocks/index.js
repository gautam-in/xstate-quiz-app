import { setupWorker } from 'msw';
import questions from './questions';
import register from './register';
import quiz from './quiz';

export const worker = setupWorker(...questions, ...register, ...quiz);
