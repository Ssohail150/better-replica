import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>About Us - Better.com</title>
      </Head>
      <Header />
      <main className="p-4">
        {/* Mission Section */}
        <section className="text-center py-12">
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">Our mission</h4>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
          </h1>
        </section>

        {/* Status Quo Section */}
        <section className="text-center py-12 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The status quo is broken</h2>
          <p className="mb-4 px-4 md:px-12">
            The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button className="bg-[#017848] text-white py-2 px-4 rounded">Read Vishal’s story</button>
          <div className="mt-8">
            <img src="/images/vishal-mission.jpg" alt="Vishal Garg" className="mx-auto max-w-full h-auto" />
          </div>
        </section>

        {/* How We’re Changing Things Section */}
        <section className="text-center py-12 text-white bg-[#017848]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How we’re changing things</h2>
          <p className="mb-4 px-4 md:px-12">
            Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
          </p>
          <p className="mb-4 px-4 md:px-12">
            That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
          </p>
        </section>

        {/* Partners and Timeline Section */}
        <section className="py-12 bg-white relative">
          <div className="flex flex-wrap justify-center my-8">
            <img src="/images/softBank.png" alt="SoftBank" className="h-12 mx-4 md:h-16" />
            <img src="/images/ally.png" alt="Ally" className="h-12 mx-4 md:h-16" />
            <img src="/images/citi.png" alt="Citi" className="h-12 mx-4 md:h-16" />
            <img src="/images/pingan.png" alt="Ping An Bank" className="h-12 mx-4 md:h-16" />
            <img src="/images/gold.png" alt="Goldman Sachs" className="h-12 mx-4 md:h-16" />
            <img src="/images/KPCB.png" alt="KPCB" className="h-12 mx-4 md:h-16" />
            <img src="/images/american.png" alt="American Express" className="h-12 mx-4 md:h-16" />
          </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Company Timeline</h2>
            <div className="relative wrap overflow-hidden p-4 md:p-10">
              {/* Vertical Line */}
              <div className="absolute border-2 border-gray-700 border-opacity-20 h-full w-1 left-1/2 transform -translate-x-1/2"></div>
              <div className="relative">
                {/* Timeline Entries */}
                {[
                  {
                    year: '2014',
                    content: 'After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.',
                  },
                  {
                    year: '2015',
                    content: 'Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).',
                  },
                  {
                    year: '2016',
                    content: 'Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.',
                  },
                  {
                    year: '2017',
                    content: 'Better expands into the real estate market with Better Real Estate.',
                  },
                  {
                    year: '2018',
                    content: 'Better Mortgage partners with Ally Bank to build Ally powered by Better.',
                  },
                  {
                    year: '2019',
                    content: 'Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.',
                  },
                  {
                    year: '2021',
                    content: 'Better acquires Trussle — The UK’s most innovative online mortgage broker.',
                  },
                  {
                    year: '2022',
                    content: 'Better Mortgage becomes the first fintech to fund $100B home loans entirely online.',
                  },
                  {
                    year: '2023',
                    content: 'Better Mortgage launches One Day Mortgage: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days. Better Mortgage launches the fully digital 3-day HELOC. Better Mortgage launches One Day Verified Approval Letter.',
                  },
                ].map((entry, index) => (
                  <div key={index} className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'items-center' : 'md:flex-row-reverse items-center'} w-full`}>
                    <div className="w-full md:w-5/12"></div>
                    <div className="w-full md:w-5/12 px-4 py-4">
                      <p className="mb-3 text-base md:text-lg text-gray-800">{entry.year}</p>
                      <p className="text-gray-600 text-base md:text-lg leading-snug">{entry.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
