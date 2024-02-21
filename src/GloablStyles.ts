import { tss } from "tss-react/mui";


const mainStyles = tss.create(({theme}) => ({
    root:{
        width: "100%",
        height: "100%"
    },
    primaryColor:{
        color: process.env.CLIENT_PRIMARY_COLOUR
    }
}));

export default mainStyles;