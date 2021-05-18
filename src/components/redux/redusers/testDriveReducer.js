import {GET_TEST_DRIVE, POST_TEST_DRIVE} from "../types";

const initialState = {
    testDrive: [

    ]
};

export const testDriveReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEST_DRIVE:
            return {...state, testDrive: action.payload}
        case POST_TEST_DRIVE:
            return {...state, testDrive: state.testDrive.concat(action.payload)}
        default:
            return state;
    }
}