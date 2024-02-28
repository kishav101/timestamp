import React, { FC } from "react";
import DrawerStyles from "./ContainerStyles";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft, faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";

interface IDrawerProps{
    toggleNavBar: () => void;
}

const Drawer: FC<IDrawerProps> = props => {

    const {
        toggleNavBar
    } = props;

    const {classes} = DrawerStyles();

    return(
        <>
        <div className={classes.root}>
            <div className={classes.headerStyles}>
                <div className={classes.imageContainenr}>
                    <img className={classes.imageIcon} src={process.env.REACT_APP_CLIENT_IMAGE_ICON}></img>
                </div>
                <div className={classes.exitImageIcon}>
                  <FontAwesomeIcon icon={faArrowLeft} size='xl'color="white" onClick={toggleNavBar} />
                </div>
            </div>
            <div>
                <Link className={classes.navLinks}  to={'/'}>Home</Link>
                <Link className={classes.navLinks}  to={'/About'}>About our Servies</Link>
                <Link className={classes.navLinks}  to={'/FQAs'}>Frequently Asked Questions</Link>
                <Link className={classes.navLinks}  to={'/Help'}>Interactive Help</Link>
            </div>
        </div>
        </>
    )
}

export default Drawer;