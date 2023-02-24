import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSection } from '../../redux/actions/index';
import LoaderHome from './LoaderHome';
import NavBarHome from './NavBarHome';
import Presentation from './Presentation';
import Footer from '../Footer/Footer';

const Home = () => {
    const section = useSelector(state => state.section);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSection('home'));
    }, []);

    const customInfoNav = () => {
        const images = section?.info?.Images?.filter(img => img.type === 'icon');
        const urls = section?.info?.Urls?.filter(url => url.type === 'local');
        const texts = section?.info?.Texts?.filter(text => text.type === 'link');
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
        section?.info?.Urls?.filter(url => url.type === 'redirect').forEach((url) => {
            section?.info?.Images?.filter(img => img.type === 'redes').forEach((image) => {
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
            logo: {image: {...section?.info?.Images?.filter(img => img.type === 'logo')[0]}, url : {...section?.info?.Urls?.filter(url => url.type === 'logo')[0]}},
            secciones: secciones.reverse(),
            redes: redes
        }

    };

    const customInfoPresentation = () => {
        const images = section?.info?.Images?.filter(img => img.name === 'Presentacion');
        const texts = section?.info?.Texts?.filter(text => text.name === 'Presentacion');       
                 console.log(images);
        //type urls and images: redes
        return {
            image: images[0],
            text: texts[0]
        }

    };

    return (
        <div className="bg-[url('https://i.postimg.cc/K89f7Nq8/portfolio-imagen-bosque-y-cascada.jpg')] bg-no-repeat bg-cover bg-center w-full h-full grid-rows-1 grid-cols-2 absolute">
            {
                Object.keys(section).length > 0 ? 
                <div className='w-full h-full flex justify-evenly items-center absolute'>
                    <NavBarHome infoNav = { customInfoNav() }/>
                    <Presentation infoPresentation = {customInfoPresentation()}/>
                </div> :
                <div className='w-full h-full flex justify-evenly items-center absolute'>
                    <LoaderHome comp = 'navBar'/>
                    <LoaderHome comp = 'presentation'/>
                </div>
            }
            {/* <Footer/> */}
        </div>
    );
}

export default Home
