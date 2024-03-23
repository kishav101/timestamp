import React, { FC } from "react";
import useStyles from "./ContainerStyles";
import NavBarContainer from "../../Components/Navbar";
import NavDrawerConatiner from "../../Components/NavBarDrawer";


interface HomeProps{
  isDrawerOpen: boolean
}

const Home: FC<HomeProps> = props => {
const{
  isDrawerOpen
} = props;

const {classes} = useStyles(); 
return(
    <>
    <div className={classes.root}>
    
    </div>
    </>
)
}

export { Home };