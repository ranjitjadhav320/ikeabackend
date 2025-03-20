const express = require('express');
const cors = require('cors');
const productRoutes = require('./src/routes/productRoutes');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/products', productRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Swagger doc configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // Use OpenAPI 3.0.0 version
    info: {
      title: 'Products API',
      version: '1.0.0',
      description: 'API for managing products',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`, // Base URL for your API
        description: 'Local server',
      },
    ],
  },
  apis: ['./src/routes/productRoutes.js'], // Reference your route file
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;