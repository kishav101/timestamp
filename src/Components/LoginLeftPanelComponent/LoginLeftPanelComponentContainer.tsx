import React, { FC, useState } from "react";
import LoginLeftPanelComponent from "./LoginLeftPanelComponent";

interface LoginLeftPanelComponentProps{
 
}

const LoginLeftPanelComponentContainer: FC<LoginLeftPanelComponentProps> = props => {

    const{
      
    } = props;


    return(
        <>
         <LoginLeftPanelComponent />
        </>
    )
}

export default LoginLeftPanelComponentContainer;