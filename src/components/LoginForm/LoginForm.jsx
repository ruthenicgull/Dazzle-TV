import React from "react";
import styles from "./LoginForm.module.css";
function LoginForm() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.header_text}>Sign In</p>
      </div>
      <form action="">
        <input className={styles.field} type="email" placeholder="Email" />
        <input
          className={styles.field}
          type="password"
          placeholder="Password"
        />
        <button
          className={`${styles.submit_button} ${styles.field}`}
          type="submit"
        >
          Enter
        </button>
        <p className={styles.signup_link}> Create an account</p>
      </form>
    </div>
  );
}

export default LoginForm;
