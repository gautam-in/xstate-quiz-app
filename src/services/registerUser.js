export default async (name, email, org) => {
  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      body: JSON.stringify({ name, email, org }),
    },
  });
  const data = await response.json();
  return data;
};
