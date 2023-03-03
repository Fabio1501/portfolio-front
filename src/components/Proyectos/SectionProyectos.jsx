import React from 'react';
import { Link } from 'react-router-dom';
import CardProyectos from './CardProyectos';

const SectionProyectos = ({customProyectos}) => {

    return (
        <article className='w-full flex-col items-center justify-center mb-24'>
            {
                 Object.keys(customProyectos).length > 0 ?
                <div>
                    <h2 className='mb-24 text-4xl font-semibold text-center text-white'>{customProyectos.title.content}</h2>
                    <main className='flex flex-col'>
                        {
                            customProyectos.proyectos.map((proy, index) => {
                                return index === 2 ? 
                                <CardProyectos proy = {proy} grid = {true}/> :
                                <CardProyectos proy = {proy} grid = {false}/>
                            })
                        }
                    </main>
                </div> :
                <div>Loading</div>
            }
        </article>
    );
}

export default SectionProyectos;

