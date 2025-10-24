import React from "react";
import HomeCart from "./Home/HomeCart";
import { useLoaderData } from "react-router";

const Service = () => {
  const { data } = useLoaderData();
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-12 px-3 md:px-6 lg:px-15 mb-10">
      {data.map((eachData) => (
        <HomeCart key={eachData.serviceId} eachData={eachData} />
      ))}
    </div>
  );
};

export default Service;
