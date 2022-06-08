import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';


const Wrapper = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr min-content;
`;


const PageWrapper = () => {
    return (
        <Wrapper>
            <Header />
            <Main />
            <Footer />
        </Wrapper>
    )
}

export default PageWrapper