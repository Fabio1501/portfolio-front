import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getStaticComponents } from '../../redux/actions/index';
import LoaderHome from '../Home/LoaderHome';

const NavBarMobile = () => {
    const staticComponents = useSelector(state => state.staticComponents);
    const dispatch = useDispatch();
    const [viewMenu, setViewMenu] = useState(false)

    useEffect(()=>{
        dispatch(getStaticComponents());
    }, []);

    return(         
        <div className='xl:hidden w-full fixed inset-0 z-20'>
            {
                Object.keys(staticComponents).length > 0 ? 
                <nav className="border-gray-200 xl:hidden z-20">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link to={staticComponents.navBar.logoNavBar.url.href} className='flex items-center'>
                            <img className='h-9 mr-3' src={staticComponents.navBar.logoNavBar.image.src}/>
                        </Link>
                        <button 
                        type="button" 
                        onClick={() => setViewMenu(!viewMenu)}
                        className="inline-flex items-center p-2 ml-3 text-sm bg-slate-50 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`${viewMenu ? 'block' : 'hidden'} fixed xl:block xl:w-auto w-full px-6 right-0`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 xl:p-0 mt-4 bg-slate-500 rounded-lg xl:flex-row xl:space-x-8 xl:mt-0 xl:border-0 xl:bg-white">
                            {staticComponents.navBar.sectionsNavBar.map(seccion => {
                                return (
                                    <li>
                                        <Link className='block py-2 pl-3 pr-4 m-2 text-white bg-[#3BFE0B]/60 focus:bg-[#3BFE0B]/80 rounded xl:bg-transparent xl:text-blue-700 xl:p-0 dark:text-white xl:dark:text-blue-500' to={seccion.url.href}>
                                            {seccion.text.name}
                                        </Link>
                                    </li>
                                )
                            })} 
                        </ul>
                    </div>
                </nav>:
                <LoaderHome comp = 'navBar'/>
            }
        </div>
    )
}

export default NavBarMobile
