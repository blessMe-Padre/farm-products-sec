import React from 'react';
import styled from 'styled-components';
import about from '../../assets/about.svg';

const AboutSection = styled.section`
    padding: 120px 0;
    min-height: 550px;
    background-color: #d8ecfe;
    background-image: url(${about});
    background-repeat: no-repeat;
    background-position: right;

    @media (max-width: 768px) {
        padding: 60px 0;
        background-image: none;
    }
`;

const AboutWrapper = styled.div`
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 1rem;

`;

const AboutTitle = styled.h1`
    font-weight: 700;
    font-size: 44px;
    line-height: 115%;
    color: #333333;
    max-width: 538px;
    margin-bottom: 30px;
`;

const AboutText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    max-width: 538px;
    color: #333333;
`;


const About = () => {
    return (
        <AboutSection>
            <AboutWrapper>
                <AboutTitle>Магазин фермерских продуктов с доставкой</AboutTitle>
                <AboutText>
                    Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
                </AboutText>
            </AboutWrapper>
        </AboutSection>
    )
}

export default About