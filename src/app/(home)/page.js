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
import { Lock, BarChart2, Smile } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const HomePage = () => {
  const HorizontalDottedArrow = ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="210"
      height="15"
      viewBox="0 0 210 15"
      fill="none"
    >
      <path
        d="M209.354 7.85355C209.549 7.65829 209.549 7.34171 209.354 7.14645L204.172 1.96447C203.976 1.7692 203.66 1.7692 203.464 1.96447C203.269 2.15973 203.269 2.47631 203.464 2.67157L207.293 7.5L203.464 12.3284C203.269 12.5237 203.269 12.8403 203.464 13.0355C203.66 13.2308 203.976 13.2308 204.172 13.0355L209.354 7.85355ZM0 8H2.00962V7H0V8ZM6.02885 8H10.0481V7H6.02885V8ZM14.0673 8H18.0865V7H14.0673V8ZM22.1058 8H26.125V7H22.1058V8ZM30.1442 8H34.1635V7H30.1442V8ZM38.1827 8H42.2019V7H38.1827V8ZM46.2211 8H50.2404V7H46.2211V8ZM54.2596 8H58.2788V7H54.2596V8ZM62.2981 8H66.3173V7H62.2981V8ZM70.3365 8H74.3558V7H70.3365V8ZM78.375 8H82.3942V7H78.375V8ZM86.4135 8H90.4327V7H86.4135V8ZM94.4519 8H98.4712V7H94.4519V8ZM102.49 8H106.51V7H102.49V8ZM110.529 8H114.548V7H110.529V8ZM118.567 8H122.587V7H118.567V8ZM126.606 8H130.625V7H126.606V8ZM134.644 8H138.663V7H134.644V8ZM142.683 8H146.702V7H142.683V8ZM150.721 8H154.74V7H150.721V8ZM158.76 8H162.779V7H158.76V8ZM166.798 8H170.817V7H166.798V8ZM174.837 8H178.856V7H174.837V8ZM182.875 8H186.894V7H182.875V8ZM190.913 8H194.933V7H190.913V8ZM198.952 8H202.971V7H198.952V8ZM206.99 8H209V7H206.99V8Z"
        fill="#27ADE7"
        strokeWidth="2"
        stroke="#27ADE7"
      />
    </svg>
  );

  const VerticalDottedArrow = ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="100%" // Keep this for flexibility
      viewBox="0 0 2 100"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M1 0V88M1 88L0.5 86M1 88L1.5 86" // Slightly adjust arrowhead position and size
        stroke="#27ADE7"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
    </svg>
  );

  const ProcessStep = ({
    number,
    Icon,
    title,
    description,
    showArrow,
    isLast,
  }) => (
    <div className="flex items-start relative w-full mb-8 md:mb-0 md:w-1/4">
      {/* Step circle and arrow */}
      <div className="relative flex items-center">
        {/* Step circle */}
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-yellow-400 text-xl font-bold ${
            number === 4 ? "bg-yellow-400 text-gray-950" : "bg-gray-800"
          } z-10`}
        >
          {number}
        </div>

        {/* Conditional arrow rendering */}
        {showArrow && (
          <>
            {/* Horizontal arrow (desktop view) */}
            <HorizontalDottedArrow className="hidden md:block absolute left-[calc(100%-1.5rem)] top-1/2 transform -translate-y-1/2 w-[calc(400%-1.5rem)]" />

            {/* Vertical arrow (mobile view) */}
            <VerticalDottedArrow className="block md:hidden absolute left-1/2 top-full transform -translate-x-1/2 mt-6 h-[80px] z-0" />
          </>
        )}
      </div>

      {/* Step details */}
      <div className="ml-4">
        {/* Icon and title on the same line */}
        <div className="flex items-center space-x-2">
          <div className="text-blue-400">
            <Icon size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        </div>

        {/* Description below the icon */}
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
  const steps = [
    {
      number: 1,
      Icon: Lock,
      title: "Understanding your situation",
      description:
        "We thoroughly assess your financial situation, including your income, expenses, credit history, and long-term goals.",
    },
    {
      number: 2,
      Icon: BarChart2,
      title: "Finding the right deal",
      description:
        "We compare interest rates, loan terms, fees, and other factors to find a deal that aligns with your needs.",
    },
    {
      number: 3,
      Icon: Search,
      title: "Closing the deal",
      description:
        "We finalise all the paperwork and coordinate with other parties, such as lenders and conveyancers, to ensure your loan is approved.",
    },
    {
      number: 4,
      Icon: Smile,
      title: "Broker for life",
      description:
        "Your mortgage journey doesn't end at settlement. As it evolves, our experts remain by your side.",
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

  const MortgageOption = ({ Icon, title, features, buttonText }) => (
    <div className="bg-white-300 p-6 rounded-lg shadow-md text-gray-800 border border-yellow-400">
      <Icon />
      <h3 className="text-lg font-semibold mt-4 mb-2">{title}</h3>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-4 h-4 text-yellow-800 mr-2 mt-1"
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
      <button className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-blue-500 transition-colors">
        {buttonText}
      </button>
    </div>
  );
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
        <section className="bg-gray-100 py-8 md:py-24">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-screen-xl">
            <div className="w-full md:w-1/2 md:order-1 text-center md:text-left">
              <h1
                className="text-gray-800 text-xl md:text-3xl lg:text-4xl font-semibold mb-6 font-raleway"
                style={{
                  lineHeight: "1.2",
                }}
              >
                No mortgage is too tough for
                <br />
                us. We are your{" "}
                <span className="text-yellow-700">specialist</span>
                <br />
                <span className="text-yellow-700">mortgage brokers.</span>
              </h1>
              <p className="text-base md:text-lg mb-6 text-gray-700 hidden md:block">
                At SIMPLI Mortgages, we find approvals where others can't. Trust
                us to help you with your home loan.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold">
                  I want to buy
                </button>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold">
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
                <span className="ml-2 text-gray-600">4.8 (1,650+ Reviews)</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:order-2 mb-8 md:mb-0">
              <img
                src="/family2.jpg"
                alt="Happy family"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </section>
        {/* Mortgage Options */}
        <section className="max-w-5xl mx-auto px-4 py-12 ">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Explore The{" "}
            <span className="text-yellow-800">Right Mortgage For You</span>
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Your dream home deserves a mortgage that resonates with your goals.
            Let's find it together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MortgageOption
              Icon={HomeIcon}
              title="Waived LMI Home Loans"
              features={[
                "No need to pay Lenders Mortgage Insurance",
                "Lower upfront costs",
                "Accessible with smaller deposits",
              ]}
              buttonText="Find out more"
            />
            <MortgageOption
              Icon={FileTextIcon}
              title="Low-Doc Home Loans"
              features={[
                "Great for self-employed borrowers",
                "Offer flexibility in proving your income",
                "Extensive documents not required",
              ]}
              buttonText="Find out more"
            />
            <MortgageOption
              Icon={BankIcon}
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
        {/* Mortgage Options */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Explore The Right Mortgage For You
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Your dream home deserves a mortgage that resonates with your
              goals. Let's find it together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800 text-center">
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
                  className="bg-white p-6 rounded-lg shadow-md border border-yellow-200"
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
        </section> */}

        {/* Calculators Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Master Your{" "}
              <span className="text-yellow-700">Financial Journey</span>
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
              <button className="bg-black text-white px-6 py-3 rounded-full font-">
                Explore more calculators
              </button>
            </div>
          </div>
        </section>
        {/*PROCESS SECTIOn */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-gray-700">Home Loan Experts Is</span>{" "}
            <span className="text-blue-400">Here To Help</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-between">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                {...step}
                showArrow={index < steps.length - 1}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
          <div className="text-center mt-16">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300">
              Experience it firsthand
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-8">
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
                  Simpli Mortages serves the communities of Ontario and Alberta
                  by educating individuals and families to make informed real
                  estate decisions.
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
                  <p className="text-sm">PO Box 3726 Rhodes NSW 2138</p>
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
