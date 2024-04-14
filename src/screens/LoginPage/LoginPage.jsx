import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import backgroundImage from "../../assets/nf_bg.jpg";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [signup, setSignup] = useState(false);

  function handleSignupClick() {
    setSignup(true);
  }

  function handleLoginClick() {
    setSignup(false);
  }

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url("${backgroundImage}")`,
      }}
    >
      <LoginForm
        signup={signup}
        signupClickHandler={handleSignupClick}
        loginClickHandler={handleLoginClick}
      />
    </div>
  );
}

export default LoginPage;
