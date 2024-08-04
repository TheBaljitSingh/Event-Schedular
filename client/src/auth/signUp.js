// SignUp.js
import React, { useState } from 'react';
// import { auth, provider, signInWithPopup, createUserWithEmailAndPassword } from './firebase'; // Adjust this import based on your project structure
import { FaGoogle, FaGithub } from 'react-icons/fa';

const SignUp = () => {
    const auth = "v";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     console.log(userCredential.user);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">    
    <div className="mt-8 w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold text-center">Create an account</h2>
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Your name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
          Your email
        </label>
        <input
          type="email"
          id="signup-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="name@gmail.com"
          required
        />
      </div>
      <div>
        <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="signup-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="••••••••"
          required
        />
      </div>
      <div>
        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
          Confirm password
        </label>
        <input
          type="password"
          id="confirm-password"
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="••••••••"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none"
      >
        Create an account
      </button>
      <p className="text-sm text-center text-gray-500">
        Already have an account? <a href="/auth/sign-in" className="text-blue-500">Login here</a>
      </p>
    </form>
    
       
  </div>
  </div>
  );
};

export default SignUp;
