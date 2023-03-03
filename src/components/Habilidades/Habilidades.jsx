import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSection } from '../../redux/actions/index';
import LoaderHome from '../Home/LoaderHome';
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar';
import SectionHabilidades from './SectionHabilidades'
const Habilidades = () => {
    const section = useSelector(state => state.section);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSection());
    }, []);

    const customHabilidades = () => {
        let sectionHabilidades = section?.info?.filter(sec => sec.name === 'habilidades')

        let sectionHD = []
        let sectionHB = [];
        
        let title = sectionHabilidades[0]?.Texts?.filter(text => text.name === 'tituloHabilidades');
        let subtitleHD = sectionHabilidades[0]?.Texts?.filter(text => text.name === 'HDhabilidadesTecnicas');
        let subtitleHB = sectionHabilidades[0]?.Texts?.filter(text => text.name === 'habilidadesBlandas');
        
        sectionHabilidades[0]?.Texts?.filter(text => text.name.includes('HD')).forEach((text) => {
            sectionHabilidades[0]?.Images?.filter(img => img.name.includes('HD')).forEach((image) => {
                if (image.name === text.name) {
                    const mergedObj = {
                        text : text,
                        image : image,
                    };
                    
                    sectionHD.push(mergedObj);
                }
            });
        });  

        sectionHabilidades[0]?.Texts?.filter(text => !text.name.includes('HD')).forEach((text) => {
            sectionHabilidades[0]?.Images?.filter(img => !img.name.includes('HD')).forEach((image) => {
                if (image.name === text.name) {
                    const mergedObj = {
                        text : text,
                        image : image,
                    };
                    
                    sectionHB.push(mergedObj);
                }
            });
        });  

        return {
            sectionHD,
            sectionHB,
            title : title[0],
            subtitleHD : subtitleHD[0],
            subtitleHB : subtitleHB[0]
        }
    }

    return (
        <div>
            {
                Object.keys(section).length > 0 && section.containsError === false ? 
                <section className="mx-auto grid grid-cols-12 bg-[#62615F]">
                    <div className="col-span-12 sm:col-span-3">
                        <NavBar/>
                    </div>
                    <div className="col-span-12 p-16 sm:col-span-9">
                        <SectionHabilidades customHabilidades = {customHabilidades()}/>
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

export default Habilidades;
