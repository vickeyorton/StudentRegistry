const mongoose = require('mongoose');

// EventSchema

const EventSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:25,
    },
    sponser:{
        type:String,
    },
    prize:{
        type:String,
    },
    eventTime:{
        type:String,
    },
    eventDate:{
        type:String,
    },
    price:{
        type:Number,
    }

});

module.exports = new mongoose.model('Event',EventSchema);