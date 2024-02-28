import { tss } from "tss-react/mui";
import { transform } from "typescript";


const useStyles = tss.create(({theme}) => ({
    root:{
        backgroundColor: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        "@media (max-width: 768px)": {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end', 
            height: 50,
          },
    },
    navList:{
        display: 'inline-block',
        textAlign: 'right',
        "@media (max-width: 768px)": {
            display: 'flex',
            flexDirection: 'column',
            visibility: 'hidden'
          },
    },
    navLinks:{
        marginLeft: 5,
        borderRadius: 15,
        height: '100%',
        fontSize: 18,
        fontWeight: '700',
        textDecoration: 'none',
        padding: 15,
        transition: '0s ease',
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
       borderRadius: "50%",
       "@media (max-width: 768px)": {

      },
    },
    loginLink:{
        borderRadius: 15,
        height: '100%',
        fontSize: 18,
        fontWeight: '700',
        textDecoration: 'none',
        padding: 15,
        transition: '0s ease',
        color: "#fff",
        backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
        "&:Hover": {
            backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
            color: "#fff",
            fontSize: 20,
            padding: 20
        },
        "@media (max-width: 768px)": {
            visibility: "hidden",
        },
    },
    logoutLinkDiv: {
        position: 'absolute', 
        right: "5%"
    },
    imageContainer:{
        paddingLeft: '2%',
        paddingRight: '3%',
        paddingTop: 8,
        paddingBottom: 8
    },
    hamburger:{
        visibility: 'hidden',
        cursor: 'pointer',
        color: '#fff',
        "@media (max-width: 768px)": {
            visibility: "visible",
            position: 'absolute',
            top:10,
            left: 10
        },
    }
}))

export default useStyles;