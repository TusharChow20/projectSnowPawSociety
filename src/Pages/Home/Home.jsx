import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import { useLoaderData } from "react-router";
import HomeCart from "./HomeCart";
import WinterCare from "./WinterCare";
import AOS from "aos";
import Experts from "./Experts";
import Testimonials from "./Testimoniales";
const Home = () => {
  const { data } = useLoaderData();
  const [winterData, setWinterData] = useState([]);
  const [expertdata, setExpertData] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    fetch("/petCare.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data.json");
        return res.json();
      })
      .then((jsonData) => {
        setWinterData(Array.isArray(jsonData) ? jsonData : []);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  useEffect(() => {
    fetch("/experts.json")
      .then((res) => res.json())
      .then((expertData) => {
        setExpertData(Array.isArray(expertData) ? expertData : []);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="md:px-15 mt-3">
      <Hero data={data} />
      <div>
        <h1 className="mt-10 text-3xl font-bold text-center">
          Popular Winter Care Services
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-2 gap-6 px-2">
          {data.map((eachData) => (
            <HomeCart key={eachData.serviceId} eachData={eachData} />
          ))}
        </div>
        <WinterCare winterData={winterData} />
        <Experts expertData={expertdata}></Experts>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;