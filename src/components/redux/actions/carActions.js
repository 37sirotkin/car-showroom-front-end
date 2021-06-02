import axios from "axios";
import {GET_CARS, POST_CARS, POST_TEST_DRIVE} from "../types";
import {URL} from "./url";

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

export const postCars = (obj) => {
    return async dispatch => {
        await axios.post(`${URL}cars`, obj)
            .catch(() => alert('Error'))
        dispatch({type: POST_CARS, payload: obj});
    };

}