import React, { FC } from "react";
import RegisterStyles from "./RegisterStyles";
import { Divider } from "@mui/material";

interface RegisterProps {
    RegistrationSteps: any,
    regIndex: number;
    setRegIndex: (val: any) => void;
}

const Register: FC<RegisterProps> = props => {
    const {
        RegistrationSteps,
        regIndex,
        setRegIndex
    } = props;

    const { classes } = RegisterStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.card}>
                        <div className={classes.cardImageContainer}>
                            <img className={classes.cardImageLogo} src={process.env.REACT_APP_CLIENT_IMAGE_ICON}></img>
                        </div>
                        <Divider className={classes.SignUpDivider}>Sign Up</Divider>
                        <div className={classes.textBoxWrapper}>
                            <input className={classes.usernameStyle} type="email" placeholder="Username"></input>
                            <input className={classes.usernameStyle} type="text" placeholder="Firstname"></input>
                            <input className={classes.usernameStyle} type="ematextil" placeholder="Lastname"></input>
                            <input className={classes.usernameStyle} type="password" placeholder="Password"></input>
                            <input className={classes.usernameStyle} type="password" placeholder="Confirm Password"></input>
                        </div>
                        <div className={classes.textBoxWrapper}>
                            <input className={classes.usernameStyle} type="number" placeholder="Street\Complex Number"></input>
                            <input className={classes.usernameStyle} type="text" placeholder="Street"></input>
                            <input className={classes.usernameStyle} type="text" placeholder="City"></input>
                            <input className={classes.usernameStyle} type="number" placeholder="Zip Code"></input>
                        </div>
                        <button className={classes.loginNextbtn} >Next</button>
                        <div className={classes.bottomCardFooter}>
                            <div className={classes.bottomFooterText}>
                               <p>{RegistrationSteps[0].title}</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Register;