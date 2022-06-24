import React from 'react'
import styled from 'styled-components';
import { Container } from '../Container';
import Logo from '../ui/logo/Logo'


const FooterWrapper = styled.footer`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    padding-top: 0;
    padding-bottom: 0;
    height: 79px;
    background-color: #ffffff;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    @media (max-width: 430px) {
        justify-content: center;
        margin-top: 25px;
        padding-top: 10px;
    }
`;

const FooterCopyright = styled.span`
    min-width: 148px;
    font-size: 18px;
    vertical-align: middle;
    text-align: right;
`;

const Footer = () => {
    return (
        <Container>
            <FooterWrapper>
                <Logo />
                <FooterCopyright>Создано в 2022</FooterCopyright>
            </FooterWrapper>
        </Container>
    )
}

export default Footer