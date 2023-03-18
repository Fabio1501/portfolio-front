import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStaticComponents } from '../../redux/actions/index';
import LoaderHome from '../Home/LoaderHome';

const NavBar = () => {
    const staticComponents = useSelector(state => state.staticComponents);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getStaticComponents());
    }, []);

    return (
        <div className='h-screen sticky flex flex-col items-center justify-center top-0 left-0 bg-[#2f4f4f] p-8'>
            {
            Object.keys(staticComponents).length > 0 ? 
            <div className='self-center w-full'>
                <div className='m-auto w-36'>
                    {
                        <Link to={staticComponents.navBar.logoNavBar.url.href}>
                            <img src={staticComponents.navBar.logoNavBar.image.src}/>
                        </Link>
                    }
                </div>
                <nav className='mb-20 mt-20'>
                    {staticComponents.navBar.sectionsNavBar.map(seccion => {
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
                        staticComponents.navBar.redesNavBar.map(red => {
                            return(
                                <a className='w-9 hover:scale-125' href={red.url.href} target = {red.url.target}>
                                    <img className='w-9' src={red.image.src} alt = {red.image.alt}/>
                                </a>
                            )
                        })
                    }
                </div> 
            </div>:
                <LoaderHome comp = 'navBar'/>
            }
        </div>
    );
}

export default NavBar;
