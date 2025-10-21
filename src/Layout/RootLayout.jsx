import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div>
      <section className=" md:px-7 lg:px-15 lg:mt-4 ">
        <Navbar></Navbar>
      </section>
      <section className="min-h-[calc(100vh-301px)]">
        <Outlet></Outlet>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default RootLayout;
