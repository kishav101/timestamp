import React, { FC, useEffect, useState } from "react";
import Login from "./Login";
import loginStyles from "../Login/LoginStyles";
import useLoginHook from "../../Hooks/NetworkHooks/useLoginHook";
import RegisterContainer from "../../Components/RegisterComponent/RegisterContainer";

interface LoginProps{

}

const initialLoginDetails = {
    Username: "",
    Password: ""
}

const LoginContainer: FC<LoginProps> = props => {
   
    const [isForgotPasswordFlip, setIsForgotPasswordFlip] = useState<boolean>(false);
    const[loginDetails, setLoginDetails] = useState(initialLoginDetails);

    const{data, mutate: loginMutate, status, isError } = useLoginHook(loginDetails);

    const {classes} = loginStyles({ 
        isForgotPasswordFlip: isForgotPasswordFlip
    });

    const handleLogin = () => {
        loginMutate(loginDetails);
    }

    useEffect(() => {
        console.log(loginDetails)
    }, [loginDetails])

    return(
        <>
        <RegisterContainer />
            <Login
                loginDetails={loginDetails}
                setLoginDetails={setLoginDetails}
                handleLoginMethod={handleLogin}
                styles={classes}
                setIsForgotPasswordFlip={setIsForgotPasswordFlip}
                isForgotPasswordFlip={isForgotPasswordFlip}
            />
        </>
    )
}
export default LoginContainer;