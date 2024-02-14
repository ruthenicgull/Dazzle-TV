import React from "react";
import styles from "./HomeScreen.module.css";
import Navbar from "../Navbar/Navbar";

function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
}

export default HomePage;
