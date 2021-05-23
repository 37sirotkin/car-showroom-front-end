import axios from "axios";
import {GET_USERS, LOGIN_IN} from "../types";
import {URL} from "./url"


export const loginIn = (email, pass) => {
    return async dispatch => {
        var bodyFormData = new URLSearchParams();
        bodyFormData.append('username', email);
        bodyFormData.append('password', pass);
        const request = await axios.post(`${URL}login`, bodyFormData);
        dispatch({type: LOGIN_IN});
    
    }
}
