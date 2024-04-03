import { tss } from "tss-react";


const RegisterStyles = tss.create(({}) => ({
    root:{
        height: '100vh',
        backgroundColor: "#c0c7cf"
    },
    card: {
        textAlign: 'center',
        position: 'absolute',
        backfaceVisibility: 'hidden',
        backgroundColor: '#fff',
        height: '100%',
        width: '50%',
        borderWidth: 1,
        borderColor: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        borderStyle: 'solid',
        borderRadius: 8,
        padding: "3%",
        boxShadow: `0 1px 12px ${process.env.REACT_APP_CLIENT_PRIMARY_COLOUR}`,
        "@media (max-width: 768px)": {
            width: '70%'
           },
    },
    container: {
        position: 'absolute',
        marginLeft: '10%',
        height: '72%',
        width: '50%',
        perspective: 800,
        "@media (max-width: 768px)": {
            width: '70%'
           },
    },
    cardImageLogo: {
        width: "15vh",
        height: '15vh',
        paddingBottom: 2,
    },
    cardImageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    signUpText: {
        left: "5%",
        position: 'absolute',
        fontSize: 16,
        fontWeight: '400'
    },
    textBoxWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    usernameStyle: {
        cursor: 'pointer',
        padding: 10,
        flex: 1,
        marginBottom: "5%"
    },
    loginNextbtn: {
        width: "100%",
        justifyContent: 'center',
        display: 'flex',
        cursor: 'pointer',
        border: 'none',
        color: '#FFF',
        padding: 10,
        flex: 1,
        marginBottom: "5%",
        transition: 'transform 0.3s, box-shadow 0.3s',
        backgroundColor: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        "&:Hover": {
            transform: 'translateY(-3px)',
            boxShadow: `0 2px 10px ${process.env.REACT_APP_CLIENT_PRIMARY_COLOUR}`
        }
    },
    bottomCardFooter: { 
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        padding: 5, 
        width: "98%",
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: "5%" ,
    },
    bottomFooterText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -10,
        color: '#FFF',
        fontWeight: 20,
        fontSize: 14
    },
    SignUpDivider: {
        marginBottom: 10
    }
}))

export default RegisterStyles;