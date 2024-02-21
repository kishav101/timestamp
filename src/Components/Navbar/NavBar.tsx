import React, { FC } from 'react'
import { NavLink } from "react-router-dom";
interface NavBarProps{

}

const NavBar: FC<NavBarProps> = props => {

    const {

    } = props;

    return(
        <>
          <nav>
            <div className='clientIcon'>
                <img src={process.env.CLIENT_IMAGE_ICON}></img>
            </div>
            <div className='nav-links'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Contact</a></li>
                    <li><a href='/'>FAQs</a></li>
                    <li><a href='/'>Help</a></li>
                </ul>
            </div>
          </nav>
        </>
    )
}

export { NavBar };