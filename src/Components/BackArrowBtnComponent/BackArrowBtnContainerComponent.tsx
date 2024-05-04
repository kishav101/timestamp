import React, { useState } from "react";
import BackArrowBtnComponentComponent from "./BackArrowBtnComponent";
import { useStyles } from "tss-react/mui";
import styles from "./BackArrowBtnComponentStyles";
import BackArrowBtnComponent from "./BackArrowBtnComponent";

interface BackArrowBtnComponentProps {
    handleBackActionHandler: (val: any) => void;
    IsForgotPasswordFlip: boolean
}

const BackArrowBtnContainerComponent: React.FC<BackArrowBtnComponentProps> = props => {
    const {
        handleBackActionHandler,
        IsForgotPasswordFlip
    } = props;

    const {classes} = styles();

    return(
        <>
            <BackArrowBtnComponent
                handleBackActionHandler={handleBackActionHandler} 
                closeIconStyle={classes.closeIcon}
            />
        </>
    )
}

export default BackArrowBtnContainerComponent;