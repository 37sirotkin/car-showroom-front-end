import {CREATE_USER, GET_USERS} from "../types";

const initialState = {
    users: [

    ]
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.payload}
        case CREATE_USER:
            return {...state, users: state.users.concat(action.payload)}
        default:
            return state;
    }
}