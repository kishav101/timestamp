import { tss } from "tss-react";

const styles = tss.withParams<{}>().create(({})=> ({
    closeIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        cursor: 'pointer',
        height: "5%",
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

export default styles;