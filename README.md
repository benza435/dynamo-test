some mistakes:
I've written this readme from 3 different perspectives. It is a work in progress, don't take literally please.
Except git ignoring your .env file, that is pretty important.

### First experiments with DynamoDB

So far we have a hosted no-sql database, hosted on AWS.
This API allows a user to connect to one endpoints, either to view a list of users, or add a new one.

Connecting to the API on the root shows a hint about how it works.

If you're going to download this to play with, you'll need a .env file set up as below:

AWS_ACCESS_KEY_ID = <your access key>
AWS_SECRET_ACCESS_KEY = <your secret access key>
AWS_DEFAULT_REGION = <reigion code, we use "eu-west-2">

These details are shown when you create a user for your database.

## Running the API

Clone the repo and install dependencies (and nodemon):

`git clone https://github.com/benza435/dynamo101`
`npm install`
`npm install -g nodemon`

Start the server:
`nodemon dynamo.js`

You will not be able to connect to the database yet...
As it does not exist.

## Building a database

1. Sign up for AWS. Good luck.

2. When you have returned, dust the ice from your brow, take a breath, and continue.

3. In the AWS management console, search for dynamoDB (either in the search bar at the top, or using a combined attack of eyeballs and scroll wheel). Click it.

4. Click the 'Create Table' button

5. something may be out-of-sequence with the create table and create user thing
   https://console.aws.amazon.com/iam/home#/users

6. a user will need to be created to access the database. when this is completed you will be given some mega creds. copy paste them somewhere safe immediately because I dont know where to recover them from.

## Joining the bits together

Now you have a hosted database, and a working API. Yeah? yeah...

Line 11 in dynamo.js enables you to define the table name you created.
If you created the .env already, pop the creds in there. DONT FORGET TO GITIGNORE THAT FILE!!!!!!!!!!!!!

If I've missed anything, it's because I'm very new to this and you should remind me to fix it.
