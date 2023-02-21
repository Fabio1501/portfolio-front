import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSection } from '../../redux/actions/index';

const Home = () => {
    const section = useSelector(state => state.section);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSection('home'));
    }, []);

    return (
        <div className=''>
            {
                Object.keys(section).length > 0 ? 
                <div>
                    {console.log(section)}
                    {
                        section.info.Images?.map(prop => <img src={prop.src} alt = {prop.alt} key = {prop.id}/>)
                    }
                </div> :
                <h3 className=''>
                    hola  
                </h3>
            }
        </div>
    );
}

export default Home
