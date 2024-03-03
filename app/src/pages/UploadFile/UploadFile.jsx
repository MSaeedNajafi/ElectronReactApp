import React, { useState } from "react";
import Tesseract from "tesseract.js";

const UploadFile = () => {
  // const [pdfFile, setPdfFile] = useState(null);
  // const [viewPdf, setViewPdf] = useState(null);
  // const [pdfFileError, setPdfFileError] = useState("");
  const [image, setImage] = useState(null);
  const [imagePath, setImagePath] = useState("");
  const [text, setText] = useState("");

  // const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    setImagePath(URL.createObjectURL(e.target.files[0]));
    const file = e.target.files[0];
    setImage(file);
    // let selectedFile = e.target.files[0];
    // if (selectedFile) {
    //   if (selectedFile && fileType.includes(selectedFile.type)) {
    //     let reader = new FileReader();
    //     reader.readAsDataURL(selectedFile);
    //     reader.onloadend = (e) => {
    //       setPdfFile(e.target.result);
    //       setPdfFileError("");
    //     };
    //   } else {
    //     setPdfFile(null);
    //     setPdfFileError("Please select valid pdf file");
    //   }
    // } else {
    //   console.log("select your file");
    // }
  };

  const performOCR = async () => {
    if (!image) {
      alert("Please select an image.");
      return;
    }

    const {
      data: { text },
    } = await Tesseract.recognize(
      image,
      "eng", // Language - you can change it based on your requirements
      { logger: (m) => console.log(m) } // Optional logger
    );
    setText(text);
  };

  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    performOCR();
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
        {/* {pdfFileError && <div>{pdfFileError}</div>} */}
        <button type="submit">UPLOAD</button>
      </form>
      <div>
        <p>-----------------</p>
        <p> {text} </p>
        <p>-----------------</p>
      </div>
    </div>
  );
};

export default UploadFile;
