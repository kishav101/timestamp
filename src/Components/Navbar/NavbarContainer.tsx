import React, { FC, useEffect, useState } from 'react'
import {NavBar} from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { setIsDrawerOpen } from '../../Stores/Reducers/Drawer';
import { RootState } from '../../Stores/Stores';

interface NavBarContainerProps{

}

const NavBarContainer: FC<NavBarContainerProps> = props => {
    const {

    } = props;

    const[isLoggedin, setIsLogged] = useState(false);
    const isDrawerOpen = useSelector((state: RootState) => state.drawer.isDrawerOpen);
    const dispatch = useDispatch();

    const handleOpenNavDrawer = () => {
        dispatch(setIsDrawerOpen(true))
    }

    const handleCloseNavDrawer = () => {
        dispatch(setIsDrawerOpen(false))
    }

    useEffect(() => {
        console.log(isDrawerOpen)
    }, [isDrawerOpen])


    return(
       <NavBar
        isLoggedin={isLoggedin}
        handleOpenNavDrawer={handleOpenNavDrawer}
        handleCloseNavDrawer={handleCloseNavDrawer}
        isDrawerOpen={isDrawerOpen}
       />
    )
}

export default NavBarContainer;