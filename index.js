const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

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