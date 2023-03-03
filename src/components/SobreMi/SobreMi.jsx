import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSection } from '../../redux/actions/index';
import SobreMiSection from './SobreMiSection';
import LoaderSobreMi from './LoaderSobreMi';
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar';
import LoaderHome from '../Home/LoaderHome';

const SobreMi = () => {
    const section = useSelector(state => state.section);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSection());
    }, []);

    const customSobreMi = () => {
        let sectionSobreMi = section?.info?.filter(sec => sec.name === 'sobre mi')
        let sectionOneAtFour = []
        let sectionFive = sectionSobreMi[0]?.Texts?.filter(text => text.name === 'sobremi5');
        let title = sectionSobreMi[0]?.Texts?.filter(text => text.name === 'tituloSobreMi');

        sectionSobreMi[0]?.Texts?.filter(text => text.name.includes('sobremi')).forEach((text) => {
            sectionSobreMi[0]?.Images?.filter(img => img.name.includes('sobremi')).forEach((image) => {
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
            sectionOneAtFour: sectionOneAtFour.sort((a, b) => a.text.name.localeCompare(b.text.name)),
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
                        <Footer/>
                    </div>
                </section>
                :
                <section className="mx-auto grid grid-cols-12 bg-[#62615F]">
                    <div className="col-span-12 sm:col-span-3">
                        <LoaderHome comp = 'navBar'/>
                    </div>
                    <div className="col-span-12 p-16 sm:col-span-9">
                        <LoaderSobreMi />
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

export default SobreMi;
