const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(express.json());

app.use("/api/v1", bookRoutes);


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
