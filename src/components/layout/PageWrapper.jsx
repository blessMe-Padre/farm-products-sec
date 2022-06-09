import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Main from './../../pages/Main';


const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr min-content;
`;


const PageWrapper = () => {
    return (
        <Wrapper>
            <Header />
            <main>
                <Main />
            </main>
            <Footer />
        </Wrapper >
    )
}

export default PageWrapper