import React from "react";
import PageSkeletonLoaderComponent from './PageSkeletonLoaderComponent';

interface PageSkeletonLoaderComponentContainerProps {
    width: number;
    height: number;
    skeletonVariant: string;
}

const PageSkeletonLoaderComponentContainer: React.FC<PageSkeletonLoaderComponentContainerProps> = props => {

    const {
        width,
        height,
        skeletonVariant
    } = props;

    return(
        <>
         <PageSkeletonLoaderComponent height={height} width={width} skeletonVariant={skeletonVariant}/>
        </>
    )
}

export default PageSkeletonLoaderComponentContainer;