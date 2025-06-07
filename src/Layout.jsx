import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
