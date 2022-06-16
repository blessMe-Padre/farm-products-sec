import React from 'react';
import OptionsList from '../options-list/options-list';
import Tabs from '../tabs/tabs';

import { TitleSize } from './../title/title';
import { ProductImage, ProductTitle, Price, ContentWrapper } from "./styles";



function ProductCart({ product }) {
    const tabsList = [
        {
            title: "Oписание",
            content: product.description
        },
        {
            title: "Характеристики",
            content: <OptionsList list={product.specifications} />
        },
        {
            title: "Свойства",
            content: <OptionsList list={product.structure} />
        }
    ];
    return (
        <>
            <ProductImage src={product.image} />
            <ContentWrapper>
                <ProductTitle as="h3" size={TitleSize.SMALL}>
                    {product.name}
                </ProductTitle>
                <Tabs maxContentHeight="105px" tabsList={tabsList} />
                <Price>
                    {product.price} руб. / {product.weight} гр.
                </Price>
            </ContentWrapper>
        </>

    );
}

export default ProductCart;