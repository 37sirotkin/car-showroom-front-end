import axios from "axios";
import {LOGIN_IN, SIGNUP_SUCCESS, SIGNUP_ERROR} from "../types";
import {URL} from "./url"

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization =  `Bearer ${token}`;
    }
    return config;
});

export const loginIn = (email, pass) => {
    return async dispatch => {
        var bodyFormData = new URLSearchParams();
        bodyFormData.append('username', email);
        bodyFormData.append('password', pass);
        const request = await axios.post(`${URL}login`, bodyFormData);
        const {token} = request.data;
        
        localStorage.setItem('token', token);
        dispatch({type: LOGIN_IN});
        dispatch(signUp());  
    }
}

export const signUp = () => {
    return async dispatch => {
        axios.post(`${URL}signup`)
            .then(r => {
                dispatch({type: SIGNUP_SUCCESS, payload: r.data.user});
            })
            .catch(error => {
                dispatch({type: SIGNUP_ERROR});
            });
    }
} 
