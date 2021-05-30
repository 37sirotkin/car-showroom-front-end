import {LOGIN_IN, SIGNUP_ERROR, SIGNUP_SUCCESS} from "../types";

const initialState = {
    security: [

    ],
    logged: false,
    signupChecked: false
};

export const securityReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                user: action.payload,
                logged: true,
                signupChecked: true
            };
        case SIGNUP_ERROR: 
            return {
                ...state,
                signupChecked: true
            };        
        case LOGIN_IN:
        
            return {...state, users: action.payload}
        default:
            return state;
    }
}