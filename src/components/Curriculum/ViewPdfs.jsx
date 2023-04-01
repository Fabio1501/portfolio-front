import React from 'react';
import pdfFab from '../../assets/CV_Fabian.pdf'
function ViewPdfs() {
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className='bg-[#57792B]'>
         <object
        data={pdfFab}
        type="application/pdf"
        width="100%"
        height="900px"
        className='mb-24'
        >
        </object>
    </div>
  );
}

export default ViewPdfs
