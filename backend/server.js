const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.post('/api/greet', (req, res) => {
  const name = req.body.name;
  res.json({ message: `Hello, ${name}! Welcome!` });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
