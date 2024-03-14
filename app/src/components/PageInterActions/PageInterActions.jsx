import Vector from "../../assets/icons/Vector.png";
import styles from "./PageInterActions.module.css";

const PageInterActions = ({
  pageNumber,
  setPageNumber,
  numberOfPages,
  prevPage,
  nextPage,
}) => {
  return (
    <div className={styles.controlsContainer}>
      <p className={styles.controlText}>Page</p>
      <input
        type="text"
        id="currentPage"
        name="currentPage"
        className={styles.currentPageStyle}
        value={pageNumber}
        onChange={(e) => setPageNumber(e.target.value)}        
      />
      <p className={styles.controlText}>of {numberOfPages}</p>
      <div className={styles.controlBtnContainer}>
        <button className={styles.controlBtn} onClick={prevPage}>
          <img src={Vector} alt="" className={styles.vector} />
          <p className={styles.controlBtnText}>Previous page</p>
        </button>
        <button className={styles.controlBtn} onClick={nextPage}>
          <p className={styles.controlBtnText}>Next page</p>
          <img src={Vector} alt="" className={styles.vectorRight} />
        </button>
      </div>
    </div>
  );
};

export default PageInterActions;
