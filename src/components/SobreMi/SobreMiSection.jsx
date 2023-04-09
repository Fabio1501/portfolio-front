import React from 'react';

const SobreMiSection = ({customSobreMi}) => {

    return (
        <article className=' xl:w-full xl:flex xl:flex-col xl:items-center xl:justify-center xl:mb-24 mt-12'>
            <h2 className='mb-12 xl:mb-24 text-2xl xl:text-4xl font-semibold text-center text-white'>{customSobreMi.title.content}</h2>
            <main className='hidden w-full xl:flex flex-col'>
                {
                    customSobreMi.sectionOneAtFour.map((section, index) => {
                        if (index % 2 === 0) {
                            return(
                                <div className='w-full hidden xl:flex mb-12 items-center justify-center'>
                                    <p className='text-sm text-white'>{section.text.content}</p>
                                    <img className='w-2/4 h-full' src={section.image.src}/>
                                </div>
                            )
                        }
                        return(
                            <div className='w-full hidden xl:flex mb-12 items-center justify-center'>
                                <img className='w-2/4 h-full' src={section.image.src}/>
                                <p className='text-sm text-white'>{section.text.content}</p>
                            </div>
                        )
                    })
                }
            </main>
            <main className='w-full flex xl:hidden flex-col'>
                {
                    customSobreMi.sectionOneAtFour.map((section, index) => {
                        return(
                            <div className='w-full xl:hidden flex flex-col mb-12 items-center justify-center'>
                                <p className='text-sm text-white'>{section.text.content}</p>
                                <img className='w-full h-full' src={section.image.src}/>
                            </div>
                        )   
                    })
                }
            </main>
            <p className='block text-sm text-white'>{customSobreMi.sectionFive.content}</p>
        </article>
    );
}

export default SobreMiSection;
