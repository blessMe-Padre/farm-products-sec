import React from 'react';
import styled from 'styled-components';


const MainButton = styled.button`
    display: block;
    min-height: 60px;
    padding: 0 24px;
    min-width: 260px;
    max-width: 700px;
    font-size: 18px;
    font-weight: bold;
    line-height: 58px;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
    background-color: #fc9b27;
    border: none;
    background-image: none;
    box-shadow: none;
    cursor: pointer;
    transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
    box-sizing: border-box;

    &:hover,
    &:active {
        background-color: #fc7427;
        box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
    }
`;

const Button = ({ children }) => {
    return (
        <MainButton>
            {children}
        </MainButton>
    )
}

export default Button