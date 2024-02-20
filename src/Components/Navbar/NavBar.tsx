import React, { FC } from 'react'
import { NavLink } from "react-router-dom";

interface NavBarProps{

}

const NavBar: FC<NavBarProps> = props => {
    const {

    } =props;

    return(
        <>
          <nav>
            <div className='clientIcon'>

            </div>
            <div className='nav-links'>
                <ul>
                    <li> <NavLink to="/"  /> </li>
                </ul>
            </div>
          </nav>
        </>
    )
}

export default NavBar;