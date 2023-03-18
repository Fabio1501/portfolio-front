import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/NavBar';
import LoaderHome from '../Home/LoaderHome';
import { useDispatch, useSelector } from 'react-redux';
import { getSection } from '../../redux/actions/index';
import ContactoSection from './ContactoSection';

const Contacto = () => {

    const section = useSelector(state => state.section);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSection());
    }, []);

    const customContacto = () => {
        let sectionContacto = section?.info?.filter(sec => sec.name === 'contacto')
        let title = sectionContacto[0]?.Texts?.filter(text => text.name === 'tituloContacto');
        
        let urlsProf = sectionContacto[0]?.Urls?.filter(url => url.name === 'LinkedIn' || url.name === 'GitHub' || url.name === 'CalendLy');
        let urlsPers = sectionContacto[0]?.Urls?.filter(url => url.name !== 'LinkedIn' && url.name !== 'GitHub' && url.name !== 'CalendLy');
        let imagesProf = sectionContacto[0]?.Images?.filter(url => url.name === 'LinkedIn' || url.name === 'GitHub' || url.name === 'CalendLy');
        let imagesPers = sectionContacto[0]?.Images?.filter(url => url.name !== 'LinkedIn' && url.name !== 'GitHub' && url.name !== 'CalendLy');
        let subtitleProf = sectionContacto[0]?.Texts?.filter(text => text.name === 'redesProfesionales')
        let subtitlePers = sectionContacto[0]?.Texts?.filter(text => text.name === 'redesPersonales')
        let redesProfesionales = []
        let redesPersonales = []

        urlsProf.forEach((url) => {
            imagesProf.forEach((image) => {
                if (image.name === url.name) {
                    const mergedObj = {
                        url : url,
                        image : image,
                    };
                    redesProfesionales.push(mergedObj);
                }
            });
        });
        
        urlsPers.forEach((url) => {
            imagesPers.forEach((image) => {
                if (image.name === url.name) {
                    const mergedObj = {
                        url : url,
                        image : image,
                    };
                    redesPersonales.push(mergedObj);
                }
            });
        });
        let formImage = sectionContacto[0]?.Images?.filter(img => img.type === 'image')
        let formSubtitle = sectionContacto[0]?.Texts?.filter(text => text.name === 'subtitleContacto')
        
        let inputAsunto = sectionContacto[0].Texts?.filter(text => text.name === 'asuntoContacto')
        let inputEmail = sectionContacto[0].Texts?.filter(text => text.name === 'emailContacto')
        let inputMensaje = sectionContacto[0].Texts?.filter(text => text.name === 'mensajeContacto')

        return {
            title : title[0],
            redes: {
                personales : {
                    subtitle: subtitlePers[0],
                    redesPersonales
                },
                profesionales : {
                    subtitle: subtitleProf[0],
                    redesProfesionales
                }
            },
            form : {
                image : formImage[0],
                subtitle : formSubtitle[0],
                inputs : [inputEmail[0], inputAsunto[0], inputMensaje[0]]
            }
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
                        <ContactoSection customContacto = {customContacto()}/>
                        <Footer/>
                    </div>
                </section>
                :
                <section className="mx-auto grid grid-cols-12 bg-[#62615F]">
                    <div className="col-span-12 sm:col-span-3">
                        <LoaderHome comp = 'navBar'/>
                    </div>
                    <div className="col-span-12 p-16 sm:col-span-9">
                        {/* <LoaderSobreMi /> */}
                    </div>
                    <div className="col-span-12 sm:col-start-4 sm:col-end-14">
                        <Footer/>
                    </div>
                </section>
                }
        </div>
    );
}

export default Contacto;
