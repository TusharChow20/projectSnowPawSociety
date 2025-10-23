import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WinterCare = ({ winterData }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  if (!Array.isArray(winterData) || winterData.length === 0) {
    return (
      <div className="text-center mt-10">
        <p>Loading winter care services...</p>
      </div>
    );
  }

  return (
    <div className="mt-10 px-4 md:px-4 overflow-hidden">
      <h2 className="text-2xl font-bold text-center mb-10">
        Our Winter Care Plans
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {winterData.map((item, index) => (
          <div
            key={index}
            className="border p-5 rounded-lg shadow-md bg-white hover:shadow-xl transition-all"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-offset="200"
          >
            <div
              className={`flex flex-col md:flex-row gap-5 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2">
                <img
                  src={item.image}
                  alt={item.serviceName}
                  className="w-full md:h-64 object-cover rounded-md"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h1 className="font-semibold">{item.title}</h1>
                <h3 className="text-xl font-bold mb-3">{item.serviceName}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCare;
