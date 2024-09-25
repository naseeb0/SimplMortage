import React from "react";

const MortgageRateComparison = () => {
  const rates = [
    { term: "2-Year Fixed", rate: "5.19%" },
    { term: "3-Year Fixed", rate: "4.69%" },
    { term: "5-Year Fixed", rate: "4.44%" },
    { term: "5-Year Variable", rate: "5.75%" },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-gray-950">
            Lock In The{" "}
            <span className="text-yellow-700">Best Mortgage Rate</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto pb-6">
            You'll get the best mortgage rate along with terms and features that
            perfectly match your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {rates.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 aspect-square flex flex-col"
            >
              <div className="bg-yellow-400 p-4 text-center">
                <p className="text-xl font-semibold text-gray-950">
                  {item.term}
                </p>
              </div>
              <div className="flex-grow flex flex-col justify-center items-center p-6">
                <p className="text-5xl font-bold text-gray-950 mb-6">
                  {item.rate}
                </p>
                <button className="w-full bg-gray-100 text-gray-950 px-4 py-3 rounded-full text-sm font-semibold hover:bg-yellow-500 transition-colors duration-300">
                  Try Our Calculators
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-yellow-400 text-gray-950 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg">
            Compare All Rates
          </button>
        </div>

        <p className="text-xs text-gray-600 text-center mt-8 italic">
          [Disclaimer: Rates are subject to change without notice OAC.]
        </p>
      </div>
    </section>
  );
};

export default MortgageRateComparison;
