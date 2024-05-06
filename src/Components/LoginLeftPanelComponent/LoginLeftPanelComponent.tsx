
import { FC } from "react";
import LoginLeftPanelStyles from "./LoginLeftPanelStyles";
import { LoginLeftpanelData } from "../../DataFiles/loginLeftPanelData";
import { Player } from '@lottiefiles/react-lottie-player';

interface LoginLeftPanelComponentProps {
  
}

const LoginLeftPanelComponent: FC<LoginLeftPanelComponentProps> = props => {
    const {
     
    } = props;

    const { classes } = LoginLeftPanelStyles({
        regIndex: 0
    });


    return (
        <>
          <div className={classes.root}>
            <h3>DDevelopment ICT</h3>
            <div className={classes.ballContainer}>
                <div className={classes.ball} />
                <div className={classes.ballTwo} />
            </div>
            <div className={classes.lottieIcon}>
                <Player
                    src='https://assets1.lottiefiles.com/packages/lf20_myejiggj.json'
                    className="player"
                    loop
                    autoplay
                />
            </div>
            <div className={classes.textDescriptionContainer}>
                <p className={classes.Title}>{LoginLeftpanelData[0].Title}</p>
                <p className={classes.Slogan} >{LoginLeftpanelData[0].Slogan}</p>
                <p className={classes.DescriptionOne} >{LoginLeftpanelData[0].DescriptionOne}</p>
                <p className={classes.DescriptionTwo}>{LoginLeftpanelData[0].DescriptionTwo}</p>
            </div>
          </div>
        </>
    )
}

export default LoginLeftPanelComponent;