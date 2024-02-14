import React from "react";
import styles from "./Navbar.module.css";
import AppIcon from "../../assets/dazzleTV_icon.png";
import { useState, useEffect } from "react";

function Navbar() {
  const [showBlack, setShowBlack] = useState(false);

  function navbarTransition() {
    if (window.scrollY > 100) {
      setShowBlack(true);
    } else {
      setShowBlack(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", navbarTransition);
    return () => window.removeEventListener("scroll", navbarTransition);
  }, []);

  return (
    <nav className={`${styles.navbar} ${showBlack && styles.navbar_black}`}>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Movies</li>
        <li>
          <img className={styles.icon} src={AppIcon} alt="icon" />
        </li>
        <li>Series</li>
        <li>Kids</li>
      </ul>
    </nav>
  );
}

export default Navbar;
