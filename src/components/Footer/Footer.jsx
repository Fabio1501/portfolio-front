import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStaticComponents } from '../../redux/actions/index';
import LoaderFooter from './LoaderFooter';

const Footer = () => {
    const staticComponents = useSelector(state => state.staticComponents);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getStaticComponents());
    }, []);

    return (
        <div className= 'w-full flex items-center justify-center'>
            {
                Object.keys(staticComponents).length > 0 ?
                <div className="w-full mx-auto">
                    <footer className="xl:px-6">
                        <div className="flex xl:flex-row mt-12 xl:mt-0 flex-col items-center justify-evenly">
                            <Link href={staticComponents.footer.logo.url.href} className="hidden xl:flex items-center mb-4 sm:mb-0 hover:cursor-pointer">
                                <img src={staticComponents.footer.logo.image.src} className="xl:mr-8 xl:h-10 h-8" alt={staticComponents.footer.logo.image.alt} />
                            </Link>
                            <div className='flex flex-col justify-center items-center xl:items-start mb-2'>
                                <span className=" text-l font-semibold whitespace-nowrap dark:text-white">{staticComponents.footer.textLogo.nombre.content}</span>
                                <span className="text-l font-normal whitespace-nowrap dark:text-white">{staticComponents.footer.textLogo.derechos.content}</span>
                            </div>
                            <hr className='border-1 w-full pt-2 pb-2 xl:hidden'/>
                            <ul className="flex xl:flex-row w-full xl:w-fit flex-wrap items-center justify-center xl:ml-16 xl:mb-6 sm:mb-0 text-sm xl:text-lg gap-x-1">
                                <Link href={staticComponents.footer.logo.url.href} className="flex xl:hidden items-center mb-4 sm:mb-0 hover:cursor-pointer self-start">
                                    <img src={staticComponents.footer.logo.image.src} className="xl:mr-8 xl:h-10 h-7 mr-2" alt={staticComponents.footer.logo.image.alt} />
                                </Link>
                                {
                                    staticComponents.footer.sections.map((section, index) => {
                                        if (index % 2 !== 0) {
                                            return(
                                                <li>
                                                    <a href={section.url.href} className="xl:pl-4 xl:pr-4 text-l text-white hover:underline md:pr-6 md:pl-6 xl:border-x-2">{section.text.content}</a>
                                                </li>
                                            )
                                        }
                                        return(
                                        <li>
                                            <a href={section.url.href} className="xl:ml-4 text-l text-white hover:underline md:mr-6">{section.text.content}</a>
                                        </li>
                                    )})
                                }
                            </ul>
                        </div>
                    </footer>
                </div> :                
                <LoaderFooter/>
            }
        </div>
    );
}

export default Footer;
