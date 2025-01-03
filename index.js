const express = require('express') // Import the express module 
const app = express() // Create an express app
const route = require('./app.js') // Import the route module
const mongoose = require('mongoose') // Import the mongoose module
const port = 3000  // Port to run the server on
const swaggerUi = require("swagger-ui-express"); // Import swagger-ui-express
const swaggerJSDoc = require("swagger-jsdoc"); // Import swagger-jsdoc
const cors = require('cors') //import cors
// Using the CORS middleware to allow cross-origin requests
app.use(cors()); 
// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//middlewares to handle get request
app.use('/subscribers', route)

// Swagger Configuration
 // Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'YouTube Subscriber API',
    version: '1.0.0',
    description: 'API documentation for the YouTube subscriber project',
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
};

// Options for swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ["./app.js"], // Path to the API routes to document
};

const swaggerSpec = swaggerJSDoc(options);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Connect to DATABASE
const DATABASE_URL =
  "mongodb+srv://atik61985:00000@cluster0.dp9bp.mongodb.net/myDatabase?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))

// Export the app module
module.exports = app; 
