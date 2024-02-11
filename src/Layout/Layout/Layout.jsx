import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="main-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
