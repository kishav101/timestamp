import React, { FC } from "react";
import useStyles from "./ContainerStyles";


interface HomeProps{

}

const Home: FC<HomeProps> = props => {
const{

} = props;

const {classes} = useStyles(); 

return(
    <>
    <p className={classes.root}>Kishav</p>
    </>
)
}

export default Home;