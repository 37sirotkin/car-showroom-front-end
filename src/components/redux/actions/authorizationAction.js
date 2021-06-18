import axios from "axios";
import {URL} from "./url";
import {CREATE_USER} from "../types";


export const createUser = (obj) => {
   return async dispatch => {
       console.log(obj)
       await axios.post(`${URL}users`, obj)
           .catch(() => alert('Error'))
       dispatch({type: CREATE_USER, payload: obj});
    }
}