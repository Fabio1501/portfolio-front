import React from 'react';
import pdfFab from '../../assets/CV_Fabian.pdf'
function ViewPdfs() {
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className='bg-[#57792B] mt-16'>
         <object
        data={pdfFab}
        type="application/pdf"
        className='xl:mb-24 mb-6 w-full h-[400px] xl:h-[800px]'
        >
        </object>
    </div>
  );
}

export default ViewPdfs
