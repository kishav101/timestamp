import React, { FC, useState } from "react";
import Register from "./Register";

interface RegisterProps{
    showRegistration?: boolean;
}

const RegistrationSteps = [
    {
        idx: 1,
        title: "Step 1 of 2 - Personal Particluars"
    },
    {
        idx: 2,
        title: "Step 2 of 2 - Address Details"
    },
    {
        idx: 3,
        title: "Complete"
    },
]

const RegisterContainer: FC<RegisterProps> = props => {

    const{
        showRegistration
    } = props;

    const[regIndex, setRegIndex] = useState<number>(1);


    const handleRegistrationNextbtn = () => {

    }

    return(
        <>
         <Register
           RegistrationSteps={RegistrationSteps}
           regIndex={regIndex}
           setRegIndex={setRegIndex}
         />
        </>
    )
}

export default RegisterContainer;