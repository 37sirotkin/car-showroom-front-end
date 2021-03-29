import axios from "axios";
import {GET_CARS} from "../types";

const URL = "http://localhost:3001/";

export const getCars = () => {
    return async dispatch => {
        const request = await axios.get(`${URL}getCars`);
        console.log(request);
        dispatch({type: GET_CARS, payload: request.data.name})
    }
}