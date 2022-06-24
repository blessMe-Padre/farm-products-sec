import styled, { css } from "styled-components";
import { Swiper } from "swiper/react";
import { Price } from "./../../components/ui/price/price";
import checkboxSelect from "./../../assets/checkbox.svg"

export const StyledOrder = styled.section`
    display: grid;
    grid-template-columns: 350px 1fr;
    margin-top: 40px;

    @media (max-width: 1165px) {
      grid-template-columns: 1fr;
    }
`;

export const Column = styled.div`
    padding-right: 25px;
    overflow-y: overlay;
    max-height: 100%;

    @media (max-width: 812px) {
      padding-right: 0;
    }
`;

export const PriceLabel = styled.span`
    display: block;
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 6px;
`;

export const PriceValue = styled(Price)`
    display: block;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
    props.$isChecked
      ? css`
            background-color: #fc9b27;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
      : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;