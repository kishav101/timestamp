import React, { FC, useState } from "react";
import Register from "./Register";

interface RegisterProps{
    showRegistration?: boolean;
    disableRegistration: () => void;
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
        showRegistration,
        disableRegistration
    } = props;

    const[regIndex, setRegIndex] = useState<number>(0);


    const handleRegistrationNextbtn = (direction: string) => {
        if(direction === "forward") {
            switch(regIndex) {
                case 0:{
                    setRegIndex(1);
                    break;
                }
                case 1: {
                    setRegIndex(2);
                    break;
                }
                case 2:{
                    console.log("complete");
                    break;
                }
            }
        } else {
            switch(regIndex) {
                case 0:{
                    setRegIndex(0);
                    break;
                }
                case 1: {
                    setRegIndex(0);
                    break;
                }
                case 2:{
                    console.log("complete");
                    break;
                }
            }
        }
      
    }

    return(
        <>
         <Register
           RegistrationSteps={RegistrationSteps}
           regIndex={regIndex}
           setRegIndex={setRegIndex}
           handleRegistrationNextbtn={(val: string) => handleRegistrationNextbtn('forward')}
           handleRegistrationPrevbtn={(val: string) => handleRegistrationNextbtn('backwards')}
           disableRegistration={disableRegistration}
         />
        </>
    )
}

export default RegisterContainer;