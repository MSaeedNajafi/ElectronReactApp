import React from "react";
import styles from "./Setting.module.css";
import Signout from "../../assets/icons/SignOut.png";

const Setting = () => {
  const LabelValue = ({label, value}) => {
    return (
      <div className={styles.labelabelValueContainer}>
        <p className={styles.label}>{label}</p>
        <p className={styles.value}>
          {label === "Password" ? "*".repeat(value.length) : value}
        </p>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <LabelValue label={"Name"} value={"Tejasvi Arora"} />
        <LabelValue label={"Email"} value={"tejasvi@letsenvision.com"} />
        <LabelValue label={"Password"} value={"randompassword"} />
      </div>

      <button className={styles.btn}>
        <span>
          <img src={Signout} alt="" className={styles.icon} />
        </span>
        <p className={styles.btnText}>Log out</p>
      </button>
    </div>
  );
};

export default Setting;
