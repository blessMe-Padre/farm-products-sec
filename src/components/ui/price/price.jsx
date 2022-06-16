import React from "react";
import styled from "styled-components";

const StyledPrice = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
`;

const formatPrice = (value) => {
    const roundedPrice = Math.round(value);
    return roundedPrice.toString().replace(/(\d)(?=(\d\d\d)+$)/, "$1 ");
};

// Отформатированная цена
export function Price({ value, className }) {
    return (
        <StyledPrice className={className}>{formatPrice(value)} руб.</StyledPrice>
    );
}
