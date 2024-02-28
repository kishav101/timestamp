import React, { FC } from "react";
import DrawerStyles from "./ContainerStyles";
import { Link, useMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeadset, faHome, faInbox, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";


interface IDrawerProps{
    toggleNavBar: () => void;
    isNavOpen: boolean;
}

const Drawer: FC<IDrawerProps> = props => {

    const {
        toggleNavBar,
        isNavOpen
    } = props;

    const {classes} = DrawerStyles();

    const homeMatch = useMatch('/'|| '/Home');
    const aboutMatch = useMatch('/About');
    const fqaMatch = useMatch('/FQAs');
    const helpMatch = useMatch('/Help');
    

    return(
        <>
        <div className={isNavOpen ? classes.showDrawer : classes.closeDrawer}>
          {
            isNavOpen && <>
              <div className={classes.headerStyles}>
                <div className={classes.imageContainenr}>
                    <img className={classes.imageIcon} src={process.env.REACT_APP_CLIENT_IMAGE_ICON}></img>
                </div>
                <div onClick={toggleNavBar} className={classes.exitImageIcon}>
                  <FontAwesomeIcon icon={faArrowLeft} size='xl'color="white"  />
                </div>
            </div>
            <div className={classes.navContainer}>
                <Link className={ homeMatch ? classes.navActiveLinks : classes.navLinks}  to={'/'}>
                   <FontAwesomeIcon icon={faHome} size='sm'color={homeMatch ? "black" : "white"} style={{marginTop: 5, paddingRight: 10 }}/>
                  Home
                </Link>
                <Link className={ aboutMatch ? classes.navActiveLinks : classes.navLinks}  to={'/About'}>
                <FontAwesomeIcon icon={faInbox} size='sm'color={aboutMatch ? "black" : "white"}  style={{marginTop: 5, paddingRight: 10 }}/>
                  About our Servies</Link>
                <Link className={ fqaMatch ? classes.navActiveLinks : classes.navLinks}  to={'/FQAs'}>
                <FontAwesomeIcon icon={faQuestionCircle} size='sm'color={fqaMatch ? "black" : "white"}  style={{marginTop: 5, paddingRight: 10 }}/>
                  Frequently Asked Questions</Link>
                <Link className={ helpMatch ? classes.navActiveLinks : classes.navLinks} to={'/Help'}>
                <FontAwesomeIcon icon={faHeadset} size='sm'color={fqaMatch ? "black" : "white"}  style={{marginTop: 5, paddingRight: 10 }}/>
                  Interactive Help</Link>
            </div>
            </>
          }
        </div>
        </>
    )
}

export default Drawer;