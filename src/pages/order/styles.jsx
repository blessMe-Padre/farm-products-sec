import styled from "styled-components";

export const StyledOrder = styled.section`
    display: grid;
    grid-template-columns: 350px 1fr;
    margin-top: 40px;
`;

export const Column = styled.div`
    padding-right: 25px;
    overflow-y: overlay;
    max-height: 100%;
`;

export const PriceLabel = styled.span`
    display: block;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 6px;
`;

export const PriceValue = styled.span`
    display: block;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
`;