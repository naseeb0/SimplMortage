import React from "react";
import { ThumbsUp } from "lucide-react";

const UnderstandingNeedsSection = () => {
  return (
    <div className="bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Understanding Your Needs</h2>
        <p className="text-gray-600 mb-8">HOW DO WE DO IT?</p>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/3 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Sweet And Simple",
                  description:
                    "A streamlined process that makes everything easier for you and ensures nothing falls through the cracks.",
                },
                {
                  title: "The Bigger Picture",
                  description:
                    "Forward thinking for the best solution today and tomorrow.",
                },
                {
                  title: "Speedier Service",
                  description:
                    "A reliable, swift and secure process thanks to the most advanced digital tools in the industry.",
                },
                {
                  title: "The Best Experience",
                  description:
                    "Advanced technology and expert brokers come together to offer you a more personalized and positive experience.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-yellow-100 p-6 rounded-lg">
                  <ThumbsUp className="text-yellow-600 mb-4" size={24} />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300">
              Get Started Today
            </button>
          </div>
          <div className="w-full lg:w-1/3 px-4 mt-8 lg:mt-0">
            <div className="bg-yellow-400 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/400/500"
                alt="Smiling woman"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderstandingNeedsSection;
