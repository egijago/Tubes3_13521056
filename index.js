const express = require('express');
const cors = require('cors');
const Prompt = require('./src/Prompt');
const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS

const myGPT = new Prompt();

app.post('/api/prompt', (req, res) => {
  const { queries } = req.body;
  const message = myGPT.processQueries(queries);
  res.json({ message });
});

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log('Server started on port 3001');
});
