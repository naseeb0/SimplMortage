"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, BarChart2, Search, Smile } from "lucide-react";

const steps = [
  {
    number: 1,
    Icon: Lock,
    title: "Qualification",
    description:
      "We consider your financial situation and ask the right questions to understand your needs.",
  },
  {
    number: 2,
    Icon: BarChart2,
    title: "Gathering Documents",
    description:
      "Collect all necessary financial documents to ensure a smooth mortgage process.",
  },
  {
    number: 3,
    Icon: Search,
    title: "Finding Best Rates",
    description:
      "We search for the best mortgage rates to match your financial goals.",
  },
  {
    number: 4,
    Icon: Smile,
    title: "Getting Approved",
    description:
      "We guide you through the approval process for a stress-free experience.",
  },
];
const Step = ({ step }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-start mb-8"
    >
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center  text-lg font-bold transition-colors duration-300 ${
          step.number === 4
            ? "bg-yellow-500 text-gray-950 hover:bg-yellow-600"
            : "bg-gray-800 text-yellow-400 hover:bg-gray-600"
        }`}
      >
        {step.number}
      </div>
      <div className="flex flex-col ml-4">
        <div className="flex items-center mb-1">
          <step.Icon className="text-yellow-800 mr-2" size={28} />
          <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
        </div>
        <p className="text-sm text-gray-600">{step.description}</p>
      </div>
    </motion.div>
  );
};
const AnimatedSteps = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="text-gray-800">Simpli Mortages Is</span>{" "}
        <span className="text-yellow-700">Here To Help</span>
      </h2>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          {steps.map((step) => (
            <div
              className="flex flex-col items-start mb-8 sm:w-1/4 sm:mb-0"
              key={step.number}
            >
              <Step step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedSteps;
