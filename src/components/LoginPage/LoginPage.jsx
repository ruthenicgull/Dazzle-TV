import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import backgroundImage from "../../assets/nf_bg.jpg";
import styles from "./LoginPage.module.css";

function LoginPage({ signup }) {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      <LoginForm signup={signup} />
    </div>
  );
}

export default LoginPage;
