import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
// import SmartLoader from "../Pages/LoadingError/SmartLoadForRoute";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* <SmartLoader /> */}
      <div className="sticky top-0 z-50 ">
        <Navbar />
      </div>
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
