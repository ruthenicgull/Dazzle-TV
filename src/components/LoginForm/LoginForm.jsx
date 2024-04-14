import React from "react";
import styles from "./LoginForm.module.css";
function LoginForm({ signup, signupClickHandler, loginClickHandler }) {
  function formSubmitHandler(event) {
    event.preventDefault();
  }

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
        onClick={formSubmitHandler}
      >
        {signup ? "Get Started" : "Enter"}
      </button>
      {signup ? (
        <p onClick={loginClickHandler} className={styles.signup_link}>
          Login
        </p>
      ) : (
        <p onClick={signupClickHandler} className={styles.signup_link}>
          Create an account
        </p>
      )}
    </form>
  );
}

export default LoginForm;
