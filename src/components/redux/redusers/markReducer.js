import {GET_MARKS} from "../types";

const initialState = {
    marks: [

    ]
};

export const markReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MARKS:
            return {...state, marks: action.payload}
        default:
            return state;
    }
}