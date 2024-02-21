import {Home} from './Home'
import useStyles from "./ContainerStyles";
import { FC } from 'react';


interface HomeContainerProps{

}


const HomeContainer: FC<HomeContainerProps> = props => {
    const{
    
    } = props;
    
    const {classes} = useStyles(); 
    
    return(
        <>
        <Home />
        </>
    )
    }
    
    export { HomeContainer };