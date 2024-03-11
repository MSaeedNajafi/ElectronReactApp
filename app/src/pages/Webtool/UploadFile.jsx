import React, { useState, useEffect } from "react";
import Tesseract from "tesseract.js";
import styles from "./Webtool.module.css";
import FileIcon from "../../assets/icons/FileText.png";
import Chevron from "../../assets/icons/chevron.png";
import Pause from "../../assets/icons/Pause.png";

const UploadFile = () => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (image !== null) {
      performOCR();
    }
  }, [image]);

  const handlePdfFileChange = (e) => {
    
    const file = e.target.files[0];

    if (file.type === "application/pdf") {
      console.log('you uploaded a pdf')
    }
    else {
      setImage(file);
    }

  };

  const performOCR = async () => {
    console.log("image ", image);

    if (!image) {
      alert("Please select an image.");
      return;
    }

    const {
      data: { text },
    } = await Tesseract.recognize(image, "eng", {
      logger: (m) => console.log(m),
    });
    setText(text);
  };

  return (
    <div className={styles.textContainer}>
      {text ? (
        <div>
          <div className={styles.textContent}>
            <div className={styles.pdfNameContainer}>
              <img src={FileIcon} alt="" className={styles.icon} />
              <p className={styles.iconName}>{image.name}</p>
            </div>
            <div
              className={styles.pdfNameContainer}
              onClick={() => setShow(!show)}
            >
              <p className={styles.iconName}>Show controls</p>
              <img src={Chevron} alt="" className={styles.chevron} />
            </div>
            {show && <div>Show controls</div>}
            <div className={styles.pauseBtn}>
              <p className={styles.pauseText}>Pause</p>
              <img src={Pause} alt="" className={styles.pause} />
            </div>
          </div>
          <div className={styles.imageTextCotainer}>
            <p className={styles.imageText}> {text} </p>
          </div>
        </div>
      ) : (
        <div className={styles.uploadContent}>
          <p className={styles.headerTitle}>Upload your file here</p>
          <p className={styles.text}>
            OCR a file or find out what an image is? Add your pdf or image below
            and have it described for you.
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
      )}
    </div>
  );
};

export default UploadFile;
