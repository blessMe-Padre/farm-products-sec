import React from 'react';
import styled from 'styled-components';
import Button from '../ui/buttons/Button';
import FeatureCard from '../ui/feature-card/feature-card';

const Features = styled.section`
    display: flex;
    padding-left: 90px;
    padding-right: 90px;
    box-sizing: border-box;
    padding-top: 100px;
    padding-bottom: 100px;
    flex-direction: column;
    align-items: center;
`;

const FeaturesTitle = styled.h2`
    font-weight: 700;
    font-size: 36px;
    line-height: 115%;
    color: #333333;
`;

const FeaturesUl = styled.ul`
    margin: 0;
    padding: 0;
    margin-top: 44px;
    margin-bottom: 64px;
    margin-left: -20px;
    font-size: 0;
    line-height: 0;
    text-align: center;
`;

const FeaturesItem = styled.li`
    display: inline-block;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 18px;
    line-height: 27px;
    vertical-align: top;
    text-align: left;
    overflow: hidden;
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
            <Button link={"/"}>Купить</Button>
        </Features>
    ) : null;
}

export default FeatureList