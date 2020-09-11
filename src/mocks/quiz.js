import { rest } from 'msw';

export default [
  rest.post(/quiz/, (req, res, { json }) => {
    const { responses } = req.body;
    let correctResponses = 0;
    correctResponses += responses.ques1 === 4 ? 1 : 0;
    correctResponses += responses.ques2 === 3 ? 1 : 0;
    correctResponses += responses.ques3 === 4 ? 1 : 0;
    correctResponses += responses.ques4 === 4 ? 1 : 0;
    correctResponses += responses.ques5 === 2 ? 1 : 0;
    return res(
      json({
        score: (correctResponses * 100) / 5,
      })
    );
  }),
];
