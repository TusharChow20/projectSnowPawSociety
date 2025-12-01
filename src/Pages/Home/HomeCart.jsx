import React from "react";
import {
  Star,
  DollarSign,
  ArrowRight,
  Heart,
  Filter,
  ArrowUpDown,
} from "lucide-react";
import { Link } from "react-router";

const HomeCart = ({ eachData }) => {
  return (
    <div className="group relative">
      <div className="card bg-base-100 image-full w-full md:h-96 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl">
        <figure className="relative">
          <img
            className="object-cover h-full w-full transition-all duration-500 group-hover:blur-sm group-hover:brightness-50 group-hover:scale-110"
            src={eachData.image}
            alt={eachData.serviceName}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500"></div>
          <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20">
            <Heart className="w-5 h-5 text-white" />
          </button>
        </figure>

        <div className="card-body relative z-10 transition-all duration-500 flex flex-col justify-end">
          <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-4 group-hover:translate-y-0">
            <span className="badge badge-primary badge-lg font-semibold">
              {eachData.category || "Premium Service"}
            </span>
          </div>
          <h2 className="card-title text-white text-2xl font-bold drop-shadow-2xl group-hover:text-3xl transition-all duration-300 mb-2 py-4">
            {eachData.serviceName}
          </h2>
          <p className="text-white/80 text-sm leading-relaxed drop-shadow-lg mb-4 line-clamp-2 group-hover:text-white group-hover:line-clamp-3 transition-all duration-300">
            {eachData.description?.slice(0, 200) ||
              "Professional pet care service with experienced handlers. Your pet's happiness and safety is our top priority."}
          </p>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full group-hover:bg-white/20 transition-all duration-300">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-semibold text-sm">
                {eachData.rating}
              </span>
            </div>
            <div className="flex items-center gap-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-white font-bold text-lg">
                {eachData.price}
              </span>
            </div>
          </div>
          <div className="card-actions justify-end lg:transform lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
            <Link
              to={`/serviceDetails/${eachData.serviceId}`}
              className="btn btn-primary w-full gap-2 font-semibold hover:gap-4 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Details
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCart;
