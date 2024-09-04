const express = require("express");

const {registerUser, loginUser, getUserDetails, logoutUser, googleLoginUser} = require("../Controller/userController")
const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth")
// import {upload} from "../middleware/multer.middleware.js";
const upload = require("../middleware/multer.middleware.js")

const router = express.Router();

router.route("/register").post(upload.fields([
    {name: "avatar", maxCount: 1}
]) ,registerUser);
router.route("/login").post(loginUser);
router.route("/google-login").post(googleLoginUser)
router.route("/logout").get(logoutUser);
router.route("/me").get(isAuthenticatedUser, getUserDetails)


module.exports = router;