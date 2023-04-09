import React from 'react';
import { Link } from 'react-router-dom';

const CardProyectos = ({grid, proy}) => {
    let btnStyle = 'appearance-none bg-green-600 border border-white rounded-lg text-white cursor-pointer inline-block font-semibold xl:py-2 xl:px-3 py-1 px-2 text-sm xl:text-md focus:outline-none focus:shadow-outline-green hover:bg-green-700 focus:bg-green-400 active:bg-green-700 disabled:bg-gray-400 disabled:text-gray-800 disabled:cursor-not-allowed'

    return (
        <section key={proy.image.id} className={`${grid} group border-b-2 border-white rounded-lg`}>
            <div className="rounded-t-[10px] h-2/6 w-full flex justify-center relative overflow-hidden">
                <div className="transition-transform duration-500 transform ease-in-out group-hover:scale-110 w-full h-full">
                    <img className='absolute inset-0 object-cover rounded-t-[10px] h-full w-full' src={proy.image.src} alt={proy.image.alt}/>
                </div>
            </div>
            <h3 className='text-3xl text-white mt-4 mb-8 font-semibold'>{proy.title.content}</h3>
            <p className='mb-8 text-white text-sm'>{proy.parrafo.content}</p>
            <div className='flex items-center justify-between m-auto mb-64'>
                {
                    proy.buttons.map(btn => {
                        if(btn.url.type === 'local'){
                            return(
                                <Link className={`${btnStyle}`} to={btn.url.href}>
                                    {btn.text.content}
                                </Link>
                            )
                        }
                        return(
                            <a href = {btn.url.href} target = {btn.url.target} className = {`${btnStyle}`}>
                                {btn.text.content}
                            </a>
                        )
                    })
                }
            </div>
        </section> 
                
    );
}

export default CardProyectos;
