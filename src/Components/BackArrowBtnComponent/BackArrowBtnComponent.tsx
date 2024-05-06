import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface BackArrowBtnComponentProps {
    closeIconStyle: any;
    handleBackActionHandler: (val: any) => void;
}

const BackArrowBtnComponent: React.FC<BackArrowBtnComponentProps> = props => {
    const {
        closeIconStyle,
        handleBackActionHandler
    } = props;

    return(
        <>
          <div onClick={() => handleBackActionHandler(false)} className={closeIconStyle}>
            <FontAwesomeIcon icon={faArrowLeft} size='1x'color={ "white"} />
          </div>
        </>
    )
}

export default BackArrowBtnComponent;