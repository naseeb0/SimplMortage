import React from "react";

const LenderShowcase = () => {
  const lenders = [
    { name: "Mountain Bank", logo: "/banks/cibs.png" },
    { name: "ANZ", logo: "/banks/firstmac.png" },
    { name: "St. George", logo: "/banks/tdb.png" },
    { name: "Firstmac", logo: "/banks/scotia.png" },
    { name: "Westpac", logo: "/banks/atb.png" },
    { name: "NAB", logo: "/banks/rboc.png" },
    { name: "ING", logo: "/banks/b2b.png" },
    { name: "Pepper Money", logo: "/banks/bmo.png" },
    { name: "Commonwealth Bank", logo: "/banks/vff.png" },
    { name: "Bankwest", logo: "/banks/tang.png" },
    { name: "Macquarie", logo: "/banks/zag.png" },
    { name: "Suncorp", logo: "/banks/desjar.png" },
  ];

  return (
    <div className="bg-gray-100 w-full">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          We Have 50+ <span className="text-yellow-700">Lenders</span> You Can
          Trust
        </h2>
        <p className="text-center text-gray-800 mb-8">
          At Simpli mortages, we will compare thousands of mortgages to find the
          right one for you.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
          {lenders.map((lender, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow"
            >
              <img
                src={lender.logo}
                alt={lender.name}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-gray-950 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-full">
            Explore more lenders
          </button>
        </div>
      </div>
    </div>
  );
};

export default LenderShowcase;
