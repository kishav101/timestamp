import React from "react";
import Skeleton from '@mui/material/Skeleton';

interface PageSkeletonLoaderComponentProps {
    width: number;
    height: number;
    skeletonVariant: any;
}

const PageSkeletonLoaderComponent: React.FC<PageSkeletonLoaderComponentProps> = props => {

    const {
        width,
        height,
        skeletonVariant
    } = props;

    return(
        <>
            <Skeleton variant={skeletonVariant} width={width} height={height} />
        </>
    )
}
export default PageSkeletonLoaderComponent;