import {GET_SECTION} from '../utils'

const initialState = {
    section: {}
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_SECTION:
            return {
                ...state,
                section: action.payload,
            }            
        default:
            return state;
    }
}

export default rootReducer;
