import React from "react";
import styles from './UploadHere.module.css'

const UploadHere = ({ handlePdfFileChange }) => {
  return (
    <div className={styles.uploadContent}>
      <p className={styles.headerTitle}>Upload your file here</p>
      <p className={styles.text}>
        OCR a file or find out what an image is? Add your pdf or image below and
        have it described for you.
      </p>
      <input
        type="file"
        id="files"
        className={styles.input}
        required
        onChange={handlePdfFileChange}
      />
      <label htmlFor="files" className={styles.uploadBtn}>
        <span className={styles.uploadBtnText}>Select file</span>
      </label>
      <p className={styles.or}>or</p>
      <p className={styles.explore}>Explore Camera Features</p>
    </div>
  );
};

export default UploadHere;
