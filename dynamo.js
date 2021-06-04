const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
	region: process.env.AWS_DEFAULT_REGION,
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.aws_secret_access_key,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const table_name = 'USERS';

const getAllItems = async () => {
	const params = {
		TableName: table_name,
	};
	const items = await dynamoClient.scan(params).promise();
	return items;
};

const addOrUpdateItem = async (itemObject) => {
	const params = {
		TableName: table_name,
		Item: itemObject,
	};
	return await dynamoClient.put(params).promise();
};

module.exports = { getAllItems, addOrUpdateItem };
