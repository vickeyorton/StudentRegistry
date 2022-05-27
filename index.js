const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const eventRoute = require('./routes/event');

const app = express();

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use('/api/events', eventRoute);

// Connect mongoDb Atlas
mongoose.connect(process.env.Mongoose_Url,
{useNewUrlParser:true}).
then(()=>{
    console.log("Connected MongoDB Atlas.");
}).catch(error => {
    console.log("Something happend wrong.")
});

app.listen(PORT, () =>{
    console.log("Server started listening port :",PORT);
});