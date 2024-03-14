import React, { useState } from "react";
import Tesseract from "tesseract.js";
import styles from "./Webtool.module.css";
import FileIcon from "../../assets/icons/FileText.png";
import Chevron from "../../assets/icons/chevron.png";
import Pause from "../../assets/icons/Pause.png";
import pdfToImg from "../../helper/convertPdfToImages ";
import Controls from "../../components/Controls/Controls";
import UploadHere from "../../components/UploadHere/UploadHere";
import PageInterActions from "../../components/PageInterActions/PageInterActions";
import Loading from "../../components/Loading/Loading";

const UploadFile = () => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [texts, setTexts] = useState([]);

  const handlePdfFileChange = async (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "application/pdf"
    ) {
      if (file.type === "application/pdf") {
        performPdfOCR(file);
      } else {
        performImageOCR(file);
      }
    } else {
      alert("File type not accepted!");
    }
  };

  const performPdfOCR = async (file) => {
    const pages = await pdfToImg(file);
    setNumberOfPages(pages.length);
    setPageNumber(1);
    setLoading(true);
    for (let i = 0; i < pages.length; i++) {
      const img = pages[i];
      await setImage(img);
      const text = await performOCR(img);
      texts[i] = text;
    }
    setLoading(false);
  };

  const performImageOCR = async (img) => {
    setNumberOfPages(1);
    setPageNumber(1);
    setImage(img);
    setLoading(true);
    const text = await performOCR(img);
    setLoading(false);
    texts[0] = text;
  };

  const performOCR = async (img) => {
    const {
      data: { text },
    } = await Tesseract.recognize(img, "eng");
    return text;
  };

  const ShowControls = () => {
    return (
      <div className={styles.showControls}>
        <Controls />
        <PageInterActions
          pageNumber={pageNumber}
          setPageNumbe={setPageNumber}
          numberOfPages={numberOfPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    );
  };

  const nextPage = () => {
    if (pageNumber < numberOfPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div className={styles.textContainer}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {texts.length > 0 ? (
            <div>
              <div className={styles.textContent}>
                <div className={styles.pdfNameContainer}>
                  <img src={FileIcon} alt="" className={styles.icon} />
                  <p className={styles.iconName}>{fileName}</p>
                </div>
                <div
                  className={styles.pdfNameContainer}
                  onClick={() => setShow(!show)}
                >
                  <p className={styles.iconName}>Show controls</p>
                  <img src={Chevron} alt="" className={styles.chevron} />
                </div>
                {show && <ShowControls />}
                <div className={styles.pauseBtn}>
                  <p className={styles.pauseText}>Pause</p>
                  <img src={Pause} alt="" className={styles.pause} />
                </div>
              </div>
              <div className={styles.imageTextCotainer}>
                <p className={styles.imageText}> {texts[pageNumber - 1]} </p>
              </div>
            </div>
          ) : (
            <UploadHere handlePdfFileChange={handlePdfFileChange} />
          )}
        </>
      )}
    </div>
  );
};

export default UploadFile;
