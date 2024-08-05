import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MortgageCalculator from '../components/MortgageCalculator';

const MortgageCalculatorPage = () => {
  return (
    <div>
      <Head>
        <title>Mortgage Calculator - Better.com</title>
      </Head>
      <Header />
      <main className="p-4">
        <MortgageCalculator />
      </main>
      <Footer />
    </div>
  );
};

export default MortgageCalculatorPage;
