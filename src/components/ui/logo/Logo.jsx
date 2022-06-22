import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

const LogoLink = styled(Link)`
    display: flex;
    margin-left: -4px;
    margin-right: 15px;
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

    @media (max-width: 430px) {
        margin-bottom: 15px;
      }
`;

const Logo = () => {
    return (
        <LogoLink to='/'>
            <img src={logo} alt="логотип" />
            <span>Фермерские продукты</span>
        </LogoLink>
    );
}

export default Logo