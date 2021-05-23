import {LOGIN_IN} from "../types";

const initialState = {
    security: [

    ]
};

export const securityReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_IN:
        
            return {...state, users: action.payload}
        default:
            return state;
    }
}