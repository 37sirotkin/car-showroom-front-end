import React, {useState} from "react"
import LoginIn from "./login-in/login-in";
import SignUp from "./sign-up/sign-up";

const Authorization = () => {

    const [viewScreen, setViewScreen] = useState('login-in');


    return (
        <div className="authorization">
            {viewScreen === 'login-in' ? <LoginIn setViewScreen={setViewScreen}/> : <SignUp setViewScreen={setViewScreen}/>}
        </div>
    )
}

export default Authorization;