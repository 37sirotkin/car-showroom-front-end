import axios from "axios";
import {GET_USERS} from "../types";
import {URL} from "./url"


export const getUsers = () => {
    return async dispatch => {
        const request = await axios.get(`${URL}users`);
        dispatch({type: GET_USERS, payload: request.data});
        console.log("Action: "+ request.data)
    }
}
