import { tss } from "tss-react/mui";
import { transform } from "typescript";


const useStyles = tss.create(({theme}) => ({
    root:{
        backgroundColor: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky'
    },
    navList:{
        display: 'inline-block',
        textAlign: 'right'
    },
    navLinks:{
        borderRadius: 15,
        height: '100%',
        fontSize: 18,
        fontWeight: '700',
        textDecoration: 'none',
        padding: 15,
        transition: '1s ease',
        color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
        "&:Hover": {
            backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
            color: "#fff",
            fontSize: 20,
            padding: 20
        },
    },
    activeLink: {
        borderRadius: 15,
        backgroundColor: '#fff',
        color: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        fontSize: 20,
        fontWeight: '700',
        textDecoration: 'none',
        padding: 15,
    },
    imageIcon:{
       width: 80,
       height: 80,
       borderRadius: "50%"
    }
}))

export default useStyles;