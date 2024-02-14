import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import backgroundImage from "../../assets/nf_bg.png";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className={styles.container}>
      <img
        className={styles.background_image}
        src={backgroundImage}
        alt="background"
      />
      <div className={styles.form_container}>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
