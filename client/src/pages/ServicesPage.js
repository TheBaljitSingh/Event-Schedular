import React from 'react';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

function ServicesPage() {
  return (
    <div>
      <Header/>

    <main className="container mx-auto p-4 h-screen">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p>Details about the services...</p>

    </main>
      <Footer/>
    </div>
  );
}

export default ServicesPage;
