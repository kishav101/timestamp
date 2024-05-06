import { tss } from "tss-react";


const LoginLeftPanelStyles = tss.withParams<{regIndex: number}>().create(({regIndex}) => ({
    root:{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: "90%",
        marginLeft: "5%"
    },
    ballContainer: {
        display: 'flex',
    },
    ball: {
        position: 'absolute',
        top: "5%",
        left: "1%",
        width: 30,
        opacity: 0.3,
        height: 30,
        borderRadius: "50%",
        marginLeft: 200,
        backgroundColor: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        animation: "BallAnimation 5.5s linear infinite alternate",
        "@keyframes BallAnimation": {
            "0%": {
              transform: "translateY(30vh) translateX(150px)"
            },
            "25%": {
                transform: "translateY(90px) rotateY(180deg)"
            },
            "50%": {
                transform: "translateY(50px) translateX(50px)"
            },
            "75%": {
                transform: "translateY(90px) translateX(80px)"
            },
            "100%": {
                transform: "translateY(70px) translateX(50px)"
            },
        },
    },
    ballTwo: {
        position: 'absolute',
        top: "5%",
        left: "1%",
        width: 30,
        opacity: 0.3,
        height: 30,
        borderRadius: "50%",
        marginLeft: 200,
        backgroundColor: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        animation: "BallAnimationTwo 5.5s linear infinite alternate",
        "@keyframes BallAnimationTwo": {
            "0%": {
              transform: "translateY(80vh) translateX(150px)"
            },
            "25%": {
                transform: "translateY(50vh) translateX(-20px)"
            },
            "50%": {
                transform: "translateY(80px) translateX(80px)"
            },
            "75%": {
                transform: "translateY(60px) translateX(30px)"
            },
            "100%": {
                transform: "translateY(20px) translateX(150px)"
            },
        },
    },
    textDescriptionContainer: {
        boxShadow: `0 2px 10px #c0c7cf`,
        width: "100%",
        padding: "2%"
    },
    DescriptionTwo: {
        fontFamily: "sans-serif",
        fontSize: 14
    },
    DescriptionOne: {
        fontFamily: "sans-serif",
        fontSize: 14
    },
    Slogan: {
        fontFamily: "sans-serif",
        fontSize: 18
    },
    Title: {
        fontFamily: "sans-serif",
        fontSize: 24
    },
    lottieIcon: {
        height: 250,
         width: 250, 
    }
   
}))

export default LoginLeftPanelStyles;