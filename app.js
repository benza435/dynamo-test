const express = require('express');
const { getAllItems, addOrUpdateUser } = require('./dynamo');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    endpoints: [
      { 'get /users': 'returns all users.' },
      { 'put /users': 'add or update a user' },
    ],
  });
});

app.get('/users', async (req, res) => {
  console.log(req);
  try {
    const users = await getAllItems();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: 'something went wrong' });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
