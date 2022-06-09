import React from 'react';

import {
    Article,
    ArticleHeader,
    ArticleHeaderWrapper,
    ArticleOwner,
    ArticleTitle,
    ArticleText
} from './style'


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