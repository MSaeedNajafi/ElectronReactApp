
import * as pdfjsLib from "pdfjs-dist";
import * as pdfjsWorker from "pdfjs-dist/build/pdf.worker.mjs";

export default async function pdfToImg(pdfFile) {
  const reader = new FileReader();
  reader.readAsArrayBuffer(pdfFile);
  const data = await new Promise((resolve) => {
    reader.onload = () => {
      resolve(reader.result);
    };
  });
  const pdfData = new Uint8Array(data);

  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  const pdf = await pdfjsLib.getDocument(pdfData).promise;

  const numPages = pdf.numPages;

  const pages = [];

  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 5 });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };
    await page.render(renderContext).promise;
    pages.push(canvas.toDataURL());
  }

  return pages;
}
