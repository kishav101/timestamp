import React, { FC, useEffect } from 'react'
import { Link, useMatch, useNavigate } from "react-router-dom";
import useStyles from './NavBarStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@mui/material';


interface NavBarProps {
  isLoggedin: boolean;
  handleOpenNavDrawer: () => void;
  handleCloseNavDrawer: () => void;
  isDrawerOpen: boolean;
}


const NavBar: FC<NavBarProps> = props => {

    const {
      isLoggedin,
      handleOpenNavDrawer,
      handleCloseNavDrawer,
      isDrawerOpen
    } = props;

    const {classes} = useStyles();
    const navigate = useNavigate();
    const homeMatch = useMatch('/'|| '/Home');
    const aboutMatch = useMatch('/About');
    const fqaMatch = useMatch('/FQAs');
    const helpMatch = useMatch('/Help');

    const toggleDrawer = () => {
      if(!isDrawerOpen) {
        handleOpenNavDrawer();
      } else {
        handleCloseNavDrawer();
      }
    }

    const handleOnLoginNavigate = () => {
      navigate("/Login");
    }

    return(
        <>
          <nav className={classes.root}>
            <div className={classes.hamburger} >
            <FontAwesomeIcon icon={faBars} size='2xl' onClick={toggleDrawer} />
            </div>
            <div className={classes.imageContainer} >
                <img className={classes.imageIcon} src={process.env.REACT_APP_CLIENT_IMAGE_ICON}></img>
            </div>
            <div className={classes.navList}>
                <Link  className={ homeMatch ? classes.activeLink : classes.navLinks}  to={'/'}>Home</Link>
                <Link className={ aboutMatch ? classes.activeLink : classes.navLinks}  to={'/About'}>About</Link>
                <Link className={ fqaMatch ? classes.activeLink : classes.navLinks}  to={'/FQAs'}>FAQs</Link>
                <Link className={ helpMatch ? classes.activeLink : classes.navLinks}  to={'/Help'}>Help</Link>
            </div>
            <div className={classes.logoutLinkDiv}>
               <Button onClick={handleOnLoginNavigate} className={classes.loginLink}  title={isLoggedin ? "Logout": "Login"}>{isLoggedin ? "Logout": "Login"}</Button>
            </div>
          </nav>
         
        </>
    )
}

export { NavBar };