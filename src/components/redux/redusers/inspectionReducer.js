import {GET_INSPECTION, GET_TEST_DRIVE, POST_INSPECTION, POST_TEST_DRIVE} from "../types";

const initialState = {
    inspection: [

    ]
};

export const inspectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INSPECTION:
            return {...state, inspection: action.payload}
        case POST_INSPECTION:
            return {...state, inspection: state.inspection.concat(action.payload)}
        default:
            return state;
    }
}