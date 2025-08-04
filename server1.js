const express = require('express')
const app = express()
const port = 3000
const db=require('./db');

const personModel = require('./modules/person');

// Middleware to parse JSON bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // Use body-parser to parse JSON requests

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 

app.post('/person', async (req, res) => {
  try {
    const personData = req.body; // Get the person data from the request body
    const person = new personModel(personData); // Create a new person instance
    await person.save(); // Save the person to the database
    res.status(201).send({ message: 'Person created successfully', person }); // Respond with success
  } catch (error) {
    console.error('Error creating person:', error);
    res.status(500).send({ message: 'Error creating person', error }); // Respond with error
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})