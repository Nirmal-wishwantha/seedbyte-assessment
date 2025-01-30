const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
const swaggerDocs = require("./swaggerConfig");

const app = express();

app.use(express.json());
app.use("/api/v1", bookRoutes);

// Load Swagger documentation
swaggerDocs(app);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
