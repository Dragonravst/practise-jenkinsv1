const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/goodbye', (req, res) => {
  res.json({ message: 'Goodbye, World!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
