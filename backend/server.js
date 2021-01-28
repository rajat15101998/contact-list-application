const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log(uri);

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
}).on('error' , error => {
  console.log('error is:' , error);
})

const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);


//this line actually starts the server on a port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});