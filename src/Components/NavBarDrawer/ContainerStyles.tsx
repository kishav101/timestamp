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
    root: {
        backgroundColor: process.env.REACT_APP_CLIENT_PRIMARY_COLOUR,
        width: '20%',
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
       padding: 20,
      
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
            backgroundColor: process.env.REACT_APP_CLIENT_SECONDARY_COLOUR,
            color: "#fff",
            
        }
    },
    imageIcon:{
        width: 80,
        height: 80,
        borderRadius: "50%",
        animation: `${rotate} 20s lin infinite`
        
     },
     imageContainenr: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: "15%"
     },
     showDrawer:{

     },
     closeDrawer: {

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
        padding: 18
      }
    },
    
    
}))

export default DrawerStyles;