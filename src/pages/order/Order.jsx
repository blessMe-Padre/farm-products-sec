import React from 'react';
import { Container } from '../../components/Container';

import Panel from '../../components/ui/panel/panel';
import { Title, TitleSize } from './../../components/ui/title/title'
import { TextInput } from '../../components/ui/text-input/text-input'

import {
    Column,
    StyledOrder,
    PriceLabel,
    PriceValue,
} from './styles'
import Button from '../../components/ui/buttons/Button';

const Order = ({ products }) => {
    return (
        <Container>
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
                    <Panel>Правая колонка</Panel>
                </Column>
            </StyledOrder>

        </Container>
    )
}

export default Order