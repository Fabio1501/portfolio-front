import axios from 'axios';
import {GET_SECTION} from '../utils'

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
