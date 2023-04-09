import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import LoaderHome from '../Home/LoaderHome';
import NavBar from '../Navbar/NavBar';
import { getSection } from '../../redux/actions/index';
import ViewPdfs from './ViewPdfs';
import NavFixed from './NavFixed';
import NavBarMobile from '../Navbar/NavBarMobile';
import ShareImage from '../../assets/share.png'
import Alert from "../Alertas/Alert";

const Curriculum = () => {
    const section = useSelector(state => state.section);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getSection());
    }, []);

    const shareSocialRed = () => {
        const pdfUrl = 'https://docdro.id/WuTz4pZ';

        if (navigator.share) {
            navigator.share({
            title: 'Compartir PDF',
            text: 'Mira este archivo PDF',
            url: pdfUrl
            })
            .then(() => setTimeout(() => {Alert({
                title: "Muchas gracias por compartir!",
                text: "No lo olvides, eres una persona maravillosa! :)",
                icon: "success",
            })}, 7000))
            .catch(error =>
                setTimeout(() => {
                    Alert({
                        title: "Lo siento :(",
                        text: `${error}`,
                        icon: "error",
                    })      
                }, 7000)
            );
        } else {
            Alert({
                title: "Lo siento :(!",
                text: `Esta función no está disponible en tu navegador! :(`,
                icon: "error",
            })
        }
    }

    return (
        <div>
            
            {
                // section.containsError === true ? 
                <section className="mx-auto grid grid-cols-12 bg-[#57792B]">
                    <div className="col-span-12 sm:col-span-3">
                        <NavBar/>
                        <NavBarMobile/>
                    </div>
                    <div className="col-span-12 p-3 xl:p-8 xl:pr-40 sm:col-span-9">
                        {/* visualizador de PDF */}
                        {/* <ViewPDF/> */}
                        <ViewPdfs/>
                        <NavFixed/>
                        <button type="button" className=" flex ml-10 w-3/4 justify-center items-center gap-x-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 xl:hidden"
                        onClick={shareSocialRed}
                        >
                            <img className='h-4' src={ShareImage}/>
                            <span className='text-lg'>Compartir</span>
                        </button>
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
