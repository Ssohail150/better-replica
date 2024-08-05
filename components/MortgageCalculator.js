import React, { useState } from 'react';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(0.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(2146);

  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment = (
      principal *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments)
    ) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="w-full bg-[#f0f7f1]">
      <div className="max-w-screen-lg mx-auto p-4 md:p-8">
        <div className="bg-[#f0f7f1] p-4 md:p-8 rounded-t-lg shadow-md">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Mortgage Calculator</h1>
          <p className="mb-4">
            Use our mortgage calculator built directly into it! Get accurate estimates for your monthly mortgage payments if you will be required to have private mortgage insurance (PMI). Also learn why.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
            <div className="flex flex-col mb-4 md:mb-0">
              <label className="block mb-2">Home Price</label>
              <input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full md:w-48 p-2 border rounded"
              />
            </div>
            <div className="flex flex-col mb-4 md:mb-0">
              <label className="block mb-2">Monthly Payment</label>
              <input
                type="text"
                value={`$${monthlyPayment}/mo`}
                readOnly
                className="w-full md:w-48 p-2 border rounded"
              />
            </div>
            <button
              onClick={calculateMonthlyPayment}
              className="bg-green-700 text-white px-6 py-3 rounded-full mt-4 md:mt-0 hover:bg-green-600"
            >
              Get pre-approved
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div>
              <label className="block mb-2">ZIP Code</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block mb-2">Down Payment</label>
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Interest Rate</label>
              <input
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Length of Loan</label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full p-2 border rounded"
              >
                <option value={30}>30 years</option>
                <option value={15}>15 years</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-[#fffdfa] p-4 md:p-8 rounded-b-lg mt-4 md:mt-8">
          <div className="bg-[#fffdfa] p-4 rounded-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Monthly Payment Breakdown</h2>
            <p className="text-lg md:text-xl mb-4">{`$${monthlyPayment}/mo`}</p>
            <ul className="list-disc pl-5">
              <li>Principal & Interest: $1517</li>
              <li>Property Taxes: $205</li>
              <li>Homeowners Insurance: $132</li>
              <li>HOA Fees: $132</li>
              <li>Utilities: $100</li>
            </ul>
          </div>

          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full mt-4 hover:bg-gray-300">
            Copy Estimate Link
          </button>
          <hr className="my-8" />

          <h1 className="text-2xl md:text-3xl font-bold">How Does a Mortgage Calculator Help Me?</h1>
          <p className="mt-4 text-base md:text-lg">
            When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.
          </p>
          <hr className="my-8" />

          <h2 className="text-xl md:text-2xl font-bold">How Much Monthly Mortgage Payment Can I Afford?</h2>
          <p className="mt-4 text-base md:text-lg">
            Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.
          </p>
          <p className="mt-2 text-base md:text-lg">
            Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.
          </p>
          <br />
          <img src="/images/dti-formula.jpg" alt="formula" className="w-full md:h-40 object-cover" />
          <p className="mt-2 text-base md:text-lg">Here’s an example of what calculating your DTI might look like:</p>
          <br />
          <img src="/images/dti-example.jpg" alt="example" className="w-full md:h-70 object-cover" />
          <hr className="my-8" />

          <h2 className="text-xl md:text-2xl font-bold">How to Calculate Monthly Mortgage Payments?</h2>
          <p className="mt-4 text-base md:text-lg">
            Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.
          </p>
          <br />
          <h3 className="text-lg md:text-xl font-bold">Formula for Calculating Monthly Mortgage Payments:</h3>
          <p className="mt-2 text-base md:text-lg">
            The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:
          </p>
          <img src="/images/monthly-mortgage-payments-formula.jpg" alt="example" className="w-full md:h-40 object-cover" />
          <p className="mt-2 text-base md:text-lg">Where:</p>
          <ul className="list-disc pl-5">
            <li><strong>M</strong> is the monthly mortgage payment</li>
            <li><strong>P</strong> is the principal loan amount (the amount you borrow)</li>
            <li><strong>r</strong> is the monthly interest rate (annual rate divided by 12 months)</li>
            <li><strong>n</strong> is the number of payments (the number of months you will be paying the loan)</li>
          </ul>
          <p className="mt-2 text-base md:text-lg">Here’s a simple example:</p>
          <img src="/images/monthly-mortgage-payments-example.jpg" alt="payment" className="w-full md:h-70 object-cover" />
          <p className="mt-2 text-base md:text-lg">This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</p>
          <hr className="my-8" />
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
