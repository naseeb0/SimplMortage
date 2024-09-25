"use client";
import React, { useState, useCallback, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useForm } from "react-hook-form"; // Using react-hook-form for form handling

const MortgageCalculator = () => {
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      homeValue: "233000",
      downPaymentPercent: "20",
      interestRate: "4",
      mortgageTerm: "30",
    },
  });

  const [downPaymentAmount, setDownPaymentAmount] = useState("46600");
  const [mortgageAmount, setMortgageAmount] = useState("186400");
  const [monthlyPayment, setMonthlyPayment] = useState("0");

  const homeValue = watch("homeValue");
  const downPaymentPercent = watch("downPaymentPercent");
  const interestRate = watch("interestRate");
  const mortgageTerm = watch("mortgageTerm");

  const calculateMortgage = useCallback(() => {
    const p = parseFloat(mortgageAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(mortgageTerm) * 12;
    const monthlyPayment =
      (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(isNaN(monthlyPayment) ? "0" : monthlyPayment.toFixed(2));
  }, [mortgageAmount, interestRate, mortgageTerm]);

  useEffect(() => {
    calculateMortgage();
  }, [
    homeValue,
    downPaymentPercent,
    interestRate,
    mortgageTerm,
    calculateMortgage,
  ]);

  const updateValues = useCallback((value, percent) => {
    const numValue = parseFloat(value);
    const numPercent = parseFloat(percent);
    if (!isNaN(numValue) && !isNaN(numPercent)) {
      const downPayment = (numValue * numPercent) / 100;
      setDownPaymentAmount(downPayment.toFixed(2));
      setMortgageAmount((numValue - downPayment).toFixed(2));
    }
  }, []);

  const handleFormChange = (data) => {
    updateValues(data.homeValue, data.downPaymentPercent);
  };

  const chartData = [
    { name: "Mortgage", value: parseFloat(mortgageAmount) },
    { name: "Down Payment", value: parseFloat(downPaymentAmount) },
  ];

  const COLORS = ["#1F2937", "#FBBF24"]; // gray-850 and yellow-400

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mortgage Calculator Form */}
          <form
            onChange={handleSubmit(handleFormChange)}
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg border"
          >
            <h2 className="text-4xl font-bold text-yellow-700 mb-8 text-center">
              Mortgage Calculator
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Home Value
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="text"
                  {...register("homeValue")}
                  className="block w-full h-12 border text-gray-950 border-gray-300 rounded-lg pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={downPaymentAmount}
                    readOnly
                    className="block w-full h-12 border border-gray-300 rounded-lg pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 text-base bg-gray-50 text-gray-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment %
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500">%</span>
                  </div>
                  <input
                    type="text"
                    {...register("downPaymentPercent")}
                    className="block w-full h-12 text-gray-950 border border-gray-300 rounded-lg pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 text-base"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mortgage Amount
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={mortgageAmount}
                  readOnly
                  className="block w-full h-12 border border-gray-300 rounded-lg pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 text-base bg-gray-50 text-gray-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500">%</span>
                </div>
                <input
                  type="text"
                  {...register("interestRate")}
                  className="block w-full h-12 text-gray-950 border border-gray-300 rounded-lg pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 text-base"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mortgage Term (Years)
              </label>
              <div className="relative">
                <input
                  type="text"
                  {...register("mortgageTerm")}
                  className="block w-full h-12 border text-gray-950 border-gray-300 rounded-lg pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 text-base"
                />
              </div>
            </div>
          </form>

          {/* Pie Chart and Monthly Payment */}
          <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg border">
            <div className="h-72 w-full mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    labelLine={true} // Enable label lines
                    label={({ name, value }) => `$${value}`} // Show label outside
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700">
                Monthly Payment
              </h3>
              <p className="text-4xl font-bold text-yellow-700 mt-4">
                ${monthlyPayment}/mo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
