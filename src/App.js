import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Main from './pages/Main';
import Order from './pages/order/Order';

import PageWrapper from './components/layout/PageWrapper';


function App() {
  return (

    <Routes>
      <Route path="/" element={< PageWrapper />}>
        <Route index path="/" element={<Main />} />
        <Route path="order" element={<Order />} />
      </Route>
    </Routes>

  );
}

export default App;
