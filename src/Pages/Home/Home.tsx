import React, { FC } from "react";
import useStyles from "./ContainerStyles";
import NavBarContainer from "../../Components/Navbar";


interface HomeProps{

}

const Home: FC<HomeProps> = props => {
const{

} = props;

const {classes} = useStyles(); 

return(
    <>
      <NavBarContainer />
    <div className={classes.root}>
      <h2>put my content here
      </h2>
    </div>
    </>
)
}

export { Home };