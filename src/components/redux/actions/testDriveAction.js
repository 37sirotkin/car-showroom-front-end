import axios from "axios";
import {GET_TEST_DRIVE, POST_TEST_DRIVE} from "../types";
import {URL} from "./url"


export const getTestDrive = () => {
    return async dispatch => {
        const request = await axios.get(`${URL}test-drive`);
        dispatch({type: GET_TEST_DRIVE, payload: request.data});
    }
}

export const postTestDrive = (obj) => {
    return async dispatch => {
        await axios.post(`${URL}test-drive`, obj)
            .catch(() => alert('Error'))
        dispatch({type: POST_TEST_DRIVE, payload: obj});
    };
}
