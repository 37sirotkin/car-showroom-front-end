import {GET_CARS} from "../types";

const initialState = {
    cars: [],
};

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARS:
            return {...state, cars: action.payload}
        default:
            return state;
    }
}