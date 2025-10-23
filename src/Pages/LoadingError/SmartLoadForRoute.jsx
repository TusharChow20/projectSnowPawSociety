import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import SmartLoader from "../Pages/LoadingError/SmartLoadForRoute";

const RootLayout = () => {
  return (
    <div>
      <SmartLoader />
      <section className=" md:px-7 lg:px-15 md:mt-4 ">
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
