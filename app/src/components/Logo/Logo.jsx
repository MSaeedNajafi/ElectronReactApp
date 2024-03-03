import React from "react";
import logo from "../../assets/logo/Envision.png";
import icon from "../../assets/logo/Icon.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.container}>
      <img src={icon} className={styles.icon} alt="icon" />
      <img src={logo} className={styles.logo} alt="logo" />
    </div>
  );
};

export default Logo;
