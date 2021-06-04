const express = require('express');
const { getAllUsers, addOrUpdateUser } = require('./dynamo');
const app = express();

app.get('/', (req, res) => {
	res.send({
		endpoints: [
			{ 'get /users': 'returns all users.' },
			{ 'put /users': 'add or update a user' },
		],
	});
});

app.get('/users', async (req, res) => {
	try {
		const users = await getAllUsers();
		res.json(users);
	} catch (error) {
		console.log(error);
		res.status(500).json({ err: 'something went wrong' });
	}
});

app.post('/users', async (req, res) => {
	try {
		await addOrUpdateUser();
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
