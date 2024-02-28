    import { keyframes, tss } from "tss-react";

    const rotate = keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `;

    const DrawerStyles = tss.create((props) => ({
        showDrawer:{
          backgroundColor: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
          width: '25%',
          display: 'flex',
          height: '100vh',
          flexDirection: 'column',
          padding: 20,
          transition: 'width 0.3s ease',
          "@media (min-width: 900px)": {
            visibility: "hidden",
          },
          boxShadow: '0 0 15px #2b2b2b'
        },
        closeDrawer: {
          backgroundColor: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
          width: '0%',
          display: 'flex',
          height: '100vh',
          flexDirection: 'column',
          padding: 20,
          transition: 'width 0.3s ease',
          boxShadow: '0 0 15px #2b2b2b'
        },
        headerStyles:{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
      },
        navLinks: {
            textWrap: 'wrap',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'left',
            padding: 20,
            color: '#FFFFFF',
            fontSize: 16,
            textDecoration: 'none',
            fontWeight: '500',
            transition: 'margin-top 0.3s ease',
            "&:hover": {
                marginTop: -5,
                color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
                backgroundColor: '#fff'
            }
        },
        navActiveLinks: {
          textWrap: 'wrap',
          textAlign: 'left',
          display: 'flex',
          justifyContent: 'left',
          padding: 20,
          color: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
          fontSize: 16,
          textDecoration: 'none',
          fontWeight: '500',
          backgroundColor: '#fff',
          transition: 'margin-top 0.3s ease',
      },
        imageIcon:{
            width: 80,
            height: 80,
            borderRadius: "50%",
            animation: `${rotate} 20s linear infinite`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 45
        },
        imageContainenr: {
            display: 'flex',
            justifyContent: 'center',
        },
        exitImageIcon:{
          padding: 15,
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
          width: 20,
          height: 20,
          marginRight: -40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'padding 0.3s ease', // Adjust the duration and timing function as needed
          "&:hover": {
            marginTop: -5,
            padding: 18,
          
          }
        },
        navContainer: {
          height: '100%',
          marginRight: -20,
          marginLeft: -20,
          marginTop: "30%",
          backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
        }
    }))

    export default DrawerStyles;