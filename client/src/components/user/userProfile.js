import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const UserProfile = () => {

  const {user, logout} = useContext(AuthContext);

    if (!user) {
        return (
            <div className='flex justify-center items-center'> <p>Loading...</p></div>
        ); // Optionally return a loader or placeholder here
    }

    return (
        <div className="max-w-sm mx-auto p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
            <div className="">
                <img
                    className="w-24 h-24 rounded-full bg-gray-200 mb-4"
                    src={user?.avatar?.url || 'default-avatar-url'} // Add a default image if avatar is missing
                    alt={`${user.name}'s avatar`}
                />
            </div>
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
            >
                Logout
            </button>
            <ToastContainer />
        </div>
    );
};

export default UserProfile;
