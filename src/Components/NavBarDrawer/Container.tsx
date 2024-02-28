import { useDispatch, useSelector } from "react-redux";
import Drawer from "./Drawer";
import React, { FC } from "react";
import { RootState } from "../../Stores/Stores";
import { setIsDrawerClosed, setIsDrawerOpen } from "../../Stores/Reducers/Drawer";

interface IContainerProps{
    handleCloseNavDrawer?: () => void;
}

const NavDrawerConatiner: FC<IContainerProps> = props => {

const{
    handleCloseNavDrawer
} = props;

const isNavOpen = useSelector((state: RootState) => state.drawer.isDrawerOpen)
const dispatch = useDispatch();

const toggleNavBar = () => {
    if(isNavOpen) {
        dispatch(setIsDrawerClosed(false))
    } else {
        dispatch(setIsDrawerOpen(true));
    }
}

return(
    <>
     <Drawer
     toggleNavBar={toggleNavBar}
     />
    </>
)

}

export {NavDrawerConatiner};