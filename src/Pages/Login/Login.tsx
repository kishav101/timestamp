import { FC } from "react";
import { Divider } from "@mui/material";
import BackArrowBtnContainerComponent from "../../Components/BackArrowBtnComponent";
import { useForm } from "react-hook-form";
import ILoginForm from "../../FormInterfaces/ILogin";
import VLoginForm from "../../FormValidations/VLoginForm";
import { UseMutateFunction } from "react-query";


interface LoginProps {
  styles: any;
  setIsForgotPasswordFlip: (val: any) => void;
  isForgotPasswordFlip: any;
  toggleRegistration: () => void;
  loginMutate: UseMutateFunction<any, unknown, any, unknown>
}

const Login: FC<LoginProps> = props => {
  const {
    setIsForgotPasswordFlip,
    styles,
    isForgotPasswordFlip,
    toggleRegistration,
    loginMutate
  } = props;

  const { register, handleSubmit, formState: {errors}, getValues} = useForm<ILoginForm>();

  const onSubmit = () => {
    loginMutate(getValues)
  }

  return (
    <>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.cardFront}>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImageLogo} src={process.env.REACT_APP_CLIENT_IMAGE_ICON}></img>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.textBoxWrapper}>
                  <input  {...register("Username", VLoginForm.VLoginFormUsername)} className={ errors.Username && errors.Username.type === "required" ? styles.usernameStyleError : styles.usernameStyle} type="email" placeholder="Username"></input>
                  <input {...register("Password", VLoginForm.VLoginFormPassword)} className={ errors.Password && errors.Password.type === "required" ? styles.usernameStyleError : styles.usernameStyle} type="password" placeholder="Password"></input>
                  <button className={styles.loginNextbtn} type="submit" onClick={handleSubmit(onSubmit)}>Login</button>
                  <Divider className={styles.divider}>or</Divider>
                </div>
              </form>
              <div className={styles.textBoxWrapper}>
                <button className={styles.signupNextbtn} onClick={toggleRegistration} >Sign Up</button>
                <a className={styles.forgotPasswordLink} onClick={(val) => setIsForgotPasswordFlip(!isForgotPasswordFlip)}>Forgot Password ? </a>
              </div>
              <div>
                <text className={styles.versionText}>|version 0.001|</text>
              </div>
            </div>
            <div className={styles.cardBack}>
              <div className={styles.backButton}>
                <BackArrowBtnContainerComponent
                  IsForgotPasswordFlip={isForgotPasswordFlip}
                  handleBackActionHandler={setIsForgotPasswordFlip}
                />
              </div>
              <div className={styles.cardImageContainer}>
                <img className={styles.cardImageLogo} src={process.env.REACT_APP_CLIENT_IMAGE_ICON}></img>
              </div>
              <div className={styles.textBoxWrapper}>
                <input className={styles.usernameStyle} type="email" placeholder="Email to send OTP"></input>
                <input className={styles.usernameStyle} type="number" placeholder="OTP: "></input>
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