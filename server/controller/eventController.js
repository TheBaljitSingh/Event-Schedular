const User = require("../models/eventModel")
const Event = require("../models/eventModel")
const {uploadOnCloudinary} = require("../utils/cloudinary");


exports.createEvent = async(req, res)=>{
    try {
        // Handle file upload with Cloudinary or another service
        let photoUrl;
        let result;
        console.log("printing file "+req.files['coverImg']);
        if (req.files && Array.isArray(req.files['coverImg'] ) && req.files['coverImg'].length>0) {
            // Upload photo to Cloudinary (or another service)
            photoUrl = req.files['coverImg'][0].path;

            result = await uploadOnCloudinary(photoUrl);
            
        }
        

        // Create a new event
        const newEvent = new Event({
            eventName: req.body.eventName,
            location: req.body.location,
            description: req.body.description,
            type: req.body.type,
            department: req.body.department,
            date: req.body.date,
            time: req.body.time,
            price: req.body.price,
            organiserName: req.body.organiserName,
            organiserEmail: req.body.organiserEmail,
            organiserDepartment: req.body.organiserDepartment,
            createdBy: req.body.createdBy, // This should be the ID of the user creating the event
            coverImg: result?.url // URL of the uploaded photo
        });

        // Save the event to the database
        const savedEvent = await newEvent.save();

        // Respond with the saved event
        res.status(201).json({
            success: true,
            data: savedEvent
        });
    } catch (error) {
        console.error("Error creating event:", error);
        res.status(500).json({
            success: false,
            message: "Server error. Please try again later."
        });
    }

}


exports.updateEvent = async (req, res) => {
    try {
        const eventId = req.params.id; // Assuming the event ID is passed in the URL parameter
        console.log("event it: "+ eventId);


        // Construct the update object
        const update = {
            eventName:req.body.eventName, 
            location:req.body.location, 
            description:req.body.description, 
            type:req.body.type, 
            department:req.body.department, 
            date:req.body.date, // Ensure the field name matches your schema
            time:req.body.time, 
            price:req.body.price, 
            organiserName:req.body.organiserName, 
            organiserEmail:req.body.organiserEmail, 
            organiserDepartment:req.body.organiserDepartment, 
            createdBy:req.body.createdBy, 
            coverImg:req.body.coverImg
        };

        // Find the event by ID and update it
        const updatedEvent = await Event.findByIdAndUpdate(eventId, update, { new: true, runValidators: true });

        if (!updatedEvent) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }

        console.log("Event updated:", updatedEvent);

        res.status(200).json({ success: true, data: updatedEvent });
    } catch (error) {
        console.error("Error updating the event:", error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

exports.deleteEvent = async (req, res)=>{
    try {
        const eventId = req.params.id; // Assuming the event ID is passed in the URL parameter

        // Delete the event by ID
        const deletedEvent = await Event.findByIdAndDelete(eventId);

        if (!deletedEvent) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }


        res.status(200).json({ success: true, message: 'Event successfully deleted' });
    } catch (error) {
        console.error("Error deleting the event:", error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}