const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev')
const rental = require("./models/rental");
const fakeDB = require("./fake-db");
const rentalRoutes = require("./routes/rentals");

mongoose.connect(config.DB_URI, { useNewUrlParser: true }).then( () => {
    const fakedb = new fakeDB();
    fakedb.seedDB();
});

const app = express();

// app.get('/rentals', (req, res)=>{
//     res.json({"success": true});
// })

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Server running', PORT);
})