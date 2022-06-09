import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr min-content;
`;


const PageWrapper = () => {
    return (
        <Wrapper>
            <Header />
            <main style={{ backgroundColor: "#f7f7f7" }}>
                <Outlet />
            </main>
            <Footer />
        </Wrapper >
    )
}

export default PageWrapper