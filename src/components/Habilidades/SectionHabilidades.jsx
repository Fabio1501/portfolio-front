import React from 'react';

const SectionHabilidades = ({customHabilidades}) => {

    return (
        <article className='w-full flex-col items-center justify-center mb-6 mt-16'>
            {
                 Object.keys(customHabilidades).length > 0 ?
                <div>
                    <h2 className='mb-12 xl:mb-24 text-4xl font-semibold text-center text-white'>{customHabilidades.title.content}</h2>
                    <main className='w-full flex-col'>
                        <h3 className='mb-16 text-2xl underline font-semibold text-center text-white'>{customHabilidades.subtitleHD.content}</h3>
                        <section className='flex w-full flex-wrap gap-y-6 xl:grid xl:grid-cols-6 xl:grid-rows-2 xl:gap-x-12 xl:gap-y-12 xl:mb-24'>
                            {
                                customHabilidades.sectionHD.map(hd => {
                                    return(
                                        <div key={`${hd.image.id}${hd.text.id}`} className='w-1/2 xl:w-full flex flex-col items-center '>
                                            <img className='w-1/4 xl:w-3/4 xl:m-6' key={hd.image.id} alt = {hd.image.alt} src={hd.image.src}/>
                                            <p className='text-center text-lg text-white font-medium' key={hd.text.id}>{hd.text.content}</p>
                                        </div>
                                    )
                                })
                            }
                            </section>
                            <h3 className='mt-16 mb-16 text-2xl underline font-semibold text-center text-white'>{customHabilidades.subtitleHB.content}</h3>
                            <section className='flex w-full flex-wrap gap-y-6 xl:grid xl:grid-cols-6 xl:grid-rows-2 xl:gap-x-12 '>
                            {
                                customHabilidades.sectionHB.map(hd => {
                                    return(
                                        <div key={`${hd.image.id}${hd.text.id}`} className='w-1/2 xl:w-full flex flex-col items-center'>
                                            <img className='w-1/4 xl:w-3/4 xl:m-6' key={hd.image.id} alt = {hd.image.alt} src={hd.image.src}/>
                                            <p className='text-center text-lg text-white font-medium' key={hd.text.id}>{hd.text.content}</p>
                                        </div>
                                    )
                                })
                            }
                        </section>
                    </main>
                </div> :
                <div>Loading</div>
            }
        </article>
    );
}

export default SectionHabilidades;
