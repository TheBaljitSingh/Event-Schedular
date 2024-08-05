import React from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

function ContactPage() {
  return (
    <div>
      
            <Header/>
    <main className="container mx-auto p-4 h-screen">
      <div className='ml-24 mt-12'> 
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p>Contact details and form...</p>
      </div>

    </main>
      <Footer/>
    </div>
  );
}

export default ContactPage;
