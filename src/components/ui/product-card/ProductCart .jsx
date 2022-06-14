import React from "react";
import { TitleSize } from "./../title/title";
import { ProductImage, ProductTitle, Price, ContentWrapper } from "./styles";


function ProductCart({ product }) {
    return (
        <>
            <ProductImage src={product.image} />
            <ContentWrapper>
                <ProductTitle as="h3" size={TitleSize.SMALL}>
                    {product.name}
                </ProductTitle>
                <Price>
                    {product.price} руб. / {product.weight} гр.
                </Price>
            </ContentWrapper>
        </>

    );
}

export default ProductCart;