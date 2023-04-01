import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function ViewPDF() {
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className='bg-[#57792B]'>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl="./src/assets/CV_Fabian.pdf"/>;
        </Worker>
    </div>
  );
}

export default ViewPDF

