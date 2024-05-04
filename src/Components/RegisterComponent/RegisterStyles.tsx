import { tss } from "tss-react";


const RegisterStyles = tss.withParams<{regIndex: number}>().create(({regIndex}) => ({
    root:{
        height: '100vh',
    },
    card: {
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
        overflow: 'hidden',
    },
    container: {
        position: 'absolute',
        marginLeft: '20%',
        height: '72%',
        width: '50%',
        perspective: 800,

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
        position: 'absolute',
        bottom: 40,
        width: "92%",
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
    },
    personalContainer: {
        position: 'absolute',
        width: '92%',
        top: "29%",
        transform: regIndex === 0 ? 'translateX(0px)' : 'translateX(500px)',
        transition: 'transform 1500ms',
    },
    addressContainer: {
        position: 'absolute',
        width: '92%',
        top: "29%",
        transform: regIndex === 1 ?  'translateX(0px)' : regIndex === 2 ? 'translateX(500px)' : 'translateX(-500px)',
        transition: 'transform 1500ms',
    },
    completeContainer: {
        position: 'absolute',
        width: '92%',
        top: "29%",
        transform: regIndex === 2 ? 'translateX(0px)' : 'translateX(-500px)',
        transition: 'transform 1500ms',
    },
    completeSubText: {
        fontFamily: 'Tahoma',
        fontSize: 15,
        textAlign: 'start'
    },
    completeText: {
        fontFamily: 'Tahoma',
        fontSize: 16,
    },
    verifyText: {
        fontWeight: '800',
        fontFamily: 'Tahoma',
        color: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        textAlign: 'center'
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
}))

export default RegisterStyles;