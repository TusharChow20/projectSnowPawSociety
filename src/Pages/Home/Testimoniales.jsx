import React from "react";
import { Star, Quote } from "lucide-react";
import { Link } from "react-router";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1",
      review:
        "Absolutely wonderful service! They took care of my Golden Retriever during the winter months with such attention and love. The grooming and winter coat maintenance were exceptional.",
      service: "Winter Grooming Package",
      petName: "Max",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Boston, MA",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=3",
      review:
        "I was worried about leaving my cat during the cold season, but the team here made it so easy. They provided daily updates and kept my Fluffy warm and happy!",
      service: "Snow Walk ",
      petName: "Fluffy",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Chicago, IL",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5",
      review:
        "The winter wellness check saved my dog's life! They detected early signs of arthritis and provided excellent treatment. Highly recommend their veterinary services.",
      service: "Winter Nutrition Consultation",
      petName: "Buddy",
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Seattle, WA",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=8",
      review:
        "Professional, caring, and knowledgeable staff. They helped us prepare our pets for the winter season with proper nutrition and care tips. Five stars!",
      service: "Pet Spa ",
      petName: "Luna & Oscar",
    },
    {
      id: 5,
      name: "Jennifer Martinez",
      location: "Denver, CO",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=9",
      review:
        "Best pet care service I've ever used! The winter paw protection treatment worked wonders for my dog's sensitive paws. They truly care about every pet.",
      service: "Thermal Bedding",
      petName: "Charlie",
    },
    {
      id: 6,
      name: "Robert Anderson",
      location: "Minneapolis, MN",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=12",
      review:
        "I trust them completely with my pets during harsh winter weather. The heated boarding facilities are top-notch and the staff is incredibly attentive and loving.",
      service: "Winter Coat Fitting",
      petName: "Bella & Duke",
    },
  ];

  return (
    <div className="mt-16 mb-12" data-aos="fade-up">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          What Pet Parents Say
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it - hear from our satisfied clients who
          trust us with their beloved pets during the winter season
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Quote Icon Background */}
            <div className="absolute top-4 right-4 opacity-10">
              <Quote size={60} className="text-blue-600" />
            </div>

            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mb-6 leading-relaxed italic relative z-10">
              "{testimonial.review}"
            </p>

            {/* Service Badge */}
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                {testimonial.service}
              </span>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h4 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-xs text-blue-600 font-medium">
                  Pet: {testimonial.petName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8  mx-auto shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-3">
            Join Thousands of Happy Pet Parents
          </h3>
          <p className="text-blue-100 mb-6 text-lg">
            Experience the difference of premium winter pet care services
          </p>
          <Link
            to={"/service"}
            className="btn btn-lg bg-white text-blue-600 hover:bg-gray-100 border-none"
          >
            Book Your Service Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
