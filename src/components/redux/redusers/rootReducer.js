import {combineReducers} from "redux";
import {carReducer} from "./carReducer";
import {markReducer} from "./markReducer";
import {userReducer} from "./userReducer";
import {testDriveReducer} from "./testDriveReducer";
import { securityReducer } from "./securityReducer";
import {inspectionReducer} from "./inspectionReducer";

export const rootReducer = combineReducers({
    cars: carReducer,
    marks: markReducer,
    users: userReducer,
    testDrive: testDriveReducer,
    security: securityReducer,
    inspection: inspectionReducer
})