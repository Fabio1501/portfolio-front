import {GET_SECTION, GET_STATICCOMPONENTS} from '../utils'

const initialState = {
    section: {},
    staticComponents : {}
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_SECTION:
            return {
                ...state,
                section: action.payload,
            }  
            
        case GET_STATICCOMPONENTS:
            return {
                ...state,
                staticComponents : action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;
