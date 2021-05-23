import axios from "axios";
import {GET_CARS} from "../types";
import {URL} from "./url";
axios.defaults.withCredentials = true

export const getCars = (idCar) => {
    return async dispatch => {
        if (idCar) {
            const request = await axios.get(`${URL}cars?markId=${idCar}`);
            dispatch({type: GET_CARS, payload: request.data})
        } else {
            const request = await axios.get(`${URL}cars`);
            dispatch({type: GET_CARS, payload: request.data})
        }
    }
}