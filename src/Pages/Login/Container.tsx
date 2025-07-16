import React, { FC, useEffect, useReducer, useState } from "react";
import Login from "./Login";
import loginStyles from "../Login/LoginStyles";
import useLoginHook from "../../Hooks/NetworkHooks/useLoginHook";
import RegisterContainer from "../../Components/RegisterComponent/RegisterContainer";
import { useForm } from "react-hook-form";
import ILoginForm from "../../FormInterfaces/ILogin";
import LoginLeftPanelComponentContainer from "../../Components/LoginLeftPanelComponent";
import { useDispatch, useSelector } from "react-redux";
import { setIsUserLoggedIn } from "../../Stores/Reducers/Profile";
import { RootState } from "../../Stores/Stores";

interface LoginProps {}

const DISABLE_REGISTER_ACTION = "DISABLE_REGISTER_ACTION";
const ENABLE_REGISTER_ACTION = "ENABLE_REGISTER_ACTION";

const initialStateRegister = {
  enabled: false,
};

const LoginContainer: FC<LoginProps> = (props) => {
  const [isForgotPasswordFlip, setIsForgotPasswordFlip] =
    useState<boolean>(false);
  const [RegisterState, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case DISABLE_REGISTER_ACTION:
        return { enabled: false };
      case ENABLE_REGISTER_ACTION:
        return { enabled: true };
      default:
        return state;
    }
  }, initialStateRegister);

  const {
    data,
    mutate: loginMutate,
    status,
    isError,
    isLoading,
  } = useLoginHook({});
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ILoginForm>();

  const isLoggedIn = useSelector(
    (state: RootState) => state.profile.isLoggedIn
  );
  const jwtToken = useSelector(
    (state: RootState) => state.profile.currentProfile
  );

  const dispatch_ = useDispatch();

  const toggleRegistration = () => {
    if (RegisterState.enabled) {
      dispatch({ type: DISABLE_REGISTER_ACTION });
    } else {
      dispatch({ type: ENABLE_REGISTER_ACTION });
    }
  };

  const { classes } = loginStyles({
    isForgotPasswordFlip: isForgotPasswordFlip,
    RegisterState: RegisterState.enabled,
  });

  const handleOnLoginClick = () => {
    loginMutate({
      Username: getValues().Username,
      Password: getValues().Password,
    });
  };

  useEffect(() => {
    if (data?.access_token !== "") {
      console.log(data);
      const profileData = {
        profileId: "12345",
        jwtToken: data?.access_token,
      };
      dispatch_(setIsUserLoggedIn(profileData));
    }
  }, [data]);

  return (
    <>
      <div className={classes.pageContainer}>
        <div className={classes.leftPanel}>
          <LoginLeftPanelComponentContainer />
        </div>
        <div className={classes.rightPanel}>
          <div className={classes.loginCardContainer}>
            <Login
              styles={classes}
              setIsForgotPasswordFlip={setIsForgotPasswordFlip}
              isForgotPasswordFlip={isForgotPasswordFlip}
              toggleRegistration={toggleRegistration}
              loginMutate={loginMutate}
              data={data}
              register={register}
              errors={errors}
              handleSubmit={handleOnLoginClick}
            />
          </div>
          <div className={classes.RegisterCardContainer}>
            <RegisterContainer toggleRegistration={toggleRegistration} />
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginContainer;
