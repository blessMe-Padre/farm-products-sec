import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
    width: 540px;
    min-height: 197px;
    padding: 20px;
    // background-color: #e1edce;
    background-color:${(isNegative) => (isNegative.isNegative ? "#f8ddd7" : "#e1edce")};
    box-sizing: border-box;
`;

const ArticleHeader = styled.div`
    display: flex;
    margin-bottom: 20px;
    text-align: left;
`;

const ArticleHeaderWrapper = styled.div`
    padding-left: 40px;
`;

const ArticleOwner = styled.span`
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

const ArticleTitle = styled.h3`
    margin: 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #333333;
`;

const ArticleText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
     color: #333333;
`;

const FeatureCard = ({
    title, // название особенности
    owner, // владелец особенности (обычный магазин, фермерский)
    about, // описание особенности
    isNegative, // является ли особенность отрицательной
    image // иконка
}) => {
    return (
        <Article isNegative={isNegative}>
            <ArticleHeader>
                <img
                    src={image}
                    alt={title}
                    width={56}
                    height={56} />
                <ArticleHeaderWrapper>
                    <ArticleOwner isNegative={isNegative}>{owner}</ArticleOwner>
                    <ArticleTitle>{title}</ArticleTitle>
                </ArticleHeaderWrapper>
            </ArticleHeader>
            <ArticleText dangerouslySetInnerHTML={{ __html: about }} />
        </Article >
    )
}

export default FeatureCard