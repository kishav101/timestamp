import React, { FC, useState } from "react";
import Login from "./Login";
import loginStyles from "../Login/LoginStyles";

interface LoginProps{

}

const initialLoginDetails = {
    Username: "",
    Password: ""
}

const LoginContainer: FC<LoginProps> = props => {

    const {classes} = loginStyles();
    const[loginDetails, setLoginDetails] = useState(initialLoginDetails)

    const handleLogin = () => {

    }

    return(
        <>
            <Login
                loginDetails={loginDetails}
                setLoginDetails={setLoginDetails}
                handleLoginMethod={handleLogin}
            />
        </>
    )
}
export default LoginContainer;