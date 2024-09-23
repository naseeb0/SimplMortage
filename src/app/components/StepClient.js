"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const StepClient = ({ step, isLast }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="flex items-start mb-12 relative"
    >
      <div className="flex-shrink-0 mr-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold ${
            step.number === 4 ? "bg-green-500" : "bg-blue-400"
          }`}
        >
          {step.number}
        </div>
        {!isLast && (
          <div className="absolute left-6 top-12 bottom-0 w-px bg-gray-300" />
        )}
      </div>
      <div className="flex-grow">
        <div className="flex items-center mb-2">
          <step.Icon className="text-blue-400 mr-2" size={24} />
          <h3 className="text-lg font-semibold text-gray-700">{step.title}</h3>
        </div>
        <p className="text-sm text-gray-600">{step.description}</p>
      </div>
    </motion.div>
  );
};
