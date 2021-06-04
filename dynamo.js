const AWS = require('aws-sdk');
require('dotenv').config();
const { v1: uuidv1 } = require('uuid');

AWS.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.aws_secret_access_key,
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();
const USER_TABLE = 'USER_TABLE';

const getAllItems = async () => {
  const params = {
    TableName: USER_TABLE,
  };
  const items = await dynamoClient.scan(params).promise();
  return items;
};

const addOrUpdateUser = async (itemObject) => {
  const params = {
    TableName: USER_TABLE,
    Item: itemObject,
  };
  return await dynamoClient.put(params).promise();
};

module.exports = { getAllItems, addOrUpdateUser };
