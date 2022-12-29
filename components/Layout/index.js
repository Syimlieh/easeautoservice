import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
