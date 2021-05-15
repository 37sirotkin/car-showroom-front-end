import axios from "axios";
import {GET_MARKS} from "../types";

const URL = "http://localhost:3001/api/v1.0/";

export const getMarks = () => {
    return async dispatch => {
        const request = await axios.get(`${URL}marks`);
        console.log(request.data)
        dispatch({type: GET_MARKS, payload: request.data})
    }
}
