import axios from "axios";
import {GET_ORDER, GET_TEST_DRIVE, POST_ORDER, POST_TEST_DRIVE} from "../types";
import {URL} from "./url"


export const getOrder = () => {
    return async dispatch => {
        const request = await axios.get(`${URL}orders`);
        dispatch({type: GET_ORDER, payload: request.data});
    }
}

export const postOrder = (obj) => {
    return async dispatch => {
        await axios.post(`${URL}orders`, obj)
            .catch(() => alert('Error'))
        dispatch({type: POST_ORDER, payload: obj});
    };
}
