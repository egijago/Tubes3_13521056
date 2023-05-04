const express = require('express');
const Prompt = require('./src/Prompt');
const app = express();

app.use(express.json());
const myGPT = new Prompt();
app.post('/api/prompt', (req, res) => {
  const { queries } = req.body;
  const message = myGPT.processQueries(queries);
  res.json({ message });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
