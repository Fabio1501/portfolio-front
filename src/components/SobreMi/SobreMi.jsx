import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSection } from '../../redux/actions/index';
import SobreMiSection from './SobreMiSection';
import LoaderHome from '../Home/LoaderHome';
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar';

const SobreMi = () => {
    const section = useSelector(state => state.section);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSection('sobre mi'));
    }, []);

    const customSobreMi = () => {
        let sectionOneAtFour = []
        let sectionFive = section?.info?.Texts?.filter(text => text.name === 'sobremi5');
        let title = section?.info?.Texts?.filter(text => text.name === 'titulo');

        section?.info?.Texts?.filter(text => text.name.includes('sobremi')).forEach((text) => {
            section?.info?.Images?.filter(img => img.name.includes('sobremi')).forEach((image) => {
                if (image.name === text.name) {
                    const mergedObj = {
                        text : text,
                        image : image,
                    };
                    
                    sectionOneAtFour.push(mergedObj);
                }
            });
        });  
        return {
            sectionOneAtFour: sectionOneAtFour.reverse(),
            sectionFive : sectionFive[0],
            title : title[0]
        }
    }

    return (
        <div>
            {
                Object.keys(section).length > 0 ? 
                <section className="mx-auto grid grid-cols-12 bg-[#62615F]">
                    <div className="col-span-12 sm:col-span-3">
                        <NavBar/>
                    </div>
                    <div className="col-span-12 p-16 sm:col-span-9">
                        <SobreMiSection customSobreMi={customSobreMi()}/>
                    </div>
                    <div className="col-span-12 sm:col-start-4 sm:col-end-14">
                        {/* <!-- Footer content --> */}
                        <Footer/>
                    </div>
                </section>
                :
                <div className='w-full h-full flex justify-evenly items-center absolute'>
                    <LoaderHome comp = 'navBar'/>
                    <LoaderHome comp = 'presentation'/>
                </div>
                }
        </div>
    );
}

export default SobreMi;
