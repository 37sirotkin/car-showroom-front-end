import {combineReducers} from "redux";
import {carReducer} from "./carReducer";
import {markReducer} from "./markReducer";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    cars: carReducer,
    marks: markReducer,
    users: userReducer
})