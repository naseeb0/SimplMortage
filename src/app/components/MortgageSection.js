import React from "react";
import { Home, FileText, Bank } from "lucide-react";

const MortgageOption = ({ icon, title, features, buttonText }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    {icon}
    <h3 className="text-lg font-semibold mt-4 mb-2">{title}</h3>
    <ul className="space-y-2 mb-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg
            className="w-4 h-4 text-green-500 mr-2 mt-1"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors">
      {buttonText}
    </button>
  </div>
);

const MortgageSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">
        Explore The{" "}
        <span className="text-blue-500">Right Mortgage For You</span>
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Your dream home deserves a mortgage that resonates with your goals.
        Let's find it together.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MortgageOption
          icon={<Home className="w-8 h-8 text-blue-500" />}
          title="Waived LMI Home Loans"
          features={[
            "No need to pay Lenders Mortgage Insurance",
            "Lower upfront costs",
            "Accessible with smaller deposits",
          ]}
          buttonText="Find out more"
        />
        <MortgageOption
          icon={<FileText className="w-8 h-8 text-blue-500" />}
          title="Low-Doc Home Loans"
          features={[
            "Great for self-employed borrowers",
            "Offer flexibility in proving your income",
            "Extensive documents not required",
          ]}
          buttonText="Find out more"
        />
        <MortgageOption
          icon={<Bank className="w-8 h-8 text-blue-500" />}
          title="Low-Deposit Home Loans"
          features={[
            "A quicker path to home ownership",
            "Great option for first-home buyers",
            "Minimum of 5% deposit required",
          ]}
          buttonText="Find out more"
        />
      </div>
    </section>
  );
};

export default MortgageSection;
