import React from 'react';
import styled from 'styled-components';

import Button from '../ui/buttons/Button';

import Logo from '../ui/logo/Logo';
import { Container } from '../Container';

const Wrapper = styled.header`
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    height: 80px;
    padding-top: 0;
    padding-bottom: 0;
    justify-content: space-between;
    background-color: #ffffff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
    align-items: center;
    z-index: 5;
    box-sizing: border-box;
`;

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Logo />
                <Button link={'/order'}>Купить билет</Button >
            </Wrapper>
        </Container>
    )
}

export default Header