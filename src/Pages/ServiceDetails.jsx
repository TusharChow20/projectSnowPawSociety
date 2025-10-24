import React, { useState } from "react";
import { useParams, useLoaderData } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { Star, Clock, DollarSign, Mail, User, Calendar } from "lucide-react";

const ServiceDetails = () => {
  const { data } = useLoaderData();
  console.log(data);

  const { id } = useParams();
  const [formData, setFormData] = useState({ name: "", email: "" });
  const service = data?.find((item) => item.serviceId == parseInt(id));
  console.log(service);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success(`Booking confirmed for ${service.serviceName}!`);
    setFormData({ name: "", email: "" });
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-2xl text-gray-600">Service not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <Toaster position="top-right" />

      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 md:h-auto">
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold text-purple-600">
                  {service.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {service.serviceName}
              </h1>

              <div className="flex items-center gap-2 mb-4">
                <User className="text-blue-600" size={20} />
                <p className="text-lg text-gray-700 font-semibold">
                  {service.providerName}
                </p>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Mail className="text-green-600" size={20} />
                <p className="text-gray-600">{service.providerEmail}</p>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-lg">
                  <Star className="text-yellow-600 fill-yellow-600" size={20} />
                  <span className="font-bold text-gray-800">
                    {service.rating}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-lg">
                  <DollarSign className="text-green-600" size={20} />
                  <span className="font-bold text-gray-800">
                    ${service.price}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
                  <Clock className="text-blue-600" size={20} />
                  <span className="font-bold text-gray-800">
                    {service.slotsAvailable} slots
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 pb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar className="text-purple-600" />
              About This Service
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              {service.description}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Book This Service
          </h2>

          <form onSubmit={handleBooking} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-lg"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-lg"
                placeholder="Enter your email address"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg text-xl font-bold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;