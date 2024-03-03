import React, { useState } from "react";

const UploadFile = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");
  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };

  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <div>
      <form onSubmit={handlePdfFileSubmit}>
        <input
          type="file"
          className="form-control"
          required
          onChange={handlePdfFileChange}
        />
        {pdfFileError && <div>{pdfFileError}</div>}
        <button type="submit">
          UPLOAD
        </button>
      </form>
    </div>
  );
};

export default UploadFile;
