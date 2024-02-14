import React from "react";
import styles from "./Navbar.module.css";
import AppIcon from "../../assets/nf_icon.png";
function Navbar() {
  return (
    <nav className={styles.navbar}>
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
