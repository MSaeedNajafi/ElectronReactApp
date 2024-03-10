import React, { useState } from "react";
import Tesseract from "tesseract.js";

const UploadFile = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const handlePdfFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
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
      "eng",
      { logger: (m) => console.log(m) } 
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
