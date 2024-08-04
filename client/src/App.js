import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import SignIn from './auth/signIn';
import SignUp from './auth/signUp';




export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth/sign-in" element={<SignIn/>}></Route>
        <Route path="/auth/sign-up" element={<SignUp/>}></Route>

      </Routes>
        {/* <PrivateRoute path="/profile" element={<Profile />} /> */}
      <Footer/>
     </BrowserRouter>
  );
}

