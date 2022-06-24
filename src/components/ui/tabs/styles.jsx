import styled, { css } from "styled-components";
import { Ul, Li } from "./../../styled/list";
import Button from "../buttons/Button";

export const TabListItem = styled(Li)`
  margin-right: 8px;
  margin-bottom: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

export const TabButton = styled(Button)`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  ${(props) =>
    props.$isSelect
      ? css`
          background-color: #88AA4D;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #ffffff;
        `
      : css`
          background-color: #F7F7F7;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #333333;
          line-height: 1.5;
        `}
`;

export const Header = styled(Ul)`
  display: flex;
  margin-bottom: 16px;

  @media (max-width: 812px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeight || "none"};
  overflow-y: overlay;
`;