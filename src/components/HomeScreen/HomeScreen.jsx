import React from "react";
import styles from "./HomeScreen.module.css";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";

function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Banner />
    </div>
  );
}

export default HomePage;
