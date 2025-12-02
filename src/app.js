require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const routes = require('./routers/index'); // Assuming you have a routes.js file in the same directory

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/v1", routes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
