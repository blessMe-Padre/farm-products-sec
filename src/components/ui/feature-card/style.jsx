import styled from 'styled-components';

export const Article = styled.article`
    padding: 20px;
    height: 100%;
    background-color:${(isNegative) => (isNegative.isNegative ? "#f8ddd7" : "#e1edce")};
    box-sizing: border-box;
`;

export const ArticleHeader = styled.div`
    display: flex;
    margin-bottom: 20px;
    text-align: left;
`;

export const ArticleHeaderWrapper = styled.div`
    padding-left: 40px;

    @media (max-width: 430px) {
        padding-left: 10px;
    }
`;

export const ArticleOwner = styled.span`
    display: inline-block;
    min-height: 25px;
    margin-bottom: 4px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 14px;
    line-height: 25px;
    color: #ffffff;
    background-color:${(isNegative) => (isNegative.isNegative ? "#F75531" : "#88AA4D")};
`;

export const ArticleTitle = styled.h3`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #333333;
`;

export const ArticleText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
     color: #333333;
`;