import React from 'react';

import Button from '../ui/buttons/Button';
import { useLocation } from "react-router-dom";
import { Ul, Li } from './../styled/list'


const links = [
    {
        to: "/",
        item: <Button link="/">Главная</Button>
    },
    {
        to: "/order",
        item: <Button link="/order">Купить</Button>
    }
];


const Nav = () => {
    const pageUrl = useLocation().pathname;

    return (
        <nav>
            <Ul>
                {links
                    .filter((link) => link.to !== pageUrl)
                    .map((link) => (
                        <Li key={link.to}>{link.item}</Li>
                    ))}
            </Ul>
        </nav>
    )
}

export default Nav;