import React from "react";
import { Container } from '../../components/Container';

import Panel from '../../components/ui/panel/panel';
import { Title, TitleSize } from './../../components/ui/title/title';
import { TextInput } from '../../components/ui/text-input/text-input';
import ProductCart from './../../components/ui/product-card/ProductCart ';

import {
    Column,
    StyledOrder,
    PriceLabel,
    PriceValue,
} from './styles';
import Button from '../../components/ui/buttons/Button';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

const Order = ({ products }) => {
    return (
        <Container >
            <StyledOrder as='form'>
                <Column>
                    <Panel>
                        <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>Выберите продукты</Title>
                    </Panel>
                    <Panel>
                        <Title size={TitleSize.EXTRA_SMALL} marginBottom={24}>Сделать заказ</Title>
                        <TextInput placeholder='Введите адрес доставки' />
                        <PriceLabel>Цена</PriceLabel>
                        <PriceValue>400</PriceValue>
                        <Button>купить</Button>
                    </Panel>
                </Column>
                <Column>
                    <Panel>
                        <Swiper>
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