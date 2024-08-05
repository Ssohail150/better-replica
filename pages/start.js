import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Start = () => {
  return (
    <div>
      <Head>
        <title>Start - Better.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col items-center p-4 bg-[#fffdfa] min-h-screen">
        {/* Spokesperson Section */}
        <section className="text-center mb-8">
          <img 
            src="/images/betty1.jpg" // Replace with actual image path
            alt="Avatar"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">Hi, I'm Betty!</h1>
          <p className="text-xl mb-6">What can I help you with?</p>
          <div className="space-y-4">
            <button className="flex items-center justify-center w-64 bg-white text-green-800 border border-green-800 px-6 py-3 rounded-full shadow-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1M4 6h16M3 14h1m18-4h1m-1 8h1M7 10h10M7 14h5m5-6h1m-6 0h1m-1 4h1M5 18h1m-1 4h1M5 22h14m1-4h1M21 18h1M5 6h1m16 0h1m-1 4h1M5 22H4m16-1h1M5 14h1m12 8h1m1-2h1m-1 4h1M5 18h1" />
              </svg>
              Buying a home
            </button>
            <button className="flex items-center justify-center w-64 bg-white text-green-800 border border-green-800 px-6 py-3 rounded-full shadow-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1M4 6h16M3 14h1m18-4h1m-1 8h1M7 10h10M7 14h5m5-6h1m-6 0h1m-1 4h1M5 18h1m-1 4h1M5 22h14m1-4h1M21 18h1M5 6h1m16 0h1m-1 4h1M5 22H4m16-1h1M5 14h1m12 8h1m1-2h1m-1 4h1M5 18h1" />
              </svg>
              Refinance my mortgage
            </button>
            <button className="flex items-center justify-center w-64 bg-white text-green-800 border border-green-800 px-6 py-3 rounded-full shadow-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h1M4 6h16M3 14h1m18-4h1m-1 8h1M7 10h10M7 14h5m5-6h1m-6 0h1m-1 4h1M5 18h1m-1 4h1M5 22h14m1-4h1M21 18h1M5 6h1m16 0h1m-1 4h1M5 22H4m16-1h1M5 14h1m12 8h1m1-2h1m-1 4h1M5 18h1" />
              </svg>
              Get cash from my home
            </button>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="flex justify-around w-full max-w-4xl mb-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-2">$100B</h2>
            <p className="text-lg">home loans funded entirely online</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-2">400K</h2>
            <p className="text-lg">Customers who chose a Better Mortgage</p>
          </div>
        </section>

        {/* Unlock Benefits Section */}
        <section className="bg-green-50 p-8 rounded-lg shadow-md mb-8 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-4">After a few questions, you'll unlock:</h2>
          <ul className="list-none space-y-2 text-lg">
            <li className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Custom mortgage rates
            </li>
            <li className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Exclusive offers
            </li>
            <li className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              A personalized dashboard
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Start;
