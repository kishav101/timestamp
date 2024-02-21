import React, { FC, useEffect } from 'react'
import { Link } from "react-router-dom";
import useStyles from './NavBarStyles';
interface NavBarProps{

}



const NavBar: FC<NavBarProps> = props => {

    const {

    } = props;

    const {classes} = useStyles();

    useEffect(() => {
        const v = process.env.REACT_APP_CLIENT_PRIMARY_COLOUR
        console.log(v)
    },[])

    return(
        <>
          <nav className={classes.root}>
            <div className='clientIcon'>
                <img src={process.env.CLIENT_IMAGE_ICON}></img>
            </div>
            <div className='nav-links'>
                <ul >
                    <Link to={'/'}>Home</Link>
                    <Link to={'/About'}>About</Link>
                    <Link to={'/About'}>FAQs</Link>
                    <Link to={'/About'}>Help</Link>
                </ul>
            </div>
          </nav>
        </>
    )
}

export { NavBar };