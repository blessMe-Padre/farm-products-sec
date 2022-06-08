import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/logo.svg';

const LogoLink = styled.a`
    display: flex;
    margin-left: -4px;
    height: 44px;
    align-items: center;
    text-decoration: none;
    color: #333333;

    &:hover,
    &:active,
    &:visited {
        text-decoration: none;
        color: #333333
    }
`;

const Logo = () => {
    return (
        <LogoLink href='/'>
            <img src={logo} alt="логотип" />
            <span>Фермерские продукты</span>
        </LogoLink>
    );
}

export default Logo