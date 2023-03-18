import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSection } from '../../redux/actions/index';
import LoaderHome from '../Home/LoaderHome';
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar';
import SectionProyectos from './SectionProyectos';


const Proyectos = () => {
    const section = useSelector(state => state.section);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSection());
    }, []);

    const customProyectos = () => {
        let sectionProyectos = section?.info?.filter(sec => sec.name === 'proyectos')
        let proyectos = [];

        let title = sectionProyectos[0]?.Texts?.filter(text => text.name === 'tituloProyectos');
        
        const urls = sectionProyectos[0]?.Urls;
        const texts = sectionProyectos[0]?.Texts?.filter(text => text.type === 'link');
        let buttons = [];

        const images = sectionProyectos[0]?.Images;
        const parrafos = sectionProyectos[0]?.Texts?.filter(text => text.type === 'parrafo');
        const titles = sectionProyectos[0]?.Texts?.filter(text => text.type === 'title' && text.name !== 'tituloProyectos');
        

        urls.forEach((url) => {
            texts.forEach((text) => {
                
                  if (text.name === url.name) {
                    const mergedObj = {
                        text : text,
                        url : url
                    };
                    
                    buttons.push(mergedObj);
                  }
            });
        });    
        
        let btnsPI = buttons.filter(btn => {
            return btn.text.name.includes('foodApp')
        })
        let btnsPF = buttons.filter(btn => {
            return btn.text.name.includes('mercadoSolidario')
        })
        let btnsPort = buttons.filter(btn => {
            return btn.text.name.includes('portfolio')
        })

        images.forEach((image) => {
            parrafos.forEach((parrafo) => {
                if (image.name.includes('foodApp') && parrafo.name.includes('foodApp')) {
                titles.forEach((title) => {
                    if (title.name.includes('foodApp')) {
                        const mergedObj = {
                            image : image,
                            parrafo : parrafo,
                            title : title,
                            buttons: btnsPI
                        };
                        console.log(mergedObj);
                        proyectos.push(mergedObj);
                    }
                    });
                }
            });
        });      

        images.forEach((image) => {
            parrafos.forEach((parrafo) => {
                if (image.name.includes('mercadoSolidario') && parrafo.name.includes('mercadoSolidario')) {
                titles.forEach((title) => {
                    if (title.name.includes('mercadoSolidario')) {
                        const mergedObj = {
                            image : image,
                            parrafo : parrafo,
                            title : title,
                            buttons: btnsPF.reverse()
                        };
                        
                        proyectos.push(mergedObj);
                    }
                    });
                }
            });
        });   

        images.forEach((image) => {
            parrafos.forEach((parrafo) => {
                if (image.name.includes('portfolio') && parrafo.name.includes('portfolio')) {
                titles.forEach((title) => {
                    if (title.name.includes('portfolio')) {
                        const mergedObj = {
                            image : image,
                            parrafo : parrafo,
                            title : title,
                            buttons: btnsPort
                        };
                        
                        proyectos.push(mergedObj);
                    }
                    });
                }
            });
        });   
        
        return {
            title : title[0],
            proyectos: proyectos
        }
    }

    return (
        <div>
            {
                Object.keys(section).length > 0 && section.containsError === false ? 
                <section className="mx-auto grid grid-cols-12 bg-[#57792B]">
                    <div className="col-span-12 sm:col-span-3">
                        <NavBar/>
                    </div>
                    <div className="col-span-12 p-16 sm:col-span-9">
                        <SectionProyectos customProyectos={ customProyectos() }/>
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

export default Proyectos;

