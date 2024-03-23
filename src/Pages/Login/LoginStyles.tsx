import { tss } from "tss-react";

const loginStyles = tss.withParams<{ isForgotPasswordFlip: boolean; }>().create(({isForgotPasswordFlip}) => ({
    root: {
      height: '100vh',
        backgroundColor: "#c0c7cf"
    },
    container: {
      marginLeft: '10%',
        height: '65%',
        width: '50%',
        perspective: 800,
        "@media (max-width: 768px)": {
            width: '50%'
           },
    },
    card: {
        left: '50%',
        top: '10%',
        height: '100%',
        width: '50%',
        position: 'relative',
        transition: 'transform 1500ms',
        transformStyle: 'preserve-3d' ,
        textAlign: 'center',
        transform: isForgotPasswordFlip ? 'rotateY(180deg)' : 'rotateY(0deg)' ,
        "@media (max-width: 768px)": {
            width: '100%'
           },
     
    },
    cardFront: {
        textAlign: 'center',
        position: 'absolute',
        backfaceVisibility: 'hidden',
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        borderWidth: 1,
        borderColor: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        borderStyle: 'solid',
        borderRadius: 8,
        padding: "3%",
        boxShadow: `0 1px 12px ${process.env.REACT_APP_CLIENT_PRIMARY_COLOUR}`,
       
    },
    cardBack: {
        transform: 'rotateY(180deg)',
        position: 'absolute',
        backfaceVisibility: 'hidden',
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        borderWidth: 1,
        borderColor: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        borderStyle: 'solid',
        borderRadius: 8,
        padding: "3%",
      
        boxShadow: `0 1px 12px ${process.env.REACT_APP_CLIENT_PRIMARY_COLOUR}`
    },
    cardImageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardImageLogo: {
        width: "15vh",
        height: '15vh',
        paddingBottom: 2,
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
    signupNextbtn: {
        cursor: 'pointer',
        border: 'none',
        color: '#000',
        padding: 10,
        flex: 1,
        marginBottom: "5%",
        transition: 'transform 0.3s, box-shadow 0.3s',
        backgroundColor: "#c0c7cf",
        "&:Hover": {
            transform: 'translateY(-3px)',
            boxShadow: `0 2px 10px #c0c7cf`
        }
    },
    divider: {
        marginBottom: "4%"
    },
    forgotPasswordLink: {
        cursor: 'pointer',
        fontSize: 14,
        color: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        marginBottom: '10%'
    },
    versionText: {
        color: "#c0c7cf",
        fontSize: 11,
        position: 'absolute',
        right: "5%",
    },
    closeIcon: {
        cursor: 'pointer',
        position: 'absolute',
        left: 10,
        padding: "2%",
        borderRadius: 8,
        transition: 'transform 0.3s, box-shadow 0.3s',
        backgroundColor:  process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        "&:Hover": {
            transform: 'translateY(-3px)',
            boxShadow: `0 2px 10px ${process.env.REACT_APP_CLIENT_PRIMARY_COLOUR}`
        }
    }

}));

export default loginStyles;