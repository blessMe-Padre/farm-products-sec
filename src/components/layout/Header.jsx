import React from 'react';
import styled from 'styled-components';

import Logo from '../ui/logo/Logo';
import { Container } from '../Container';
import Nav from './nav';

const Wrapper = styled.header`
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    min-height: 80px;
    padding-top: 0;
    padding-bottom: 0;
    justify-content: space-between;
    background-color: #ffffff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
    align-items: center;
    z-index: 5;
    box-sizing: border-box;

    @media (max-width: 438px) {
        padding-top: 15px;
        padding-bottom: 15px;
        justify-content: center;
      }
`;

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Logo />
                <Nav />
            </Wrapper>
        </Container>
    )
}

export default Header