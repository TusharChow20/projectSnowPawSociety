import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { NavLink } from "react-router";

const Hero = ({ data }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 pointer-events-none z-1"></div>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-[550px] rounded-2xl overflow-hidden"
      >
        {data.map((item) => (
          <SwiperSlide key={item.serviceId}>
            <div className="relative w-full h-full">
              <img
                src={item.image}
                alt={item.serviceName}
                className="object-cover w-full h-full blur-[2px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/80 to-transparent flex flex-col justify-center items-center text-center text-white px-6">
                <p className="text-sm sm:text-lg uppercase tracking-[4px] text-blue-100 font-medium drop-shadow-lg">
                  {item.category}
                </p>
                <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 mb-5 drop-shadow-xl">
                  {item.serviceName}
                </h2>
                <NavLink
                  to={"/service"}
                  className="btn btn-outline btn-sm sm:btn-md border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  Explore More
                </NavLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-10 pointer-events-none z-0"></div>
    </div>
  );
};

export default Hero;
