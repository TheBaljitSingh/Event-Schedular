import './App.css';
import React from 'react';
import Landing2 from './Components/Landing2';
import Upcomming from './Components/Upcomming';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
      
      <Landing2/>
      <hr className="mt-2 h-4 " />
      <Upcomming/>
      <Footer/>


    </div>
  );
}

export default App;
