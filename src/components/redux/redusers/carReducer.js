import {GET_CARS, POST_CARS} from "../types";

const initialState = {
    cars: [],
};

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARS:
            return {...state, cars: action.payload}
        case POST_CARS:
            return {...state, cars: state.cars.concat(action.payload)}
        default:
            return state;
    }
}