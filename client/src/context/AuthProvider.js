import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch the current user session on app load
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/me`)
            .then((res) => {
                if (res.status === 200) {
                    setUser(res.data.user);
                }
            })
            .catch(() => {
                setUser(null);
            });
    }, []);

    const logout = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/logout`)
            .then((res) => {
                if (res.status === 200) {
                    setUser(null); // Clear the user state
                }
            })
            .catch((err) => {
                console.error('Logout failed', err);
            });
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
