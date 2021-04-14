const serverless = require('serverless-http');
const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ ok: 'Hello World!'});
});

app.post('/', (req, res) => {
  const { body } = req;
  res.json({
    keys: Object.keys(body),
    values: Object.values(body),
  });
})

module.exports.handler = serverless(app);