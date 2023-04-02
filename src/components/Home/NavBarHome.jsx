import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const NavBarHome = ({infoNav}) => {

    return (
        <div className='w-1/4 bg-zinc-700/60 p-8 mr-32 rounded-lg shadow-[0_20px_25px_-14px_rgba(0,0,0,0.5)]'>
            <div className='m-auto w-36'>
                {
                    <Link to={infoNav.logo.url.href}>
                        <img src={infoNav.logo.image.src}/>
                    </Link>
                }
            </div>
            <nav className='mb-10 mt-10'>
                {infoNav.secciones.map(seccion => {
                    return (
                        <Link className='flex items-center justify-start mb-6' to={seccion.url.href}>
                            <img className='w-7 mr-6' src={seccion.image.src}/>
                            <p className='under'>
                                {seccion.text.name}
                                
                            </p>
                        </Link>
                    )
                })}   
            </nav>
            <div className='flex items-center justify-evenly'>
                {
                    infoNav.redes.map(red => {
                        return(
                            <a className='w-9 hover:scale-125' href={red.url.href} target = {red.url.target}>
                                <img className='w-9' src={red.image.src} alt = {red.image.alt}/>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default NavBarHome
