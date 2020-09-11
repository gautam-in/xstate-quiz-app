export default async (responses) => {
  const response = await fetch('/quiz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      responses: responses,
    }),
  });
  const data = await response.json();
  return data;
};
