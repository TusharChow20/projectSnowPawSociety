import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Heart } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    petType: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      petName: "",
      petType: "",
      service: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+990-1232421312",
      subtext: "All Day 24/7",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "jibon@snowpawsociety.com",
      subtext: "We respond within 24 hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "201, Banani , Dhaka",
      subtext: "Visit us for a tour anytime",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Shop Open",
      details: "Sun-Fri: 8am-7pm",
      subtext: "Sat: 9am-6pm",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white border-b-2 border-gray-200 py-16 md:py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gray-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our pet care services? We're here to help!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-gray-800 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                {info.title}
              </h3>
              <p className="text-base md:text-lg text-gray-800 font-semibold mb-1 text-wrap wrap-anywhere">
                {info.details}
              </p>
              <p className="text-xs md:text-sm text-gray-600">{info.subtext}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Side - Info */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Let's Talk About Your Pet
              </h2>
              <div className="h-1 w-20 bg-gray-700 rounded-full mb-6"></div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Whether you need grooming, boarding, or just have questions
                about winter pet care, our friendly team is ready to assist you.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-300">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Why Choose Us?
                </h3>
              </div>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full mt-2"></div>
                  <span className="text-sm md:text-base text-gray-700">
                    15+ years of professional pet care experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full mt-2"></div>
                  <span className="text-sm md:text-base text-gray-700">
                    Certified and trained pet care specialists
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full mt-2"></div>
                  <span className="text-sm md:text-base text-gray-700">
                    24/7 emergency support available
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full mt-2"></div>
                  <span className="text-sm md:text-base text-gray-700">
                    State-of-the-art facilities with comfort in mind
                  </span>
                </li>
              </ul>
            </div>

            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600"
                alt="Happy pets"
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
            <div className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all"
                  placeholder="Tushar"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="tushar@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="+880-(123) 344352343"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pet Name
                  </label>
                  <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Jibon"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Pet Type
                  </label>
                  <select
                    name="petType"
                    value={formData.petType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select type</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="grooming">Grooming</option>
                  <option value="boarding">Boarding</option>
                  <option value="daycare">Daycare</option>
                  <option value="training">Training</option>
                  <option value="veterinary">Veterinary Care</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your pet and how we can help..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.288150891334!2d90.39493!3d23.7937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1440122ab%3A0x2468e6c05bb6e66f!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890"
          width="100%"
          height="100%"
          className="h-64 md:h-96 border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Banani Dhaka Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
