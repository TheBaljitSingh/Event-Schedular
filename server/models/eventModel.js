const mongoose = require("mongoose");
const validator = require("validator");

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: [true, "Please enter the event name"],
        maxlength: [30, "Name can't exceed 30 characters"],
        minlength: [3, "Name should be at least 3 characters long"]
    },
    location: {
        type: String,
        required: [true, "Please enter the location"]
    },
    description: {
        type: String,
        required: [true, "Please enter the event description"]
    },
    type: {
        type: String,
        required: [true, "Please enter the type of event"]
    },
    department: {
        type: String,
        required: [true, "Please enter the department"]
    },
    date: {
        type: Date,
        required: [true, "Please enter the date"]
    },
    time: {
        type: String,
        required: [true, "Please enter the time"]
    },
    price: {
        type: Number,
        required: [true, "Please enter the price"]
    },
    organiserName: {
        type: String,
        required: [true, "Please enter the organiser's name"]
    },
    organiserEmail: {
        type: String,
        required: [true, "Please enter the organiser's email"],
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    organiserDepartment: {
        type: String,
        required: [true, "Please enter the organiser's department"]
    },
    coverImg: {
        type: String,
        required: [true],  
        validate: {
            validator: function(value) {
                return validator.isURL(value);
            },
            message: "Please enter a valid URL for the photo"
        }
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Please specify the user who created the event"]
    }
});

module.exports = mongoose.model("Event", eventSchema);
