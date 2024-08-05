import React from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

function AboutPage() {
  return (
    <div>
      <Header/>

    <main className="container mx-auto p-4 h-screen">
      <div className='ml-24 mt-12'>

      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p>Details about the company...</p>
      </div>

    </main>
    <Footer/>

    </div>
  );
}

export default AboutPage;
