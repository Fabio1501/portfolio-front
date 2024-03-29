import React from 'react';
import CardProyectos from './CardProyectos';

const SectionProyectos = ({customProyectos}) => {
    const cardA = 'row-span-1 col-span-6 col-start-4 col-end-10'
    const cardB = 'row-span-1 col-span-6'

    return (
        <article className='w-full flex-col items-center justify-center mt-20'>
            <div className='hidden xl:block'>
                <h2 className='mb-24 text-4xl font-semibold text-center text-white'>{customProyectos.title.content}</h2>
                {
                    Object.keys(customProyectos).length > 0 ?
                    
                        <main className='hidden xl:grid grid-rows-2 grid-cols-12 h-full w-full gap-x-16 gap-y-16 mb-16'>
                            {
                                customProyectos.proyectos.map((proy, index) => {
                                    return index === 2 ? 
                                    <CardProyectos proy = {proy} grid = {cardA}/> :
                                    <CardProyectos proy = {proy} grid = {cardB}/>
                                })
                            }
                        </main>
                        
                    :
                    <div>Loading</div>
                }
            </div>
            <div className='xl:hidden'>
                <h2 className='mb-12 text-2xl xl:text-4xl font-semibold text-center text-white'>{customProyectos.title.content}</h2>
                {
                    Object.keys(customProyectos).length > 0 ?
                    
                        <main className='flex flex-wrap gap-y-8'>
                            {
                                customProyectos.proyectos.map((proy, index) => {
                                    return index === 2 ? 
                                    <CardProyectos proy = {proy} grid = {cardA}/> :
                                    <CardProyectos proy = {proy} grid = {cardB}/>
                                })
                            }
                        </main>
                        
                    :
                    <div>Loading</div>
                }
            </div>
        </article>
    );
}

export default SectionProyectos;

