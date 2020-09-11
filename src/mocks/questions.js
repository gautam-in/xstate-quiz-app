import { rest } from 'msw';

export default [
  rest.get(/questions/, (_req, res, { json }) => {
    return res(
      json(
        {
          questionID: 'ques1',
          question:
            'Which of the following paradigms is not supported by Javascript?',
          options: [
            'Functional',
            'Object Oriented',
            'Procedural',
            'Multi-threaded',
          ],
        },
        {
          questionID: 'ques2',
          question:
            'Which of the following is not a correct way to create an IIFE',
          options: [
            '~function(){alert("Hello World");}()',
            '!function(){alert("Hello World");}()',
            ';function(){alert("Hello World");}()',
            '+function(){alert("Hello World");}()',
          ],
        },
        {
          questionID: 'ques3',
          question:
            'Which of the following is an incorrect Arrow function implementation?',
          options: [
            '(name) => { alert(name) }',
            'name => { alert(name) }',
            'name => alert(name)',
            'greetings, name => alert(greetings + " " + name)',
          ],
        },
        {
          questionID: 'ques4',
          question:
            'Which is the correct way of binding a click event in native JavaScript?',
          options: [
            'element.addEvent("click", handler);',
            'element.on("click", handler);',
            'element.click(handler);',
            'element.addEventListener("click", handler);',
          ],
        },
        {
          questionID: 'ques5',
          question: 'Which of the following is not a valid touch event',
          options: ['touchstart', 'touchdrag', 'touchmove', 'touchcancel'],
        }
      )
    );
  }),
];
