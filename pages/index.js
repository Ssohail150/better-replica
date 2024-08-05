import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home - Better.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="p-4">
        {/* Hero Section */}

        <section
  className="hero bg-green-900 text-green-500 p-8 rounded-lg shadow-md mb-8 text-center bg-cover bg-center h-80 md:h-[700px] lg:h-[800px]"
  style={{ backgroundImage: 'url(/images/hero-variant-c.webp)' }}
>
  <div className="flex flex-col justify-center items-center h-full">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">Mortgages made simple</h1>
    <button className="bg-green-700 text-white px-6 py-3 rounded-full mt-4 hover:bg-green-600">
      Start my approval
    </button>
    <p className="mt-2">3 min | No credit impact</p>
    <div className="flex justify-center items-center mt-4">
      <img src="/images/google.png" alt="Google Reviews" className="w-20 md:w-25 h-30 md:h-10 mr-2 md:mr-4" />
      <p className="text-sm md:text-base">4.3 stars | 3577 Google reviews</p>
    </div>
  </div>
</section>
  

        {/* Testimonial Section */}
        <section className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img src="/images/still-quote-Arian.png" alt="Customer Testimonial" className="w-40 h-65 rounded-lg shadow-md ml-4" />
          </div>
          <div className="md:w-1/2 text-center md:text-left md:pl-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Find out why we’re better.</h2>
            <button className="bg-[#004733] text-white px-6 py-3 rounded-full mt-4 hover:bg-[#003d2b]">See all our stories</button>
            <div className="flex justify-center md:justify-start items-center mt-4">
              <img src="/images/download.jpeg" alt="Trustpilot" className="w-15 h-12 mr-2 md:mr-4" />
              <p className="text-sm md:text-base">Excellent</p>
              <span className="ml-2 text-sm md:text-xl">4.3 out of 5</span>
            </div>
          </div>
        </section>

        {/* Questions and Answers Section */}
        <section className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Got questions?</h2>
          <p className="text-base md:text-lg mb-4">We've got answers</p>
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
            <button className="bg-[#004733] text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-[#003d2b] mb-2 md:mb-0">Our products</button>
            <button className="bg-[#004733] text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-[#003d2b] mb-2 md:mb-0">Calculators</button>
            <button className="bg-[#004733] text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-[#003d2b] mb-2 md:mb-0">Guides & FAQs</button>
          </div>
        </section>

        {/* Products and Services Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/first-home.webp" alt="Buying your first home" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Buying your first home with Better</h3>
            <p className="text-base md:text-lg">First Home</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/one-day-mortgage.webp" alt="One Day Mortgage" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">One Day Mortgage</h3>
            <p className="text-base md:text-lg">Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/better-heloc.webp" alt="Better HELOC" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Better HELOC</h3>
            <p className="text-base md:text-lg">Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.</p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <img src="/images/insurance.webp" alt="Insurance" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-2">Insurance</h3>
            <p className="text-base md:text-lg">Find the insurance plan that’s right for you with Better.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
  