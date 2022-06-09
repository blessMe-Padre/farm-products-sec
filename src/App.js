import React from 'react';
import PageWrapper from './components/layout/PageWrapper';
import Main from './pages/Main';
import Order from './pages/Order';


export const AppRoute = {
  MAIN: '/',
  ORDER: '/order',
};

function App() {
  return (
    <>
      <PageWrapper />
    </>
  );
}

export default App;
