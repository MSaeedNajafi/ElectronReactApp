import React from 'react'
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <p className={styles.loading}>Loading....</p>
    </div>
  );
}

export default Loading
