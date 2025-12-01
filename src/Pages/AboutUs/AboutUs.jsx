import React from "react";
import { Heart, Sparkles, Users, Award, Clock, MapPin } from "lucide-react";
import { NavLink } from "react-router";

const AboutUs = () => {
  const stats = [
    {
      icon: <Heart className="w-8 h-8" />,
      number: "10,000+",
      label: "Happy Pets",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "50+",
      label: "Expert Team",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Years Experience",
    },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Support" },
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Compassionate Care",
      description:
        "Every pet is treated with love, respect, and individual attention",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Quality",
      description: "We use only the finest products and latest techniques",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Certified professionals passionate about animal wellness",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Trusted Service",
      description:
        "Building lasting relationships with pets and their families",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b-2 border-gray-200 text-gray-800 py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gray-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About Snow Paw Society
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Where Winter Warmth Meets Professional Pet Care
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in the heart of winter 2010, Snow Paw Society began with a
              simple mission: to ensure every pet stays warm, healthy, and happy
              during the coldest months of the year.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              What started as a small winter grooming service has blossomed into
              a comprehensive pet care center, offering everything from thermal
              bedding to nutrition consultations. Our name reflects our
              commitment—like a society united by purpose, we bring together pet
              lovers, expert caregivers, and innovative services under one snowy
              paw print.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we're proud to serve thousands of pets and their families,
              making winter a season of comfort rather than concern.
            </p>
          </div>

          <div className="relative mb-12 md:mb-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl transform rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800"
              alt="Snow Paw Society"
              className="relative rounded-3xl shadow-2xl w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl">
              <p className="text-2xl md:text-4xl font-bold text-purple-600">
                15+
              </p>
              <p className="text-sm md:text-base text-gray-600 font-semibold">
                Years Strong
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-y-2 border-gray-200 py-16 my-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-gray-800">
                <div className="flex justify-center mb-4 opacity-70">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide exceptional winter care services that prioritize
                  pet health, comfort, and happiness while educating owners
                  about seasonal wellness needs.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    Our Vision
                  </h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the most trusted winter pet care destination, where
                  every pet experiences warmth, wellness, and world-class
                  service throughout the coldest season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Join the Snow Paw Family
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience the difference that genuine care and expertise make. Your
          pet deserves the best winter care available.
        </p>
        <NavLink
          to={"/service"}
          className="px-10 py-4 bg-gradient-to-r  font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
        >
          Book Your First Service
        </NavLink>
      </div>
    </div>
  );
};

export default AboutUs;
