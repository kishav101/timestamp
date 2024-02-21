import { tss } from "tss-react/mui";


const useStyles = tss.create(({theme}) => ({
    root:{
        backgroundColor: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR
    },
    navList:{

    }
}))

export default useStyles;