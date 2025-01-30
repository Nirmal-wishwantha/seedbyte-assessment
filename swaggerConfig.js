const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger definition
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Book API",
            version: "1.0.0",
            description: "API documentation for the Book Management system",
        },
        servers: [
            {
                url: "http://localhost:3000/api",
                description: "Local server"
            }
        ]
    },
    apis: ["./routes/bookRoutes.js"], // Path to the API route files
};

// Initialize Swagger docs
const swaggerSpec = swaggerJsDoc(swaggerOptions);

const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
