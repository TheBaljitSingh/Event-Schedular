const express = require("express");

const { createEvent, updateEvent, deleteEvent } = require("../controller/eventController");
const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth");
const upload = require("../middleware/multer.middleware.js")

const router = express.Router();

//check hera for image array is required or not/ i am using only for banner images currently
router.route("/create-event").post(isAuthenticatedUser, upload.fields([
    {name:"coverImg", maxCount:1}
]), createEvent);
router.route("/update-event/:id").put(isAuthenticatedUser,upload.fields([{name:"coverImg", maxCount: 1}]), updateEvent)
router.route("/delete-event/:id").delete(isAuthenticatedUser, deleteEvent)

module.exports = router;