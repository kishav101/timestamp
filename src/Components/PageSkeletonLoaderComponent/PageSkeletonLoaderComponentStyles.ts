import { tss } from "tss-react";

const PageSkeletonLoaderComponentStyles = tss.withParams<{}>().create({
    root: {
        width: "100%",
        height: "100%",
        opacity: 0.5
    }
});

export default PageSkeletonLoaderComponentStyles;