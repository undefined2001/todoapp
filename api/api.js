const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

app.use(userRoutes);





app.use('/', (req, res) => {
    res.status(404).json({ message: "Route Not Found" });
})

module.exports = app;
