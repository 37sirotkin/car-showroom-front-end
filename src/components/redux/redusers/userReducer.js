import {GET_USERS} from "../types";

const initialState = {
    users: [

    ]
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            console.log("reducer " + action.payload)
            return {...state, users: action.payload}

        default:
            return state;
    }
}