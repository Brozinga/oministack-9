const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect("mongodb://my_user:password123@localhost:27017/week", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(routes);



app.listen(2000, () => {
    console.log("Server Listing");
})