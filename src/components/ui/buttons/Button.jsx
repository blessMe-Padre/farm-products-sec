import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const MainButton = styled(Link)`
    display: block;
    padding: 0 24px;
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

    &:disabled {
        opacity: 0.5;
        box-shadow: none;
      }
`;

const Button = ({
    children, // дочерний элемент, отображаемый в кнопке
    link, // ссылка
    maxWidth, // делает кнопку на 100% родителя
    onClick, // событие по клику
    ...props // остальные переданные пропсы
}) => {
    return (
        <MainButton
            {...props}
            $maxWidth={maxWidth}
            {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
        >
            {children}
        </MainButton>
    )
}

export default Button