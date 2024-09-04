import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';


import GoogleAuth from './GoogleAuth';

axios.defaults.withCredentials = true;

const SignIn = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithGoogle = () => {
    // Uncomment and adjust based on your Firebase setup

    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     console.log(result.user);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const handleSubmit = async (e) => {
    // Handle sign-in with email and password
    e.preventDefault();
    setEmail("");
    setPassword("");

    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/login`,{email, password})
    .then(res =>{
        console.log(res);
        
        if(res.status===200){
            console.log("loged in and cookie is saved");
            // // const user  = res.data.user;
            // // setUser(user);

            // cookies will be automatically saved 
          
            
          
            toast.success('Login successful! Redirecting to profile...', {
                position: "bottom-center",
                onClose: () => navigate('/me')
              });
        }else{
            toast.error('Invalid Credentials',{
                position: "bottom-center",
            })
        }
            
        })
    .catch(error=>{
        console.log("login failed ", error.message);
        toast.error(`${error.message}`,{
            position: "bottom-center"
        });
    })
    

  };

  useEffect(()=>{
    // check with boolen is user logged successfully or not

  }, [])




  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Sign in to your account</h2>
     

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <p className="text-sm text-center text-gray-500">
        Create an Account? <a href="/auth/sign-up" className="text-blue-500">SignUp here</a>
      </p>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none"
          >
            Sign in
          </button>
        </form>

        <div className="flex items-center justify-center space-x-2 mt-4">
          <span className="text-sm text-gray-500">Or continue with</span>
        </div>
        {/* <div className="flex items-center justify-center space-x-2 mt-4">
          <button
            onClick={signInWithGoogle}
            className="flex items-center justify-center w-full px-4 py-2 space-x-2 border border-gray-300 rounded hover:bg-gray-100 focus:outline-none"
          >
            <FaGoogle
            className=" " />
            <span>Google</span>
          </button>
          <button
            onClick={() => alert('Sign in with GitHub is not implemented yet.')}
            className="flex items-center justify-center w-full px-4 py-2 space-x-2 border border-gray-300 rounded hover:bg-gray-100 focus:outline-none"
          >
            <FaGithub className="text-gray-800" />
            <span>GitHub</span>
          </button>
        </div> */}

      <div className='flex justify-center items-center '>

        <GoogleAuth/>
      </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
