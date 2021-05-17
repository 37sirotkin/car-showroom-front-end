import axios from "axios";
import {GET_MARKS} from "../types";

import {URL} from "./url"

export const getMarks = () => {
    return async dispatch => {
        const request = await axios.get(`${URL}marks`);
        dispatch({type: GET_MARKS, payload: request.data})
    }
}
