import React, { FC, useEffect, useReducer, useState } from "react";
import Login from "./Login";
import loginStyles from "../Login/LoginStyles";
import useLoginHook from "../../Hooks/NetworkHooks/useLoginHook";
import RegisterContainer from "../../Components/RegisterComponent/RegisterContainer";
import { useForm } from "react-hook-form";
import ILoginForm from "../../FormInterfaces/ILogin";
import { error } from "console";

interface LoginProps{

}

const initialLoginDetails = {
    Username: "",
    Password: ""
}
const initialStateRegister = {
    enabled: false // Initial state is enabled
  };

const LoginContainer: FC<LoginProps> = props => {


    const [isForgotPasswordFlip, setIsForgotPasswordFlip] = useState<boolean>(false);
    const [RegisterState, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
          case 'DISABLE':
            return { enabled: false };
        case 'ENABLE':
            return { enabled: true };
          default:
            return state;
        }}, initialStateRegister);

    
    const{data, mutate: loginMutate, status, isError } = useLoginHook({});

    const disableRegistration = () => {
      dispatch({ type: 'ENABLE' });
    };

    const {classes} = loginStyles({ 
        isForgotPasswordFlip: isForgotPasswordFlip,
        RegisterState: RegisterState.enabled
    });

    return(
        <>
        <div className={classes.pageContainer}>
            <div className={classes.leftPanel}>

            </div>
            <div className={classes.rightPanel}>
                <div className={classes.loginCardContainer} >
                    <Login
                        styles={classes}
                        setIsForgotPasswordFlip={setIsForgotPasswordFlip}
                        isForgotPasswordFlip={isForgotPasswordFlip}
                        disableRegistration={disableRegistration}
                        loginMutate={loginMutate}
                       
                     />
                </div>
                <div className={classes.RegisterCardContainer}>
                  <RegisterContainer 
                   disableRegistration={disableRegistration}
                   />
                </div>
               
            </div>
          
        </div>
        </>
    )
}
export default LoginContainer;