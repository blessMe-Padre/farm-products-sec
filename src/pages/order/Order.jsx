import React, { useState } from "react";
import { Container } from '../../components/Container';

import Panel from '../../components/ui/panel/panel';
import { Title, TitleSize } from './../../components/ui/title/title';
import { TextInput } from '../../components/ui/text-input/text-input';
import ProductCart from './../../components/ui/product-card/ProductCart ';
import CheckboxList from "../../components/ui/checkbox-list/checkbox-list";
import Button from '../../components/ui/buttons/Button';

import {
    Column,
    StyledOrder,
    PriceLabel,
    PriceValue,
    CheckboxLabel
} from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);


const Order = ({ products }) => {
    const [selectProductIds, setSelectProductIds] = useState([]);

    //id в продукты
    const selectProducts = selectProductIds.map((id) =>
        products.find((product) => product.id === id)
    );
    //цена покупки
    const fullPrice = selectProducts.reduce(
        (sum, product) => (sum += product.price),
        0
    );
    console.log(fullPrice);

    const [swiperRef, setSwiperRef] = useState(null);
    const handleOnClickProduct = (value, index) => {
        if (!selectProductIds.includes(value)) {
            swiperRef.slideTo(index, 0);
        }
    };

    return (
        <Container >
            <StyledOrder as='form'>
                <Column>
                    <Panel>
                        <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>Выберите продукты</Title>
                        <CheckboxList
                            labelComponent={CheckboxLabel}
                            name={"select-products"}
                            isGridList={false}
                            options={products.map((product) => ({
                                value: product.id,
                                title: product.name
                            }))}
                            selectValues={selectProductIds}
                            onChange={setSelectProductIds}
                            onClickLabel={handleOnClickProduct}
                        />
                    </Panel>
                    <Panel>
                        <Title size={TitleSize.EXTRA_SMALL} marginBottom={24}>Сделать заказ</Title>
                        <TextInput placeholder='Введите адрес доставки' />
                        <PriceLabel as="span">Цена</PriceLabel>
                        <PriceValue value={fullPrice} />
                        <Button>купить</Button>
                    </Panel>
                </Column>
                <Column>
                    <Panel>
                        <Swiper
                            mousewheel
                            spaceBetween={12}
                            scrollbar={{ draggable: true }}
                            slidesPerView={1}
                            onSwiper={setSwiperRef}
                            pagination={{
                                type: "fraction"
                            }}
                        >
                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <ProductCart product={product} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Panel>
                </Column>
            </StyledOrder>

        </Container>
    )
}

export default Order