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
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div className="font-sans bg-white">
        {/* Top Banner */}
        <div className="bg-yellow-400 text-black p-2 text-center">
          <p className="text-sm">
            Interest rates from 5.99% p.a. (6.01% comp. rate)*.
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
              <span className="text-2xl font-bold">SIMPLI</span>
              <span className="text-yellow-400 text-2xl font-bold">
                Mortgages
              </span>
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
                +61 2 9194 1700
              </a>
              <button className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-full">
                GET A FREE ASSESSMENT
              </button>
              <Menu className="md:hidden w-6 h-6" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gray-100 py-16 md:py-24">
          <div className="container mx-auto px-4 md:flex items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1
                className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold"
                style={{ lineHeight: "1.1" }}
              >
                No mortgage is too tough for
                <br />
                us. We are your{" "}
                <span className="text-yellow-700">specialist</span>
                <br />
                <span className="text-yellow-700">mortgage brokers.</span>
              </h1>
              <p className="text-lg mb-8 mt-5 text-gray-700">
                At SIMPLI Mortgages, we find approvals where others can't. Trust
                us to help you with your home loan.
              </p>
              <div className="space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold">
                  I want to buy
                </button>
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold">
                  I want to refinance
                </button>
              </div>
              <div className="mt-6 flex items-center">
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
                <span className="ml-2 text-gray-600">4.8 (1,650+ Reviews)</span>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="/family2.jpg"
                alt="Happy family"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </section>

        {/* Mortgage Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Explore The Right Mortgage For You
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Your dream home deserves a mortgage that resonates with your
              goals. Let's find it together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
              {[
                {
                  title: "Waived LMI Home Loans",
                  features: [
                    "No need to pay Lenders Mortgage Insurance",
                    "Lower upfront costs",
                    "Accessible with smaller deposits",
                  ],
                },
                {
                  title: "Low-Doc Home Loans",
                  features: [
                    "Great for self-employed borrowers",
                    "Offer flexibility in proving your income",
                    "Extensive documents not required",
                  ],
                },
                {
                  title: "Low-Deposit Home Loans",
                  features: [
                    "A quicker path to home ownership",
                    "Great option for first-home buyers",
                    "Minimum of 5% deposit required",
                  ],
                },
              ].map((option, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                >
                  <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-yellow-700 mr-2 mt-1"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="text-yellow-700 font-semibold flex items-center">
                    Find out more <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Calculators Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Master Your Financial Journey
            </h2>
            <h3 className="text-xl text-center mb-12 text-gray-800">
              Using Our Home Loan Calculators
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
              {[
                {
                  title: "LMI Calculator",
                  description:
                    "Use our Lenders Mortgage Insurance (LMI) calculator to find out how much you might need to pay if you're borrowing more than 80% of the property value.",
                  image: "/onee.jpg",
                },
                {
                  title: "Mortgage Repayment Calculator",
                  description:
                    "You can use this calculator to work out your repayments with different loan sizes, interest rates, loan terms and repayment options.",
                  image: "/two.jpg",
                },
                {
                  title: "LVR Calculator",
                  description:
                    "The percentage of the total property value you are borrowing is your Loan-To-Value Ratio (LVR). Calculate the percentage of LVR your loan situation allows.",
                  image: "/three.jpg",
                },
              ].map((calc, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                >
                  <div className="aspect-w-4 aspect-h-3 w-full">
                    <img
                      src={calc.image}
                      alt={calc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{calc.title}</h3>
                    <p className="mb-4 text-gray-600 flex-grow">
                      {calc.description}
                    </p>
                    <button className="bg-yellow-400 text-black px-4 py-2 rounded-full mt-auto self-start">
                      Calculate Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold">
                Explore more calculators
              </button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              SIMPLI Mortgages Is Here To Help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
              {[
                {
                  icon: <Users className="w-12 h-12 text-yellow-400" />,
                  title: "Understanding your situation",
                },
                {
                  icon: <Search className="w-12 h-12 text-yellow-400" />,
                  title: "Finding the right deal",
                },
                {
                  icon: <DollarSign className="w-12 h-12 text-yellow-400" />,
                  title: "Closing the deal",
                },
                {
                  icon: <Award className="w-12 h-12 text-yellow-400" />,
                  title: "Broker for life",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-900 rounded-full p-4 inline-block mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">
                    We guide you through every step of the mortgage process.
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold">
                Experience it firsthand
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold">SIMPLI</span>
                  <span className="text-yellow-400 text-2xl font-bold">
                    Mortgages
                  </span>
                </div>
                <h3 className="font-bold mb-2">ABOUT US</h3>
                <p className="text-sm">
                  SIMPLI Mortgages is a business owned by mortgage broking firm
                  SIMPLI Mortgages Pty Ltd.
                  <br />
                  ABN: 80 648 606 464
                  <br />
                  ACN: 648 606 464
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
                  <li>No Deposit Home Loans</li>
                  <li>Guarantor Loans</li>
                  <li>Non-Resident Loans</li>
                  <li>Unusual Employment</li>
                  <li>Low Doc Loans</li>
                  <li>Waived LMI</li>
                  <li>Bad Credit Home Loans</li>
                  <li>Australian Expat Home Loan</li>
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
                    Suite 207, 3 Rider Boulevard Rhodes NSW 2138
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">
                    Branch office location
                  </h4>
                  <p className="text-sm">
                    Suite 1, Level 1, 120 Erina Street, Gosford 2250
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">
                    Mailing Address
                  </h4>
                  <p className="text-sm">PO Box 3726 Rhodes NSW 2138</p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">
                    Opening Hours
                  </h4>
                  <p className="text-sm">
                    Monday - Friday
                    <br />
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                <div>
                  <p className="text-sm">
                    <strong>Local:</strong> 1300 889 743
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <strong>Overseas:</strong> +61 2 9194 1700
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <strong>Fax:</strong> +61 2 9475 4466
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    <strong>Email:</strong> info@simplimortgages.com.au
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm mb-4 md:mb-0">
                © 2024 SIMPLI Mortgages Pty Ltd | Credit Representative 540270
                is authorized
                <br />
                under Australian Credit License Number 385328 | ABN: 80 648 606
                464
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
