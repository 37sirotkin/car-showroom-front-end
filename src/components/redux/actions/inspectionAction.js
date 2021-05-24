import axios from "axios";
import {GET_INSPECTION, POST_INSPECTION} from "../types";
import {URL} from "./url"


export const getInspection = () => {
    return async dispatch => {
        const request = await axios.get(`${URL}inspections`);
        dispatch({type: GET_INSPECTION, payload: request.data});
    }
}

export const postInspection = (obj) => {
    return async dispatch => {
        await axios.post(`${URL}inspections`, obj)
            .catch(() => alert('Error'))
        dispatch({type: POST_INSPECTION, payload: obj});
    };
}
