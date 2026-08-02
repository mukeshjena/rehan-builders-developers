// src/pages/EMICalculator.jsx
import { useState, useMemo } from 'react';
import SEO from '../seo/SEO';
import { breadcrumbSchema } from '../seo/structuredData';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const result = useMemo(() => {
    const P = loanAmount;
    const R = interestRate / 12 / 100;
    const N = tenure * 12;

    if (R === 0) {
      const emi = P / N;
      return { emi: Math.round(emi), totalPayment: Math.round(P), totalInterest: 0 };
    }

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPayment = emi * N;
    const totalInterest = totalPayment - P;

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  }, [loanAmount, interestRate, tenure]);

  const formatINR = (num) => `₹${num.toLocaleString('en-IN')}`;

  const principalPercent = (loanAmount / result.totalPayment) * 100;

  return (
    <>
      <SEO
        title="EMI Calculator"
        description="Calculate your home loan EMI with RK Builders & Developers' free EMI calculator. Plan your budget for your dream home."
        url="/emi-calculator"
        structuredData={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'EMI Calculator' },
        ])}
      />

      <section className="pt-32 pb-12 px-4 bg-navy-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-gold-400 font-semibold tracking-widest uppercase text-sm mb-3">Tools</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">EMI Calculator</h1>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-8">
            {/* Loan Amount */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="loan-amount" className="text-sm font-semibold text-navy-800">Loan Amount</label>
                <span className="text-sm font-bold text-navy-800">{formatINR(loanAmount)}</span>
              </div>
              <input
                id="loan-amount"
                type="range"
                min={500000}
                max={50000000}
                step={100000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-gold-400"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>₹5L</span>
                <span>₹5Cr</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="interest-rate" className="text-sm font-semibold text-navy-800">Interest Rate (% p.a.)</label>
                <span className="text-sm font-bold text-navy-800">{interestRate}%</span>
              </div>
              <input
                id="interest-rate"
                type="range"
                min={5}
                max={15}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-gold-400"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>5%</span>
                <span>15%</span>
              </div>
            </div>

            {/* Tenure */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="tenure" className="text-sm font-semibold text-navy-800">Loan Tenure (Years)</label>
                <span className="text-sm font-bold text-navy-800">{tenure} Years</span>
              </div>
              <input
                id="tenure"
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full accent-gold-400"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="text-sm text-slate-500 mb-1">Monthly EMI</p>
              <p className="text-4xl font-bold text-navy-800 font-[family-name:var(--font-heading)]">
                {formatINR(result.emi)}
              </p>
            </div>

            {/* Breakdown */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Principal Amount</span>
                <span className="font-semibold text-navy-800">{formatINR(loanAmount)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Total Interest</span>
                <span className="font-semibold text-gold-400">{formatINR(result.totalInterest)}</span>
              </div>
              <hr className="border-slate-200" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-navy-800">Total Payment</span>
                <span className="font-bold text-navy-800">{formatINR(result.totalPayment)}</span>
              </div>

              {/* Visual Bar */}
              <div className="mt-4">
                <div className="w-full h-4 rounded-full bg-slate-100 overflow-hidden flex">
                  <div
                    className="bg-navy-800 h-full transition-all duration-300 rounded-l-full"
                    style={{ width: `${principalPercent}%` }}
                  />
                  <div
                    className="bg-gold-400 h-full transition-all duration-300 rounded-r-full"
                    style={{ width: `${100 - principalPercent}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm bg-navy-800" />
                    Principal
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-sm bg-gold-400" />
                    Interest
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 text-center">
              * This is an indicative calculation. Actual EMI may vary based on bank policies and processing fees.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
