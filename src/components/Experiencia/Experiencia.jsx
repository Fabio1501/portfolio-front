import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSection } from '../../redux/actions/index';
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar';
import LoaderHome from '../Home/LoaderHome';

const Experiencia = () => {
    const section = useSelector(state => state.section);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSection());
    }, []);

    const customExperiencia = () => {
        let sectionExperiencia = section?.info?.filter(sec => sec.name === 'experiencia')
          
        return {
        
        }
    }

    return (
        <div>
            {
                Object.keys(section).length > 0 ? 
                <section className="mx-auto grid grid-cols-12 bg-[#57792B]">
                    <div className="col-span-12 sm:col-span-3">
                        <NavBar/>
                    </div>
                    <div className="col-span-12 p-16 sm:col-span-9">
                        <Footer/>
                    </div>
                </section>
                :
                <section className="mx-auto grid grid-cols-12 bg-[#62615F]">
                    <div className="col-span-12 sm:col-span-3">
                        <LoaderHome comp = 'navBar'/>
                    </div>
                    <div className="col-span-12 p-16 sm:col-span-9">
                        
                    </div>
                    <div className="col-span-12 sm:col-start-4 sm:col-end-14">
                        {/* <!-- Footer content --> */}
                        <Footer/>
                    </div>
                </section>
                }
        </div>
    );
}

export default Experiencia;
