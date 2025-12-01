import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experts = ({ expertData }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  if (!Array.isArray(expertData) || expertData.length === 0) {
    return (
      <div className="text-center mt-10">
        <p>Loading expert information...</p>
      </div>
    );
  }

  return (
    <div className="mt-10  overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-3">Meet Our Experts</h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Our team of specialized veterinarians is here to provide the best care
        for your beloved pets
      </p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {expertData.map((expert, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex flex-col lg:flex-row ">
              <div className="sm:w-40 sm:h-full">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-48 sm:h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {expert.name}
                </h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">
                  {expert.expertise}
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                  <p className="text-sm text-gray-700 italic leading-relaxed">
                    "{expert.advice}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
