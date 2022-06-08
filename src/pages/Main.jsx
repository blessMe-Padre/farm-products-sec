import React from 'react';
import About from '../components/blocks/About';
import FeatureList from '../components/blocks/Feature-list';
import features from "./../mocks/features.js";

const Main = () => {
    return (
        <>
            <About />
            <FeatureList features={features} />
        </>
    )
}

export default Main