const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
// import { uploadOnCloudinary } from "../utils/cloudinary";
const {uploadOnCloudinary} = require("../utils/cloudinary");
const { OAuth2Client } = require('google-auth-library');





exports.registerUser = async (req, res)=>{
    
    const {name, email, password} = req.body;
    // console.log(name);
   
    if([name, email, password].some((field)=>
        field?.trim()===""
    )){
        return res.status(400).json({
            message:`field should not be empty`
        })

    }

    const alreadyExist = await User.findOne({email});
    if(alreadyExist){
        return res.status(400).json({message:`User already exist with this ${email}`})
    }
    // console.log(req.files['avatar'][0]);
    console.log(req.files['avatar']);

    // const avatarLocalPath =   req.files['avatar'][0].path;

    let avatarLocalPath;
    if(req.files && Array.isArray(req.files['avatar'])
    && req.files['avatar'].length>0){
    avatarLocalPath = req.files['avatar'][0].path;
    }

    
    // console.log("avtarfile path: "+ avatarLocalPath);
    const avatar =  await uploadOnCloudinary(avatarLocalPath);

    
    console.log("avatar is uploaded : "+avatar);


    const user = await User.create({
        name, email, password,
        avatar:{
            public_id:avatar?.public_id || "mubypp9e5kisuzhyeqmb" ,
            url:avatar?.url || "https://res.cloudinary.com/dzdt11nsx/image/upload/v1719822618/mubypp9e5kisuzhyeqmb.png",
        },

    })
    sendToken(user, 201, res);
}


exports.googleLoginUser = async (req, res) => {
  console.log("Google login attempted");
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const userId = payload['sub']; // Unique identifier for the user

    // Log the userId for debugging
    console.log("Google User ID:", userId);

    // Set HTTP-only cookie with the token
    res.status(200).cookie("token", token, {
      httpOnly: true,
      sameSite: 'strict',
    }).json({ message: 'User authenticated', userId: payload['email'] });

  } catch (error) {
    console.error("Error during token verification:", error);
    res.status(400).json({ error: 'Token verification failed' });
  }
};


exports.loginUser = async (req, res)=>{

        const {password} = req.body;
        let email = req.body.email.toLowerCase();
        
        if(!email || !password){
            return res.status(400).json({message: "Please Enter Email and Password"});
        }
        
        const user = await User.findOne({email}).select("+password");
        if(!user){
            return res.status(401).json({ success: false, message: "Invalid email or password" });
            
        }
        
        const isPasswordMatched = await user.comparePassword(password);
        console.log("login  wal user ke details: "+user.email);
        
        sendToken(user, 200, res);
    
        
}
exports.logoutUser = async(req, res, next)=>{

    let {token} = req.body;
    // console.log(token.substring(6));

    // token.substring(6);

    res.cookie("token", null, { 
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out",
    });

}

exports.getUserDetails = async (req, res) => {
    try {
        console.log(`hello ${req.user.name}, how are you`);

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};


//get single ueer - admin

exports.getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ success: false, error: `User not found with id: ${req.params.id}` });
        }

        res.status(200).json({ success: true, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

//update userRole - admin
exports.updateUserRole = async (req, res) => {
    try {
        const newUserData = {
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
        };

        const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
            new: true,
            runValidators: true, 
            useFindAndModify: false 
        });

        if (!user) {
            return res.status(404).json({ success: false, error: `User not found with id: ${req.params.id}` });
        }

        res.status(200).json({ success: true, data: user });
    } catch (err) {
        console.error(err);

        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({ success: false, error: messages });
        }

        res.status(500).json({ success: false, error: 'Server Error' });
    }
};



