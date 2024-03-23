import React, { FC, useEffect, useMemo } from "react";
import { Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";

interface LoginProps{
    setLoginDetails: (val: any) => void;
    loginDetails: any;
    handleLoginMethod: () => void;
    styles: any;
    setIsForgotPasswordFlip: (val: any) => void;
    isForgotPasswordFlip: any;
}

const Login: FC<LoginProps> = props => {
    const{
      setLoginDetails,
      handleLoginMethod,
      setIsForgotPasswordFlip,
      loginDetails,
      styles,
      isForgotPasswordFlip
    } = props;

    return(
        <>
        <div className={styles.root}>
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.cardFront}>
                <div className={styles.cardImageContainer}>
                  <img className={styles.cardImageLogo}  src={process.env.REACT_APP_CLIENT_IMAGE_ICON}></img>
                  </div>
                  <div className={styles.textBoxWrapper}>
                    <input className={styles.usernameStyle} onChange={(val) => setLoginDetails({...loginDetails, Username: val.target.value})} type="email" placeholder="Username"></input>
                    <input className={styles.usernameStyle} onChange={(val) => setLoginDetails({...loginDetails, Password: val.target.value})} type="password" placeholder="Password"></input>
                    <button className={styles.loginNextbtn} onClick={handleLoginMethod}>Next</button>
                    <Divider className={styles.divider}>or</Divider>
                    <button className={styles.signupNextbtn} >Sign Up</button>
                    <a className={styles.forgotPasswordLink} onClick={(val) => setIsForgotPasswordFlip(!isForgotPasswordFlip)}>Forgot Password ? </a>
                  </div>
                  <div>
                    <text className={styles.versionText}>|version|0.001|</text>
                  </div>
                </div>
                <div className={styles.cardBack}>
                  <div onClick={(val) => setIsForgotPasswordFlip(!isForgotPasswordFlip)} className={styles.closeIcon}>
                   <FontAwesomeIcon icon={faArrowLeft} size='1x'color={ "white"} />
                  </div>
                  <div className={styles.cardImageContainer}>
                    <img className={styles.cardImageLogo}  src={process.env.REACT_APP_CLIENT_IMAGE_ICON}></img>
                    </div>
                    <div className={styles.textBoxWrapper}>
                      <input className={styles.usernameStyle} type="email" placeholder="Email to send OTP"></input>
                      <input className={styles.usernameStyle}  type="number" placeholder="OTP: "></input>
                      <button className={styles.loginNextbtn} >Next</button>
                      <Divider className={styles.divider}>Already have an account ?</Divider>
                      <button className={styles.signupNextbtn} >Sign Up</button>
                    </div>
                    <div>
                      <text className={styles.versionText}>|version|0.001|</text>
                    </div>
                </div>
              </div>
          </div>
        </div>
       
     
      </>
    )
}

export default Login;