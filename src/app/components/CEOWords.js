import React from "react";

export default function CEOWords() {
  return (
    <div className="relative w-full overflow-hidden bg-yellow-50">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-25"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Team collaborating in an office"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/70 to-yellow-500/70"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="w-full lg:w-3/5 space-y-8">
            <svg
              className="h-12 w-12 text-yellow-600"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-700 leading-relaxed">
              "Our team's dedication and innovative spirit have propelled us to
              new heights. We're not just changing the way people work; we're
              revolutionizing how they experience their careers. At Simpli
              Mortages, we believe in blending productivity with passion, and
              the results speak for themselves."
            </blockquote>
            <figcaption className="text-xl mt-6">
              <div className="font-medium text-yellow-800">Vinny Singh</div>
              <div className="text-yellow-700 mt-1">CEO of Simpl Mortages</div>
            </figcaption>
          </div>
          <div className="w-full max-w-sm lg:w-2/5">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden shadow-xl">
              <img
                className="w-full h-full object-cover"
                src="/vinny.webp"
                alt="Judith Black, CEO of Workcation"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
