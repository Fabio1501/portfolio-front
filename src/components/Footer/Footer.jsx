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
                <div class="w-full mx-auto">
                    <footer class="p-4 md:px-6 md:py-8">
                        <div class="flex items-center justify-evenly">
                            <Link href={staticComponents.footer.logo.url.href} class="flex items-center mb-4 sm:mb-0 hover:cursor-pointer">
                                <img src={staticComponents.footer.logo.image.src} className="mr-8 h-10" alt={staticComponents.footer.logo.image.alt} />
                                <div className='flex flex-col justify-center'>
                                    <span className=" text-l font-semibold whitespace-nowrap dark:text-white">{staticComponents.footer.textLogo.nombre.content}</span>
                                    <span className="text-l font-normal whitespace-nowrap dark:text-white">{staticComponents.footer.textLogo.derechos.content}</span>
                                </div>
                            </Link>
                            <ul class="flex flex-wrap items-center ml-24 mb-6 sm:mb-0">
                                {
                                    staticComponents.footer.sections.map((section, index) => {
                                        if (index % 2 !== 0) {
                                            return(
                                                <li>
                                                <a href="#" className="pl-6 pr-6 text-l text-white hover:underline md:pr-6 md:pl-6 border-x-2">{section.text.content}</a>
                                            </li>
                                            )
                                        }

                                        return(
                                        <li>
                                        <a href="#" className="ml-6 text-l text-white hover:underline md:mr-6">{section.text.content}</a>
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
