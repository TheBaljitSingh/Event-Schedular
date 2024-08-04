const express = require("express");

const {registerUser, loginUser, getUserDetails, logoutUser, googleLoginUser} = require("../Controller/userController")
const {isAuthenticatedUser, authorizeRoles} = require("../middleware/auth")
// import {upload} from "../middleware/multer.middleware.js";
const upload = require("../middleware/multer.middleware.js")

const router = express.Router();

router.route("/register").post(upload.fields([
    {name: "avatar", maxCount: 1,}
]) ,registerUser);
router.route("/login").post(loginUser);
router.route("/google-login").post(googleLoginUser)
router.route("/logout").get(logoutUser);
router.route("/me").get(isAuthenticatedUser, getUserDetails)
// router.route("/admin/grievances").get(isAuthenticatedUser, authorizeRoles("admin"), getAllGrivances);
// router.route("/admin/grievances/:userId").get( isAuthenticatedUser, authorizeRoles("admin"), getSingleUserGrievances) // this will be admin route
// router.route("/admin/allusers").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
// router.route("/admin/assignGrievances/").put(isAuthenticatedUser, authorizeRoles("admin") ,assignGrievances)

module.exports = router;