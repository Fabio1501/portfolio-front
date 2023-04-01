import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import LoaderHome from '../Home/LoaderHome';
import NavBar from '../Navbar/NavBar';
import { getSection } from '../../redux/actions/index';
import ViewPDF from './ViewPDF';
import ViewPdfs from './ViewPdfs';
import NavFixed from './NavFixed';

const Curriculum = () => {
    const section = useSelector(state => state.section);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getSection());
    }, []);

    return (
        <div>
            {
                // section.containsError === true ? 
                <section className="mx-auto grid grid-cols-12 bg-[#57792B]">
                    <div className="col-span-12 sm:col-span-3">
                        <NavBar/>
                    </div>
                    <div className="col-span-12 p-8 pr-40 sm:col-span-9">
                        {/* visualizador de PDF */}
                        {/* <ViewPDF/> */}
                        <ViewPdfs/>
                        <NavFixed/>
                        <Footer/>
                    </div>
                </section>
                // :
                // <div className='w-full h-full flex justify-evenly items-center absolute'>
                //     <LoaderHome comp = 'navBar'/>
                //     <LoaderHome comp = 'presentation'/>
                // </div>
            }
        </div>
    );
}

export default Curriculum;
