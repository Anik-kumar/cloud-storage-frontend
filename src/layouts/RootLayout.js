// import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./rootLayout.module.css";

const RootLayout = () => {
  return (
    <div className={styles.rootLayoutContainer}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
