import React, { useState, useEffect } from 'react';

const Presentation = ({infoPresentation}) => {

    return (
        <main className='w-full xl:w-1/4 bg-transparent xl:bg-zinc-700/60 px-8 mb-16 mt-8 xl:p-8 xl:mt-16 xl:mb-16 xl:rounded-lg xl:shadow-[0_20px_25px_-14px_rgba(0,0,0,0.5)]'>
            {
                <img className='h-64 mb-12' src={infoPresentation.image.src} alt = {infoPresentation.image.alt}/>
            }
            <p className='text-white text-sm'>{infoPresentation.text.content}</p>
        </main>
    );
}

export default Presentation;
