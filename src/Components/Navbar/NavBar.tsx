import React, { FC, useEffect } from 'react'
import { Link, useMatch } from "react-router-dom";
import useStyles from './NavBarStyles';
interface NavBarProps{

}


const NavBar: FC<NavBarProps> = props => {

    const {

    } = props;

    const {classes} = useStyles();

    const homeMatch = useMatch('/'|| '/Home');
    const aboutMatch = useMatch('/About');
    const fqaMatch = useMatch('/FQAs');
    const helpMatch = useMatch('/Help');


    return(
        <>
          <nav className={classes.root}>
            <div >
                <img className={classes.imageIcon} src={process.env.REACT_APP_CLIENT_IMAGE_ICON}></img>
            </div>
            <div className={classes.navList}>
                <Link  className={ homeMatch ? classes.activeLink : classes.navLinks}  to={'/'}>Home</Link>
                <Link className={ aboutMatch ? classes.activeLink : classes.navLinks}  to={'/About'}>About</Link>
                <Link className={ fqaMatch ? classes.activeLink : classes.navLinks}  to={'/FQAs'}>FAQs</Link>
                <Link className={ helpMatch ? classes.activeLink : classes.navLinks}  to={'/Help'}>Help</Link>
            </div>
          </nav>
        </>
    )
}

export { NavBar };