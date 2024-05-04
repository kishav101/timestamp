import React, { FC } from "react";
import RegisterStyles from "./RegisterStyles";
import { Divider } from "@mui/material";
import BackArrowBtnComponent from "../BackArrowBtnComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useForm } from 'react-hook-form';
import { IRegister } from "../../FormInterfaces/IRegister";

interface RegisterProps {
    RegistrationSteps: any,
    regIndex: number;
    setRegIndex: (val: any) => void;
    handleRegistrationNextbtn: (val: string) => void;
    handleRegistrationPrevbtn: (val: string) => void;
    disableRegistration: () => void;
}

const Register: FC<RegisterProps> = props => {
    const {
        RegistrationSteps,
        regIndex,
        setRegIndex,
        handleRegistrationNextbtn,
        handleRegistrationPrevbtn,
        disableRegistration
    } = props;

    const { classes } = RegisterStyles({
        regIndex: regIndex
    });

    const { register, handleSubmit, formState: { errors } } = useForm<IRegister>()

    return (
        <>
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.card}>
                        {
                            regIndex !== 2 && regIndex !== 0 && <div style={{position: 'absolute', left: 10, width: "10%", height: "100%"}}>
                            <BackArrowBtnComponent 
                                IsForgotPasswordFlip={false}
                                handleBackActionHandler={handleRegistrationPrevbtn}
                            />
                         </div>
                        }
                       
                        <div className={classes.cardImageContainer}>
                            <img className={classes.cardImageLogo} src={process.env.REACT_APP_CLIENT_IMAGE_ICON}></img>
                        </div>
                        <Divider className={classes.SignUpDivider}>Sign Up</Divider>
                       <div className={classes.personalContainer}>
                        <div className={classes.textBoxWrapper}>
                            <input {...register("Username")} className={classes.usernameStyle} type="email" placeholder="Username"></input>
                            <input {...register("Firstname")} className={classes.usernameStyle} type="text" placeholder="Firstname"></input>
                            <input {...register("Lastname")} className={classes.usernameStyle} type="text" placeholder="Lastname"></input>
                            <input {...register("Password")} className={classes.usernameStyle} type="password" placeholder="Password"></input>
                            <input {...register("ConfirmPassword")} className={classes.usernameStyle} type="password" placeholder="Confirm Password"></input>
                        </div>
                       </div>
                       <div className={classes.addressContainer}>
                        <div className={classes.textBoxWrapper}>
                            <input {...register("StreetNumber")} className={classes.usernameStyle} type="number" placeholder="Street\Complex Number"></input>
                            <input {...register("Street")} className={classes.usernameStyle} type="text" placeholder="Street"></input>
                            <input {...register("City")} className={classes.usernameStyle} type="text" placeholder="City"></input>
                            <input {...register("Zip")} className={classes.usernameStyle} type="number" placeholder="Zip Code"></input>
                        </div>
                       </div>
                       <div className={classes.completeContainer}>
                        <div className={classes.textBoxWrapper}>
                          <p className={classes.completeText}>All Done!</p>
                           <text className={classes.completeText}>Congratulations!</text> 
                           <br></br>
                           <div>
                            <FontAwesomeIcon icon={faCheckCircle} size='4x'color={process.env.REACT_APP_CLIENT_PRIMARY_COLOUR} />
                           </div>
                           <br></br>
                           <br></br>
                           <p className={classes.completeSubText}>
                            Please <text className={classes.verifyText}>VERIFY</text> your email before you can login into the system.
                          </p>
                        </div>
                       </div>
                       {
                        regIndex !== 2 && 
                        <button className={classes.loginNextbtn} onClick={() => handleRegistrationNextbtn('forward')} >Next</button>
                       }
                       {
                        regIndex === 2 &&
                        <button className={classes.loginNextbtn} onClick={() => handleRegistrationNextbtn('forward')} >Continue to login</button>
                       }
                        <div>
                            <p>Already have an account ?</p><br></br>
                            <button className={classes.signupNextbtn} onClick={disableRegistration} >Sign Up</button>
                        </div>

                        <div className={classes.bottomCardFooter}>
                            <div className={classes.bottomFooterText}>
                               <p>{RegistrationSteps[regIndex].title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;