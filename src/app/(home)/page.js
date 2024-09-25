import React from "react";
import {
  ArrowRight,
  Calculator,
  Users,
  Award,
  DollarSign,
  ChevronDown,
  Menu,
  Search,
  Phone,
} from "lucide-react";
import MortgageCalculator from "@/app/components/MortageCalculator";
import UnderstandingNeedsSection from "@/app/components/UnderstandNeeds";
import CEOWords from "@/app/components/CEOWords";
import { Lock, BarChart2, Smile } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import AnimatedSteps from "@/app/components/AnimatedSteps";
import MortgageRateComparison from "@/app/components/MortageRateCalc";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import LenderShowcase from "@/app/components/LendersShowcase";
import ContactForm from "@/app/components/ContactForm";

const HomePage = () => {
  const CalculatorCard = ({ title, description, image }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-w-4 aspect-h-3 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="mb-4 text-gray-600 flex-grow">{description}</p>
        <div className="flex justify-center">
          <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-full mt-auto font-semibold transition-colors duration-300 hover:bg-yellow-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
            Calculate Now
          </button>
        </div>
      </div>
    </div>
  );
  const calculators = [
    {
      title: "Mortgage Insurance Calculator",
      description:
        "Calculate the cost of Lenders Mortgage Insurance (LMI) if your loan exceeds 80% of the property value. Determine how much LMI you need to budget for.",
      image: "/onee.jpg",
    },
    {
      title: "Mortgage Repayment Calculator",
      description:
        "Estimate your monthly repayments based on your loan amount, interest rate, loan term, and repayment schedule. Customize different scenarios to find a plan that suits you.",
      image: "/two.jpg",
    },
    {
      title: "Loan to Value Calculator",
      description:
        "Easily calculate your Loan-to-Value Ratio (LVR) to see how much of the property value you’re borrowing. Use this tool to better understand your borrowing power.",
      image: "/three.jpg",
    },
  ];
  const HomeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-yellow-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );

  const FileTextIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-yellow-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );

  const BankIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-yellow-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
      />
    </svg>
  );

  const MortgageOption = ({ Icon, title, features, buttonText }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full border border-yellow-200">
        <div className="flex-grow">
          <div className="flex items-center mb-4">
            <Icon className="w-6 h-6 text-yellow-800 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          </div>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="w-full bg-yellow-400 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300 mt-auto border border-yellow-500 text-sm">
          {buttonText}
        </button>
      </div>
    );
  };
  return (
    <>
      <div className="font-sans bg-white">
        {/* Top Banner */}
        <div className="bg-yellow-400 text-black p-2 text-center">
          <p className="text-sm">
            Fixed Interest rates from 4% * . Call us or enquire online.
            <a href="#" className="underline ml-2">
              Call us
            </a>{" "}
            or
            <a href="#" className="underline ml-1">
              enquire online
            </a>
            .
          </p>
        </div>
        {/* Header */}
        <header className="bg-black text-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/logg.png"
                alt="SIMPLI Mortgages Logo"
                style={{ height: "3rem" }} // Custom height (adjust as needed)
              />
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-yellow-400">
                Home Loans
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                Mortgage Calculators
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                Resources
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                About
              </a>
              <a href="#" className="text-white hover:text-yellow-400">
                Contact Us
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full bg-yellow-400">
                <Search className="w-5 h-5 text-black" />
              </button>
              <a
                href="tel:+61291941700"
                className="hidden md:flex items-center text-yellow-400"
              >
                <Phone className="w-5 h-5 mr-2" />
                <strong>+1 289 497 8989</strong>
              </a>
              <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-full">
                GET A FREE ASSESSMENT
              </button>
              <Menu className="md:hidden w-6 h-6" />
            </div>
          </div>
        </header>
        {/* Hero Section */}
        <section className="bg-gray-50 py-8 md:py-24">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-screen-xl">
            <div className="w-full md:w-1/2 md:order-2 mb-8 md:mb-0">
              <img
                src="/family2.jpg"
                alt="Happy family"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="w-full md:w-1/2 md:order-1 text-center md:text-left">
              <h1
                className="text-gray-800 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-6"
                style={{
                  lineHeight: "1.2",
                  fontFamily: "Raleway",
                }}
              >
                Getting Mortgage is that{" "}
                <span className="text-red-700">simple!</span>
                <br />
                We are your <span className="text-yellow-700">specialist</span>
                <br />
                <span className="text-yellow-700">mortgage brokers.</span>
              </h1>
              <p className="text-base md:text-lg mb-6 text-gray-700 hidden md:block">
                At SIMPLI Mortgages, we find approvals where others can't. Trust
                us to help you with your home loan.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mb-6">
                <button className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold text-lg w-full md:w-auto">
                  I am looking for Mortgage Loan
                </button>
                <button className="bg-yellow-400 text-gray-850 px-6 py-3 rounded-full font-semibold text-lg w-full md:w-auto">
                  I want to refinance
                </button>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <img
                  src="https://www.homeloanexperts.com.au/wp-content/uploads/2024/02/product_review_logo_1x.webp"
                  alt="Product Review"
                  className="h-8 mr-2"
                />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600 text-sm sm:text-base">
                  4.8 (1,650+ Reviews)
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Mortgage Options */}
        <section className="max-w-5xl mx-auto px-4 py-24">
          <h2 className="text-4xl font-bold text-center mb-2 text-gray-800">
            Explore The{" "}
            <span className="text-yellow-800">Right Mortgage For You</span>
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Your dream home deserves a mortgage that resonates with your goals.
            Let's find it together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <MortgageOption
              Icon={HomeIcon}
              title="Fixed Rate Mortgages"
              features={[
                "Predictable Monthly Payments",
                "Long-Term Stability",
                "Ideal for Conservative Borrowers",
              ]}
              buttonText="Find out more"
            />
            <MortgageOption
              Icon={FileTextIcon}
              title="Variable Rate Mortgages"
              features={[
                "Potential for Lower Rates",
                "Flexibility to Switch or Refinance",
                "Suitable for Risk-Tolerant Borrowers",
              ]}
              buttonText="Find out more"
            />
            <MortgageOption
              Icon={BankIcon}
              title="Low-Deposit Home Loans"
              features={[
                "Easier Entry to Property Market",
                "Government Assistance Options",
                "Higher Interest Rates",
              ]}
              buttonText="Find out more"
            />
          </div>
        </section>
        <section className="bg-gray-100 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800 pt-6">
              Master Your{" "}
              <span className="text-yellow-700">Financial Journey</span>
            </h2>
            <p className="text-center text-gray-600 mb-8 pb-10">
              Using our Home Loan Calculator
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {calculators.map((calc, index) => (
                <CalculatorCard key={index} {...calc} />
              ))}
            </div>
            <div className="text-center">
              <button className="bg-yellow-400 text-gray-700 px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                Explore more calculators
              </button>
            </div>
          </div>
        </section>
        <MortgageRateComparison />

        <AnimatedSteps />
        {/* Calculators Section */}

        {/*PROCESS SECTIOn */}

        <MortgageCalculator />
        <CEOWords />
        <LenderShowcase />
        <ContactForm />
        {/* <UnderstandingNeedsSection /> */}
        {/* Footer */}
        <footer className="bg-black text-white py-8 mt-2">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex justify-center mb-4 md:justify-start">
                  <img
                    src="/logg.png"
                    alt="SIMPLI Mortgages Logo"
                    style={{ height: "7rem" }} // Custom height (adjust as needed)
                  />
                </div>
                <h3 className="font-bold mb-2">ABOUT US</h3>
                <p className="text-sm">
                  Simpli Mortages is a leading Liscenced Mortgage Brokerage that
                  serves the communities of Ontario and Alberta by educating
                  individuals and families to make informed real estate
                  decisions.
                  <br />
                  ABN:
                  <br />
                  ACN:
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">POPULAR LINKS</h3>
                <ul className="text-sm space-y-1">
                  <li>Home</li>
                  <li>Why Use Us?</li>
                  <li>Enquire Online</li>
                  <li>Contact Us</li>
                  <li>Terms & Conditions</li>
                  <li>Sitemap</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">SPECIALITIES</h3>
                <ul className="text-sm space-y-1 text-gray-300">
                  <li>Fixed & Variable Rate Mortgages</li>
                  <li>3 Years Fixed Rate Mortgage</li>
                  <li>5 Years Fixed Rate Mortgage</li>
                  <li>1 Year Variable Rate Mortgage</li>
                  <li>1 Year Variable Rate Mortgage</li>
                  <li>Private Mortgages</li>
                  <li>Last Minute Bridge Loans</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">TOOLS & RESOURCES</h3>
                <ul className="text-sm space-y-1">
                  <li>Investors Centre</li>
                  <li>Mortgage Calculators</li>
                  <li>Home Loan Interest Rates</li>
                  <li>Lender Reviews</li>
                  <li>Mortgage Blog</li>
                  <li>First Home Buyers Guide</li>
                  <li>First Home Buyers Centre</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 text-white p-4 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">
                    Head office location
                  </h4>
                  <p className="text-sm">
                    Unit A, 3610 Mavis Rd, Mississauga L5C 1W2
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">
                    Brantford Office
                  </h4>
                  <p className="text-sm">
                    449 Mount Pleasant Rd Brantford, ON N3T 5L5
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">
                    Mailing Address
                  </h4>
                  <p className="text-sm">
                    Unit A, 3610 Mavis Rd, Mississauga L5C 1W2
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">Email</h4>
                  <p className="text-sm">info@houseeo.com</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <p className="text-sm">
                    <strong>Tel:</strong> +1 289 497 8989
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <strong>Overseas:</strong> 1-888-799-4622
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <strong>Tel:</strong> 289 497 8989
                  </p>
                </div>
                <div>
                  <p className="text-sm">brantford@houseeo.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm mb-4 md:mb-0">
                © 2024 SIMPLI Mortgages. All rights reserved. Licensed under the
                Province of Ontario, Canada.
                <br />
              </p>
              <div className="flex space-x-4">
                <FaFacebookF className="text-xl hover:text-yellow-400 cursor-pointer" />
                <FaLinkedinIn className="text-xl hover:text-yellow-400 cursor-pointer" />
                <FaTwitter className="text-xl hover:text-yellow-400 cursor-pointer" />
                <FaInstagram className="text-xl hover:text-yellow-400 cursor-pointer" />
                <FaYoutube className="text-xl hover:text-yellow-400 cursor-pointer" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
