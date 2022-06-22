import React from 'react';
import styled from 'styled-components';
import Button from '../ui/buttons/Button';
import FeatureCard from '../ui/feature-card/feature-card';

const Features = styled.section`
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
    box-sizing: border-box;
    padding-top: 100px;
    padding-bottom: 100px;
    text-align: center;

    @media (max-width: 980px) {
        padding: 0 1rem;
    }
`;

const FeaturesTitle = styled.h2`
    font-weight: 700;
    font-size: 36px;
    line-height: 115%;
    color: #333333;
`;

const FeaturesUl = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0;
    padding: 0;
    margin-top: 44px;
    margin-bottom: 64px;
    font-size: 0;
    line-height: 0;
    text-align: center;

    @media (max-width: 980px) {
        grid-template-columns: 1fr;
    }
`;

const FeaturesItem = styled.li`
    display: block;
    margin: 10px;
    font-size: 18px;
    line-height: 27px;
    vertical-align: top;
    text-align: left;
`;

const FeatureList = ({ features }) => {
    return features && features.length ? (
        <Features>
            <FeaturesTitle>Почему фермерские продукты лучше?</FeaturesTitle>
            <FeaturesUl>
                {features.map((feature) => (
                    <FeaturesItem key={feature.id}>
                        <FeatureCard {...feature} />
                    </FeaturesItem>
                ))}
            </FeaturesUl>
            <Button link={"/order"}>Купить</Button>
        </Features>
    ) : null;
}

export default FeatureList