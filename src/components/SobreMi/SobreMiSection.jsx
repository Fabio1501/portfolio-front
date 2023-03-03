import React from 'react';

const SobreMiSection = ({customSobreMi}) => {

    return (
        <article className='w-full flex-col items-center justify-center mb-24'>
            <h2 className='mb-24 text-4xl font-semibold text-center text-white'>{customSobreMi.title.content}</h2>
            <main className='w-full flex-col'>
                {
                    customSobreMi.sectionOneAtFour.map((section, index) => {
                        if (index % 2 === 0) {
                            return(
                                <div className='w-full flex mb-12 items-center justify-center'>
                                    <p className='text-sm text-white'>{section.text.content}</p>
                                    <img className='w-2/4 h-full' src={section.image.src}/>
                                </div>
                            )
                        }
                        return(
                            <div className='w-full flex mb-12 items-center justify-center'>
                                <img className='w-2/4 h-full' src={section.image.src}/>
                                <p className='text-sm text-white'>{section.text.content}</p>
                            </div>
                        )
                    })
                }
            </main>
            <p className='text-sm text-white'>{customSobreMi.sectionFive.content}</p>
        </article>
    );
}

export default SobreMiSection;
