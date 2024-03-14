import React from "react";
import styles from './Controls.module.css'
import download from "../../assets/icons/DownloadSimple.png";
import translation from "../../assets/icons/Translate.png";
import pencil from "../../assets/icons/PencilSimple.png";
import drop from "../../assets/icons/Drop.png";
import check from "../../assets/icons/Group 79.png";
import text from "../../assets/icons/TextAa.png";
import minus from "../../assets/icons/Group 80.png";
import plus from "../../assets/icons/Group 81.png";
import repeat from "../../assets/icons/ArrowCounterClockwise.png";
import copy from "../../assets/icons/CopySimple.png";
import save from "../../assets/icons/BookBookmark.png";
import chevron from "../../assets/icons/CaretDown.png";
import line from "../../assets/icons/Line 3.png";

const Controls = () => {
  return (
    <div className={styles.controlsContainer}>
      <div className={styles.frame}>
        <img src={download} alt="" className={styles.icon} />
        <p className={styles.text}>Download</p>
        <img src={chevron} alt="" className={styles.chevron} />
      </div>
      <img src={line} alt="" />
      <div className={styles.frame}>
        <img src={translation} alt="" className={styles.icontranslate} />
        <p className={styles.text}>Traslate</p>
        <img src={chevron} alt="" className={styles.chevron} />
      </div>
      <img src={line} alt="" />
      <div className={styles.frame}>
        <img src={pencil} alt="" className={styles.icontranslate} />
        <p className={styles.text}>Edit file</p>
        <img src={chevron} alt="" className={styles.chevron} />
      </div>
      <img src={line} alt="" />
      <div className={styles.frame}>
        <img src={drop} alt="" className={styles.icontranslate} />
        <p className={styles.text}>Color Inversion</p>
        <img src={check} alt="" className={styles.chevron} />
      </div>
      <img src={line} alt="" />
      <div className={styles.frame}>
        <img src={text} alt="" className={styles.icontranslate} />
        <p className={styles.text}>Font Size</p>
        <img src={minus} alt="" className={styles.chevron} />
        <img src={plus} alt="" className={styles.chevron} />
      </div>
      <img src={line} alt="" />
      <div className={styles.frame}>
        <img src={repeat} alt="" className={styles.icontranslate} />
        <p className={styles.text}>Repeat</p>
      </div>
      <img src={line} alt="" />
      <div className={styles.frame}>
        <img src={copy} alt="" className={styles.icontranslate} />
        <p className={styles.text}>Copy</p>
      </div>
      <img src={line} alt="" />
      <div className={styles.frame}>
        <img src={save} alt="" className={styles.icontranslate} />
        <p className={styles.text}>Save to library</p>
      </div>
    </div>
  );
};

export default Controls;
