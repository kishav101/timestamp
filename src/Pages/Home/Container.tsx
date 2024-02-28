import {Home} from './Home'
import useStyles from "./ContainerStyles";
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Stores/Stores';


interface HomeContainerProps{

}


const HomeContainer: FC<HomeContainerProps> = props => {
    const{
    
    } = props;
    
    const {classes} = useStyles(); 
    const isDrawerOpen = useSelector((state: RootState) => state.drawer.isDrawerOpen);
    
    return(
        <>
        <Home
        isDrawerOpen={isDrawerOpen} />
        </>
    )
    }
    
    export { HomeContainer };