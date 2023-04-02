import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSection } from '../../redux/actions/index';
import LoaderHome from './LoaderHome';
import NavBarHome from './NavBarHome';
import Presentation from './Presentation';
import Footer from '../Footer/Footer';
import LoaderFooter from '../Footer/Footer';

const Home = () => {
    const section = useSelector(state => state.section);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSection());
    }, []);

    const customInfoNav = () => {
        let sectionHome = section?.info?.filter(sec => sec.name === 'home') 
        const images = sectionHome[0]?.Images?.filter(img => img.type === 'icon');
        const urls = sectionHome[0]?.Urls?.filter(url => url.type === 'local');
        const texts = sectionHome[0]?.Texts?.filter(text => text.type === 'link');
        let secciones = [];
        let redes = [];

        images.forEach((image) => {
            texts.forEach((text) => {
              if (image.name === text.name) {
                urls.forEach((url) => {
                  if (text.name === url.name) {
                    const mergedObj = {
                        image : image,
                        text : text,
                        url : url
                    };
                    
                    secciones.push(mergedObj);
                  }
                });
              }
            });
        });        
        sectionHome[0]?.Urls?.filter(url => url.type === 'redirect').forEach((url) => {
            sectionHome[0]?.Images?.filter(img => img.type === 'redes').forEach((image) => {
                if (image.name === url.name) {
                    const mergedObj = {
                        url : url,
                        image : image,
                    };
                    
                    redes.push(mergedObj);
                }
            });
        });          
        
        //type urls and images: redes
        return {
            logo: {image: {...sectionHome[0]?.Images?.filter(img => img.type === 'logo')[0]}, url : {...sectionHome[0]?.Urls?.filter(url => url.type === 'logo')[0]}},
            secciones: secciones,
            redes: redes
        }

    };

    const customInfoPresentation = () => {
        let sectionHome = section?.info?.filter(sec => sec.name === 'home') 
        const images = sectionHome[0]?.Images?.filter(img => img.name === 'Presentacion');
        const texts = sectionHome[0]?.Texts?.filter(text => text.name === 'Presentacion');       

        //type urls and images: redes
        return {
            image: images[0],
            text: texts[0]
        }

    };

    return (
        <div className="bg-[url('https://i.postimg.cc/K89f7Nq8/portfolio-imagen-bosque-y-cascada.jpg')] bg-no-repeat bg-cover bg-top w-full h-fit flex flex-col justify-end">
            {
                Object.keys(section).length > 0 && section.containsError === false ? 
                <div className='w-full h-full flex flex-col justify-evenly items-center'>
                    <div className='w-full flex justify-evenly items-center'>
                        <NavBarHome infoNav = { customInfoNav() }/>
                        <Presentation infoPresentation = {customInfoPresentation()}/>
                    </div>
                   <Footer/>
                </div> :
                <div className='bg-white w-full h-full flex flex-col justify-center items-center'>
                    <div className='w-full flex justify-evenly items-center'>
                    <LoaderHome comp = 'navBar'/>
                    <LoaderHome comp = 'presentation'/>
                    </div>
                    <LoaderFooter/>
                </div>
            }
            {/* <Footer/> */}
        </div>
    );
}

export default Home
