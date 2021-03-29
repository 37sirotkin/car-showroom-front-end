import axios from "axios";
import {GET_MARKS} from "../types";

const URL = "http://localhost:3001/";

export const getMarks = () => {
    return async dispatch => {
        const request = await axios.get(`${URL}marks`);
        console.log(request);
        dispatch({type: GET_MARKS, payload: request.data})
    }
}
