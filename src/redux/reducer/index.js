import {GET_SECTION, GET_STATICCOMPONENTS, SEND_MESSAGE} from '../utils'

const initialState = {
    section: {},
    staticComponents : {},
    message : {}
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

        case SEND_MESSAGE:
            return {
                ...state,
                message : action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;
