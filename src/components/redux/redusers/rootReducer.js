import {combineReducers} from "redux";
import {carReducer} from "./carReducer";
import {markReducer} from "./markReducer";

export const rootReducer = combineReducers({
    cars: carReducer,
    marks: markReducer
})