import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import SignIn from './auth/signIn';
import SignUp from './auth/signUp';
import ProtectedRoute from './utils/ProtectedRoute';
import DashboardLanding from './components/user/components/DashboardLanding';
import Dashboard from "./components/user/Dashboard"
import Events from './components/user/components/Events';
import EventPage from './pages/EventPage/EventPage';
import UserProfile from './components/user/userProfile';
import { AuthProvider } from './context/AuthProvider';





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/events' element={<EventPage/>}/>
        <Route path="/auth/sign-in" element={<SignIn/>}></Route>
        <Route path="/auth/sign-up" element={<SignUp/>}></Route>
        <Route path='/me' element={<AuthProvider> <UserProfile/> </AuthProvider>} ></Route>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="" element={<DashboardLanding />} />
          <Route path="events" element={<Events />} />
        </Route>

      </Routes>
        {/* <PrivateRoute path="/profile" element={<Profile />} /> */}
     </BrowserRouter>
  );
}

