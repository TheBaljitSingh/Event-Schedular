// GoogleAuth.js
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


const clientId = process.env.REACT_APP_GOOGLE_CLIENTID;

const GoogleAuth = () => {
  const handleLoginSuccess = async (response) => {
    console.log(response);
    const token = response.credential;
    const decoded = jwtDecode(token);
    console.log('Decoded User:', decoded);

    

    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/google-login`, {
        token,
      });
      console.log('Server Response:', res.data);
      console.log("cookie received from my server: ", document.cookie);
      // Handle successful authentication (e.g., save token, redirect)
    } catch (error) {
      console.error('Server Error:', error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
