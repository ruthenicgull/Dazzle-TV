import React from "react";
import styles from "./LoginForm.module.css";
function LoginForm({ signup }) {
  return (
    <form className={styles.form}>
      <div className={styles.header}>
        <p className={styles.header_text}>
          {signup ? "Create Account" : "Sign In"}
        </p>
      </div>
      <input className={styles.field} type="email" placeholder="Email" />
      {!signup && (
        <input
          className={styles.field}
          type="password"
          placeholder="Password"
        />
      )}
      <button
        className={`${styles.field} ${styles.submit_button}`}
        type="submit"
      >
        {signup ? "Get Started" : "Enter"}
      </button>
      {!signup && <p className={styles.signup_link}> Create an account</p>}
    </form>
  );
}

export default LoginForm;
