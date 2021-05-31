import {GET_ORDER, GET_TEST_DRIVE, POST_ORDER, POST_TEST_DRIVE} from "../types";

const initialState = {
    order: [

    ]
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER:
            return {...state, order: action.payload}
        case POST_ORDER:
            return {...state, testDrive: state.order.concat(action.payload)}
        default:
            return state;
    }
}