const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

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
                url: "http://localhost:3001",
                description: "Local server"
            }
        ]
    },
    apis: ["./routes/bookRoutes.js"], // Path to the API route files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const swaggerDocs = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
        customSiteTitle: "Book API Documentation"
    }));
};

module.exports = swaggerDocs;
