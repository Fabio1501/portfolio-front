import axios from 'axios';
import {GET_SECTION, GET_STATICCOMPONENTS} from '../utils'

export const getSection = (name) => {
    return async (dispatch)=>{
        if(!name){
            let section = await axios('/sections');
            console.log(section.data);
            return await dispatch({
                type: GET_SECTION,
                payload: section.data
            })
        }

        let section = await axios(`/sections/name?name=${name}`);
        
        return await dispatch({
            type: GET_SECTION,
            payload: section.data
        })
    }
}

export const getStaticComponents = () => {
    return async (dispatch)=>{
    let section = await axios('/sections');
    let footer = section?.data?.info?.filter(component => component.name === 'footer');
    let navBar = section?.data?.info?.filter(component => component.name === 'navBar');

    const imagesNavBar = navBar[0]?.Images?.filter(img => img.type === 'icon');
    const urlsNavBar = navBar[0]?.Urls?.filter(url => url.type === 'local');
    const textsNavBar = navBar[0]?.Texts?.filter(text => text.type === 'link');
    let sectionsNavBar = [];
    let redesNavBar = [];
    let logoNavBar = {
        image: {...navBar[0]?.Images?.filter(img => img.type === 'logo')[0]}, 
        url : {...navBar[0]?.Urls?.filter(url => url.type === 'logo')[0]}
    };

    imagesNavBar.forEach((image) => {
        textsNavBar.forEach((text) => {
          if (image.name === text.name) {
            urlsNavBar.forEach((url) => {
              if (text.name === url.name) {
                const mergedObj = {
                    image : image,
                    text : text,
                    url : url
                };
                
                sectionsNavBar.push(mergedObj);
              }
            });
          }
        });
    }); 
    console.log(navBar[0]?.Urls);
    navBar[0]?.Urls?.filter(url => url.type === 'redirect').forEach((url) =>{
        navBar[0]?.Images?.filter(img => img.type === 'redes').forEach((image) => {
            if (image.name === url.name) {
                const mergedObj = {
                    url : url,
                    image : image,
                };
                
                redesNavBar.push(mergedObj);
            }
        });
    });          

    let textsFooter = footer[0].Texts.filter(text => text.type === 'link')
    let urlsFooter = footer[0].Urls.filter(text => text.type === 'local')
    let sections = []
    
    urlsFooter.forEach((url) => {
        textsFooter.forEach((text) => {
            if (text.name === url.name) {
                const mergedObj = {
                    text : text,
                    url : url,
                };
                
                sections.push(mergedObj);
            }
        });
    }); 

    footer = {
        logo: {
            image: footer[0].Images[0],
            url: footer[0].Urls.filter(url => url.name === 'logo')[0]
        },
        textLogo: {
            nombre: footer[0].Texts.filter(text => text.name === 'Nombre')[0],
            derechos: footer[0].Texts.filter(text => text.name === 'Derechos')[0]
        },
        sections
    }

    navBar = {
        logoNavBar,
        sectionsNavBar,
        redesNavBar
    }

    let data = {
        footer : footer,
        navBar : navBar
    }
    
    return await dispatch({
        type: GET_STATICCOMPONENTS,
        payload: data
    })
    }
}
