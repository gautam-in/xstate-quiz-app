import { rest } from 'msw';

export default [
  rest.post(/register/, (_req, res, { json }) => {
    return res(json({ message: 'User registered successfully' }));
  }),
];
