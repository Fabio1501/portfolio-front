import React, { useState, useEffect } from 'react';

const Presentation = ({infoPresentation}) => {

    return (
        <main className='w-80 bg-zinc-700/60 p-8 mt-16 mb-16 rounded-lg shadow-[0_20px_25px_-14px_rgba(0,0,0,0.5)]'>
            {
                <img className='h-64 mb-12' src={infoPresentation.image.src} alt = {infoPresentation.image.alt}/>
            }
            <p className='text-white text-sm'>{infoPresentation.text.content}</p>
        </main>
    );
}

export default Presentation;
